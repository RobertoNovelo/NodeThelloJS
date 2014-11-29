
function OthelloBoard () {
    this.board = null;
    this.playerWhite = null;
    this.playerBlack = null;
}

OthelloBoard.prototype.setBoard = function(boardArr)
{
	if(boardArr.constructor == Array)
	{
		this.board = boardArr;
		return true;
	}
	else
	{
		return false;
	}
}