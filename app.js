// console.log('app.js handshake');

var i = 0;

$(document).ready(function () {
  console.log('in doc ready');

  var studentsArrayURL = 'http://devjana.net/pi/pi_students.json';
  $.ajax({
    url: studentsArrayURL,
    dataType: 'JSON',
    success: function (data) {
      // console.log(data.students);

      displayStudents(data.students);

    },//end success
  });//end ajax
});//end document ready

var displayStudents = function (students) {
    console.log('in displayStudents');

    //select the output div
    var output = $('#outputDiv');

    //empty the output div
    output.empty();

    //append student info to the dom
    var outputStuff = function () {
      if(i > students.length - 1) {
        i = 0;
      }
      if(i < 0) {
        console.log('in if');
        i = students.length - 1;
      }
      output.append('<h2>' + students[i].first_name + ' ' + students[i].last_name + '</h2><h3>' +
      students[i].info + '</h3><p>student: ' + (i + 1) + ' / ' + students.length);
      console.log(i);
    };

    outputStuff();

    $('#prev').on('click', function () {
      output.empty();
      i--;
      outputStuff();
    });//end prev click

    $('#next').on('click', function () {
      output.empty();
      i++;
      outputStuff();
    });//end next click

  };//end displayStudents
