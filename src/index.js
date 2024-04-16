import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './model'

/*------------------------------
Renderer
------------------------------*/
const renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


/*------------------------------
Scene & Camera
------------------------------*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / window.innerHeight,
	0.1,
	100
);
camera.position.z = 3;
camera.position.y = 1;


/*------------------------------
Mesh
------------------------------*/
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
});
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);



/*------------------------------
OrbitControls
------------------------------*/
const controls = new OrbitControls(camera, renderer.domElement);


/*------------------------------
Helpers
------------------------------*/
const gridHelper = new THREE.GridHelper(10, 10);
// scene.add(gridHelper);
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

/*------------------------------
Models
------------------------------*/
const skull = new Model({
	name: 'skull',
	file: './models/skull.glb',
	scene: scene,
	color1: 'purple',
	color2: 'lightsalmon',

})

const horse = new Model({
	name: 'horse',
	file: './models/horse.glb',
	color1: 'blue',
	color2: 'pink',
	scene: scene
})

const wego = new Model({
	name: 'horse',
	file: './models/we-go.glb',
	color1: '#ED2E38',
	color2: '#ED2E38',
	scene: scene,
	placeOnLoad: true
})

/*------------------------------
Controllers
------------------------------*/
const button = document.querySelectorAll('.button')
button[0].addEventListener('click', () => {
	skull.add()
	horse.remove()
	wego.remove()
})
button[1].addEventListener('click', () => {
	skull.remove()
	wego.remove()
	horse.add()
})
button[2].addEventListener('click', () => {
	skull.remove()
	horse.remove()
	wego.add()
})

/*------------------------------
Clock
------------------------------*/
const clock = new THREE.Clock()

/*------------------------------
Loop
------------------------------*/
const animate = function () {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	if (skull.isActive) {
		skull.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
	}
	if (horse.isActive) {
		horse.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
	}
	if (wego.isActive) {
		wego.particlesMaterial.uniforms.uTime.value = clock.getElapsedTime()
	}


};
animate();


/*------------------------------
Resize
------------------------------*/
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);





// const API_URL = "https://graph.facebook.com/v9.0"

// const user_access_token = "EAADPTU1BquoBAEfAbE9LV6LD6TsTj4dzCQyPjIbjfQeiciYyy8HXvFUL3xrlyo5SC5dHI1tcfZCuTDA4OP1HGZCJZCAZCy7pYWZBhioZCc7di4YLAyTUpQIG60CN4Mh5ZBEiiMKAPkjgqlSU620tUwXfSEcR4PXAaIrrHF7ScjZCRCrr3ELbBIE9aqTZAv82Jv9NdsShL9XrsGX4wxyxrUdh9cK0Kg0bWpVwZD"
// const client_id = '227930915580650'
// const client_secret = 'f1216fd3b8ce453dfc084ac19daf985a'

// let access_token = ''
// let id = ''
// // # 1 Generate Long-Lived Access Token
// fetch(`${API_URL}/oauth/access_token?grant_type=fb_exchange_token&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${user_access_token}`)
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log('get token', data)
// 		access_token = data['access_token']
// 		getID()
// 	}
// 	)
// 	.catch((error) => {
// 		console.error('Error:', error);
// 	});

// function getID() {
// 	fetch(`${API_URL}/me?access_token=EAADPTU1BquoBANSIZANZCb0pjj3ZCUoz9kkbxdG4rt8qSsVZB0fZCCuR4ge1k2Huf0C6mPjsk2js1vUZBGrvflks0e80lCqCZAMxawqZAGrZB3ZCNk5YvGP7ipJvFuTALqa7CNG50SowZAUV6Hq3dXdPzth8S4oSQqSTaWNSLW15UymX3jjhiTTzFvckTfyQIKwJNAZD`)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log('get ID', data)
// 			id = data['id']
// 			getBusinessID()
// 		}
// 		)
// 		.catch((error) => {
// 			console.error('Error:', error);
// 		});
// }

// function getBusinessID() {
// 	fetch(`${API_URL}/${id}?fields=instagram_business_account&access_token=${access_token}`)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log('get businee ID', data)
// 		})
// 		.catch((error) => {
// 			console.error('Error:', error);
// 		});
// }


// var APP_INFO = {
// 	access_token: "EAADPTU1BquoBANSIZANZCb0pjj3ZCUoz9kkbxdG4rt8qSsVZB0fZCCuR4ge1k2Huf0C6mPjsk2js1vUZBGrvflks0e80lCqCZAMxawqZAGrZB3ZCNk5YvGP7ipJvFuTALqa7CNG50SowZAUV6Hq3dXdPzth8S4oSQqSTaWNSLW15UymX3jjhiTTzFvckTfyQIKwJNAZD",
// 	id: "618124781615378",
// 	instagram_business_account: {
// 		id: "17841402380686405"
// 	}
// }

// const instagramUrlAPI = `https://graph.facebook.com/v9.0/${APP_INFO.instagram_business_account.id}/media?fields=id,media_type,media_url,permalink&limit=30&access_token=${APP_INFO.access_token}`;

// fetch(instagramUrlAPI)
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch((error) => {
// 		console.error('Error:', error);
// 	});