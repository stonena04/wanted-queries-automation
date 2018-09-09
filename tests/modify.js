var Data = {}
var modifyWarrant = (pages,wanted) => {
    Data
            .click('div[class="bm-burger-button"]')
            Data.api.pause(1000)
            .click('p[name="modifyOption"]')
            Data.api.pause(1000)
            Data
            .setValue('@warrant', '1234567890')
            .click('@other')
            .setValue('@hai', 'Brown')
            .click('@saveBtn')
            .expect.element('@results').text.to.contain('Assembled Query').after(5000)
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
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-33?filter=allissues

    'modify a warrant': browser => {
        modifyWarrant(Data)
    },
}