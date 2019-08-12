const renderer = new Renderer()
const game = new GoldRush(5,5)
game.load()
renderer.renderBoard(game.matrix)
// renderer.renderScores(game.players)

const startGame= function(){
    board.createRandomCoins();
    renderer.renderBoard(board.matrix)
    renderer.renderScore({ player1: board.player1.score, player2: board.player2.score })
}

$(document).keypress(function (e) {

    if (e.which == 119) {
          game.movePlayer(1, "up")
    }

})
