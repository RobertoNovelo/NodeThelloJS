function OthelloPluginAINovelo()
{

	var boardValues = 
		[
		   [  5, -5,  1, -1, -1,  1, -5,  5 ],
           [ -5, -5,  1, -1, -1,  1, -5, -5 ],
           [  1,  1,  1, -1, -1,  1,  1,  1 ],
           [ -1, -1, -1,  0,  0, -1, -1, -1 ],
           [ -1, -1, -1,  0,  0, -1, -1, -1 ],
           [  1,  1,  1, -1, -1,  1,  1,  1 ],
           [ -5, -5,  1, -1, -1,  1, -5, -5 ],
           [  5, -5,  1, -1, -1,  1, -5,  5 ]
    	];

	this.rateMove = function(x,y,boardArr,piecesCount,depth,aiColor,color)
	{
		if(aiColor === color)
		{
			return piecesCount;
		}
		else
		{
			return -piecesCount
		}
	}

}

function OthelloPluginAIRey()
{

	var boardValues = 
		[
		   [  5, -5,  2, -1, -1,  1, -5,  5 ],
           [ -5, -5,  2, -1, -1,  1, -5, -5 ],
           [  1,  1,  0,  0,  0,  0,  1,  1 ],
           [ -1, -1,  0,  0,  0,  0, -1, -1 ],
           [ -1, -1,  0,  0,  0,  0, -1, -1 ],
           [  1,  1,  0,  0,  0,  0,  1,  1 ],
           [ -5, -5,  1, -1, -1,  1, -5, -5 ],
           [  5, -5,  1, -1, -1,  1, -5,  5 ]
    	];

	this.rateMove = function(x,y,boardArr,piecesCount,depth,aiColor,color)
	{
		return boardValues[(y-1)][(x-1)];
	}

}