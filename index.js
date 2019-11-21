player1 = prompt('Enter player1 name(your color will be red): ');
player2 = prompt('Enter player2 name(your color will be blue): ');
var currentPlayer = 1;
var exit = 0;
player1Color = 'red';
player2Color = 'blue';


var colNum = 0;
var rowNum = 0;
$('#message').text(player1+' turn to play(red color)');

function checkBottom(col)
{
    for(i=6;i>-1;i--)
    {
        if($('#checkboard').children().find('tr').eq(i).find('td').eq(col).find('button').css('background-color')==="rgb(221, 221, 221)")
        {
            return i;
        }
    }
}

$('td').click(function(){
    colNum = $(this).parent().children().index($(this));
    rowNum = $(this).parent().parent().children().index($(this).parent());
    //console.log('rowNum : '+rowNum+' colNum : '+colNum);

    if(currentPlayer===1)
    {
        currentPlayer *=-1;
        rowNum = checkBottom(colNum);
        console.log("rowNum : "+rowNum);
        $('#checkboard').children().find('tr').eq(rowNum).find('td').eq(colNum).find('button').css('background-color',player1Color);
        $('#message').text(player2+' turn to play(blue color)');
    }else{
        currentPlayer *=-1;
        rowNum = checkBottom(colNum);
        console.log("rowNum : "+rowNum);
        $('#checkboard').children().find('tr').eq(rowNum).find('td').eq(colNum).find('button').css('background-color',player2Color);
        $('#message').text(player1+' turn to play(red color)');
    }
});
$('#quitButton').click(function(){
    exit=1;
});