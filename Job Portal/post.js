let title = document.querySelector('#JobName');
let company = document.querySelector('#Company');
let location1 = document.querySelector('#Location');
let Description = document.querySelector('#Description');
let div = document.querySelector('#newJob');
let button = document.querySelector('button');
let searchBar = document.querySelector('#searchBar');

button.addEventListener('click', postJob);
searchBar.addEventListener('input', searchJobs);

function postJob(e) {
  e.preventDefault();

  let data1 = title.value.trim();
  let data2 = company.value.trim();
  let data3 = location1.value.trim();
  let data4 = Description.value.trim();

  if (data1 === '' || data2 === '' || data3 === '') return;

  let postDiv = document.createElement('div');
  postDiv.classList.add('job-card');

  postDiv.innerHTML = `
    <h2 class="job-title">${data1}</h2>
    <h3 class="job-company">${data2}</h3>
    <h4>${data3}</h4>
    <p>${data4}</p>
    <button class="delete-btn" type="button">Delete</button>
  `;

  // Delete button working logic (THIS was missing)
  postDiv.querySelector('.delete-btn').addEventListener('click', function () {
    postDiv.remove();
  });

  div.appendChild(postDiv);

  // clear form
  title.value = '';
  company.value = '';
  location1.value = '';
  Description.value = '';
}

// Search functionality
function searchJobs() {
  let searchValue = searchBar.value.toLowerCase();
  let jobs = document.querySelectorAll('.job-card');

  jobs.forEach(function (job) {
    let titleText = job.querySelector('.job-title').textContent.toLowerCase();
    let companyText = job
      .querySelector('.job-company')
      .textContent.toLowerCase();

    if (titleText.includes(searchValue) || companyText.includes(searchValue)) {
      job.style.display = 'block';
    } else {
      job.style.display = 'none';
    }
  });
}
