var container;

var camera;
var scene;
var webglRenderer;

var has_gl = 0;

var delta
var time;
var oldTime;

var mouseX = 0;
var mouseY = 0;

var mouseXpercent = 0;
var mouseYpercent = 0;

var rayX;
var rayY;

var cameraTarget = new THREE.Vector3(0,40,0);
var paddle;
var paddleChild;
var paddleAI;
var paddleChildAI;
var projector = new THREE.Projector();
var hitMesh;
var paddleTarget = new THREE.Vector3();
var paddleTargetAI = new THREE.Vector3();
var paddleBehaviour = { divider: 3, spinx: 0, spiny: 0 };
var ballBehaviour = { spinx: 0, spiny: 0 };

var ball;
var ballRadius = 0.6;
var shadow;
var shadowMaterial;
var lastHit = 0;
var initHit = 0;
var hitPosition = new THREE.Vector3();
var initX = 0;
var hitX = 0;
var hitY = 0;
var hitting = false;
var hitComplete = true;
var ballInactive = false;
var hitTimeAI = 0;
var lastTableHit = 0;

var inactiveCounter = 0;

var stopped = false;
var bound = {left:32, right:-32, top:56.3, bottom:-56.3, table:33.2+ballRadius, floor:0+ballRadius, net: 39.2, netleft: 35.2, netright: -35.2};

var vx = 0;
var vz = 0;
var vy = 0;
var gravity = 0.040;

var touchDevice = false;
var sizeRatio = 1;

document.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
document.addEventListener( 'mousedown', function ( event ) { event.preventDefault(); }, false );
document.addEventListener( 'touchstart', function ( event ) { event.preventDefault(); }, false );
document.addEventListener('mousemove', onDocumentMouseMove, false);
document.addEventListener( 'touchmove', onTouchMove, false );

init();

