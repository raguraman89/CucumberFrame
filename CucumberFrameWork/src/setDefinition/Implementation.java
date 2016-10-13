package setDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Implementation {

	public static WebDriver driver;

@Given("^User is on the Home Page$")
public void user_is_on_the_Home_Page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   
    System.setProperty("webdriver.chrome.driver", "F:\\Ragu\\chromedriver.exe");
    driver =new ChromeDriver();
}

@When("^the use navigated to login page$")
public void the_use_navigated_to_login_page() throws Throwable {
    driver.get("http://downloads.smartbear.com/samples/TestComplete10/WebOrders/Login.aspx");
}
@When("^user enters the \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_the_and(String username, String password) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("html/body/form/div[3]/input[1]")).sendKeys(username);
	driver.findElement(By.xpath("html/body/form/div[3]/input[2]")).sendKeys(password);
	driver.findElement(By.xpath("html/body/form/div[3]/input[3]")).click();
}

@Then("^Message displayed as login successfull$")
public void message_displayed_as_login_successfull() throws Throwable {
    System.out.println("Login Successfully");
}

@Then("^user logout from the application$")
public void user_logout_from_the_application() throws Throwable {
   driver.findElement(By.xpath("html/body/form/table/tbody/tr/td[2]/div[1]/span/a")).click();
   driver.quit();
}
}
