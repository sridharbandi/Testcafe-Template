## DevExpress Testcafe example project with Page Object Model
>[Testcafe](https://devexpress.github.io/testcafe/) is a node.js tool to automate end-to-end web testing

### How to use?
Create the Page Objects of your Web application under **_pageobjects_** package, call those Page Objects in tests under **_tests_** package (Sample Page Objects, testcase included in this template)

### How to run?
To install the dependencies issue the below commands in project root directory
```javascript
npm install
``` 
To run the tests issue the below command
```javascript
npm test chrome tests
``` 
For complete list of browsers supported by Testcafe refer this [link](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html)

You can specify locally installed browsers using browser aliases or paths (with the path: prefix)
```javascript
npm test  'path:`C:\Program Files (x86)\Firefox Portable\firefox.exe`' tests
```

Other templates you might be interested in 
[Non Selenium Javascript Templates](https://github.com/sridharbandi/Non-Selenium-Javascript-Getting-Started-Examples), 
[Selenium Javascript Templates](https://github.com/sridharbandi/Selenium-Javascript-Getting-Started-Examples)

> Feel free to modify it to your own needs :)