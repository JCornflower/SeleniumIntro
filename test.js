var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('https://rozetka.com.ua');
//driver.manage().window().fullscreen();

// driver.findElement(By.name('signin')).click();
// driver.wait(function() {
//     console.error('wait');
//     return driver.elementLocated(webdriver.By.xpath('//*[@id="user-popup-parent59321"]/div/div'));
// }, 10000);
// //driver.findElement(By.xpath('//*[@id="user-popup-parent59321"]/div/div')).isSelected();
// driver.findElement(By.css('input')).sendKeys('ol2007july@gmail.com');


driver.findElement(By.name('signin')).click();
driver.wait(function() {
    return driver.elementLocated(By.css("class"));
}, 10000).then(re => {
        console.log('test', Object.keys(re));
        // re.findElement(By.css('input')).sendKeys('ol2007july@gmail.com')
    });
//driver.findElement(By.xpath('//*[@id="user-popup-parent59321"]/div/div')).isSelected();
driver.findElement(By.css('input')).sendKeys('ol2007july@gmail.com');



