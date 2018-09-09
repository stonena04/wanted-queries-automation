var Data = {}
var createWarrant = (pages,wanted) => {
    Data
            .click('div[class="bm-burger-button"]')
            Data.api.pause(1000)
            .click('p[name="enterOption"]')
            Data.api.pause(1000)
            Data
            .setValue('@hdr', '12345')
            .setValue('@mke', 'ABC')
            .setValue('@oai', 'oai12')
            .setValue('@nam', 'Jonathan Doe')
            .click('@male')
            .click('@white')
            .setValue('@hgt', '50')
            .setValue('@wgt', '18')
            .setValue('@hai', 'Blo')
            .setValue('@off', '')
            .setValue('@dow', '082428')
            .setValue('@oln', '123456789')
            .setValue('@ols', 'UT')
            .setValue('@oly', '08272018')
            .setValue('@lic', 'AB23')
            .setValue('@lis', 'UT')
            .setValue('@liy', '082')
            .click('@saveBtn')
            .expect.element('@results').text.to.contain('No results generated due to error').after(5000)
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
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-35?filter=allissues

    'create a warrant': browser => {
        createWarrant(Data)
    },
}