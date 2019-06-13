(function () {

  let findedAll = false;

  var canvas = document.querySelector('#canvas');
  console.log(canvas.clientWidth);
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(255, 71, 0)';
  ctx.strokeStyle = 'rgb(255, 71, 0)';
  ctx.lineWidth = 10;

  var lastX = null;
  var lastY = null;

  function draw() {
    requestAnimationFrame(draw);

    var x = $(window).scrollLeft() + window.innerWidth * 0.5;
    var y = $(window).scrollTop() + window.innerHeight * 0.5;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    if (lastX && lastY) {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }

    lastX = x;
    lastY = y;

    if(!findedAll){
      findCircle();
    }
  }

  function findCircle() {
    let allCircle = $(".st1");

    if(allCircle.size() <= 0) {
      arret();

      findedAll = true;
      return;
    }

    allCircle.each(function(e) {
      let xPoint = $(window).scrollLeft() + window.innerWidth * 0.5;
      let yPoint = $(window).scrollTop() + window.innerHeight * 0.5;

      let circleDOM = document.getElementById($(this).attr("id"));

      let xCircle = $(this).position().left;
      let yCircle = $(this).position().top;
      let widthCircle = circleDOM.getBoundingClientRect().width;
      let heightCircle = circleDOM.getBoundingClientRect().height;

      if(xCircle < xPoint && (xCircle + widthCircle) > xPoint && yCircle < yPoint && (yCircle + heightCircle) > yPoint) {
        $(this).attr("class", "visited");
        $("#" + $(this).attr("id") + "minimap").attr("class", "visited");
      }

    });
  }

  draw();
})();
