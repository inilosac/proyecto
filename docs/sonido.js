var Sonido=function()
{
    var sound = new THREE.PositionalAudio( listener );

	var audioLoader = new THREE.AudioLoader();
		audioLoader.load( 'sounds/time.mp3', function( buffer ) {
			sound.setBuffer( buffer );
			sound.setRefDistance( 20 );
			sound.play();
        });
        var sphere1 = new THREE.SphereBufferGeometry( 50, 32, 16 );
	    var smaterial = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
	    var soundsphere = new THREE.Mesh( sphere1, smaterial );
		scene.add( soundsphere );
		soundsphere.name="sph";

		soundsphere.add( sound );
		soundsphere.position.z=310;
		soundsphere.position.x=-580;
		soundsphere.position.y=250;
            
}