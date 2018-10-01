var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();



driver.get('https://rozetka.com.ua');
driver.findElement(By.name('signin')).click();
driver.switchTo().alert().sendKeys('ol2007july@gmail.com');





