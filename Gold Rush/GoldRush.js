
class GoldRush extends Matrix{
    constructor(rowNum,colNum){
     super()
     this.rowNum = rowNum-1
     this.colNum = colNum-1
     this.generateMatrix(rowNum, colNum)
 
     this.alter(0, 0, 1)
     this.alter(this.rowNum, this.colNum, 2)
 
     this.player1 = {
         score: 0
     }
 
     this.player2 = {
         score: 0
     }
     }
 
     movePlayer(num,direction){
         const location = this.findCoordinate(num)
         this.alter(location.x,location.y,".")
         const nextPosition = {row:location.x, col: location.y}
         if(direction==="down"){
            this.matrix[location.x+1][location.y]==='c'?this.player1.score+=10: null
            nextPosition.row++
         } else if (direction==="up"){
            this.matrix[location.x-1][location.y]==='c'?this.player1.score+=10: null
            nextPosition.row--
         } else if (direction==="left"){
            this.matrix[location.x][location.y-1]==='c'?this.player1.score+=10: null
            nextPosition.col--
         } else if (direction==="right"){
            this.matrix[location.x][location.y+1]==='c'?this.player1.score+=10: null
            nextPosition.col++
         }
         this.alter(nextPosition.row,nextPosition.col,num)
     }
 
     fillBoard(symbol){
         let coinsNumber = Math.floor(Math.random()*this.rowNum*this.colNum)
         for (let i=0; i<coinsNumber;i++){
             let row = Math.floor(Math.random()*this.rowNum)
             let column = Math.floor(Math.random()*this.colNum)
             if ((this.get(row, column) != 1) &&
                 (this.get(row, column) != 2) &&
                 (this.get(row, column) != "c") &&
                 (this.get(row, column) != "b")){
                     this.alter(row,column,symbol)
                 }
         }
     }
     createCoins(){
         this.fillBoard("c")
     }
     createBlocks(){
         this.fillBoard("b")
     }

     load() {
        this.players = [
            { row: 0, col: 0, coins: 0 },
            { row: this.rows - 1, col: this.cols - 1, coins: 0 }
        ]
        this.createCoins()
        this.createBlocks()
    }

  }
  
//  const board = new GoldRush(5,5)
 
//  board.createCoins()
//  board.print()
// //  board.createBlocks()
// //  board.print()
 
 