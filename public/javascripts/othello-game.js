var othelloBoard = null;
var othelloAI1 = null;
var othelloAI2 = null;
var user = null;
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



});

$(document).ready(function() 
{
	othelloBoard = new OthelloBoard();
	othelloBoard.getBoardFromHtml('board');
	othelloBoard.setBoard(othelloBoard.getBoard());
	startGame();
	
});

function startGame()
{

	othelloAI1 = new OthelloAI();
	othelloAI2 = new OthelloAI();

	player1 = new Player(AI,BLACK,true,othelloAI1);
	player2 = new Player(USER,WHITE,false,othelloAI2);

	player1.playerAI.setPluginAIIntel(new OthelloPluginAINovelo);
	player2.playerAI.setPluginAIIntel(new OthelloPluginAINovelo);

	if(AI == player1.intel)
	{
		move(player1,player2,null,null);
	}
	else
	{
		player1.playerAI.setUserPossibleMoves(othelloBoard,BLACK);

		$(".user-moves").on('click', function()
		{
			$(".user-moves").addClass('empty');
			$(".empty").removeClass('user-moves');
			othelloBoard.setBoard(othelloBoard.getBoardFromHtml('board'));
			var pos = $(this).data("table-position").split("-");
			
			move(player1,player2,pos[1],pos[0]);
		});
	}
}

function move(playerMoving,playerWaiting,x,y)
{
	if(playerMoving.turn)
	{
		if(AI == playerMoving.intel)
		{
			playerMoving.playerAI.setNextMove(othelloBoard,playerMoving.color);
			playerMoving.turn = false;
			playerWaiting.turn = true;

			if(AI == playerWaiting.intel)
			{
				setTimeout(function()
				{
					move(playerWaiting,playerMoving,null,null);
				},200);
			}
			else
			{
				playerMoving.playerAI.setUserPossibleMoves(othelloBoard,playerWaiting.color);
			}
		}
		else
		{
			playerMoving.playerAI.setUserDisks(x,y,playerMoving.color,othelloBoard.getBoardFromHtml('board'));
			playerMoving.turn = false;
			playerWaiting.turn = true;

			setTimeout(function()
			{
				move(playerWaiting,playerMoving,null,null);
			},200);
		}

		$(".user-moves").on('click', function()
		{
			$(".user-moves").addClass('empty');
			$(".empty").removeClass('user-moves');
			othelloBoard.setBoard(othelloBoard.getBoardFromHtml('board'));
			var pos = $(this).data("table-position").split("-");
			
			move(player2,player1,pos[1],pos[0]);
		});
	}
}

function Player(playerIntel, playerColor, playerTurn, playerOthelloAI)
{
	this.intel = playerIntel;
	this.color = playerColor;
	this.turn = playerTurn;
	this.playerAI =  playerOthelloAI;

}






