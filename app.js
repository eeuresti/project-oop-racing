// Start the game!
$(document).ready(function() {
    game = new Game();
    game.init();
});



function Game() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.winner = null;
}

Game.prototype.init = function() {
    var _this = this;
    $(document).on('keypress', function(event) {
      if (event.which === 122)
        _this.player1.move(1);
      else if (event.which === 109)
        _this.player2.move(2);
  });
};

Game.prototype.reset = function() {
  $("#p1").css("margin-left", 0);
  $("#p2").css("margin-left", 0);
};

function Player(playerName) {
    this.playerName = playerName;

};

Player.prototype.move = function(me) {
    $('#p' + me).animate({
        'margin-left': '+=30px'
    }, 100);
        if (parseInt($('#p' + me).css('margin-left')) >= 780) {
            $(document).off();

            $("#p1").stop();
            $("#p2").stop();
            alert("WINNER " + (me === 1) ? "Player1" : "Player2" );
            setTimeout(function(){game.reset()}, 500);
        };

};



// A starter Track constructor.
function Track() {
    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
};
