'use strict';
var expect = require('chai').expect;
var robot = require('./robot.js');

// test robot file exists
describe('robot', function(){
  it('should exist', function(){
    expect(robot).to.not.be.undefined;
  });
});

// leftTurn function
describe('leftTurn', function(){
  it('N to W', function(){
    expect(robot.leftTurn("N")).to.eql("W"); 
  });
  it('E to N', function(){
    expect(robot.leftTurn("E")).to.eql("N"); 
  });
  it('S to E', function(){
    expect(robot.leftTurn("S")).to.eql("E"); 
  });
  it('W to S', function(){
    expect(robot.leftTurn("W")).to.eql("S"); 
  });
  it('L to return 1', function(){
    expect(robot.leftTurn("L")).to.eql(1);
  });
});

// rightTurn function
describe('rightTurn', function(){
  it('N to E', function(){
    expect(robot.rightTurn("N")).to.eql("E"); 
  });
  it('E to S', function(){
    expect(robot.rightTurn("E")).to.eql("S"); 
  });
  it('S to W', function(){
    expect(robot.rightTurn("S")).to.eql("W"); 
  });
  it('W to N', function(){
    expect(robot.rightTurn("W")).to.eql("N"); 
  });
  it('L to return 1', function(){
    expect(robot.rightTurn("L")).to.eql(1);
  });
});

// coordinate check function
describe('coordinateCheck', function(){
  it('[1,1] to 0', function(){
    expect(robot.coordinateCheck([1,1])).to.eql(0);
  });
    it('[0,0] to 0', function(){
    expect(robot.coordinateCheck([0,0])).to.eql(0);
  });
  it('[-1,1] to 1', function(){
    expect(robot.coordinateCheck([-1,1])).to.eql(1);
  });
  it('[1,1.5] to 1', function(){
    expect(robot.coordinateCheck([1,1.5])).to.eql(1);
  })
});

// move function
describe('move', function(){
  it('[1,1], N to [1,2]', function(){
    expect(robot.move([1,1], "N")).to.eql([1,2]);
  });
  it('[1,1], E to [2,1]', function(){
    expect(robot.move([1,1], "E")).to.eql([2,1]);
  });
  it('[1,1], S to [1,0]', function(){
    expect(robot.move([1,1], "S")).to.eql([1,0]);
  });
  it('[1,1], W to [0,1]', function(){
    expect(robot.move([1,1], "W")).to.eql([0,1]);
  });
  it('[1,1], J to return 1', function(){
    expect(robot.move([1,1], "J")).to.eql(1);
  });
  it('[1,1,1], W to return 1', function(){
    expect(robot.move([1,1,1], "W")).to.eql(1);
  });
  it('[1,1.5], W to return 1', function(){
    expect(robot.move([1,1.5], "W")).to.eql(1);
  });
  it('[1,-1], W to return 1', function(){
    expect(robot.move([1,-1], "W")).to.eql(1);
  });
  it('[1,"1"], W to return 1', function(){
    expect(robot.move([1,"1"], "W")).to.eql(1);
  });
});

// main function
describe('instructRobot', function(){
  it('GS :[5,5], coords: [1,1], dir: N, instr: L ==> coords: [1,1], dir: W', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "N",
      instructions: "L" 
    };
    var expected = {
      coordinates: [1,1],
      direction: "W"
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(expected);
  });
  it('GS :[5,5], coords: [1,1], dir: N, instr: LMRM ==> coords: [0,2], dir: N', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "N",
      instructions: "LMRM" 
    };
    var expected = {
      coordinates: [0,2],
      direction: "N"
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(expected);
  });
  it('GS :[5,5], coords: [1,2], dir: N, instr: LMLMLMLMM ==> coords: [1,3], dir: N', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,2],
      direction: "N",
      instructions: "LMLMLMLMM" 
    };
    var expected = {
      coordinates: [1,3],
      direction: "N"
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(expected);
  });
  it('GS :[5,5], coords: [3,3], dir: E, instr: MMRMMRMRRM ==> coords: [5,1], dir: E', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [3,3],
      direction: "E",
      instructions: "MMRMMRMRRM" 
    };
    var expected = {
      coordinates: [5,1],
      direction: "E"
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(expected);
  });
  it('GS :[5,5], coords: [1,1], dir: N, instr: MMMMMM ==> return 1', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "N",
      instructions: "MMMMMM" 
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(1);
  });
  it('GS :[5,5], coords: [1,1], dir: S, instr: MMMMMM ==> return 1', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "S",
      instructions: "MMMMMM" 
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(1);
  });
  it('GS :[5,5,5], coords: [1,1], dir: S, instr: M ==> return 1', function() {
    var gridSize = [5,5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "S",
      instructions: "M" 
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(1);
  });
  it('GS :[5,5], coords: [1,1,1], dir: N, instr: M ==> return 1', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1,1],
      direction: "N",
      instructions: "M" 
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(1);
  });
  it('GS :[5,5], coords: [1,1], dir: K, instr: M ==> return 1', function() {
    var gridSize = [5,5];
    var robotInfo = {
      coordinates: [1,1],
      direction: "K",
      instructions: "M" 
    };
    var actual = robot.instructRobot(gridSize, robotInfo);
    expect(actual).to.eql(1);
  });
});
