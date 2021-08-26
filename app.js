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

// transforming unique skill/tool to skill/tool btn
let skills = jobs
  .map((job) => job.languages)
  .map((job) =>
    job.map((j) => `<button class="skill-btn" data-name="${j}">${j}</button>`)
  );
let tools = jobs
  .map((job) => job.tools)
  .map((job) =>
    job.map((j) => `<button class="skill-btn" data-name="${j}">${j}</button>`)
  );

// mapping jobs array
function displayJobListing(j) {
  const singleJob = j
    .map((job, index) => {
      // destrucutring
      skills[index];
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
      const singleSkills = skills[index];
      const singleTools = tools[index];
      const jobBtn = `<button class="skill-btn" data-name="${role}">${role}</button>`;
      const positionBtn = `<button class="skill-btn" data-name="${level}">${level}</button>`;
      const allBtn = [
        ...singleSkills,
        ...singleTools,
        jobBtn,
        positionBtn,
      ].join('');

      // html
      return `
  <article class="single-job">
        <div class="company-info">
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
              <p>${contract}</p>
              <p>${location}</p>
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
  jobList.innerHTML = singleJob;
}

// filter arr
let jobFilterArr = [];

// get and push value to filter arr
function pushFilter() {
  const value = this.dataset.name;
  if (!jobFilterArr.includes(value)) {
    jobFilterArr.push(value);
  }
}

// display jobFilterArr in filter-skills
function displayFilter() {
  if (jobFilterArr.length !== 0) {
    const filterJobs = jobFilterArr
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
}
// delete only the btn selected
function clearUniqueBtn() {
  const deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let target = e.currentTarget.parentElement;
      let value = e.currentTarget.dataset.name;
      jobFilterArr.splice(jobFilterArr.indexOf(value), 1);
      filterList.removeChild(target);
    });
  });
}

// clear
// remove unique

// refaire ca
// let roleArr = [];
// let levelArr = [];
// let languagesArr = [];
// let toolsArr = [];
// for (let i of jobs) {
//   languagesArr.push(...i.languages);
//   toolsArr.push(...i.tools);
//   roleArr.push(i.role);
//   levelArr.push(i.level);
// }
// console.log(roleArr);

// display only jobs included in jobFilterArr
// check si role lang tools et level a une des ces valeurs dans l'arr est check si chaque job2 a une de ses valeur est affiché avec un filter
function displayJobFilterArr() {
  // console.log(jobFilterArr);
  // console.log(jobs);
}

// display all
window.addEventListener('DOMContentLoaded', displayJobListing(jobs));
// get all btn
const jobsBtns = document.querySelectorAll('.skill-btn');

// btn event listener
jobsBtns.forEach((btn) => {
  btn.addEventListener('click', pushFilter);
  btn.addEventListener('click', displayFilter);
  btn.addEventListener('click', displayFilter);
  btn.addEventListener('click', displayJobFilterArr);
  btn.addEventListener('click', clearUniqueBtn);
});
