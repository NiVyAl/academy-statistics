var courses = [360, 270, 360, 90, 90, 180, 360, 360, 360, 270, 90, 180, 360];
var coursesContainer = document.querySelectorAll(".course");

for (var i = 0; i < courses.length; i++) {
  if (courses[i] == 90) {
    coursesContainer[i].classList.add("course--90");
  }
  
  if (courses[i] == 180) {
    coursesContainer[i].classList.add("course--180");
  }
  
  if (courses[i] == 270) {
    coursesContainer[i].classList.add("course--270");
  }
}