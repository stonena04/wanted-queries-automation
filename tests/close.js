var Data = {}
var closeWarrant = (pages,wanted) => {
    Data
            .click('div[class="bm-burger-button"]')
            Data.api.pause(1000)
            .click('p[name="cancelOption"]')
            Data.api.pause(1000)
            Data
            .setValue('@warrant', '1234567890')
            .setValue('@reason','arrest was made')
            .setValue('@date', '09072018')
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
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-34?filter=allissues

    'close a warrant': browser => {
        closeWarrant(Data)
    },
}