function init() {

	container = document.createElement('div');
	container.id = "container";
	document.body.appendChild(container);

	touchDevice = ('ontouchstart' in document.getElementById("container")) || (navigator.userAgent.match(/ipad|iphone|android/i) != null);
	if (touchDevice) sizeRatio = 2;

	scene = new THREE.Scene();

	var aspect = window.innerWidth / window.innerHeight;

	camera = new THREE.PerspectiveCamera( 40, aspect, 1, 700 );
	camera.position.set(0,50,-112);
	scene.add(camera);
	
	// Floor
	var floorPlane = new THREE.PlaneGeometry(1000,400);
	var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map:THREE.ImageUtils.loadTexture( "floor.jpg"), ambient: 0xaaaaaa } );
	material.map.repeat.x = 12;
	material.map.repeat.y = 4;
	material.map.wrapS = THREE.RepeatWrapping;
	material.map.wrapT = THREE.RepeatWrapping;

	var floorMesh = new THREE.Mesh( floorPlane, material );
	floorMesh.rotation.y = -Math.PI/2;
	floorMesh.castShadow = false;
	floorMesh.receiveShadow = true;
	floorMesh.renderDepth = 1;
	floorMesh.depthTest = false;
	floorMesh.matrixAutoUpdate = false;
	floorMesh.updateMatrix();
	scene.add(floorMesh);

	// Cover
	var coverPlane = new THREE.PlaneGeometry(400,1000);
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff, map:THREE.ImageUtils.loadTexture( "circle.png"), transparent: true } );
	var coverMesh = new THREE.Mesh( coverPlane, material );
	
	coverMesh.position.y = 1;
	coverMesh.renderDepth = 1;
	coverMesh.depthTest = false;
	coverMesh.matrixAutoUpdate = false;
	coverMesh.updateMatrix();
	scene.add(coverMesh);

	// Hit
	var hitPlane = new THREE.PlaneGeometry(200,200);
	hitMesh = new THREE.Mesh(hitPlane, new THREE.MeshBasicMaterial());
	hitMesh.rotation.x = -Math.PI/2;
	hitMesh.position.z = -65;
	hitMesh.visible = false;
	scene.add(hitMesh);

	// Paddle
	paddle = new THREE.Object3D();
	scene.add(paddle);

	// PaddleAI
	paddleAI = new THREE.Object3D();
	paddleAI.position.set(16,42,bound.top+15);
	scene.add(paddleAI);

	// Ball
	var ballGeomertry = new THREE.SphereGeometry(ballRadius,24,16);
	var material = new THREE.MeshLambertMaterial( { color: 0x666666, map:THREE.ImageUtils.loadTexture( "ball2.jpg"), ambient: 0xcccccc, specular: 0xffffff, shininess: 30 } );
	ball = new THREE.Mesh( ballGeomertry, material );
	ball.position.set(0,50,0);
	
	ball.rotation.y = Math.PI/2;
	ball.castShadow = true;
	ball.receiveShadow = false;
	scene.add(ball);

	// Shadow
	var shadowPlane = new THREE.PlaneGeometry(2.2,2.2);
	shadowMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map:THREE.ImageUtils.loadTexture( "shadow.png"), transparent: true } );
	shadow = new THREE.Mesh( shadowPlane, shadowMaterial );
	shadow.depthTest = false;
	shadow.position.set(0,bound.table-ballRadius+0.05,0);
	scene.add(shadow);

	// Lights
	var ambient = new THREE.AmbientLight( 0xffffff );
	scene.add( ambient );

	var pointLight = new THREE.PointLight( 0xf0e7c8, 0.9 );
	pointLight.position.set(40,70,-130);
	scene.add( pointLight );

	var light = new THREE.SpotLight( 0xffffff, 0.8 );
	light.position.set( 10, 100, -30 );
	light.target.position.set( 0, 0, 20 );
	light.target.updateMatrixWorld();

	light.castShadow = true;

	light.shadowCameraNear = 40;
	light.shadowCameraFar = 200;
	light.shadowCameraFov = 60;

	//light.shadowCameraVisible = true;

	light.shadowDarkness = 0.85;

	light.shadowMapWidth = 1024/sizeRatio;
	light.shadowMapHeight = 1024/sizeRatio;

	scene.add( light );

	// Models
	loader = new THREE.JSONLoader();
	loader.load( "paddle.js", paddleLoaded );


	try {
		webglRenderer = new THREE.WebGLRenderer( { scene: scene, clearColor: 0x000000, clearAlpha: 1.0, antialias: true } );
		webglRenderer.setSize( window.innerWidth/sizeRatio, window.innerHeight/sizeRatio );

		webglRenderer.shadowMapEnabled = true;
		webglRenderer.shadowMapSoft = true;

		container.appendChild( webglRenderer.domElement );
		has_gl = 1;
		THREEx.WindowResize(webglRenderer, camera);

		webglRenderer.domElement.style.position = "absolute";
		webglRenderer.domElement.style.top = "0px";
		webglRenderer.domElement.style.left = "0px";

		if (sizeRatio > 1) {
			webglRenderer.domElement.style.webkitTransform = "scale3d("+sizeRatio+", "+sizeRatio+", 1)";
			webglRenderer.domElement.style.webkitTransformOrigin = "0 0 0";
		}

	}
	catch (e) {
		// need webgl
		document.getElementById('info').innerHTML = "<P><BR><B>Note.</B> You need a modern browser that supports WebGL for this to run the way it is intended.<BR>For example. <a href='http://www.google.com/landing/chrome/beta/' target='_blank'>Google Chrome 9+</a> or <a href='http://www.mozilla.com/firefox/beta/' target='_blank'>Firefox 4+</a>.<BR><BR>If you are already using one of those browsers and still see this message, it's possible that you<BR>have old blacklisted GPU drivers. Try updating the drivers for your graphic card.<BR>Or try to set a '--ignore-gpu-blacklist' switch for the browser.</P><CENTER><BR><img src='../general/WebGL_logo.png' border='0'></CENTER>";
		document.getElementById('info').style.display = "block";
		return;
	}
	
}

