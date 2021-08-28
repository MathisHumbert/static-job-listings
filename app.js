let jobs = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

// get elements
const jobList = document.querySelector('.jobs-list');
const filterList = document.querySelector('.filter-skills');
const filterParent = document.querySelector('.filter');
const clearBtn = document.querySelector('.clear');

// mapping jobs array
function displayJobListing(jobArr) {
  // transforming unique skill/tool to skill/tool btn
  let languages = jobArr
    .map((job) => job.languages)
    .map((job) =>
      job.map((j) => `<button class="skill-btn" data-name="${j}">${j}</button>`)
    );
  let tools = jobArr
    .map((job) => job.tools)
    .map((job) =>
      job.map((j) => `<button class="skill-btn" data-name="${j}">${j}</button>`)
    );

  // creating the html
  const jobHtml = jobArr
    .map((job, index) => {
      // destrucutring
      const [img, name, position, posted, contract, location, role, level] = [
        job.logo,
        job.company,
        job.position,
        job.postedAt,
        job.contract,
        job.location,
        job.role,
        job.level,
      ];

      // unique btn
      const singleLanguages = languages[index];
      const singleTools = tools[index];
      const jobBtn = `<button class="skill-btn" data-name="${role}">${role}</button>`;
      const positionBtn = `<button class="skill-btn" data-name="${level}">${level}</button>`;
      const allBtn = [
        jobBtn,
        positionBtn,
        ...singleLanguages,
        ...singleTools,
      ].join('');

      // actual html
      return `
  <article class="single-job ${job.new ? 'new-article' : ''}">
        <div class="company-info">
        <div class="top-info">
          <img src="${img}" alt="" />
          <div class="info">
            <div class="header-info">
            <p class="name">${name}</p>
            ${job.new ? `<span class="new">New!</span>` : ''}
            ${job.featured ? `<span class="featured">Featured</span>` : ''}
            </div>
            <p class="job-desc">${position}</p>
            <div class="footer-info">
              <p>${posted}</p>
              <i class="fas fa-circle circle"></i>
              <p>${contract}</p>
              <i class="fas fa-circle circle"></i>
              <p>${location}</p>
            </div>
          </div>
          </div>
          </div>
          <div class="skills">
            ${allBtn}
          </div>
      </article>
  `;
    })
    .join('');
  jobList.innerHTML = jobHtml;

  const skillsBtn = document.querySelectorAll('.skill-btn');
  console.log(skillsBtn);

  // filter arr
  let jobFilterArr = [];

  // skillsBtn event
  skillsBtn.forEach((skillBtn) => {
    skillBtn.addEventListener('click', (e) => {
      pushFilter(e, jobFilterArr);
      console.log(jobFilterArr);
      displayFilter(jobFilterArr);
      // const deleteBtn = document.querySelectorAll('.delete');
      // console.log(deleteBtn);
    });
  });

  // deleteBtn event
  filterList.addEventListener('click', (e) => {
    if (e.target.classList.contains('fas')) {
      let target = e.target.parentElement.parentElement;
      let value = e.target.parentElement.dataset.name;
      console.log(target, value);
      jobFilterArr.splice(jobFilterArr.indexOf(value), 1);
      filterList.removeChild(target);
      handleFilterDisplay(jobFilterArr);
    }
    if (e.target.classList.contains('delete')) {
      let target = e.target.parentElement;
      let value = e.target.dataset.name;
      console.log(target, value);
      jobFilterArr.splice(jobFilterArr.indexOf(value), 1);
      filterList.removeChild(target);
      handleFilterDisplay(jobFilterArr);
    }
  });

  clearBtn.addEventListener('click', () => {
    clearAll(jobFilterArr);
    return (jobFilterArr = []);
  });
}

// functions

// get and push value to filter arr
function pushFilter(e, arr) {
  const value = e.target.dataset.name;
  if (!arr.includes(value)) {
    arr.push(value);
  }
}

// display jobFilterArr in filter-skills
function displayFilter(arr) {
  console.log(arr);
  if (arr.length !== 0) {
    const filterJobs = arr
      .map((job) => {
        return `
      <div class="single-skill">
        <p>${job}</p>
        <span class="delete" data-name="${job}"><i class="fas fa-times"></i></span>
      </div>
      `;
      })
      .join('');
    filterList.innerHTML = filterJobs;
  }
  handleFilterDisplay(arr);
}

// handle the display of filter
function handleFilterDisplay(arr) {
  console.log(arr);
  if (arr.length !== 0) {
    filterParent.style.display = 'flex';
  } else {
    filterParent.style.display = 'none';
  }
}

// clear all
function clearAll(arr) {
  while (filterList.firstChild) {
    filterList.removeChild(filterList.firstChild);
  }
  arr = [];
  handleFilterDisplay(arr);
}

// display all at the loading
window.addEventListener('DOMContentLoaded', displayJobListing(jobs));

// filter jobs selon un array de valeur et pour chaque valeur de l'array utiliser some pour savoir si un de ces key a la valeur en question
