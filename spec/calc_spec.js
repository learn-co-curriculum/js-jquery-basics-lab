describe('jQuery Calculator', function() {

  beforeEach(function() {

    setFixtures('<body><h1>User Input Calculator</h1><div><label for="number1">Number 1</label><input type="text" id="number1"></div><div><label for="operation">Operation</label><input type="text" id="operation"></div><div><label for="number2">Number 2</label><input type="text" id="number2"></div><div><label>Result</label><button id="equals">=</button><h2 id="result">0</h2></div></body>');
  });

  it('#doMath applies click event to equals sign', function() {
    
    var equals = $('#equals')[0];
    var equalsClickEvent = $._data(equals, "events");
    var myKey = [];
    for (var key in equalsClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#validate returns "Sorry, that is not a valid operator" if operator is not valid', function() {
    //variables not defined in method
    var operator = "j";
    var num1 = 2;
    var num2 = 3;
    expect(validate()).toEqual("Sorry, that is not a valid operator");

  });

  it('#validate returns "Sorry, one of those is not a valid number!" if a number is not valid', function() {
      //variables not defined in method
      var num1 = 12;
      var num2 = 'kevin';
      var operator = '+';
      expect(validate()).toEqual("Sorry, one of those is not a valid number!");

  });


   it('#result returns the correct answer', function() {

      var num1 = 12;
      var num2 = 2;
      var operator = '+';

      expect(result()).toEqual(14);
  });




});
  