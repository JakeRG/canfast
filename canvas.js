window.onload=function() {
    var w3rcanvas=document.getElementById("Canvas");
    if (w3rcanvas.getContext) {
        var w3rcontext=w3rcanvas.getContext('2d');
        var w3rgradient=w3rcontext.createRadialGradient(300,300,0,300,300,300);
        // Adds a color stop to a gradient. A color stop is a position in the gradient where a color
        // change occurs. The offset must be between 0 and 1.
        w3rgradient.addColorStop("0","magenta");
        w3rgradient.addColorStop(".25","blue");
        w3rgradient.addColorStop(".50","green");
        w3rgradient.addColorStop(".75","yellow");
        w3rgradient.addColorStop("1.0","red");                
        w3rcontext.fillStyle=w3rgradient;
        w3rcontext.fillRect(0,0,400,400);
    } else {
    // canvas-unsupported code here
    }
}