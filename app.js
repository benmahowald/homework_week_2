// console.log('app.js handshake');

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
  console.log('in displayStudents:', students);
  var output = $('#outputDiv');
  output.empty();
  for (var i = 0; i < students.length; i++) {
    var output = $('#outputDiv');
    output.append('<h2>' + students[i].first_name + ' ' + students[i].last_name + '</h2><h3>' +
    students[i].info + '</h3>');
  }//end for

  $('#prev').on('click', function () {
    console.log('clicked prev');
    for (var i = 0; i < students.length; i++) {
      $('#outputDiv').fadeOut();
    }

  });//end prev click

  // $('#next').on('click', function () {
  // console.log('clicked next');
  // });//end next click
};//end displayStudents
