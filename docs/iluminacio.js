var Iluminacio=function(){
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
		hemiLight.color.setHSL( 0.6, 1, 0.6 );
		hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
		hemiLight.position.set( 0, 50, 0 );
        scene.add( hemiLight );
        
        var light = new THREE.PointLight(0xFDFFC4, 1, 600);
        light.position.set(0,300,0);
        light.castShadow=true;
        scene.add(light);
}