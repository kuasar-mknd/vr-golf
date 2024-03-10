<script setup>
  import '../aframe/disable-in-vr.js';
  import '../aframe/hide-in-vr.js';
  import '../aframe/simple-navmesh-constraint.js';
  import '../aframe/blink-controls.js';
  import '../aframe/physx-grab.js';
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
  >

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: true"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
        disable-in-vr="component: simple-navmesh-constraint;"
        camera
        position="0 1.65 0"
      >
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 4; objects: [clickable]; showLine: false;"
          position="0 0 -0.1"
          disable-in-vr="component: raycaster; disableInAR: false;"
          hide-in-vr="hideInAR: false"
        ></a-entity>
      </a-entity>

      <a-entity
        id="hand-left"
        hand-controls="hand: left"
        laser-controls="hand: left"
        raycaster="far: 4; objects: [clickable]; showLine: true;"
        blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
        physx-grab
      >
        <a-sphere id="hand-left-collider"
          radius="0.02"
          visible="false"
          physx-body="type: kinematic; emitCollisionEvents: true">
        </a-sphere>
      </a-entity>

      <a-entity
        id="hand-right"
        hand-controls="hand: right"
        physx-grab
      >
      <a-entity id="golfClub" gltf-model="url(assets/golfclub.glb)" 
              position="-0.02 0.030 -1" rotation="-15 0 90" scale="0.012 0.012 0.012">
    </a-entity>
        <a-box id="hand-right-collider"
          width="0.1" height="0.2" depth="0.7"
          position="0 0.03 -0.97"
          visible="false"
          physx-body="type: kinematic; emitCollisionEvents: true">
        </a-box>
        <a-plane id="camera-view-plane"
         position="0.01 0 0.2" rotation="0 90 -180"
         width="0.2" height="0.1" >
         <a-entity scale="0.07 0.07 0.07"><a-image id="teleporter" src="#teleport" 
         scale="2.8291 0.904" 
         position="0 -1.1" 
         clickable
         :teleport-camera-rig="`
          target: #golfball;
        `"></a-image></a-entity>
</a-plane>
      </a-entity>

  </a-entity>

</template>