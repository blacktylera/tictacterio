$(document).ready (function() {
    var turnCount=0;

    // $('#board').on('click', '.td', function(this){console.log(this)})

    $('#board').find('td').on('click', function() {
        if(!$(this).html()) {
            if (turnCount % 2 === 0){
                $(this).append('<img src="http://i.imgur.com/XeBK7pI.gif" height="100px" width="100px">');
                didYouWin('Terio 1');
                turnCount++;
            }else {
                $(this).append('<img src="https://38.media.tumblr.com/62583bc8883ed07b8e201219314b8773/tumblr_mu9v89AwEN1ssjkcoo1_400.gif" height="100px" width="100px">');
                turnCount++;
                didYouWin('Terio 2');

            }
        }
    });

    $(".newGame").click(function() {
        location.reload();
        turnCount = 0;
    });



    var fb = new Firebase('https//tictacterio.firebaseio.com/');


    function didYouWin(player){
    //top row check
        if ($('#board').find('#td1').append() !== null){
            if ($('#board').find('#td1').append() === $('#board').find('td#2').append()) {
                if ($('#board').find('#td1').append() === $('#td3').append()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
    //left column check
        if ($('#board').find('#td1').append() === $('#board').find('#td4').append()) {
            if ($('#board').find('#td1').append() === $('#td7').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    //left diagonal check
        if ($('#board').find('#td1').append() === $('#board').find('#td5').append()) {
            if ($('#board').find('#td1').append() === $('#td9').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    //middle column check
    if ($('#board').find('#td2').append() !== null){
        if ($('#board').find('#td2').append() === $('#board').find('#td5').append()) {
            if ($('#board').find('#td2').append() === $('#td8').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    }

    //right column check
    if ($('#board').find('#td3').append() !== null){
        if ($('#board').find('#td3').append() === $('#board').find('#td6').append()) {
            if ($('#board').find('#td3').append() === $('#td9').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    }
        //right diag check
        if ($('#board').find('#td3').append() === $('#board').find('#td5').append()) {
            if ($('#board').find('#td3').append() === $('#td7').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    }

    //middle row check

    if ($('#board').find('#td4').append() !== null){
        if ($('#board').find('#td4').append() === $('#board').find('#td5').append()) {
            if ($('#board').find('#td4').append() === $('#td6').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    }

    //bottom row check
    if ($('#board').find('#td7').append() !== null){
        if ($('#board').find('#td7').append() === $('#board').find('#td8').append()) {
            if ($('#board').find('#td7').append() === $('#td9').append()) {
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
            }
        }
    }

    $('#newGame').on('click',function(){
        $('.square').append('');
    });
});



// // //FUNCTION THAT CHECK IF THE DESIRED ELEMENT SPACE IS AVAILABLE //
// //      //call it  spaceOccupyCheck//
// //      function spaceOccupyCheck() {
// //          //alert player if a 'data-move type thing exists. PICK ANOTHER SPACE'
// //          if("there's no attribute that's been attached") {
// //            proceed with the  move, else, alert!!
// //          }

// // var possibilities = [
// //                      [ 1, 2, 3 ],
// //                      [ 4, 5, 6 ],
// //                      [ 7, 8, 9 ],
// //                      [ 1, 4, 7 ],
// //                      [ 2, 5, 8 ],
// //                      [ 1, 5, 9 ],
// //                      [ 7, 5, 3 ]
// //                     ];

