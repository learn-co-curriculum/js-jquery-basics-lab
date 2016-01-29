describe('jQuery Calculator', function() {

  beforeEach(function() {

    setFixtures('<body><h1>User Input Calculator</h1><div><label for="number1">Number 1</label><input type="text" id="number1"></div><div><label for="operation">Operation</label><input type="text" id="operation"></div><div><label for="number2">Number 2</label><input type="text" id="number2"></div><div><label>Result</label><button id="equals">=</button><h2 id="result">0</h2></div></body>');
  });

  it('#doMath applies click event to equals sign', function() {
    doMath();
    var equals = $('#equals')[0];
    var equalsClickEvent = $._data(equals, "events");
    var myKey = [];
    for (var key in equalsClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#validate returns "Sorry, that is not a valid operator" if operator is not valid', function() {

    expect(validate("j", 2, 3)).toEqual("Sorry, that is not a valid operator");

  });

  it('#validate returns "Sorry, one of those is not a valid number!" if a number is not valid', function() {
      expect(validate("+", 12, "kevin")).toEqual("Sorry, one of those is not a valid number!");

  });


   it('#result returns the correct answer', function() {

      expect(result('+', 12, 2)).toEqual(14);
  });




});
  