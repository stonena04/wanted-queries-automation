var Data = {}
var modifyWarrant = (pages,wanted) => {
    Data
            .click('div[class="bm-burger-button"]')
            Data.api.pause(1000)
            .click('p[name="modifyOption"]')
            Data.api.pause(1000)
            Data
            .setValue('@warrant', '1234567890')
            .setValue('@hai', 'Brown')
            .click('@clear')
            .expect.element('@warrant').value.to.not.equal('1234567890')
            Data
            .expect.element('@hai').value.to.not.equal('Brown')
            Data
            .expect.element('@saveBtn').to.not.be.enabled.after(5000)
}

module.exports = {
    beforeEach: browser => {
        Data = browser.page.wanted()
        Data.navigate()
            // browser.url('localhost:3000')
            .waitForElementPresent('#welcomeScreen', 5000)
    },
    after: browser => {
        browser.end()
    },
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-39?filter=allissues

    'clear a modify': browser => {
        modifyWarrant(Data)
    },
}