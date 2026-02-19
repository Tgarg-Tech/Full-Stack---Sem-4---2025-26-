let title = document.querySelector('#JobName');
let company = document.querySelector('#Company');
let location1 = document.querySelector('#Location');
let Description = document.querySelector('#Description');
let div = document.querySelector('#newJob');
let button = document.querySelector('button');

button.addEventListener('click', postJob);

function postJob(e) {
  e.preventDefault();
  let data1 = title.value;
  let data2 = company.value;
  let data3 = location1.value;
  let data4 = Description.value;

  let postDiv = document.createElement('div');

  postDiv.innerHTML = `
  
  <h1>${data1}</h1>
  <h1>${data2}</h1>
  <h4>${data3}</h4>
  <p>${data4}</p>
  `;
  div.appendChild(postDiv);
  title.value = '';
  company.value = '';
  location1.value = '';
  Description.value = '';
}
