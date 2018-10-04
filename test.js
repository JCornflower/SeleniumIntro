var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('https://rozetka.com.ua');
//driver.manage().window().fullscreen();

driver.findElement(By.name('signin')).click();






