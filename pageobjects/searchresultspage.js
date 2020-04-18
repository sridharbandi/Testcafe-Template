import { Selector, t } from 'testcafe';

export default class SearchResultsPage {

    get linkselenium() {return 'a[href=\'https://www.selenium.dev/\']';}

    constructor() {
    }

    async getSeleniumText(){
        return Selector(this.linkselenium).textContent
    }
}