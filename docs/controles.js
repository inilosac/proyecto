var Controles=function()
{
    var cameraContainer = new THREE.Object3D();
    cameraContainer.add(camera);
    scene.add(cameraContainer);
    document.addEventListener("mousemove", function(event)
    {myFunction(event);});
    var xa=0;
    var ya=0;
    var za=0;
    function myFunction(e)
    {
        var x = e.clientX;
        var y = e.clientY;
        var z = e.clientY;
        var dx = x-xa;
        var dy = y-ya;
        var dz = z-za;
        if(x<window.innerWidth/4)
        {
            cameraContainer.position.x+=3.5;
        }else if (x>(window.innerWidth/4)*3) {
            cameraContainer.position.x-=3.5;
        }
        if(z<window.innerHeight/4)
        {
            cameraContainer.position.z+=3.5;
        }else if (z>(window.innerHeight/4)*3) {
            cameraContainer.position.z-=3.5;
        }
        xa=x;
        ya=y;
        za=z;
    }

    var ctrls = new THREE.DeviceOrientationControls(camera);
    
    this.update=function()
    {
        ctrls.update();
        // if (xa<window.innerWidth*0.1) {
        //     cameraContainer.position.x+=1.5;
        // }
        // if (xa>10*(window.innerWidth*0.1)) {
        //     cameraContainer.position.x-=1.5;
        // }
        // if (ya<100) {
        //     cameraContainer.position.y+=3.5;
        // }
    }
}