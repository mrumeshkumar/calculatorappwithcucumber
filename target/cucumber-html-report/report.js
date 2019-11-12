$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "calculate add",
  "description": "",
  "id": "calculator;calculate-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I ask it to say add",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "it should answer with add 15",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CalculatorStep.i_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 111298900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorStep.i_ask_it_to_say_add()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "CalculatorStep.it_should_answer_with_add(int)"
});
formatter.result({
  "duration": 2173200,
  "status": "passed"
});
});