AFRAME.registerComponent('follow-and-look-at', {
    schema: {
        target: {type: 'selector'},
        offset: {type: 'vec3', default: {x: 0, y: 0.3, z: 2}}, // Augmenté la composante y pour surélever la caméra
        lookAtOffset: {type: 'vec3', default: {x: 0, y: -1, z: 5}}, // Utilisé pour ajuster l'angle de vue
        historySize: {type: 'int', default: 5}
    },
    init: function () {
        this.positionHistory = [];
        this.vector = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.targetLoaded = false;
        this.previousPosition = new THREE.Vector3();
        this.currentPosition = new THREE.Vector3();

        if (this.data.target) {
            this.data.target.addEventListener('loaded', () => {
                this.targetLoaded = true;
            });
            if (this.data.target.hasLoaded) {
                this.targetLoaded = true;
            }
        } else {
            console.error('The target is not defined or not yet available.');
        }
    },
    tick: function () {
        if (!this.targetLoaded) return;

        this.data.target.object3D.getWorldPosition(this.currentPosition);

        // Mise à jour de l'historique des positions
        if (this.positionHistory.length >= this.data.historySize) {
            this.previousPosition.copy(this.positionHistory.shift()); // Enregistrer et retirer la position la plus ancienne
        }
        this.positionHistory.push(this.currentPosition.clone());

        // Calculer la position moyenne
        var averagePosition = new THREE.Vector3();
        this.positionHistory.forEach(pos => averagePosition.add(pos));
        averagePosition.divideScalar(this.positionHistory.length);

        // Calculer la direction du mouvement
        this.direction.subVectors(this.currentPosition, this.previousPosition).normalize();

        // Inverser la direction pour que la caméra regarde devant
        var lookAtDirection = this.direction.negate(); // Inverse la direction

        // Si la direction est non-nulle, ajuster l'orientation de la caméra
        if (lookAtDirection.lengthSq() > 0) {
            // Calculer un point devant la balle dans la direction de son mouvement
            var lookAtTarget = averagePosition.clone().add(lookAtDirection.multiplyScalar(5));
            this.el.object3D.lookAt(lookAtTarget);
        }

        // Appliquer l'offset à la position moyenne pour déplacer la caméra
        this.vector.copy(averagePosition).add(this.data.offset);
        this.el.object3D.position.lerp(this.vector, 0.1);
    }
});
