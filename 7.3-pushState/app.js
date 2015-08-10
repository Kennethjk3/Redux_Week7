;(function(){

  var data = [];
  data.push(JSON.parse(localStorage.getItem('session')));
  localStorage.setItem('session', JSON.stringify(data));


})();
