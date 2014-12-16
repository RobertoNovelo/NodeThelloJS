var nodeBoard = [];

function OthelloAI () {
    
    var that = this;
    var aiDepth = 1;
    this.depth = 0;
    var aiColor = "black";
    var initialized = false;
	var aiPossibleMoves = [];
	var pluginAIIntel = null;
	var turnCount = 0;
	var yCount = 9;
	var xCount = 9;
    
    function findAIAvailableMoves(board,color,alpha,beta)
    {
	   	var possibleMoves = null;
	   	nodeBoard  = board.slice();
	   	var currentBoard = nodeBoard;
	   	that.depth++;
	   	var nodeAlpha = alpha;
	   	var nodeBeta = beta;
	   	var nodeRatings = [];
	   	var selectedX = 0;
	   	var selectedY = 0;
	   	var selectedBoard = [];
	   	var moveAvailableInNode = false;
	   	var possibleMoves = new PossibleMovesResponse(currentBoard.slice(),0,false);
	    var possibleMovesRes = new PossibleMovesResponse([],0,false);

	    console.log("findAIAvailableMoves");

    	for(var y=1; y<yCount; y++)
    	{	
	    	for(var x=1; x<xCount; x++)
	    	{
	    		//Find possible moves and count edible pieces.
	    		if ("empty" == currentBoard[y][x])
	    		{
	    			possibleMoves = new PossibleMovesResponse(currentBoard.slice(),0,false);
	    			
	    			possibleMoves.board = clone(board);

	    			possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{

		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findLeftDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}
		    		
		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findRightDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpLeftDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findUpRightDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownLeftDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}

		    		possibleMovesRes = new PossibleMovesResponse([],0,false);
		    		possibleMovesRes = findDownRightDir(possibleMovesRes,clone(board),x,y,color,0,false);

		    		if(possibleMovesRes.available)
		    		{
		    			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
		    			possibleMoves.available = true;
		    			possibleMoves.pieces += possibleMovesRes.pieces;
		    		}

		    		if(possibleMoves.available)
		    		{

		    			console.log(x+","+y);
		    			console.log("depth:" + that.depth);

		    			moveAvailableInNode = true;
		    			//Depth has been reached.
		    			if(that.depth==aiDepth)
		    			{
		    				//If search is in max node
		    				if(1==(that.depth%2))
		    				{
		    					var rating;
		    				
			    				rating = pluginAIIntel.rateMove(x,y,possibleMoves.board,possibleMoves.pieces,that.depth,aiColor,color);

			    				if(false == nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
			    				else if(rating>nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
		    				}
		    				//If search is in min node
		    				else
		    				{
		    					var rating;
		    				
			    				rating = pluginAIIntel.rateMove(x,y,possibleMoves.board,possibleMoves.pieces,that.depth,aiColor,color);

			    				if(false == nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta<nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
			    				else if(rating<nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
		    				}
		    			}
		    			else
		    			{

		    				var nextColor;
		    				var nodeValue;

		    				if("black"==color)
		    				{
		    					nextColor = "white";
		    				}
		    				else
		    				{
		    					nextColor = "black";
		    				}

		    				//If search is in max node
		    				if(1==(that.depth%2))
		    				{
		    					var rating;
		    				
			    				rating = findAIAvailableMoves(clone(possibleMoves.board), nextColor, nodeAlpha, nodeBeta);

			    				if(false == nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
			    				else if(rating>nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
		    				}
		    				//If search is in min node
		    				else
		    				{
		    					var rating;
		    				
			    				rating = findAIAvailableMoves(clone(possibleMoves.board), nextColor, nodeAlpha, nodeBeta);

			    				if(false == nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta<nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
			    				else if(rating<nodeBeta)
			    				{
			    					nodeBeta = rating;
			    					selectedX = x;
			    					selectedY = y;
			    					selectedBoard = clone(possibleMoves.board);

			    					if(false != nodeAlpha)
			    					{
					    				if(nodeBeta>nodeAlpha)
					    				{
					    					return nodeBeta;
					    				}
			    					}
			    				}
		    				}
		    			}
		    		}
		    	}
	    	}
    	}

    	if(moveAvailableInNode)
    	{
    		if(1 == that.depth)
    		{
	   			that.depth = 0;
    			othelloBoard.setBoardInHtml("board",selectedBoard);
    		}
    		else
    		{

	   			that.depth--;
    			return nodeBeta;
    		}
    	}

    }

    function joinDisksToBoard(gameBoard, newBoard)
    {

  		var gBoard =  clone(gameBoard);
  		var nBoard =  newBoard.slice();

    	for(var y=1; y<yCount; y++)
    	{
    		if(null != nBoard[y])
	    	{
		    	for(var x=1; x<xCount; x++)
		    	{
		    		if(null != nBoard[y][x])
		    		{
		    			if(null == gBoard[y])
		    			{
		    				gBoard[y] = [];
		    			}

		    			gBoard[y][x] = nBoard[y][x];
		    		}
		    	}
		    }
	    }

	    return gBoard;
    }

    function clone(obj) 
    {
	    return JSON.parse(JSON.stringify(obj))
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
	    		if(("empty" == boardArr[y][x]))
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
    	if(1<y)
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
    	if((yCount-1)>y)
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
    	if(1<x)
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
    	if((xCount-1)>x)
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
    	if((1<y) && (1<x))//disk can jump to at least x 1, y-1
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
    	if((1<y) && ((xCount-1)>x))//disk can jump to at least xCount-1, y-1
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
    	if(((yCount-1)>y) && (1<x))//disk can jump to at least x 1, y-1
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
    	if(((yCount-1)>y) && ((xCount-1)>x))//disk can jump to at least x 1, y-1
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
    		if(newBoard[y] != null)
	    	{
		    	for(var x=1; x<xCount; x++)
		    	{
		    		if(newBoard[y][x] != null)
		    		{
		    			currentBoard[y][x] = newBoard[y][x];
		    		}
		    	}
		    }
	    }

	    return currentBoard;
    }

	function setUserPosMoves(possibleMoves)
	{
		var mCount = possibleMoves.length;
		var newBoard = [];

    	for(var m=0; m<mCount; m++)
    	{
    		// console.log(possibleMoves[m]);

			othelloBoard.setBoardInHtml("board",createNewBoard(possibleMoves[m].board,othelloBoard.getBoardFromHtml('board')));
    	}

    	return newBoard;
	}

	this.setNextMove = function(othelloBoard,color)
	{
		if(othelloBoard instanceof OthelloBoard)
		{
			othelloBoard.getBoardFromHtml('board');
			findAIAvailableMoves(othelloBoard.getBoard(), color, 0,0);
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
			findUserPossibleMoves(othelloBoard.getBoardFromHtml('board'), color);

			// console.log(aiPossibleMoves.getPossibleMovesArr().length);

			if(0<aiPossibleMoves.getPossibleMovesArr().length)
			{
				setUserPosMoves(aiPossibleMoves.getPossibleMovesArr());
				aiPossibleMoves.clearPossibleMoves();
			}
		}
		else
		{
			return false;
		}
	};

    this.setUserDisks = function(x,y,color,userboardArr)
    {
    	var movesAgainstAI = true;
    	var possibleMoves = new PossibleMovesResponse(userboardArr.slice(),0,false);
		var possibleMovesRes = new PossibleMovesResponse([],0,false);
		turnCount++;
	   	that.depth = 0;
			
		possibleMovesRes = findUpDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}
		}
		
		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findDownDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}
		}
		
		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findLeftDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}

		}
		
		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findRightDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}
		}

		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findUpLeftDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}

		}

		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findUpRightDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}
		}

		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findDownLeftDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}

		}

		possibleMovesRes = new PossibleMovesResponse([],0,false);
		possibleMovesRes = findDownRightDir(possibleMovesRes,userboardArr.slice(),x,y,color,0,false);

		if(possibleMovesRes.available)
		{
			possibleMoves.board = joinDisksToBoard(possibleMoves.board,possibleMovesRes.board);
			possibleMoves.available = true;
			if(movesAgainstAI)
			{
				possibleMoves.pieces -= possibleMovesRes.pieces;
			}
			else
			{
				possibleMoves.pieces += possibleMovesRes.pieces;
			}
		}


		othelloBoard.setBoardInHtml("board",possibleMoves.board);
    }

    this.setPluginAIIntel = function(othelloPluginAI)
    {
    	if((othelloPluginAI instanceof OthelloPluginAINovelo)|| (othelloPluginAI instanceof OthelloPluginAIRey))
		{
			pluginAIIntel = othelloPluginAI;
			return true;
		}
		else
		{
			return false;
		}
    }

    this.setAIColor = function(color)
    {
    	aiColor = color;
    }
}

function PossibleMovesResponse(boardArr, piecesCount, moveAvailable)
{
	this.board = boardArr.slice();
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
			return true;
		}
		else
		{
			return false;
		}
	};

	this.getPossibleMovesArr = function()
	{
		return PossibleMovesArr;
	};

	this.clearPossibleMoves = function()
	{
		PossibleMovesArr = []
	};
}








