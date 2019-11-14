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
  .wait('.season-line')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('.season-line');
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });