
//---------bio is here-----------------------//

var bio = {
"name" : "Sean Collins",
"role" : "Assistant Manager",
"contacts" : {
"mobile" : "(818)324-8988",
"email" : "sean32collins@gmail.com",
"twitter" : "@sean32collins",
"github" : "justto32",
"location" : "New york",
},
"welcomeMessage" : "In the pursit for knowledge, we find ourselves",
"bioPic" : "images/me.jpg",
"skills": [
 "Windows Proficient", 
 "html and css basics", 
 "JavaScript basics"
 ],
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);



var skills = bio.skills;

$("#header").append(HTMLskillsStart);
for(index in bio.skills){
          var formatedskill = HTMLskills.replace("%data%", bio.skills[index]);
          $('#skills').append(formatedskill);
        }
       

//-------------------end bio------------------//
   



//-------------------work starts here------------------//   
var work = {

"jobs":[
{
    "employerName": "AT&T",
    "positionHeld": "Assistant Manager",
    "locationCurrent": "New York City",
    "responsibilities": "Coach and train all employees. Through the coachings provided, align the employee's sales process to meet the standards of AT&T. Provide and engaged work environment that encourages both fun and productivity.",
    "datesWorked": "August 17, 2010 - Current"
},
{
    "employerName": "Jamba Juice",
    "positionHeld": "Store Manager",
    "locationCurrent": "Wodland Hills, Ca",
    "responsibilities": "Schedule and maintain a steady work environment. Maintain stock off desired products to reinforce the Jamba Juice reputation.",
    "datesWorked": "time-time"
}

]

}

work.display = function(){
 for(job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);
 var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employerName);
 var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].positionHeld);
 var formattedEmployerTitle = formattedEmployer + formattedTitle; 
 $(".work-entry:last").append(formattedEmployerTitle);
 var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].locationCurrent);
 $(".work-entry:last").append(formattedLocation);
 var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
 $(".work-entry:last").append(formattedDate); 
 var formattedDisc = HTMLworkDescription.replace("%data%",work.jobs[job].responsibilities);
 $(".work-entry:last").append(formattedDisc); 
 }
}
work.display();


//--------------------work ends here-------------------//
//--------------------projects start-------------------//

var projects = {
  "projects": [
{
  "title": "Assistant Store Manager",
  "dates" : "November 2013 - April 2014",
  "description" : ["Localize all inventory management to the confines of the inventory room to ensure that all inventory is accounted for, maintained and only accessed in the proper way.",
                  "Integrate the DIRECT feedback modle into the every day vinacular and practice.", "Weekly check-in's as well as tracker to ensure every business customer is taken care of as well as managing any oppurtunities"],
  "location": "Studio City, Ca"
},

{
  "title": "Assistant Store Manager",
  "dates": "April 2014 - Current",
  "description": ["District wide mock audit team.", "Implament TL in every location in the district as well as introduce the use of the DIRECT coaching modle.",
                  "Weekly check-in's as well as tracker to ensure every business customer is taken care of as well as managing any oppurtunities"],
  "location": "New York, New York"


}

  ]
}




projects.display = function(){
for(project in projects.projects){

$("#projects").append(HTMLprojectStart);

var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
    


    }
  }

projects.display();

//--------------------projects end--------------------//



//--------------------education starts here-----------//
  
var education= {  
"schools":[
  
    {
      "name": "Los Angeles Pierce College",
      "location": "Woodland Hills, Ca",
      "degree": "Associates Degree",
      "dates": 2008,
      "major": "Criminal Justice"
},
  {
      "name": "Udacity",
      "location": "www.udacity.com",
      "degree": "Front End Web Design",
      "dates": "Current",
      "major": "Front End Web Design"
  }
  
  ]
};

education.display = function() {
  
for (school in education.schools){
  $("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry:last").append(formattedName, formattedDegree, formattedLocation, formattedDates, formattedMajor);
       


  }
}
education.display();
//--------------education ends here-----------------------//


if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.display = "none";
};

$("#mapDiv").append(googleMap);








