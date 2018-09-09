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
            .setValue('@wgt', '187')
            .setValue('@hai', 'Blonde')
            .setValue('@off', 'Theft')
            .setValue('@dow', '08242018')
            .setValue('@oln', '123456789')
            .setValue('@ols', 'UT')
            .setValue('@oly', '08272018')
            .setValue('@lic', 'ABC123')
            .setValue('@lis', 'UT')
            .setValue('@liy', '08272018')
            .click('@clear')

            .expect.element('@hdr').value.to.not.equal('12345').after(2000)
            Data
            .expect.element('@mke').value.to.not.equal('ABC').after(2000)
            Data
            .expect.element('@oai').value.to.not.equal('oai123456').after(2000)
            Data
            .expect.element('@nam').value.to.not.equal('Jonathan Doe').after(2000)
            Data
            .expect.element('@hgt').value.to.not.equal('509').after(2000)
            Data
            .expect.element('@wgt').value.to.not.equal('187').after(2000)
            Data
            .expect.element('@hai').value.to.not.equal('Blonde').after(2000)
            Data
            .expect.element('@off').value.to.not.equal('Theft').after(2000)
            Data
            .expect.element('@dow').value.to.not.equal('08242018').after(2000)
            Data
            .expect.element('@oln').value.to.not.equal('123456789').after(2000)
            Data
            .expect.element('@ols').value.to.not.equal('UT').after(2000)
            Data
            .expect.element('@oly').value.to.not.equal('08272018').after(2000)
            Data
            .expect.element('@lic').value.to.not.equal('ABC123').after(2000)
            Data
            .expect.element('@lis').value.to.not.equal('UT').after(2000)
            Data
            .expect.element('@liy').value.to.not.equal('08272018').after(2000)
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
    // test located at https://dmutah.atlassian.net/projects/Q7N/issues/Q7N-38?filter=allissues

    'clear a warrant': browser => {
        createWarrant(Data)
    },
}