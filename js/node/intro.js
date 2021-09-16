var student = "Bruno";
var numBelts = 3;
var courses = ["Python", "Javan", "Mern"];
var jobApplication = {
    company: "Google",
    location: "DC",
    dateApplied: "2021-08-30",
    numYearsExperienceReq: 5000000,
    experienceLevel: "entry",
    applyAnyways: true,
    studensWhoApplied: ["Laura", "Oliver", "Bruno"]
}

function do5something(){
    for(var i = 0; i<courses.length; i++){
        console.log(courses[i])
    }
}

function hello(){
    var nameToGreet = "Laura";
    console.log("hello " + nameToGreet);
}

do5something()

hello()