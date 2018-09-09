var Data = {}
var createWarrant = (pages,wanted) => {
    Data
            .click('div[class="bm-burger-button"]')
            Data.api.pause(1000)
            .click('p[name="enterOption"]')
            Data.api.pause(1000)
            Data
            .setValue('@hdr', '1234567890')
            .setValue('@mke', 'ABC')
            .setValue('@oai', 'oai123456')
            .setValue('@nam', 'Jonathan Doe')
            .click('@male')
            .click('@white')
            .setValue('@hgt', '509')
            .setValue('@wgt', '185')
            .setValue('@hai', 'Blonde')
            .setValue('@off', 'Theft')
            .setValue('@dow', '08242018')
            .setValue('@oln', '123456789')
            .setValue('@ols', 'UT')
            .setValue('@oly', '08272018')
            .setValue('@lic', 'ABC123')
            .setValue('@lis', 'UT')
            .setValue('@liy', '08292018')
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
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-32?filter=allissues

    'create a warrant': browser => {
        createWarrant(Data)
    },
}