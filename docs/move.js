var Move=function()
{
    var speed = 0.5;
    camera.position.z -= Math.cos(camera.rotation.y) * speed;
    camera.position.x -= Math.sin(camera.rotation.y) * speed;
}