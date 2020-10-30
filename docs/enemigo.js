var Enemigo=function()
{
	//alienflota
	var sprite = new THREE.TextureLoader().load( 'textures/alien1.gif' );
	var al1 = new THREE.SpriteMaterial( { map: sprite } );
	var alien1 = new THREE.Sprite( al1 );
	alien1.scale.set(200, 200, 1);
	scene.add( alien1 );
	alien1.position.x=-700;
	alien1.position.z=-300;
	alien1.position.y=200;

	var alien1 = new THREE.Sprite( al1 );
	alien1.scale.set(200, 200, 1);
	scene.add( alien1 );
	alien1.position.x=-200;
	alien1.position.z=-200;
	alien1.position.y=200;

	var alien1 = new THREE.Sprite( al1 );
	alien1.scale.set(200, 200, 1);
	scene.add( alien1 );
	alien1.position.x=-400;
	alien1.position.z=0;
	alien1.position.y=200;

	var alien1 = new THREE.Sprite( al1 );
	alien1.scale.set(200, 200, 1);
	scene.add( alien1 );
	alien1.position.x=-1200;
	alien1.position.z=-100;
	alien1.position.y=200;

	var alien1 = new THREE.Sprite( al1 );
	alien1.scale.set(200, 200, 1);
	scene.add( alien1 );
	alien1.position.x=50;
	alien1.position.z=-250;
	alien1.position.y=200;

	//aliensuelo
	var sprite2 = new THREE.TextureLoader().load( 'textures/alien2.png' );
	var al2 = new THREE.SpriteMaterial( { map: sprite2 } );
	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-500;
	alien2.position.z=-400;
	alien2.position.y=-48;

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-900;
	alien2.position.z=-430;
	alien2.position.y=-48;

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=0;
	alien2.position.z=-430;
	alien2.position.y=-48;
	alien2.name="lalien";

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-200;
	alien2.position.z=-300;
	alien2.position.y=-48;

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-350;
	alien2.position.z=-200;
	alien2.position.y=-48;

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-500;
	alien2.position.z=-80;
	alien2.position.y=-48;

	var alien2 = new THREE.Sprite( al2 );
	alien2.scale.set(200, 200, 1);
	scene.add( alien2 );
	alien2.position.x=-800;
	alien2.position.z=-300;
	alien2.position.y=-48;

	//ufo
	var loader2 = new THREE.FBXLoader();
	loader2.load( 'models/UFO.fbx', function ( object2 ) {
		object2.position.x=-500;
		object2.position.z=-400;
		//object2.scale.set(600, 600, 1);
		scene.add( object2 );
    } );
	
    // this.update=function() {
    //     v[0]+=a[0]
	// 	v[1]+=a[1]
	// 	v[2]+=a[2]
	// 	this.cube3.position.x += v[0];
	// 	this.cube3.position.y += v[1];
    //     this.cube3.position.z += v[2];
    //     this.cube3.position.y+=0.4;
    //     if(mixer) mixer.update(0.02);
	//}
	
}