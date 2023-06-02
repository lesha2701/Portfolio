import * as THREE from 'three';
import './style.css'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { gsap } from 'gsap';

const scene = new THREE.Scene();


const geometry = new THREE.SphereGeometry(3, 64, 64);
const matetial = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  roughness: 0.1
});

const mesh = new THREE.Mesh(geometry, matetial);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
light.intensity = 1.25;
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20
scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2)
renderer.render(scene, camera);


window.addEventListener('resize', () => {
  sizes.width = window.innerWidth,
  sizes.height = window.innerHeight
  
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height)
})

const control = new OrbitControls(camera, canvas)
control.enableDamping = true
control.enablePan = false
control.enableZoom = false
control.autoRotate = true
control.autoRotateSpeed = 5

const loop = () => {
  control.update()
  renderer.render(scene,camera);
  window.requestAnimationFrame(loop)
}
loop();

const tl = gsap.timeline({defaults: {duration: 1}})

tl.fromTo(mesh.scale,
   {
    z:0, 
    x:0, 
    y:0
  }, 
  {
    z:1, 
    x:1,  
    y:1
  }
)

tl.fromTo(".title", 
  {opacity: 0},
  {opacity: 1}
)

tl.fromTo("nav", 
  {y: "-100%"},
  {y: "0%"}
)

let mouseDown = false;
let rgb = [];
window.addEventListener('mousedown', () => (mouseDown = true))
window.addEventListener('mouseup', () => (mouseDown = false))

window.addEventListener('mousemove', (e) => {
  if (mouseDown) {
     rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      150
     ]
     let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
     gsap.to(mesh.material.color, {r: newColor.r, g: newColor.g, b: newColor.b})
  }

})