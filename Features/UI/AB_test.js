Feature("regression tests");

Before(({ I }) => {
  I.amOnPage("abtest");
});

Scenario("i see testB heding", ({ I }) => {
  //document.querySelectorAll("#content .example p")

  I.clearCookie();
  let headingB = "A/B Test Control";

  I.setCookie([
    {
      name: "optimizelyBuckets",
      value: "%7B%22298349752%22%3A%22298291000%22%7D",
      url: "https://the-internet.herokuapp.com/abtest",
    },
    {
      name: "optimizelyEndUserId",
      value: "oeu1623968682925r0.8449357409200384",
      url: "https://the-internet.herokuapp.com/abtest",
    },
  ]);
  I.refreshPage;
  I.see(headingB, "#content .example h3");
});

Scenario("i see testA heding", ({ I }) => {
  //document.querySelectorAll("#content .example p")

  I.clearCookie();
  let headingA = "A/B Test Variation 1";
  I.setCookie([
    {
      name: "optimizelyBuckets",
      value: "%7B%22298349752%22%3A%22298343790%22%7D",
      url: "https://the-internet.herokuapp.com/abtest",
    },
    {
      name: "optimizelyEndUserId",
      value: "oeu1626049413096r0.3125133642767641",
      url: "https://the-internet.herokuapp.com/abtest",
    },
    {
      name: "optimizelyPendingLogEvents",
      value:
        "%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fabtest%26g%3D298349752%26u%3Doeu1626049413096r0.3125133642767641%26wxhr%3Dtrue%26t%3D1626049413101%26f%3D298349752%2C318188263%22%5D",
      url: "https://the-internet.herokuapp.com/abtest",
    },
    {
      name: "optimizelySegments",
      value: "%7B%7D",
      url: "https://the-internet.herokuapp.com/abtest",
    },
    {
      name: "rack.session",
      value:
        "BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiRTk2OGVhZDAzY2Y0OGEzZDZjNmJj%0AZDMzOThlNWNmOWI3ZGRiMjEzY2FhZmU2ZDg4MTJkZGQwOWFhYjkxY2E3OTEG%0AOwBGSSIJY3NyZgY7AEZJIiVhYzc4NTI5ZTVjNGJjYzEyMTk5NDIxMmZlZGJi%0ANTBiYgY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi1jMTFmMTA0MTljZjg4MjNmNDJlYjcxNWEzYzA5MmRkM2E0ZjUyYTE1%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLWMyZjUzODI4ZTZi%0AZTE3ZGM5NzkyY2Y1NDJmZmQ3YTMyNTY0Zjk3NDAGOwBGSSIKZmxhc2gGOwBG%0AewA%3D%0A--961318e295d3bb0c154f2a0c7fd17941c0ce0d07",
      url: "https://the-internet.herokuapp.com/abtest",
    },
  ]);
  I.refreshPage;
  I.see(headingA, "#content .example h3");
});
