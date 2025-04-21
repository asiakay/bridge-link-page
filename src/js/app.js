// --- Set up the background image (10% opacity) ---
/* const bgImage = new Image();
bgImage.src = 'https://cdn.glitch.global/df5d1079-eeba-4fba-9538-4a7bb5666149/bridgeicon.png?v=1745224526832'; // Replace with your image URL
bgImage.onload = function() {
    document.body.style.backgroundImage = `url(${this.src})`;
}; */


// Initialize the scene, camera, and renderer
const canvas = document.querySelector('#c');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load image as a Three.js texture
const textureLoader = new THREE.TextureLoader();
textureLoader.load('https://cdn.glitch.global/df5d1079-eeba-4fba-9538-4a7bb5666149/bridgeicon.png?v=1745224526832', (texture) => {
  const bgGeometry = new THREE.PlaneGeometry(25,25);
  const bgMaterial = new THREE.MeshBasicMaterial({
    map: texture, 
    transparent: true,
    opacity: 0.1 // 10% opacity
  });
const background = new THREE.Mesh(bgGeometry, bgMaterial);
background.position.z = -10; // placed behind other objects
scene.add(background);
},
                  undefined, // Progress callback (optional)
                   (error) => { // Error callback
console.error('Error loading texture', error);
}
                   );


// Add a cube

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
/* const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
*/
// Animation loop
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();



// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});