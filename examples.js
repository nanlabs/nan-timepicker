
$(function() {

  $('#example1').timepicker();

  $('#example2').timepicker({ 
    'scrollDefaultNow': true 
  });

  $('#example3').timepicker( { 
    'disableTimeRanges': [['1am', '2am'], ['3am', '4:01am']] 
  });

  $('#example4').timepicker( { 
    'className': 'no-scroll',
    'disableTimeRanges': [[0, 10800], ['7pm', '11pm']]
  });

  $('#example5').timepicker( { 
    className: 'no-scroll',
    disableTimeRanges: [[0, 10800], ['7pm', '11pm']],
    timeRanges: [
      {
        className: 'highlighted',
        disabled: true,
        ranges: [['5am', '6am'], ['11am', '11:30am']]
      },
      {
        className: 'highlighted2',
        disabled: false,
        ranges: [['2pm', '3pm'], ['4pm', '7pm']]
      }
    ]
  });

  $('#example6').timepicker( { 
    className: 'no-scroll',
    disableTimeRanges: [[0, 10800], ['7pm', '11pm']],
    legend: _.unescape('&lt;span&gt;This is a legend&lt;/span&gt;'),
    timeRanges: [
      {
        className: 'highlighted',
        disabled: true,
        ranges: [['5am', '6am'], ['11am', '11:30am']]
      },
      {
        className: 'highlighted2',
        disabled: false,
        ranges: [['2pm', '3pm'], ['4pm', '7pm']]
      }
    ]
  });

});