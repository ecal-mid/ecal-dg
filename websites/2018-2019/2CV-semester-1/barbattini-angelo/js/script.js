var dollar = 100;
var handNumber = 100;

function closeWindow() {
  if (dollar <= 0) {
    closeEndGameWindow();
  } else {
    dollar -= 1;
    updateEndGame();
  }
}

let openEndGameWindow = () => {
  window.open('./end.html')
}

let closeEndGameWindow = () => {
  window.close();
}

let updateEndGame = () => {
  var displayLife = document.getElementById("money");
  displayLife.innerHTML = dollar + "$";
}


$(document).ready(function () {
  move();
  // $('div[name=animate]').each(function () {
  //   animateDiv($(this));
  // });
  hideNextPanelHack();
  hidePanelText();
});

function move() {
  $('.move').on('click', function () {
    var target = $(this).attr('data-target');
    // console.log(1);
    $(target).addClass('off');
  });
}

function makeNewPosition(image) {
  // Get viewport dimensions (remove the dimension of the div)
  var gameViewport = $(image).closest('.grade__game');
  var height = gameViewport.height();
  var width = gameViewport.width();

  let padding = 0;

  var newHeight = Math.floor(Math.random() * (height - padding + 1) + padding / 2);
  var newWidth = Math.floor(Math.random() * (width - padding + 1));

  return [newHeight, newWidth];
}

function animateDiv(c) {
  var newPosition = makeNewPosition(c);
  $(c).animate({
      top: newPosition[0],
      left: newPosition[10]
    },
    3000,
    function () {
      animateDiv(c);
    }
  );
}
// function makeNewPosition() {
//   // Get viewport dimensions (remove the dimension of the div)
//   var gameViewport = $('.grade__game');
//   var height = gameViewport.height();
//   var width = gameViewport.width();

//   let padding = 100;

//   var newHeight = Math.floor(Math.random() * (height - padding + 1) + padding);
//   var newWidth = Math.floor(Math.random() * (width - padding + 1) + padding);

//   return [newHeight, newWidth];
// }

// function animateDiv(c) {
//   var newPosition = makeNewPosition();
//   $(c).animate({
//       top: newPosition[0],
//       left: newPosition[10]
//     }, 3000,
//     function () {
//       animateDiv(c);
//     });
// };

// var card = document.querySelector('.card');
// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');
// });

function hideNextPanelHack() {
  $('.niveaux').on('click', function () {
    $(this).closest('.panel').addClass('off');
  });
}

function hidePanelText() {
  $('.panel__text').on('click', function () {
    $(this).addClass('off');
  });
}



// hands
paper.install(window);
window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var left_hand = new Image();
  left_hand.src = 'http://projects.moritzklack.com/img/m-o-e/left_hand.png';
  var right_hand = new Image();
  right_hand.src = 'http://projects.moritzklack.com/img/m-o-e/right_hand.png';
  var money;
  var moneySign = document.getElementById('money');
  var handPosition;
  var MoneyPosition;
  var xMatch = false;
  var yMatch = false;
  var rayTouch = 20;

  Hand = Raster;
  Hand.prototype.velocity = new Point(0, 0);
  Hand.prototype.acceleration = new Point(0, 0);
  Hand.prototype.mass;
  Hand.prototype.limit;
  Hand.prototype.angle = 0;



  Hand.prototype.applyPowerOfMoney = function (money_power) {
    // var money_power = new Point(money_power.x / this.mass, money_power.y / this.mass);
    var money_power = new Point(money_power.x / this.mass, money_power.y / this.mass);
    this.acceleration = this.acceleration.add(money_power);
    // this.position.x = window.innerWidth;
    // this.position.y = window.innerHeight;
  };

  Hand.prototype.update = function (money, delta) {
    this.velocity = this.velocity.add(this.acceleration);
    if (magnitude(this.velocity) > this.limit) {
      this.velocity = this.velocity.normalize();
      this.velocity = this.velocity.multiply(this.limit);
    }
    this.position = this.position.add(this.velocity);
    this.position = this.position.add(new Point(random(0.2, 1), random(0.2, 1)));

    handPosition = this.position;


    this.acceleration = this.acceleration.multiply(0);
    this.image = this.position.x < money.x ? (this.image = left_hand) : (this.image = right_hand);
    var deltaX = this.position.x - money.x;
    var deltaY = this.position.y - money.y;
    var angleDegrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    angleDegrees = this.position.x < money.x ? angleDegrees - 180 : angleDegrees;
    this.rotate(-this.angle);
    this.angle = angleDegrees;
    this.rotate(this.angle);

    if ((Math.floor(handPosition.x) - rayTouch + "px") <= MoneyPosition.left & (Math.floor(handPosition.x) + rayTouch + "px") >= MoneyPosition.left) {

      xMatch = true;
    } else {
      xMatch = false;
    }

    if (((Math.floor(handPosition.y) - rayTouch + "px")) <= MoneyPosition.top & ((Math.floor(handPosition.y) + rayTouch + "px") >= MoneyPosition.top)) {
      // if ((Math.floor(handPosition.y) == MoneyPosition.top)) {
      // console.log("yMatch")
      yMatch = true;
    } else {
      yMatch = false;
    }

    if (xMatch & yMatch) {
      // console.log("everything matches");
      closeWindow();
    }


  };

  Money = Point;
  Money.prototype.mass = 40;

  Money.prototype.getItNow = function (hand) {
    var force = new Point(this.x, this.y);
    force = force.subtract(hand.position);
    var distance = magnitude(force);
    distance = scale(distance, 10, 20);
    force = force.normalize();
    var strength = 2 * this.mass * hand.mass / (distance * distance);
    force = force.multiply(strength);
    return force;
  };


  paper.setup(canvas);
  var money = new Money(canvas.width * 0.5, canvas.height * 0.5);

  document.onmousemove = function (e) {
    money.x = e.pageX;
    money.y = e.pageY;
    moneySign.style.top = money.y - 30 + 'px';
    moneySign.style.left = money.x - 5 + 'px';
    MoneyPosition = moneySign.style;

  };

  left_hand.onload = function () {
    for (var i = 0; i < handNumber; i++) { //hands quantity
      var hand = new Hand(left_hand);
      hand.position = new Point(Math.random() * canvas.width, Math.random() * canvas.height);
      hand.scale(random(0.3, 0.8));
      hand.limit = random(5, 6);
      hand.mass = random(10, 12);
    }
    view.onFrame = function (event) {
      var hands = project.activeLayer.children;
      for (var j = 0; j < hands.length; j++) {
        hands[j].update(money, event.delta);
        var money_power = money.getItNow(hands[j]);
        hands[j].applyPowerOfMoney(money_power);
      }
    };
  };

  random = function (a, b) {
    return Math.random() * (b - a) + a;
  };
  magnitude = function (vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  };
  scale = function (value, min, max) {
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    return value;
  };
};