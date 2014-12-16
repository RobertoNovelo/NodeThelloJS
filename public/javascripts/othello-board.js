function OthelloBoard () {
    
    var that = this;
    var board = [];

	this.setBoard = function(boardArr)
	{
		if(boardArr.constructor == Array)
		{
			board = boardArr.slice();
			return true;
		}
		else
		{
			return false;
		}
	};

	this.getBoard = function()
	{
		return board.slice();
	};

	this.getBoardFromHtml =	function(boardID)
	{

		$disks = $("#"+boardID+" div div");

		var count = $disks.length;
		var position = [];

		for(var i=0; i<count; i++)
		{
			position = $disks.eq(i).data("table-position").split("-");
			if(board[parseInt(position[0])] == null)
			{
				board[parseInt(position[0])] = [];
			}

			board[parseInt(position[0])][parseInt(position[1])] = $disks.eq(i).attr('class');
		}

		return board.slice();
	};

	this.setBoardInHtml = function (boardID,boardArr)
	{
		$disks = $("#"+boardID+" div div");
		
		var count = $disks.length;
		var position = [];

		for(var i=0; i<count; i++)
		{
			position = $disks.eq(i).data("table-position").split("-");

			if(null != boardArr[parseInt(position[0])]) 
			{
				if(null != boardArr[parseInt(position[0])][parseInt(position[1])])
				{
					$disks.eq(i).removeClass('black');
					$disks.eq(i).removeClass('white');
					$disks.eq(i).removeClass('empty');
					$disks.eq(i).removeClass('user-moves');

					$disks.eq(i).addClass(boardArr[parseInt(position[0])][parseInt(position[1])]);
				}
			}
		}

	};
}