function respawnBall() {
	ball.position.set(0,50,0);
	vx = -0.25;
	vz = -1.35;
	vy = 0;

	ballBehaviour.spinx *= 0.5;
	paddleBehaviour.spinx *= 0.5;

	ballInactive = false;
	inactiveCounter = 0;
}

function tableLoaded( geometry ) {
	
	var netPlane = new THREE.PlaneGeometry(70,5);
	var material = new THREE.MeshBasicMaterial( {opacity:0.5, transparent: true, color: 0x222222, map:THREE.ImageUtils.loadTexture( "net.png")} );
	material.map.repeat.x = 28;
	material.map.repeat.y = 2;
	material.map.wrapS = THREE.RepeatWrapping;
	material.map.wrapT = THREE.RepeatWrapping;

	var net = new THREE.Mesh(netPlane, material);
	net.position.y = 36.3;
	net.rotation.x = -Math.PI/2;
	//net.renderDepth = 0;
	net.matrixAutoUpdate = false;
	net.updateMatrix();
	scene.add(net);

	var frontPlane = new THREE.PlaneGeometry(9,2.5);
	var material = new THREE.MeshPhongMaterial( {color: 0x000000, map:THREE.ImageUtils.loadTexture( "stiga.png"), specular: 0x545454} );
	var frontLeft = new THREE.Mesh(frontPlane, material);
	frontLeft.position.set(25,31.6,-56.4);
	frontLeft.rotation.x = -Math.PI/2;
	frontLeft.rotation.y = Math.PI;
	frontLeft.matrixAutoUpdate = false;
	frontLeft.updateMatrix();
	scene.add(frontLeft);

	var frontRight = new THREE.Mesh(frontPlane, material);
	frontRight.position.set(-25,31.6,-56.4);
	frontRight.rotation.x = -Math.PI/2;
	frontRight.rotation.y = Math.PI;
	frontRight.matrixAutoUpdate = false;
	frontRight.updateMatrix();
	scene.add(frontRight);


	var netRight = new THREE.Mesh(frontPlane, material);
	netRight.position.set(-33.5,32.8,-0.9);
	netRight.rotation.x = -Math.PI/2;
	netRight.rotation.y = Math.PI;
	netRight.scale.set(0.25,0.25,0.25);
	netRight.matrixAutoUpdate = false;
	netRight.updateMatrix();
	scene.add(netRight);


	var netLeft = new THREE.Mesh(frontPlane, material);
	netLeft.position.set(33.5,32.8,-0.9);
	netLeft.rotation.x = -Math.PI/2;
	netLeft.rotation.y = Math.PI;
	netLeft.scale.set(0.25,0.25,0.25);
	netLeft.matrixAutoUpdate = false;
	netLeft.updateMatrix();
	scene.add(netLeft);

	var m = new THREE.MeshPhongMaterial( { color: 0xffffff, map:THREE.ImageUtils.loadTexture( "surface0.jpg"), ambient: 0x000000, specular: 0x545454 } );
	m.map.repeat.x = 0.1;
	m.map.repeat.y = 0.035;
	m.map.wrapS = THREE.RepeatWrapping;
	m.map.wrapT = THREE.RepeatWrapping;				
	geometry.materials[1] = m;

	var table = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
	table.scale.set(0.4,0.4,0.4);
	table.castShadow = true;
	table.receiveShadow = false;
	table.matrixAutoUpdate = false;
	table.updateMatrix();
	scene.add(table);


	respawnBall();
	animate();

}

