var webdriver = require('selenium-webdriver'),
        By = webdriver.By, until = webdriver.until;
const { Key } = require('selenium-webdriver');
        var webdriver = require('selenium-webdriver');

var URL = 'https://qa-task.backbasecloud.com/'; 

const assert = require('assert');

var chrome = require('selenium-webdriver/chrome');

  
describe("Smoke Test", async function() {
        
        this.beforeEach( async function(){
        
        });

        it("test1", async function(){
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build(); 
        await driver.sleep(3000);
        await driver.get('https://candidatex:qa-is-cool@qa-task.backbasecloud.com/');
        await driver.manage().window().maximize() ;
        await driver.findElement(By.linkText('Sign in')).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).sendKeys('tomas.valencia@agilethought.com');
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).sendKeys('Caballeros97');
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/button")).click();
        await driver.sleep(3500);
        await driver.findElement(By.linkText('Global Feed')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/div/div[1]/app-article-list/app-article-preview[1]/div/a/span")).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[1]/div/app-article-meta/div/span[2]/app-favorite-button")).click();
        await driver.sleep(3500);
        button =  await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[1]/div/app-article-meta/div/span[2]/app-favorite-button")).getText();
        assert.equal(button, "Unfavorite Article (1)");
        await driver.sleep(4000);
        await driver.quit();
    
        });

        it("test2", async function(){
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build(); 
        await driver.get('https://candidatex:qa-is-cool@qa-task.backbasecloud.com/');
        await driver.manage().window().maximize() ;
        await driver.findElement(By.linkText('Sign in')).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).sendKeys('tomas.valencia@agilethought.com');
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).sendKeys('Caballeros97');
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/button")).click();
        await driver.sleep(3500);
        await driver.findElement(By.linkText('Global Feed')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/div/div[1]/app-article-list/app-article-preview[1]/div/a/span")).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[1]/div/app-article-meta/div/span[2]/app-follow-button/button")).click();
        await driver.sleep(2000);
        follow =  await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[1]/div/app-article-meta/div/span[2]/app-follow-button/button")).isEnabled();
        await driver.sleep(3000);
        assert.strictEqual(follow, true);
        await driver.sleep(4000);
        await driver.quit();
        });

        it("test3", async function(){
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build(); 
        await driver.get('https://candidatex:qa-is-cool@qa-task.backbasecloud.com/');
        await driver.manage().window().maximize() ;
        await driver.findElement(By.linkText('Sign in')).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input")).sendKeys('tomas.valencia@agilethought.com');
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).click();
        await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input")).sendKeys('Caballeros97');                await driver.findElement(By.xpath("/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/button")).click();
        await driver.sleep(3500);
        await driver.findElement(By.linkText('Global Feed')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/div/div[1]/app-article-list/app-article-preview[1]/div/a/span")).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/div/form/fieldset/div[1]/textarea")).click();   
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/div/form/fieldset/div[1]/textarea")).sendKeys('Hi!');
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/div/form/fieldset/div[2]/button")).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/app-article-comment/div/div[1]/p")).getText().then(async function(txt){console.log('the text of the button is: ' +txt)});
        await driver.sleep(1500);
        Read = await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/app-article-comment/div/div[1]/p")).getText()
        await driver.sleep(3000);
        assert.equal(Read, 'Hi!');
        await driver.sleep(2000);
        await driver.findElement(By.xpath("/html/body/app-root/app-article-page/div/div[2]/div[3]/div/app-article-comment/div/div[2]/span[2]/i")).click();
        await driver.sleep(2000);
        });

});


    

  