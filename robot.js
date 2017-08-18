// takes a direction as a char (N, S, E, W) and returns the char representing that direction turned 90deg anticlockwise
function leftTurn(direction){
  
  if(direction === "N"){
    return "W";
  }
  else if(direction === "E"){
    return "N";
  }
  else if(direction === "S"){
    return "E";
  }
  else if(direction === "W"){
    return "S";
  }
  else {
    console.log("invalid input");
    return 1;
  }
}

// takes a direction as a char (N, S, E, W) and returns the char representing that direction turned 90deg clockwise
function rightTurn(direction){
  
  if(direction === "N"){
    return "E";
  }
  else if(direction === "E"){
    return "S";
  }
  else if(direction === "S"){
    return "W";
  }
  else if(direction === "W"){
    return "N";
  }
  else {
    console.log("invalid input");
    return 1;
  }
}

// checks an array is a set of 2 positive integers returning 0 if true and 1 if false
function coordinateCheck(array){
  //checks 2 coordinates
  if (array.length != 2){
    return 1;
  }
  // checks positive integers
  for (var i=0; i<2; i++){
    if (typeof array[i] != 'number' || array[i] < 0 || array[i]%1 != 0){
      return 1; 
    }
  }
  return 0;
}

// takes a set of coordinates as an array and a direction as a char (N, S, E, W) and returns the coordinates resulting from a move of 1 in that direction
function move(coordinates, direction){
  
  var newCoordinates = coordinates;
  
  // checks coordinates valid
  if (coordinateCheck(coordinates) === 1){
    console.log("invalid input");
    return 1;
  }

  // edits coordinate depending on direction pointed
  if(direction === "N"){
    newCoordinates[1] ++;
  }
  else if(direction === "E"){
    newCoordinates[0] ++;
  }
  else if(direction === "S"){
    newCoordinates[1] --;
  }
  else if(direction === "W"){
    newCoordinates[0] --;
  }
  else {
    console.log("invalid input");
    return 1;
  }
  
  return newCoordinates;
}

/* 
input - gridSize (array of x and y coordinates for map limit) and a robotInfo value with the following attributes:
.coordinates - array of x and y coordinates of starting position
.direction - character stating direction pointed (N, S, E, W)
.instructions - string of letters outlining the directions: M = move, L = left, R = right

returns - either a variable with the following attributes:
.coordinates - array of x and y coordinates of finishing position
.direction - character stating direction pointed (N, S, E, W)
or 1 - an error
*/
function instructRobot(gridSize, robotInfo){
  
  //checks gridSize
  if (coordinateCheck(gridSize) === 1){
    console.log("invalid gridSize input");
    return 1;
  }

  //checks coordinates
  if (coordinateCheck(robotInfo.coordinates) === 1){
    console.log("invalid coordinates input");
    return 1;
  }

  // checks direction
  if (robotInfo.direction != "N" && robotInfo.direction != "E" && robotInfo.direction != "S" && robotInfo.direction != "W"){
    console.log("invalid direction input");
    return 1;
  }

  // sets position
  var position = {
    coordinates: robotInfo.coordinates,
    direction: robotInfo.direction
  };

  // sets variable for instructions
  var instructions = robotInfo.instructions;

  // iterates through instructions string, changing 'position' as necessary
  for(var i = 0; i < instructions.length; i++){
    if(instructions[i] === "L"){
      position.direction = leftTurn(position.direction);
    }
    else if(instructions[i] === "R"){
      position.direction = rightTurn(position.direction);
    }
    else if(instructions[i] === "M"){
      position.coordinates = move(position.coordinates, position.direction);
    }
    else{
      console.log("invalid move");
      return 1;
    }
    if(position.coordinates[0] < 0 || position.coordinates[1] < 0 || 
      position.coordinates[0] > gridSize[0] || position.coordinates[1] > gridSize[1]){

      console.log("out of range");
      return 1;
    }
  }
  
  return position; 
}

// MAIN PROGRAMME 
var gridSize = [parseInt(process.argv[2]), parseInt(process.argv[3])];
var counter = 4;

// loops through every robot - each consisting of 4 arguments
while(process.argv[counter + 3] != undefined){

  var currentRobot = {
    coordinates: [parseInt(process.argv[counter]), parseInt(process.argv[counter + 1])],
    direction: process.argv[counter + 2],
    instructions: process.argv[counter + 3]
  };

  finalPosition = instructRobot(gridSize, currentRobot);

  console.log(finalPosition.coordinates[0], finalPosition.coordinates[1], finalPosition.direction);
  
  counter += 4;
}

// export function for testing
module.exports = {
  leftTurn,
  rightTurn,
  coordinateCheck,
  move,
  instructRobot
};
