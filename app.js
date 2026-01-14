const specifications = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    companyName: "Tech Innovative Solutions",
    location: "Johannesburg",
    requirements: "React, Node.js, Express",
    employmentType: "Permanent",
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    companyName: "SB Properties",
    location: "Phuthaditjhaba",
    requirements: "Grok, Figma",
    employmentType: "Contract",
  },
];


const jobTitle = document.getElementById("job-title");
const companyName = document.getElementById("companyName");
const location = document.getElementById("location");
const requirements = document.getElementById("requirements");
const employmentType = document.getElementById("employmentType");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const applyBtn = document.querySelector(".apply");

let currentJob = 0;

window.addEventListener("DOMContentLoaded", function () {
  showJob(currentJob);
});

function showJob(index) {
  const item = specifications[index];
  jobTitle.textContent = item.jobTitle;
  companyName.textContent = item.companyName;
  location.textContent = item.location;
  requirements.textContent = item.requirements;
  employmentType.textContent = item.employmentType;
}

nextBtn.addEventListener("click", function () {
  currentJob++;
  if (currentJob > specifications.length - 1) {
    currentJob = 0;
  }
  showJob(currentJob);
});

prevBtn.addEventListener("click", function () {
  currentJob--;
  if (currentJob < 0) {
    currentJob = specifications.length - 1;
  }
  showJob(currentJob);
});

applyBtn.addEventListener("click", function () {
  alert(`You applied for the ${specifications[currentJob].jobTitle} position`);
});