function paddleLoaded( geometry ) {

	paddleChild = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
	paddleChild.scale.set(0.4,0.4,0.4);
	paddle.add(paddleChild);

	var markPlane = new THREE.PlaneGeometry(1.05,2.1);
	var material = new THREE.MeshPhongMaterial( {color: 0xffffff, transparent: true, map:THREE.ImageUtils.loadTexture( "mark.png"), specular: 0x333333} );
	var mark = new THREE.Mesh(markPlane, material);
	mark.position.set(0,-10.45,0.45);
	mark.rotation.x = Math.PI/2;
	
	mark.matrixAutoUpdate = false;
	mark.updateMatrix();
	paddleChild.add(mark); 

	// AI
	paddleChildAI = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
	paddleChildAI.scale.set(0.4,0.4,0.4);
	paddleAI.add(paddleChildAI);

	loader.load( "table.js", tableLoaded );

}

function onDocumentMouseMove(event) {
	
	var windowHalfX = window.innerWidth >> 1;
	var windowHalfY = window.innerHeight >> 1;

	mouseX = ( event.clientX - windowHalfX );
	mouseY = ( event.clientY - windowHalfY );

	mouseXpercent = mouseX/(window.innerWidth/2);
	mouseYpercent = mouseY/(window.innerHeight/2);

	rayX = ( event.clientX / window.innerWidth ) * 2 - 1;
	rayY = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// cursor
	if (mouseYpercent <= -0.75 && container.style.cursor != "default") {
		container.style.cursor = "default";
	} else if (mouseYpercent > -0.75 && container.style.cursor != "none") {	
		container.style.cursor = "none";
	}
}

function onTouchMove(event) { 

	event.preventDefault();

	var windowHalfX = window.innerWidth >> 1;
	var windowHalfY = window.innerHeight >> 1;

	mouseX = ( event.touches[0].clientX - windowHalfX );
	mouseY = ( event.touches[0].clientY - windowHalfY );

	mouseXpercent = mouseX/(window.innerWidth/2);
	mouseYpercent = mouseY/(window.innerHeight/2);

	rayX = ( event.touches[0].clientX / window.innerWidth ) * 2 - 1;
	rayY = - ( event.touches[0].clientY / window.innerHeight ) * 2 + 1;

}


function animate() {
	requestAnimationFrame( animate );
	loop();
}

