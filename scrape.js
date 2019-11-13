var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.secsports.com/clubhouse/football')
  .click('a[href="https://www.secsports.com/scores/football"]')
  .wait('h5')
  .evaluate(function () {
    console.log('working')
    var nameNodes = document.querySelectorAll('h5');
    console.log(nameNodes)
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