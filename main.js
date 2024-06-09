import * as THREE from 'three';
import './style.css'


// scene
const scene = new THREE.Scene();

// create our sphere

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
// mesh is a combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// set up light
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
scene.add(light)

// Add a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height);
camera.position.z = 20
scene.add(camera);

// render the scene on the screen
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// resize
window.addEventListener('resize', () => {
  // update sizes
  style.width = window.innerWidth;
  style.height = window.innerHeight;
  // update camera
  camera.aspect = sizes.width / sizes.height;
})

