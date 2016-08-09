// mdhCodes Resume Page Content - Replace Placeholders and Append Resume Page

var mySummary = "Enthusiastic and creative developer specializing in JavaScript. Highly motivated self-starter who enjoys learning new programs and processes. Excellent research, problem solving, communication, and organizational skills. Meticulous attention to detail yet flexible to manage multiple tasks and easily adapt to new situations. Customer oriented professional with an ability to easily anticipate the needs of others.";

var mySkills = ["HTML5", "CSS3", "JavaScript", "jQuery"];

var bio = {
    "name": "Michelle Hartley",
    "role": "Developer",
    "skills": mySkills,
    "contacts": {
        "email": "mdhCodes@gmail.com",
        "github": "github.com/mdhCodes"
    }
};

var work = {
    "jobs": [
        {
            "title": "Developer",
            "location": "Queens, NY",
            "dates": "January 2015 - present",
            "description1": "Create, update, and manage personal websites",
            "description2": "Hand code, test, and debug HTML, CSS, JavaScript, and jQuery to ensure a deep understanding of web development principles",
            "description3": "Adhere to industry standards while building a code base that is simple yet effective and websites that are user friendly and responsive",
            "description4": "Familiar with object-oriented programming"
        },
        {
            "title": "Potter",
            "location": "Fayetteville, GA / Raleigh, NC / Annandale,VA ",
            "dates": "January 2004 - December 2013",
            "description1": "Established Spiral Twists, LLC, in 2011",
            "description2": "Worked as a studio artist, studio assistant, and volunteer at community art centers and schools",
            "description3": "Prepared clay, mixed glazes, and assisted with loading and firing kilns (electric, gas, and wood)",
            "description4": "Gained knowledge of open source software"
        },
        {
            "title": "Educator",
            "location": "Springfield, VA / Vienna, VA / Alexandria, VA / Queens, NY",
            "dates": "November 1991 - June 2003",
            "description1": "Elementary School Assistant Principal; Fairfax County Public Schools, VA",
            "description2": "Special Education Teacher, English 9 and Basic Skills; Fairfax County Public Schools, VA",
            "description3": "Special Education Language Arts / Math Teacher, Grades 1 - 2; Alexandria City Public Schools, VA",
            "description4": "General Education Teacher, Grades 1 and 4; New York City Public Schools, NY"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Spiral Twists",
            "image": "img/platter_small.jpg",
            "description": "Digital gallery of wheel thrown and hand built ceramics",
            "href": "http://spiraltwists.com/",
            "link": "Website: www.spiraltwists.com"
        },
        {
            "title": "Random Quotes",
            "image": "img/open_books_small.jpg",
            "description": "Browse random quotes and tweet your favorites",
            "href": "https://mdhcodes.github.io/random_quotes/",
            "link": "Link: Random Quotes"
        },
        {
            "title": "Local Weather",
            "image": "img/weather.png",
            "description": "View your local weather along with other interesting facts",
            "href": "local_weather/weather.html",
            "link": "Link: Local Weather"
        },
        {
            "title": "mdhCodes",
            "image": "img/water_small.jpg",
            "description": "Ongoing portfolio of my work as a developer",
            "href": "http://mdhcodes.com/",
            "link": "Website: www.mdhCodes.com"
        }
    ],
    "display": function() { // Method - Function belonging to the projects object
        for(project in projects.projects) { // Loop over the projects array of objects  inside the projects object
            // Replace the %data% placeholder with the projects object content
            var title = projectTitle.replace("%data%", projects.projects[project].title);
            var description = projectDescription.replace("%data%", projects.projects[project].description);
            var image = projectImage.replace("%data%", projects.projects[project].image);
            var href = projects.projects[project].href;
            var link = projects.projects[project].link;            
            // Insert data from the projects object at the end of the DOM element with ID projects
            $("#projects").append(title);
            $("#projects").append(description);
            $("#projects").append('<p class="project-link"><a href="' + href + ' " target="blank">' + link + ' </a></p>');
            $("#projects").append(image);
        }
    }
};

