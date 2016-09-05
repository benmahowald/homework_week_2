// console.log('app.js handshake');

var i = 0;

$(document).ready(function () {
  // console.log('in doc ready');

  var studentsArrayURL = 'http://devjana.net/pi/pi_students.json';
  $.ajax({
    url: studentsArrayURL,
    dataType: 'JSON',
    success: function (data) {
      // console.log(data.students);

      retrieveStudents(data.students);

    },//end success
  });//end ajax
});//end document ready

var retrieveStudents = function (students) {
    // console.log('in displayStudents');

    //select the output div
    var output = $('#outputDiv');

    //append student info to the dom
    var displayStudents = function () {

      //empty the output div
      output.empty();

      output.fadeIn(700);

      //reset i so the next button will wrap to the beginning of the array
      if ( i > students.length - 1 ) {
        i = 0;
      }

      //reset i so the next button will wrap to the end of the array
      if ( i < 0 ) {
        i = students.length - 1;
      }


      //append student information to the dom
      output.append('<h2>' + students[i].first_name + ' ' + students[i].last_name + '</h2><h3>' +
      students[i].info + '</h3><p>student: ' + ( i + 1 ) + ' / ' + students.length);

    };//end displayStudents

    displayStudents();

      //click events to trigger next and previous buttons
      $('#prev').on('click', function () {
        i--;
        output.fadeOut(700, displayStudents);

      });//end prev click

      $('#next').on('click', function () {
        i++;
        output.fadeOut(700, displayStudents);
      });//end next click


    //append buttons with student names
    var displayButtons = function () {
      // console.log('in displayButtons');
      for (var i = 0; i < students.length; i++) {
        //append a button for each student to the dom
        $('#studentSelect').append('<button class="students" data-num="' +
        i + '">' + students[i].first_name + '</button>');
      }//end for
    };// end displayButtons

    displayButtons();

    $('body').on('click', '.students', function () {
      // console.log('body button click');
      i = Number($(this).data('num'));
      output.fadeOut(700, displayStudents);
    });


  };//end retrieveStudents
