function dofirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d')
    var g = canvas.createLinearGradient(0,0,950,950)

    g.addColorStop(.0,"rgb(0,95,17)");
  g.addColorstop(1,"rgb(5,20,90)");
    Canvas.fillstyle=g;
    Canvas.fillRect(0,0,950,950)

}


window.addEventListiner("load", doFirst, false)

