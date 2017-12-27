/*
 * Styling and animation for StudyBuddy
 */

// Styling variables (see also _variables.scss)
const primaryLight = "#52c7b8";

// We need dummy data
const database = {
  row1Data: {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!",
    address: "123 Study St., City, ST 12345"
  },
  row2Data: {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!",
    address: "2645 Lafayette St., City, ST 12345"
  },
  row3Data: {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!",
    address: "757 E 20th Ave., City, ST 12345"
  },
  row4Data: {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!",
    address: "12477 S North St., City, ST 12345"
  },
  row5Data: {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!",
    address: "6969 Cool St., City, ST 1234"
  }
}

$(".expander").on("click", function() {
  if ($(this).closest('tr').next('tr').val('class').is('.description')) {
    let rowId = $(this).closest('tr').attr('id');
    let rowNum = parseInt(rowId[3]);
    let rowDescription = "#row" + rowNum + "-description";
    let rowDiv = "#row"+ rowNum + "-div";

    $(rowDiv).slideUp(500, function() {
      $(rowDescription).remove();
    });
  }
  else {
    let rowId = $(this).closest('tr').attr('id');
    let rowNumber = parseInt(rowId[3]);
    let rowDiv = "row" + rowNumber + "-div";
    let databaseRowId = rowId + "Data";
    let currentDescription = database[databaseRowId]["description"];
    let currentAddress = database[databaseRowId]["address"];
    
    // Expand the row
    $(this).closest('tr').after(`
      <tr id="row${rowNumber}-description" class="description">
        <td colspan="5">
          <div id="${rowDiv}" style="display: none;">
            <p><strong>Description: </strong>${currentDescription}</p>
            <p><strong>Address: </strong>${currentAddress}</p>
          </div>
        </td>
      </tr>
    `);
    $("#row"+rowNumber+"-description").css('background-color',primaryLight);
    $("#"+rowDiv).slideDown();
  }
});

// Click CREATE NEW MEETING
$("#add-new").on("click", function() {
  // Show the form
  $("#add-form").slideToggle(600);
});

// Click Submit in form
$("#add-event").on("click", function() {
  event.preventDefault();
  // Hide the form
  $("#add-form").slideUp(600); 
});
