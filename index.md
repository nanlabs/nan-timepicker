---
layout: project
page: project
title: "NaN Labs - NaN Time-picker"
description: "A lightweight time-picker plugin based on 'jQuery timepicker plugin'."
home-text: Home
footer-title: Get in touch
logoImg: logo-195x120.png
section: project
header: "NaN Time-picker"
lead-text: "A lightweight time-picker plugin based on 'jQuery timepicker plugin'."
---
<div class="example">

  <h3>Basic Example</h3>
  <p>Regular list with the hours of the day in 30 minutes step.</p>

  <div>
    <label for="example1">Time</label>
    <input id="example1" type="text" />
  </div>

  <script>
    $(function() {
      $('#example1').timepicker();
    });
  </script>
  <pre>$('#example1').timepicker();</pre>

</div>

<div class="example">

  <h3>Scroll Default Example</h3>
  <p>Set the scroll position to local time if no value selected.</p>

  <div>
    <label for="example2">Time</label>
    <input id="example2" type="text" />
  </div>

  <script>
    $(function() {
      $('#example2').timepicker({ 
        'scrollDefaultNow': true 
      });
    });
  </script>
  <pre>
	$('#example2').timepicker({ 
	'scrollDefaultNow': true 
	});</pre>

</div>

<div class="example">

  <h3>DisableTimeRanges Example</h3>
  <p>Prevent selection of certain time values.</p>

  <div>
    <label for="example3">Time</label>
    <input id="example3" type="text" />
  </div>

  <script>
    $(function() {
      $('#example3').timepicker( { 
        'disableTimeRanges': [['1am', '2am'], ['3am', '4:01am']] 
      });
    });
  </script>
  <pre>
	$('#example3').timepicker( { 
	'disableTimeRanges': [['1am', '2am'], ['3am', '4:01am']] 
	});</pre>

</div>

<div class="example">

  <h3>With Custom Class Example</h3>
  <p>Use a specific class to customise how the modal window looks like.</p>

  <div>
    <label for="example4">Time</label>
    <input id="example4" type="text" />
  </div>

  <script>
    $(function() {
      $('#example4').timepicker( { 
        'className': 'no-scroll',
        'disableTimeRanges': [[0, 10800], ['7pm', '11pm']]
      });
    });
  </script>
  <pre>
	$('#example4').timepicker( { 
	'className': 'no-scroll',
	'disableTimeRanges': [[0, 10800], ['7pm', '11pm']]
	});</pre>

</div>

<div class="example">

  <h3>Several Time Ranges Example</h3>
  <p>Define several time ranges. Allows you to specify class names and prevent selection time (optional).</p>

  <div>
    <label for="example5">Time</label>
    <input id="example5" type="text" />
  </div>

  <script>
    $(function() {
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
    });
  </script>
  <pre>
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
	});</pre>

</div>

<div class="example">

  <h3>Timepicker with Legend Example</h3>
  <p>Display a legend to explain range times styles or any other purpose.</p>

  <div>
    <label for="example6">Time</label>
    <input id="example6" type="text" />
  </div>

  <script>
    $(function() {
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
  </script>
  <pre>
	$('#example6').timepicker( { 
	className: 'no-scroll',
	disableTimeRanges: [[0, 10800], ['7pm', '11pm']],
	legend: '&lt;span&gt;This is a legend&lt;/span&gt;',
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
	});</pre>

</div>