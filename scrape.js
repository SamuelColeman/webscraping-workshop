var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.secsports.com/')
  .wait('#navigation-tier2-sports-dropdown-toggle')
  .click('#navigation-tier2-sports-dropdown-toggle')
  .wait('a[href="/clubhouse/football"]')
  .click('a[href="/clubhouse/football"]')
  .wait('#subnav-teams-dropdown-toggle')
  .click('#subnav-teams-dropdown-toggle')
  .wait('a[href="/clubhouse/football/tennessee-volunteers"]')
  .click('a[href="/clubhouse/football/tennessee-volunteers"]')
  .wait('.date')
  .evaluate(() => {
    var nameNodes = document.querySelectorAll('.date');
    var list = [].slice.call(nameNodes);
    return list.reduce((acc, node, index) => {
      if (index > 5 && index < 18) {
        acc.push(node.innerText);
      }
      return acc
    }, []);
  })
  .end()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });