
# Mars Rovers #
A squad of robotic rovers are to be landed by NASA on a rectangulare plateau on Mars. This must be navigated by the robots to send pictures back to earth.

A rover's position and location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading. The square directly North from (x, y) is (x, y+1).

## INPUT: ##
The first 2 inputs is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The rest of the input is information pertaining to the rovers that have been deployed. Each rover has 4 inputs. The first 3 give the rover's position, and the fourth is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

## OUTPUT ##
The output for each rover should be its final coordinates and heading.

## INPUT AND OUTPUT ##
Test Input: 5 5 1 2 N LMLMLMLMM 3 3 E MMRMMRMRRM

Expected Output:

1 3 N</br>
5 1 E

## Use ##
Run from command line using the following format: 

$ node robot.js X0 Y0 X1 Y1 dir1 instructions1 X2 Y2 dir2 instructions2

where:

* X0 = grid size X coordinate
* Y0 = grid size Y coordinate
* X1 = first robot starting X coordinate
* Y1 = first robot starting Y coordinate
* dir1 = direction pointed at beginning for first robot (N, S, E, W)
* instructions1 = string of instructions for robot movements consisting of L, R, M
* repeat X1 to instructions1 for any additional robots

e.g. 

$ node robot.js 5 5 1 2 N LMLMLMLMM 3 3 E MMRMMRMRRM 

Run test from command line as follows: 

$ mocha robot-spec.js

## Requirements ##

* node.js (written using v4.5.0)
* mocha (for testing - npm install mocha -g)
* chai (for testing - npm install chai)
