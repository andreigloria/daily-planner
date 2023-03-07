// sets current day 
var today = moment()
$("#currentDay").text(today.format("D MM YYYY"));

// document.ready ensures the document is loaded
$(document).ready(function () {
    // listen for save button class clicks
    $('.saveBtn').on('click', function () {
      // (this) refers to save button, 
      // siblings refers its in the same parent container
      var value = $(this).siblings('.description').val();
      // sets time of the id hour parent
      var time = $(this).parent().attr('id');
      // saves time and value in localStorage
      localStorage.setItem(time, value);
    });
      //set function for updating hour
      function hourUpdater() {
        // set variable for today's current hour
        var currentHour = today.hours();
        // targets each time block id 
        $('.time-block').each(function () {
          // variable set to block hour using parseInt 
          // this referring to timeblock id to target hour 
          // split gets rid of '-' to target interger
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
          // if we've moved past this time
          // class of past is added, linked to css to change colours
          if (blockHour < currentHour) {
            $(this).addClass('past');
            // else if blockhour equals to currenthour,
            // past class is removed,
            // replaced with present class linked to css
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            // else both past and present removed,
            // future class is added
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
      hourUpdater();
      // variable set for interval to check if current time needs to be updated
      var interval = setInterval(hourUpdater, 15000);
      // targets each id's description,
      // to load any saved data from each id's localStorage
      $('#hour-9 .description').val(localStorage.getItem('hour-9'));
      $('#hour-10 .description').val(localStorage.getItem('hour-10'));
      $('#hour-11 .description').val(localStorage.getItem('hour-11'));
      $('#hour-12 .description').val(localStorage.getItem('hour-12'));
      $('#hour-13 .description').val(localStorage.getItem('hour-13'));
      $('#hour-14 .description').val(localStorage.getItem('hour-14'));
      $('#hour-15 .description').val(localStorage.getItem('hour-15'));
      $('#hour-16 .description').val(localStorage.getItem('hour-16'));
      $('#hour-17 .description').val(localStorage.getItem('hour-17'));
      // display current day on page
      $('#currentDay').text(moment().format('dddd, MMMM Do'));
    });