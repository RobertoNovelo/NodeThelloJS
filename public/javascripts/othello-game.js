var othelloBoard = null;
var othelloAI = null;
var player1 = null;
var player2 = null;
/*const*/ var AI = "AI";
/*const*/ var USER = "USER";
/*const*/ var BLACK = "black";
/*const*/ var WHITE = "white";
/*const*/ var EMPTY = "empty";
/*const*/ var USERMOVES = "user-moves";


$(function()
{

	$(".user-moves").on('click', function()
	{
	});

});

$(document).ready(function() 
{
	othelloBoard = new OthelloBoard();
	othelloBoard.setBoard(othelloBoard.getBoardFromHtml('board'));
	startGame();
	
});

function startGame()
{
	player1 = new Player(AI,BLACK);
	player2 = new Player(AI,WHITE);

	othelloAI = new OthelloAI();

	move(player1,player2);
}

function move(playerMoving,playerWaiting)
{
	if(AI == playerMoving.intel)
	{
		othelloAI.setNextMove(othelloBoard,playerMoving.color);
		
		if(AI == playerWaiting.intel)
		{
			setTimeout(function()
			{
				move(playerWaiting,playerMoving);
			},1000);
		}
		else
		{
			othelloAI.setUserPossibleMoves(othelloBoard,playerWaiting.color);
		}
	}
}

function Player(userIntel, userColor)
{
	this.intel = userIntel;
	this.color = userColor;

}






