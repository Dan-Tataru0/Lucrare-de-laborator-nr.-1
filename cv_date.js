let x = 0;

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildSocialIcons(link,icon) {
    return `
    <div class="setIcon">
    <a href="${link}" target="_blank"><img src="icons/${icon}.svg"></a>
    </div>
    `;
}

function buildJob(job_name,company_name,city_name,job_start_date,job_end_date,x) {
    return `
    <div id="work_information">
    <div class="setWork">
        <p class="jobName">${job_name}<span> la compania </span><span class="companyName">${company_name}</span><span> in orașul </span><span class="cityLocation">${city_name}</span></p>
        <p class="setSecond"><span class="start_date_job">${job_start_date}</span> - <span class="end_date_job" id="setCurrent${x}">${job_end_date}</span</p>
    </div>
    `;
}

function buildEducation(education_title,education_start_date,education_type) {
    return `
    <div class="educationSet">
    <p class="education_title">${education_title}</p>
    <p class="education_start_date">${education_start_date}</p>
    <p class="education_type">${education_type}</p>
    </div>
    `;
}

function loadMainDates() {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            $("#nameGet").html(response.main[0].surname);
            $("#surnameGet").html(response.main[0].name);
            $("#professionGet").html(capitalizeFirstLetter(response.main[0].profession));
            $("#email").html(response.main[0].email);
            $("#phone_number").html(response.main[0].phone);
            $("#address").html(response.main[0].address);
        },
    });
}

function getSocialLinks() {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            (response.links).forEach((social)=> {
               $("#contact_info").append(buildSocialIcons(social.link, social.icon));
            });
        },
    });
}


function loadJobDates() {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            let s = 0;
            (response.jobs).forEach((jobs)=> {
               $("#work_wrapper").append(buildJob(capitalizeFirstLetter(jobs.job_name),jobs.company_name,capitalizeFirstLetter(jobs.city_name), jobs.job_start_date, jobs.job_end_date,x));
               x++;
               if(jobs.isChecked) {
                $(`#setCurrent${s}`).text("În prezent");
               }
               s++;
            });
        },
    });
}

function loadEducationDate() {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            (response.educations).forEach((ed)=> {
               $("#e_wrapper").append(buildEducation(ed.education_title, ed.education_start_date, ed.education_type));
            });
            console.log(response);
        },
    });
}

$("#back").on("click",()=> {
    window.location.href = 'index.html';
})

$(document).ready(function() {
    loadMainDates();
    getSocialLinks();
    loadJobDates();
    loadEducationDate();

})