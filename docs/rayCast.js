var RayCast=function()
{
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2(0,0);

    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }
    window.addEventListener( 'mousemove', onMouseMove, false );
    var geometry3 = new THREE.BoxGeometry(20,20,20);
    var material3 = new THREE.MeshBasicMaterial( { color: 0xFFACAC } );
    var cubeLaser = new THREE.Mesh( geometry3, material3 );
    scene.add( cubeLaser );

    this.update=function()
    {
        raycaster.setFromCamera( mouse, camera );
        var intersects = raycaster.intersectObjects( scene.children, true);
        /* console.log(intersects[0]) */
            
        for (var i = 0; i < intersects.length; i++) {
            if (intersects[0].object.name=="sph") {
                cubeLaser.position.x=intersects[0].point.x
                cubeLaser.position.y=intersects[0].point.y
                cubeLaser.position.z=intersects[0].point.z
            }
        }
    }
}