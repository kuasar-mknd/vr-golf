<script setup>
  import { ref } from 'vue';
  import '../aframe/physx-force-pushable.js';
  import '../aframe/clickable.js';
  import '../aframe/follow-ball.js';
  import '../aframe/game-check.js';
  import '../aframe/teleport-camera-rig.js';
  

  const props = defineProps({
    scale: Number,
  });

</script>

<template>
    <a-entity sound="src: #sound-ambiant; autoplay: false; loop: true; positional: false; volume: 0.5" id="ambiantSound"></a-entity>
    
    
  <a-light type="directional" light="castShadow: true" position="1 12.07439 1" intensity="0.5" shadow-camera-automatic="#objects"></a-light>
  <a-sphere
    position="0 0.05 -1"
    id="golfball"
    radius="0.05"
    color="white"
    shadow="cast: true; receive: true"
    physx-body="type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.5; emitCollisionEvents:true"
    physx-material="staticFriction: 1.0; dynamicFriction: 1.0"
    physx-force-pushable
    clickable
    sound="src: #sound-hit; on: contactbegin"
    aabb-collider="objects: .collidable"
    game-check
  ></a-sphere>
  <a-entity id="ball-following-camera"
          secondary-camera="output: plane; outputElement: #camera-view-plane; cameraType: perspective; sequence: after; quality: high"
          follow-and-look-at="target: #golfball">
