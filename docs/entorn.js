var Entorn=function(){
    scene.background = new THREE.CubeTextureLoader()
				.setPath( 'textures/mway/' )
				.load( [ 'dark-s_bk.jpg', 'dark-s_ft.jpg', 'dark-s_up.jpg', 'dark-s_dn.jpg', 'dark-s_lf.jpg', 'dark-s_rt.jpg' ] );
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: scene.background } );

    // var pisoo = new THREE.BoxGeometry(1000,50,300);
    // var material4 = new THREE.MeshPhongMaterial( { color: 0xE0FCE5 } );
    // var texture = new THREE.TextureLoader().load('textures/marble.jpg');
    // var texturenormal = new THREE.TextureLoader().load('textures/normal1.jpg');
    // var materialp = new THREE.MeshPhysicalMaterial( {
    //     color: 0xE0FCE5,
    //     metalness: 0,
    //     roughness: 0,
    //     envMap: scene.background,
    //     envMapIntensity: 8,
    //     depthWrite: false,
    //     transmission: 1,
    //     opacity: 1,
    //     //emissiveMap:texture,
    //     //emissive:0xffffff,
    //     normalMap:texturenormal,
    // } );
    var loader = new THREE.FBXLoader();
	loader.load( 'models/city.fbx', function ( object ) {
		
        scene.add( object );
    } );

    // var piso = new THREE.Mesh( pisoo, materialp );
    // piso.receiveShadow = true;
    // piso.name="piso";
    // scene.add( piso );
    // piso.position.y=-25;
}