AFRAME.registerComponent('game-check', {
    init: function () {
      this.successTextEl = document.getElementById('success-text'); // Référence au texte de succès
      this.fireworksEl = document.getElementById('fireworkEntity'); // Référence à l'élément de feux d'artifice
      this.winTimer = undefined; // Timer pour la condition de temps
      this.winDelay = 5000; // Durée nécessaire en millisecondes pour gagner (e.g., 2000ms = 2 secondes)
  
      this.el.addEventListener('hitstart', (event) => {
          // Démarre un délai lorsque la balle touche la zone
          if (!this.winTimer) {
            this.winTimer = setTimeout(() => {
              // La balle est restée dans la zone suffisamment longtemps
              this.successTextEl.setAttribute('visible', true);
              this.fireworksEl.setAttribute('visible', true);
              console.log(this.fireworksEl.components.sound)
              this.fireworksEl.emit('playFireworkSound');
              console.log('Victoire! La balle a atteint et est restée dans la zone du drapeau pour la durée requise.');
              this.winTimer = undefined; // Réinitialise le timer pour une future vérification
            }, this.winDelay);
        }
      });
  
      this.el.addEventListener('hitend', (event) => {
          // Annule le délai si la balle quitte la zone avant la fin du temps requis
          if (this.winTimer) {
            clearTimeout(this.winTimer);
            this.winTimer = undefined;
            console.log('La balle a quitté la zone trop tôt.');
          }
      });
    }
  });
  