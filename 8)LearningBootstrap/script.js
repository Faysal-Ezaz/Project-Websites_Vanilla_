$(document).ready(function() {
    $.ajax({
      url: "https://66a88b92e40d3aa6ff586b49.mockapi.io/api/v1/random", // Replace with your API endpoint
      type: "GET",
      dataType: "json",
      success: function(data) {
        // Handle the successful response
        console.log(data);
        $("#result").html(JSON.stringify(data, null, 2)); // Pretty-print JSON
      },
      error: function(xhr, status, error) {
        // Handle errors
        console.error("Error:", error);
        $("#result").html("An error occurred.");
      }
    });
  }); 


// This is to send the data to the mock endpoint.
$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault();
  
      const data = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val()
      };
  
      $.ajax({
        url: 'https://66a88b92e40d3aa6ff586b49.mockapi.io/api/v1/random',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
          // Handle successful response
          $('#result').html('Data sent successfully: ' + JSON.stringify(response));
        },
        error: function(xhr, status, error) {
          // Handle error
          $('#result').html('An error occurred: ' + error);
        }
      });
    });
  });