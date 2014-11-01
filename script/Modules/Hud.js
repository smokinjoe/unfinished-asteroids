app.game.hud = {

  render: function(delta) {

    var scoreConfig, scoreTextConfig,
        player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
  
    scoreTextConfig = {
      align: 'left',
      body: 'Score: ' + player.score,
      x: 15,
      y: 65
    };
    scoreConfig = {
      bgColor: '#fff',
      font: '32px Arial',
      text: scoreTextConfig
    };
    this.renderScore(scoreConfig);
    
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },
  
  renderScore: function(config) {
    app.layer
        .fillStyle(config.bgColor)
        .font(config.font)
        .textAlign(config.text.align)
        .fillText(config.text.body, config.text.x, config.text.y);
  }

};