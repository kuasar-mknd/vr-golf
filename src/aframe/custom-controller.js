AFRAME.registerComponent('custom-controller', {
  init: function() {
    this.el.addEventListener('controllerconnected', (event) => {
      if (event.detail.hand === 'right') {
        this.el.removeChild(this.el.firstChild);
        this.el.setAttribute('gltf-model', 'url(assets/golfclub.gltf)');
        this.el.object3D.scale.set(0.01, 0.01, 0.01); // Example scale
        this.el.object3D.position.set(0, -0.5, 0); // Example position
      }
    });
  }
});