function loop() {

	if (stopped) {
		return;
	}

	time = new Date().getTime();
	delta = time - oldTime;
	oldTime = time;

	if (isNaN(delta) || delta > 1000 || delta == 0 ) {
		delta = 1000/60;
	}

	if (ballInactive) {
		++inactiveCounter;
		if (inactiveCounter >= 75) {
			respawnBall();
		}
	}

	// hit ball
	var normal = new THREE.Vector3();
	
	normal.sub( ball.position, paddle.position );
	var distance = normal.lengthSq();
	var dify = Math.abs(ball.position.y - paddle.position.y);
	
	if ((distance < 15 || time > initHit+200) && hitting) {

		paddleBehaviour.spinx = ((mouseX - hitX)*-1)/200;
		paddleBehaviour.spiny = ((mouseY - hitY)*-1)/200;

		
		if (paddleBehaviour.spinx > 2) paddleBehaviour.spinx = 2;
		if (paddleBehaviour.spinx < -2) paddleBehaviour.spinx = -2;

		if (paddleBehaviour.spiny > 1.5) paddleBehaviour.spiny = 1.5;
		if (paddleBehaviour.spiny < -1.5) paddleBehaviour.spiny = -1.5;

		ballBehaviour.spinx = paddleBehaviour.spinx;

		vz = 2.2 + ( Math.abs(paddleBehaviour.spiny+paddleBehaviour.spinx)/4 ) + Math.abs(ball.position.z)/500;
		vy = Math.max(0.3, 0.9-(ball.position.y/100) );
		vx = ( (-ball.position.x-initX)/50 ) - paddleBehaviour.spinx/300;

		hitting = false;
		hitComplete = false;

		hitPosition.copy(ball.position);
		hitPosition.z += 10;
		hitPosition.x += paddleBehaviour.spinx*30;
		hitPosition.y += paddleBehaviour.spiny*20;
		hitPosition.y += 3;

		lastHit = time;

		var rnd = Math.floor( Math.random()*6 );
		Sound.playStaticSound(Sound["paddle"+rnd],0.6+Math.random()*0.4);
	}				
	
	if (distance < 150 && dify < 6 && paddle.position.z < ball.position.z && time > lastHit+500 && !hitting) {

		hitting = true;

		initX = paddle.position.x;
		hitX = mouseX;
		hitY = mouseY;

		initHit = time;

	}


	// find intersections
	var vector = new THREE.Vector3( rayX, rayY, 1 );
	projector.unprojectVector( vector, camera );

	var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );

	var intersect = ray.intersectObject( hitMesh );

	if ( intersect.length > 0 && !hitting) {
		paddleTarget = intersect[0].point;

		if (paddleTarget.y > 48) {
			paddleTarget.y = 48;
		}
	}

	if (hitting) {
		paddleTarget = ball.position;
	}

	if (!hitComplete) {
		if (ball.position.z < paddle.position.z+(ballRadius*6)) {
			ball.position.z = paddle.position.z+(ballRadius*6)
		}
		paddleTarget = hitPosition;
	}

	if (time > lastHit+150 && !hitComplete) {
		hitComplete = true;
		paddleBehaviour.divider = 30;
		var divideTween = new TWEEN.Tween(paddleBehaviour)
			.to({divider: 3}, 300)
			.easing(TWEEN.Easing.Quadratic.EaseOut);
		divideTween.start();
	}

	if (paddleChild) {
		paddle.position.x += (paddleTarget.x - paddle.position.x)/paddleBehaviour.divider;
		paddle.position.y += (paddleTarget.y - paddle.position.y)/paddleBehaviour.divider;
		paddle.position.z += (paddleTarget.z - paddle.position.z)/paddleBehaviour.divider;

		if (paddle.position.x < 0) {
			paddleChild.rotation.z = -paddle.position.x/15;
		} else {
			paddleChild.rotation.z = paddle.position.x/15;
		}

		var amount = 1;
		if (distance < 2000) {
			amount = distance/2000;
		}

		paddleChild.rotation.x = ( -paddle.position.x/30 )*amount;
		paddle.rotation.y = ( Math.PI/2+paddle.position.x/3 );

		if (paddle.rotation.y < 0) {
			paddle.rotation.y = 0;
		}
		if (paddle.rotation.y > Math.PI) {
			paddle.rotation.y = Math.PI;
		}

		if (paddle.rotation.y > 0 && paddle.rotation.y < Math.PI && hitting) {
			if (paddle.position.x < 0) {
				paddle.rotation.y = ( Math.PI/2+paddle.position.x/3 )*amount;
			} else {
				paddle.rotation.y = ( Math.PI/2-paddle.position.x/3 )*amount;
			}
			
		}

		hitMesh.position.z += (-60 - (mouseYpercent*50) - hitMesh.position.z)/2;

		if (hitMesh.position.z < -80) {
			hitMesh.position.z = -80;
		}
		if (hitMesh.position.z > -40) {
			hitMesh.position.z = -40;
		}

	}

	// camera
	camera.position.y += (55+-mouseYpercent*10 - camera.position.y)/10;			
	camera.position.x += (-mouseXpercent*25 - camera.position.x)/10;			

	// ball
	vy -= gravity;

	// spin
	if (paddleBehaviour.spinx > 0) {
		var rm = paddleBehaviour.spinx/15;
		ballBehaviour.spinx -= rm;
		if (ballBehaviour.spinx < -paddleBehaviour.spinx) {
			ballBehaviour.spinx = -paddleBehaviour.spinx;
		}
	} else {
		var rm = paddleBehaviour.spinx/15;
		ballBehaviour.spinx -= rm;
		if (ballBehaviour.spinx > Math.abs(paddleBehaviour.spinx)) {
			ballBehaviour.spinx = Math.abs(paddleBehaviour.spinx);
		}					
	}

	ball.position.x += vx+ballBehaviour.spinx;
	ball.position.y += vy;
	ball.position.z += vz;

	// temp opponent hit
	if (ball.position.z > bound.top+12 && ball.position.x < bound.left+20 && ball.position.x > bound.right-20 && ball.position.y > bound.table+2) {
		//ball.position.z = bound.top;
		ballBehaviour.spinx *= 0.5;
		paddleBehaviour.spinx *= 0.5;

		vz = -(2.3+Math.random()*0.3);
		vy = 0.35+Math.random()*0.2;
		vx = ( -ball.position.x/80 + Math.random()*0.7-0.35 ) - ballBehaviour.spinx*Math.random();
		hitTimeAI = time;
		paddleTargetAI.copy(ball.position);
		paddleTargetAI.z -= 20+Math.random()*20;
		paddleTargetAI.y += 4+Math.random()*4;
		
		if (ball.position.x < 0) {
			paddleTargetAI.x -= 4+Math.random()*4;
		} else {
			paddleTargetAI.x += 4+Math.random()*4;
		}

		var rnd = Math.floor( Math.random()*6 );
		Sound.playStaticSound(Sound["paddle"+rnd],0.2+Math.random()*0.3);

	}

	// hit on table
	if (ball.position.y <= bound.table && ball.position.x <= bound.left+ballRadius && ball.position.x >= bound.right-ballRadius && ball.position.z >= bound.bottom-ballRadius && ball.position.z <= bound.top+ballRadius) {

		var overlap = 0;
		var timeDif = time - lastTableHit;
		var startFriction = 0.98;
		if (timeDif < 800) startFriction = timeDif/800;
		var friction = Math.max(startFriction, 0.75);

		lastTableHit = time;

		// check for edge balls
		if (Math.abs(vy) > 0.25) {
			// left
			if (ball.position.x > bound.left && ball.position.x <= bound.left+ballRadius) {
				overlap = Math.abs(ball.position.x - bound.left)/ballRadius;
				//console.log("left edge ball", overlap);
				vx += overlap;
			}
			// right
			if (ball.position.x < bound.right && ball.position.x >= bound.right-ballRadius) {
				overlap = Math.abs(ball.position.x - bound.right)/ballRadius;
				//console.log("right edge ball", overlap);
				vx -= overlap;
			}

			// top
			if (ball.position.z > bound.top && ball.position.z <= bound.top+ballRadius) {
				overlap = Math.abs(ball.position.z - bound.top)/ballRadius;
				//console.log("top edge ball", overlap);
				vz += overlap;
			}

			// bottom
			if (ball.position.z < bound.bottom && ball.position.z >= bound.bottom-ballRadius) {
				overlap = Math.abs(ball.position.z - bound.bottom)/ballRadius;
				//console.log("bottom edge ball", overlap);
				vz -= overlap;
			}
		}

		ball.position.y = bound.table;
		vy *= -friction+overlap;
		vx *= Math.max(startFriction,0.5);
		vz *= Math.max(startFriction,0.5);

		ballBehaviour.spinx *= Math.max(startFriction,0.7);
		paddleBehaviour.spinx *= Math.max(startFriction,0.7);

		if (Math.abs(vy) < 0.025) {
			ballInactive = true;
		}

		if (Math.abs(vy) > 0.025) {
			var rnd = Math.floor( Math.random()*6 );
			var volume = (1*Math.max(startFriction,0.4))-(ball.position.z-bound.bottom)/(bound.top*3);
			Sound.playStaticSound(Sound["table"+rnd],volume + Math.random()*0.2);
		}
	}
	
	// hit net
	if (ball.position.z > -(ballRadius+Math.abs(vz)) && ball.position.z < (ballRadius+Math.abs(vz))) {
		if (ball.position.y < bound.net+ballRadius && ball.position.x < bound.netleft+ballRadius && ball.position.x > bound.netright-ballRadius) {
			var overlap = 0;
			if (ball.position.y > bound.net) {
				overlap = Math.abs(ball.position.y - bound.net)/ballRadius; 
			}

			if (overlap == 0) {
				if (vz > 0) ball.position.z = -ballRadius;
				if (vz < 0) ball.position.z = ballRadius;

				vz *= -0.1;
				vy *= 0.25;
				vx *= 0.25;
				ballBehaviour.spinx *= 0.25;
				paddleBehaviour.spinx *= 0.25;

			} else {
				//console.log("net roller", overlap);
				vz *= 0.8-(overlap*0.5);
				vy += 1-overlap;
				vx *= 0.8-(overlap*0.5);
				ballBehaviour.spinx *= 0.8-(overlap*0.5);
				paddleBehaviour.spinx *= 0.8-(overlap*0.5);
			}
		}
	}

	// hit on floor
	if (ball.position.y < bound.floor) {
		ball.position.y = bound.floor;
		vy *= -0.7;
		vx *= 0.6;
		vz *= 0.6;
		ballInactive = true;
		if (Math.abs(vy) > 0.025) {
			var rnd = Math.floor( Math.random()*2 );
			var volume = Math.max(1-(distance/80000), 0.1)*0.3;

			Sound.playStaticSound(Sound["floor"+rnd],volume + Math.random()*0.1);
		}
	}

	ball.rotation.x += vx/5;
	ball.rotation.y += vy/5;
	ball.rotation.z += vz/5;

	var size = (ball.position.y - 34)/20;

	// ball shadow
	shadow.position.x = ball.position.x-(5*size);
	shadow.position.z = ball.position.z-(5*size);

	shadowMaterial.opacity = 0.5-(size/2);

	shadow.scale.set(1+size,1+size,1+size)

	shadowMaterial.visible = true;

	if (shadow.position.z < bound.bottom) {
		shadowMaterial.visible = false;
	}
	if (shadow.position.z > bound.top) {
		shadowMaterial.visible = false;
	}
	if (shadow.position.x < bound.right) {
		shadowMaterial.visible = false;
	}
	if (shadow.position.x > bound.left) {
		shadowMaterial.visible = false;
	}
	if (ball.position.y < bound.table) {
		shadowMaterial.visible = false;
	}

	// AI paddle
	if (paddleChildAI) {
		var divider = 6;
		if (time > hitTimeAI+500) {
			if (ball.position.z >= 0 && !ballInactive) {
				paddleTargetAI.copy(ball.position);
				divider = 3;
			} else {
				paddleTargetAI.x = ball.position.x/2;
				if (ballInactive) paddleTargetAI.x = 6 + Math.sin(time/1000)*5;
				paddleTargetAI.y = 40 - Math.cos(time/1000)*2;
				divider = 15;
			}
			paddleTargetAI.z = bound.top+15;
		}
		

		if (paddleTargetAI.y < bound.table+5) {
			paddleTargetAI.y = bound.table+5;
		}

		paddleAI.position.x += (paddleTargetAI.x - paddleAI.position.x)/divider;
		paddleAI.position.y += (paddleTargetAI.y - paddleAI.position.y)/divider;
		paddleAI.position.z += (paddleTargetAI.z - paddleAI.position.z)/divider;


		if (time < hitTimeAI+500) {
			if (ball.position.z > paddleAI.position.z-ballRadius) {
				ball.position.z = paddleAI.position.z-ballRadius;
			}
		}

		if (paddleAI.position.x < 0) {
			paddleChildAI.rotation.z = -paddleAI.position.x/15;
		} else {
			paddleChildAI.rotation.z = paddleAI.position.x/15;
		}

		paddleChildAI.rotation.x = ( -paddleAI.position.x/30 )//*amount;
		paddleAI.rotation.y = ( Math.PI/2+paddleAI.position.x/3 );

		if (paddleAI.rotation.y < 0) {
			paddleAI.rotation.y = 0;
		}
		if (paddleAI.rotation.y > Math.PI) {
			paddleAI.rotation.y = Math.PI;
		}

	}

	camera.lookAt(cameraTarget);

	TWEEN.update();

	if ( has_gl ) webglRenderer.render( scene, camera );

}
