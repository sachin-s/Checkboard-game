player1 = prompt('Enter player1 name(your color will be red): ');
player2 = prompt('Enter player2 name(your color will be blue): ');
var currentPlayer = 1;
var exit = 0;
player1Color = 'red';
player2Color = 'blue';


var colNum = 0;
var rowNum = 0;


$('td').click(function(){
    colNum = $(this).parent().children().index($(this));
    rowNum = $(this).parent().parent().children().index($(this).parent());
    //console.log('rowNum : '+rowNum+' colNum : '+colNum);

    if(currentPlayer===1)
    {
        $('#message').text(player1+' turn to play(red color)');
        currentPlayer *=-1;
        $('#checkboard').children().find('tr').eq(rowNum).find('td').eq(colNum).find('button').css('background-color',player1Color);
    }else{
        $('#message').text(player2+' turn to play(blue color)');
        currentPlayer *=-1;
        $('#checkboard').children().find('tr').eq(rowNum).find('td').eq(colNum).find('button').css('background-color',player2Color);
    }
});
$('#quitButton').click(function(){
    exit=1;
});