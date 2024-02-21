AFRAME.registerComponent('custom-controls', {
    schema: {
      hand: {default: ''}
    },
  
    update: function (previousHand) {
      var controlConfiguration;
      var el = this.el;
      var hand = this.data.hand;
      var handModelStyle = this.data.handModelStyle;
      var handColor = this.data.color;
      var self = this;
  
      // Get common configuration to abstract different vendor controls.
      controlConfiguration = {
        hand: hand,
        model: true
      };
  
          el.setAttribute('magicleap-controls', controlConfiguration);
          el.setAttribute('vive-controls', controlConfiguration);
          el.setAttribute('oculus-touch-controls', controlConfiguration);
          el.setAttribute('pico-controls', controlConfiguration);
          el.setAttribute('windows-motion-controls', controlConfiguration);
          el.setAttribute('hp-mixed-reality-controls', controlConfiguration);
          el.setAttribute('gltf-model', 'url(assets/golfclub.glb)');
    },
  
  });