var education = {
    "schools": [
        {
            "degree": "Master of Education",
            "major": "Education Leadership",
            "name": "George Mason University",
            "location": "Fairfax, VA",
            "href": "https://www2.gmu.edu/",
            "url": "www.gmu.edu"
        },
        {
            "degree": "Master of Science",
            "major": "Special Education",
            "name": "The City College of New York",
            "location": "New York, NY",
            "href": "https://www.ccny.cuny.edu/",
            "url": "www.ccny.cuny.edu"
        },
        {
            "degree": "Bachelor of Arts",
            "major": "Psychology",
            "name": "Stony Brook University",
            "location": "Stony Brook, NY",
            "href": "http://www.stonybrook.edu/",
            "url": "www.stonybrook.edu"
        }
    ],
    "techCourses": [
        {
            "name": "JavaScript: Understanding the Weird Parts ",
            "school": "Udemy",
            "dates": "July 2016 - present",
            "href": "https://www.udemy.com/understand-javascript/",
            "url": "www.udemy.com"
        },
        {
            "name": "Front End Development",
            "school": "Free Code Camp",
            "dates": "February 2016 - present",
            "href": "https://www.freecodecamp.com/mdhcodes",
            "url": "www.freecodecamp.com"
        },
        {
            "name": "Google Maps APIs",
            "school": "Udacity",
            "dates": "July 2016",
            "href": "https://www.udacity.com/course/google-maps-apis--ud864",
            "url": "www.udacity.com"
        },
        {
            "name": "JavaScript Basics",
            "school": "Udacity",
            "dates": "November 2015",
            "href": "https://www.udacity.com/course/javascript-basics--ud804",
            "url": "www.udacity.com"
        },
        {
            "name": "Web Development: Various Courses",
            "school": "Treehouse",
            "dates": "June 2015 - December 2015",
            "href": "https://teamtreehouse.com/",
            "url": "www.teamtreehouse.com"
        },
        {
            "name": "JavaScript",
            "school": "Codecademy",
            "dates": "July 2015",
            "href": "https://www.codecademy.com/learn/javascript",
            "url": "www.codecademy.com"
        }
    ],
    "display": function() { // Method - Function belonging to the education object
        for(school in education.schools) { // Loop over the schools array of objects inside the education object
            // Replace the %data% placeholder with education object content
            var collegeDegree = schoolDegree.replace("%data%", education.schools[school].degree);
            var collegeMajor = schoolMajor.replace("%data%", education.schools[school].major);
            var collegeName = schoolName.replace("%data%", education.schools[school].name);
            var collegeLocation = schoolLocation.replace("%data%", education.schools[school].location);
            var collegeHref = education.schools[school].href;
            var collegeUrl = education.schools[school].url;
            // Insert data from the education object at the end of the DOM element with ID education
            $("#education").append(collegeDegree);
            $("#education").append(collegeMajor);
            $("#education").append(collegeName);
            $("#education").append(collegeLocation);
            $("#education").append('<a href=" ' + collegeHref + ' " class="college-url" target="_blank">' + collegeUrl + ' </a>');
        }
        for(course in education.techCourses) { // Loop over the techCourses array of objects inside the education object
            // Replace the %data% placeholder with techCourses object content
            var className = courseName.replace("%data%", education.techCourses[course].name);
            var classSchool = courseSchool.replace("%data%", education.techCourses[course].school);
            var classDates = courseDates.replace("%data%", education.techCourses[course].dates);
            var classHref = education.techCourses[course].href;
            var classUrl = education.techCourses[course].url;
            // Insert data from the education object at the end of the DOM element withID tech-courses
            $("#tech-courses").append(className);
            $("#tech-courses").append(classSchool);
            $("#tech-courses").append(classDates);
            $("#tech-courses").append('<a href=" ' + classHref + ' " class="course-url" target="_blank">' + classUrl + ' </a>');
        }
    }
};


// Header - Add bio object data to the DOM element with ID header
$("#header").prepend('<p class="role">' + bio.role + '</p><hr>');
$("#header").prepend('<h2 class="name">' + bio.name + '</h2>');
$("#header").append('<p class="contacts contact1">GitHub: ' + bio.contacts.github + '</p>');
$("#header").append('<p class="contacts contact2">Email: ' + bio.contacts.email + '</p>');
$("#header").append('<h4 class="skills-heading">Skills</h4><hr>');
$("#header").append('<p class="skills">' + bio.skills[0] + '</p>');
$("#header").append('<p class="skills">' + bio.skills[1] + '</p>');
$("#header").append('<p class="skills">' + bio.skills[2] + '</p>');
$("#header").append('<p class="skills">' + bio.skills[3] + '</p>');


// Summary - Add string stored in the variable mySummary to the DOM element with ID summary
$("#summary").append('<p>' + mySummary + '</p>');


// Experience
var displayWork = function() { // Function expression
    for(job in work.jobs) { // Loop over the jobs object inside the work object
        // Replace %data% placeholders with work object data
        var jobTitle = workTitle.replace("%data%", work.jobs[job].title);
        var jobLocation = workLocation.replace("%data%", work.jobs[job].location);
        var jobDates = workDates.replace("%data%", work.jobs[job].dates);
        var jobDescription1 = workDescription1.replace("%data%", work.jobs[job].description1);
        var jobDescription2 = workDescription2.replace("%data%", work.jobs[job].description2);
        var jobDescription3 = workDescription3.replace("%data%", work.jobs[job].description3);
        var jobDescription4 = workDescription4.replace("%data%", work.jobs[job].description4);

        // Insert data from the work object at the end of the DOM element with ID experience
        $("#experience").append(jobTitle);
        $("#experience").append(jobLocation);
        $("#experience").append(jobDates);
        $("#experience").append(jobDescription1);
        $("#experience").append(jobDescription2);
        $("#experience").append(jobDescription3);
        $("#experience").append(jobDescription4);
    }
};
displayWork();


// Projects

projects.display();


// Education

education.display();
