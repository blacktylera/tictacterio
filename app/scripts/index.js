'use strict';

function hello () {
  return "world";
}


var fb = new Firebase('https//tictacterio.firebaseio.com/'),
    possibilities;


//FUNCTION THAT CHECK IF THE DESIRED ELEMENT SPACE IS AVAILABLE //
     //call it  spaceOccupyCheck//
     function spaceOccupyCheck() {
         //alert player if a 'data-move type thing exists. PICK ANOTHER SPACE'
         if("there's no attribute that's been attached") {
           proceed with the  move, else, alert!!
         }

     }

//FUNCTION THAT DISPLAYS THE ICON ON THE SELECTED ELEMENT//
     //call it  playerMove //
     function playerMove($this, move) {
        $this.attr('data-move', move);
        $this.addClass(move);
     }
     
//FUNCTION THAT ADDS THE ATTRIBUTE THAT TELLS TWO THINGS: the player occupying space, and which space has been occupied//
     //call it 

//FUNCTION THAT CHECKS FOR A WINNER//
     //call it didYouWin

//


//ON CLICK,
$('*td grid thing*').on('click', function () {

  console.log('terio is coming!');
  if (spaceOccupyCheck($this)) {
    playerMove($(this), 'move-x');
    count++;
    didYouWin();
  }

});

//if you win, show a gif//


//adds that the player has taken the turn
//gives the turn to the other player
var possibilities = [
                     [ 1, 2, 3 ],
                     [ 4, 5, 6 ],
                     [ 7, 8, 9 ],
                     [ 1, 4, 7 ],
                     [ 2, 5, 8 ],
                     [ 1, 5, 9 ],
                     [ 7, 5, 3 ]
                    ];

