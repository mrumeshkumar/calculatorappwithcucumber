package CucumberMavenPoc.calculator.app;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorStep {
	private Calculate calc;
	private int res;
	@Given("^I have a calc with (\\d+) (\\d+)$")
	public void i_have_a_calc_with(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		calc = new Calculate(arg1, arg2);
	}

	@When("^I ask it to say add$")
	public void i_ask_it_to_say_add() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		res = calc.add();
	}

	@Then("^it should answer with add (\\d+)$")
	public void it_should_answer_with_add(int expectedRes) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(expectedRes, res);
	}
}
