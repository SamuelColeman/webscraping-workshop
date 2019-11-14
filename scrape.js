var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var fs = require('fs');

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
  .wait('.outcome')
  .evaluate(() => {
    var nameNodes = document.querySelectorAll('.outcome');
    var list = [].slice.call(nameNodes);
    var reducedList = list.reduce((acc, node, index) => {
        acc.push(node.innerText);
      return acc
    }, []);
    if (reducedList[reducedList.length - 1] === 'W') {
      return 'Yes, they won'
    } else {
      return 'No, no they did not'
    }
  })
  .end()
  .then((result) => {
    fs.writeFileSync('response.json', JSON.stringify(result));
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });