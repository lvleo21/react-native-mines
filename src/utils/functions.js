
/*
! Array Fill
! Array(<Quantidade de elementos>).fill(<Com o que vai preencher>)
*/

const createBord = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row, column, 
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0;

    while (minesPlanted < minesAmount) {
        const randomRow = parseInt(Math.random() * rows, 10)
        const randomColumn = parseInt(Math.random() * columns, 10)

        if (!board[randomRow][randomColumn].mined){
            board[randomRow][randomColumn].mined = true;
            minesPlanted++;
        }   
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBord(rows, columns);
    spreadMines(board, minesAmount)
    return board;
} 


export {createMinedBoard};