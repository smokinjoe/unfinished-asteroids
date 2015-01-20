ENGINE.Coin = function (args) {
  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);
};

ENGINE.Coin.prototype = {
  constructor: ENGINE.Coin,
  collidable: true,
  radius: 3,
  collision: function (object) {
    //var player = app.game.players[0];
    if (object instanceof ENGINE.Player) {
      object.score += 5;
      app.playSound('coin');
      this.collection.remove(this);
    }
  },
  
  step: function (delta) {

  },
  
  render: function (delta) {
    //app.layer.fillStyle("#ff0").fillCircle(this.x, this.y, this.radius);
    var lastTick = Date.now(),
        image = app.images.coins,
        duration = 1;
    
    setInterval(function loop() {
      var delta = (Date.now() - lastTick) / 1000,
          frame = 7 * (delta % duration / duration) | 0,
          sprite = [frame * 11, 1, 8, 8];
      app.layer.drawRegion(image, sprite, this.x, this.y, 1);
    }, 16);

    lastTick = Date.now();
  }
  
};