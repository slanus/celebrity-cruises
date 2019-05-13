// We will do an end to end test of the component
module.exports = {
  "Trip Info Testing": function(client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)
      .assert.title("Celebrity Cruises")
      .waitForElementVisible("trip-info")
      .setValue("#reservation-number", "123456")
      .setValue("#last-name-on-reservation", "Jon Snow")
      .click("#ships option[value='number:1']")
      .click("#month  option[value='number:1']")
      .click("#day  option[value='number:1']")
      .click("#year  option[value='number:2019']")
      .waitForElementVisible(".btn-primary")
      .click("button")
      .pause(1000)
      .assert.urlEquals("http://localhost:3000/reservation/1")
      .waitForElementVisible("#reservation-number")
      .assert.visible("#reservation-number")
      .assert.value("#reservation-number", "123456")
      .assert.value("#last-name-on-reservation", "Jon Snow")
      .assert.value("#ships", "number:1")
      .assert.value("#month", "number:1")
      .assert.value("#day", "number:1")
      .assert.value("#year", "number:2019");
  }
};
