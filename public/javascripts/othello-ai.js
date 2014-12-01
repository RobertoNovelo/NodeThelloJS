function OthelloAI () {
    
    var that = this;
    var initialized = false;
    var lookAhead = 1;
	var aiPossibleMoves = null;

    function findAvailableMoves(boardArr,color,movesAgainstAI)
    {
    	yCount = boardArr.length;
	   	var possibleMoves = false;
	   	aiPossibleMoves = new AIPossibleMoves();

    	for(var y=1; y<yCount; y++)
    	{
    		xCount = boardArr[y].length;
	    	for(var x=1; x<xCount; x++)
	    	{
	    		//Find possible moves and count edible pieces.
	    		if ("empty" == boardArr[y][x])
	    		{
	    			var possibleMoves = new PossibleMovesResponse([],0,false);
	    			var possibleMovesRes = new PossibleMovesResponse([],0,false);
		    			
		    		possibleMovesRes = findUpDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}
		    			console.log(x+","+y);
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}
		    			console.log(x+","+y);
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = possibleMoves.board.concat(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			if(movesAgainstAI)
		    			{
		    				possibleMoves.pieces -= possibleMovesRes.pieces;
		    			}
		    			else
		    			{
		    				possibleMoves.pieces += possibleMovesRes.pieces;
		    			}

		    			console.log(x+","+y);
		    		}

		    		if(possibleMoves.available)
		    		{
		    			aiPossibleMoves.addPossibleMove(possibleMoves);
		    		}
		    	}
	    	}
    	}
    }

    function findUserPossibleMoves(boardArr,color)
    {
    	yCount = boardArr.length;
	   	aiPossibleMoves = new AIPossibleMoves();

    	for(var y=1; y<yCount; y++)
    	{
    		xCount = boardArr[y].length;
	    	for(var x=1; x<xCount; x++)
	    	{
	    		//Find possible moves and count edible pieces.
	    		if ("empty" == boardArr[y][x])
	    		{
	    			var possibleMoves = new PossibleMovesResponse([],0,false);
	    			var possibleMovesRes = new PossibleMovesResponse([],0,false);
		    			
		    		possibleMovesRes = findUpDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownLeftDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownRightDir(possibleMovesRes,boardArr,x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.available = true;
		    		}

		    		if(possibleMoves.available)
		    		{
						possibleMoves.board[y] = [];
						possibleMoves.board[y][x] = "user-moves";
		    			aiPossibleMoves.addPossibleMove(possibleMoves);
		    		}
		    	}
	    	}
    	}
    }

    function findUpDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if(2<y)
    	{
    		y--;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
				if(response.board[y] == null)
				{
					response.board[y] = [];
				}

		    	response.board[(y+1)][x] = color;

		    	var next = findUpDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[(y)][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
		    	response.board[(y+1)][x] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findDownDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if((yCount-2)>y)
    	{
    		y++;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}
				if(response.board[(y)] == null)
				{
					response.board[(y)] = [];
				}

		    	response.board[(y-1)][x] = color;

		    	var next = findDownDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[(y)][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}

		    	response.board[(y-1)][x] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findLeftDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if(2<x)
    	{
    		x--;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[y] == null)
				{
    				response.board[y] = [];
    			}

		    	response.board[y][(x+1)] = color;

		    	var next = findLeftDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[y] == null)
				{
					response.board[y] = [];
				}
		    	response.board[y][(x+1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findRightDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if((xCount-2)>x)
    	{
    		x++;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[y] == null)
				{
    				response.board[y] = [];
    			}

		    	response.board[y][x-1] = color;

		    	var next = findRightDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[y] == null)
				{
					response.board[y] = [];
				}
		    	response.board[y][(x-1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findUpLeftDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if((2<y) && (2<x))//disk can jump to at least x 1, y-1
		{
    		y--;
    		x--;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
				if(response.board[y] == null)
				{
					response.board[y] = [];
				}

		    	response.board[(y+1)][(x+1)] = color;

		    	var next = findUpLeftDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
		    	response.board[(y+1)][(x+1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findUpRightDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if((2<y) && ((xCount-2)>x))//disk can jump to at least xCount-1, y-1
		{
    		y--;
    		x++;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
				if(response.board[y] == null)
				{
					response.board[y] = [];
				}

		    	response.board[(y+1)][(x-1)] = color;

		    	var next = findUpRightDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y+1)] == null)
				{
					response.board[(y+1)] = [];
				}
		    	response.board[(y+1)][(x-1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function findDownLeftDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if(((yCount-2)>y) && (2<x))//disk can jump to at least x 1, y-1
		{
    		y++;
    		x--;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}
				if(response.board[y] == null)
				{
					response.board[y] = [];
				}

		    	response.board[(y-1)][(x+1)] = color;

		    	var next = findDownLeftDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}
		    	response.board[(y-1)][(x+1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }


    function findDownRightDir(response,boardArr,x,y,color,rec,jumpsFoundBefore)
    {
    	if(((yCount-2)>y) && ((xCount-2)>x))//disk can jump to at least x 1, y-1
		{
    		y++;
    		x++;

    		if((boardArr[y][x]!=="empty") && (boardArr[y][x]!==color))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}
				if(response.board[y] == null)
				{
					response.board[y] = [];
				}

		    	response.board[(y-1)][(x-1)] = color;

		    	var next = findDownRightDir(response,boardArr,x,y,color,rec,true);

		    	if (next.available)
		    	{
		    		response.board[y][x] = color;
		    		response.pieces = next.pieces;
		    	}
		    }

		    if((boardArr[y][x]=="empty") && (jumpsFoundBefore))
		    {
		    	response.available = false;
		    }

		    if((boardArr[y][x]==color) && (jumpsFoundBefore))
		    {
    			rec++;

				if(response.board[(y-1)] == null)
				{
					response.board[(y-1)] = [];
				}
		    	response.board[(y-1)][(x-1)] = color;
		    	response.available = true;
		    	response.pieces = rec;
		    }
    	}
    	else
    	{
			response.available = false;
    	}

    	return response;
    }

    function selectMove(possibleMoves)
    {
    	var mCount = possibleMoves.length;
    	var highestMaterial = 0;
    	var selectedMove = 0;

    	for(var m=0; m<mCount-1; m++)
    	{
    		if(highestMaterial<possibleMoves[m].pieces)
    		{
    			highestMaterial = possibleMoves[m].pieces;
    			selectedMove = m;
    		}
    	}

    	return possibleMoves[m].board;
    }

    function createNewBoard(newBoard,currentBoard)
    {
    	for(var y=1; y<yCount; y++)
    	{
    		if(newBoard[y] == null)
    		{
    			newBoard[y] = [];
    		} 

	    	for(var x=1; x<xCount; x++)
	    	{
	    		if(newBoard[y][x] == null)
	    		{
	    			newBoard[y][x] = currentBoard[y][x];
	    		}
	    	}
	    }

	    return newBoard;
    }

	function setUserPosMoves(possibleMoves)
	{
		var mCount = possibleMoves.length;
		var newBoard = [];

    	for(var m=0; m<mCount; m++)
    	{
    		console.log(possibleMoves[m]);

			othelloBoard.setBoardInHtml("board",createNewBoard(possibleMoves[m].board,othelloBoard.getBoard()));
    	}

    	return newBoard;
	}

	this.setNextMove = function(othelloBoard,color)
	{
		if(othelloBoard instanceof OthelloBoard)
		{
			findAvailableMoves(othelloBoard.getBoard(), color, false);

			console.log(aiPossibleMoves.getPossibleMovesArr().length);

			if(0<aiPossibleMoves.getPossibleMovesArr().length)
			{
				othelloBoard.setBoardInHtml("board",createNewBoard(selectMove(aiPossibleMoves.getPossibleMovesArr()),othelloBoard.getBoard()));
			}
		}
		else
		{
			return false;
		}
	};

	this.setUserPossibleMoves = function(othelloBoard,color)
	{
		if(othelloBoard instanceof OthelloBoard)
		{
			findUserPossibleMoves(othelloBoard.getBoard(), color);

			console.log(aiPossibleMoves.getPossibleMovesArr().length);

			if(0<aiPossibleMoves.getPossibleMovesArr().length)
			{
				setUserPosMoves(aiPossibleMoves.getPossibleMovesArr());
			}
		}
		else
		{
			return false;
		}
	};
}

function PossibleMovesResponse(boardArr, piecesCount, moveAvailable)
{
    var that = this;
	this.board = boardArr;
	this.pieces = piecesCount;
	this.available = moveAvailable;
}

function AIPossibleMoves()
{
    var that = this;
	var PossibleMovesArr = [];

	this.addPossibleMove = function(possibleMove)
	{
		if(possibleMove instanceof PossibleMovesResponse)
		{
			PossibleMovesArr.push(possibleMove);
		}
	}

	this.getPossibleMovesArr = function()
	{
		return PossibleMovesArr;
	}
}