</a-entity>
<a-plane id="camera-view-plane-temp" visible="false"
         position="1 2 -4" rotation="0 0 0"
         width="2" height="1.2" >
         <a-image id="teleporter" src="#teleport" 
         scale="2.8291 0.904" 
         position="0 -1" 
         clickable
         :teleport-camera-rig="`
          target: #golfball;
        `"></a-image>
</a-plane>


  <a-entity
  position="-30 0 -5"
  rotation="0 -100 0"
  
  >

  
  <a-entity
    gltf-model="#room"
    rotation="0 90 0"
    position="0 0 0"
    scale="3.5 3.5 3.5"
    
  >
  </a-entity>
  <a-sky color="#87CEEB"></a-sky>
    <a-entity light="type:  ambient;  color:  #445451"></a-entity>
    
    <a-entity
    geometry="primitive: plane; height: 100; width: 100"
    position="0 0 0"
    rotation="-90 0 0"
    material="src: #room-texture; repeat: 4 4; metalness: 0; roughness: 2;"></a-entity>


  <a-entity id="flagEntity" gltf-model="#flag" position="32 1.8 0" scale="1 1 1" rotation="0 90 0" animation-mixer></a-entity>
  <a-cylinder id="flag-zone" class="collidable" position="32.01174 0 -0.32111" radius="0.5" height="0.02" color="black" opacity="" transparent="" side="" material="" ></a-cylinder>
  <a-cylinder position="32.01174 0 -0.32111" radius="0.5" height="1" color="#09F" opacity="0.25" transparent="true" side="double" material=""></a-cylinder>
  <a-text id="success-text" class="collidable" position="31.99581 2.17976 -0.35794" align="center" visible="false" value="Bravo !" text="side: double; transparent: true" rotation="0 -90 0"></a-text> 
  <a-entity id="fireworkEntity" gltf-model="#firework" position="32 2 0" scale="0.1 0.1 0.1" rotation="0 90 0" animation-mixer visible="false" sound="src: #sound-firework; loop: true; on: playFireworkSound"></a-entity>
  
  
  <a-entity id="mountains">
    <a-entity gltf-model="#mountain" position="43 -2 0" scale="0.4 0.4 0.4" rotation="0 90 0"></a-entity>
    <a-entity gltf-model="#mountain" position="38 0 10" scale="0.4 0.3 0.4" rotation="0 22 0"></a-entity>
    <a-entity gltf-model="#mountain" position="30 -2 40" scale="0.8 1 0.5" rotation="0 90 0"></a-entity>
    <a-entity gltf-model="#mountain" position="1 -2 30" scale="0.6 0.5 0.5" rotation="0 70 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-21 -2 30" scale="0.9 0.4 0.8" rotation="0 10 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-15 -2 40" scale="0.9 1 0.8" rotation="0 10 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-15 -2 40" scale="0.9 1 0.8" rotation="0 10 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-35 -2 25" scale="0.6 0.4 0.4" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-44.34692 -2 13.44544" scale="0.42 0.21 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-37.04956 -2 2.19091" scale="0.42 0.21 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-37.42349 -2 -20.29397" scale="0.42 0.38 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-44.23114 -2 -5.85161" scale="-0.33 0.6 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-47.6316 -2 -35.67524" scale="-0.33 0.6 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-24.40358 -2 -55.17987" scale="-0.33 0.3 1.17" rotation="0 159.81 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-1.13241 -2 -62.94367" scale="-1.08 0.28 0.71" rotation=""></a-entity>
    <a-entity gltf-model="#mountain" position="23.31585 -2 -55.17268" scale="-0.68 0.45 0.71" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="24.55946 -2 -28.60163" scale="-0.68 0.23 0.71" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="24.55946 -2 -28.60163" scale="-0.68 0.23 0.71" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="53.29252 -2 -16.51732" scale="-0.68 0.32 0.71" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="38.29876 -2 -31.03128" scale="-0.68 0.7 0.71" rotation="0 45 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-42.57896 -2 19.01519" scale="0.42 0.84 0.79" rotation="0 160 0"></a-entity>
    <a-entity gltf-model="#mountain" position="-49.45055 -2 24.77556" scale="1.27 0.84 0.94" rotation="0 135.65 0"></a-entity>
  </a-entity>

  <!-- Main room navigation mesh  -->
  <a-entity id="roomNav" position="0 -0.05 0" visible="false">
  <a-box
    height="0.1" width="63" depth="5"
    position="13 0 -0.5"
    data-role="nav-mesh"
    material="color: blue"
    physx-body="type: static"
  ></a-box>
  <a-box
    height="0.1" width="15" depth="20"
    position="-12 0 -11.75"
    data-role="nav-mesh"
    material="color: red"
    physx-body="type: static"
  ></a-box>
  <a-box
    height="0.1" width="25" depth="18"
    position="-7 0 -27"
    data-role="nav-mesh"
    material="color: green"
    physx-body="type: static"
    ></a-box>
  </a-entity>

  <!-- Main room walls -->
  <a-entity id="roomWalls" position="0 0 0" visible="false">
    <a-box height="10" width="0.1" depth="18" position="6.88454 0 1.85434" rotation="0 90 0" material="color: blue" physx-material="density: NaN" physx-body="type: static" geometry="depth: 60" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="17.81904 0 -2.382" rotation="0 90 0" material="color: green" physx-material="density: NaN" physx-body="type: static" geometry="depth: 45" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="35.31742 0 -0.2078" material="color: red" physx-material="density: NaN" physx-body="type: static" geometry="depth: 5" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="-4.51779 0 -10.66713" material="color: red" physx-material="density: NaN" physx-body="type: static" geometry="depth: 16.64" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="4.77477 0 -27.83165" material="color: green" physx-material="density: NaN" physx-body="type: static" geometry="" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="4.36503 0 -19.27286" rotation="0 90 0" material="color: blue" physx-material="density: NaN" physx-body="type: static" geometry="" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="-6.67055 0 -35.90512" rotation="0 90 0" material="color: red" physx-material="density: NaN" physx-body="type: static" geometry="depth: 25" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="4.77477 0 -27.83165" material="color: green" physx-material="density: NaN" physx-body="type: static" geometry="" grab-options="scalable"></a-box>
    <a-box height="10" width="0.1" depth="18" position="-18.06946 0 -16.77169" material="color: green" physx-material="density: NaN" physx-body="type: static" geometry="depth: 40" grab-options="scalable"></a-box>
    <a-cylinder height="10" radius="0.1" position="-10.58147 3.68361 -28.36573" rotation="0 90 0" material="color: red" physx-material="density: NaN" physx-body="type: static" geometry="radius: 5.71" grab-options="scalable"></a-cylinder>
  </a-entity>

  <!-- Fences-->
  <a-entity id="fences" scale="0.008 0.008 0.008">
    <a-entity gltf-model="#fence" position="114.53809 0 219.91601" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="374.08736 0 207.75471" rotation="0 -20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="616.91504 0 217.92065" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="871.59027 0 208.63768" rotation="0 -20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="1219.64083 0 217.92065" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="1479.26397 0 163.45461" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="1746.83119 0 163.45461" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2782.23341 0 180.32176" rotation="0 55 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2972.69568 0 140.39939" rotation="0 -45 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="4104.76939 0 178.64552" rotation="0 50 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="4204.20944 0 -66.4123" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="4052.81336 0 -281.81596" rotation="0 -20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2009.93263 0 201.77044" rotation="0 -20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="3795.97051 0 -324.09779" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="3531.10062 0 -287.29733" rotation="0 14.999999999999998 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="3268.42866 0 -287.29733" rotation="0 -14.999999999999998 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="3010.59141 0 -267.40263" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2749.59001 0 -239.86049" rotation="0 -5 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2482.44909 0 -262.84005" rotation="0 -5 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="2220.89697 0 -312.8936" rotation="0 -14.999999999999998 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="1505.44051 0 -274.15556" rotation="0 29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="1251.22292 0 -214.42302" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="982.83843 0 -214.42302" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="711.02168 0 -214.42302" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="451.68932 0 -163.69406" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="231.21703 0 -243.59148" rotation="0 -50 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2.21756 0 -284.24416" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-252.34329 0 -194.61125" rotation="0 20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-513.14558 0 -154.97679" rotation="" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-764.99339 0 -226.08991" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-855.3913 0 -416.87555" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-855.3913 0 -687.85069" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-761.20275 0 -913.26519" rotation="0 29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-630.28209 0 -1121.45533" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-593.70527 0 -1391.79565" rotation="0 70 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-579.38453 0 -2204.62134" rotation="0 110 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-569.8691 0 -2435.8777" rotation="0 50 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-360.47399 0 -2490.21892" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="229.54615 0 -2427.88078" rotation="0 29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="409.14603 0 -2623.50226" rotation="0 70 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="503.33758 0 -2880.91267" rotation="0 70 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="595.39483 0 -3136.94754" rotation="0 70 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="514.48873 0 -4197.04916" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="278.8751 0 -4336.08561" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="24.96477 0 -4425.22986" rotation="0 -10 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-230.45362 0 -4497.21072" rotation="0 -20 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-1398.0846 0 -4369.99571" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-1788.1222 0 -2838.28521" rotation="0 50 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-1962.54482 -3.84659 -2632.99465" rotation="0 50 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2173.4117 -3.847 -2468.11159" rotation="0 29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2207.53603 -3.847 -1211.56579" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2072.30911 -3.847 -977.71621" rotation="0 90 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2149.42505 -3.847 -724.3638" rotation="0 59.99999999999999 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2260.54289 -3.847 -479.47928" rotation="0 70 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-2202.49118 -3.847 -13.15556" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-1948.70837 -3.847 85.05932" rotation="0 -10 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-1694.6109 -3.847 175.27151" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-810.01935 -3.847 188.37959" rotation="0 59.99999999999999 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-605.64272 -3.847 78.64156" rotation="0 -10 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-338.27741 -3.847 126.48467" rotation="0 -10 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>
    <a-entity gltf-model="#fence" position="-109.92344 -3.847 202.41134" rotation="0 -29.999999999999996 0" physx-material="density: NaN" physx-body="type: static" grab-options="scalable"></a-entity>


  </a-entity>

</a-entity>

</template>