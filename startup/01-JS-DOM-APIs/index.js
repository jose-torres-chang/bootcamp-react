$(document).ready( function() {
  document.getElementById('hello-world').style.visibility = 'visible';
  getSideBarData();
})

function onClick() { 
  let config = {url:"http://api.icndb.com/jokes/random",data:""};
  let result = getAjaxResponse(config);
  result.then( 
    result => {
      let jokesSection = document.getElementById('hello-world');
      if(result) {
        jokesSection.innerText = result.value.joke;
      }
      else {
        jokesSection.setAttribute('class', 'failed-request');
      }
    }
  );
}

function getSideBarData() {
  let config = {url:'https://api.github.com/search/repositories?q=JavaScript'};
  let result = getAjaxResponse(config);
  result.then(
    result => {
      let list = document.getElementById('repository-list');
      result.items.forEach(item => {
        let parent = document.createElement('li');
        let child = document.createElement('a');
        child.setAttribute('href',item.html_url);
        child.innerText = item.name;
        parent.appendChild(child);
        list.appendChild(parent);
      });
    }
  );
}

function getAjaxResponse(config) {
  return new Promise ( (resolve,reject) => {
    $.ajax({
      type: 'GET',
      url: config.url,
      data: JSON.stringify(config.data), 
      success: function(result){
        resolve(result);
      },
      error: function() {
        reject(false);
      }}
    );
  });  
}

function createTable(data) {
  let container = document.getElementById(data.targetId);
  let table = document.createElement('table');
  data.headers.forEach( header => {
    let header = document.createElement('th').innerText = header;
    table.appendChild(th);});
  data.rows.forEach(
    row => {
      let row = document.createElement('tr');
      row.cells.forEach(
        cell => {
          let cell = document.createElement('td').innerText = cell;
          row.appendChild(cell);
        });
      table.appendChild(row);});
  container.appendChild(table);
}

function filter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('search-bar');
  filter = input.value.toUpperCase();
  ul = document.getElementById('repository-list');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = '';
      } else {
          li[i].style.display = 'none';
      }
  }
}