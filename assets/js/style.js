/*
 * Styling and animation for StudyBuddy
 */

// Styling variables (see also _variables.scss)
const primaryLight = "#52c7b8";

// We need dummy data
const database1 = {
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

$(document).on("click", ".expander", function() {
  const rowId = $(this).closest('tr').attr('id');
  const rowNum = $(this).closest('tr').index();
  const rowDiv = "row" + rowNum + "-div";

  if ($(this).closest('tr').next('tr').val('class').is('.description')) {
    const rowDescription = "#row" + rowNum + "-description";

    $("#"+rowDiv).slideUp(500, function() {
      $(rowDescription).remove();
    });
  }
  else {
    const databaseRowId = rowId + "Data";
    // const currentRow = $(this).closest('tr').index();
    console.log("Current row:",rowNum);
    const currentDescription = descriptionArray[rowNum];
    // how to get current description
    /*
      Select #meeting-table
      Select closest ('tr'), find out which row it is
      Use that index to pull the description from the array
    */
    // const currentAddress = database1[databaseRowId]["address"];


    // Expand the row
    $(this).closest('tr').after(`
      <tr id="row${rowNum}-description" class="description">
        <td colspan="5">
          <div id="${rowDiv}" style="display: none;">
            <p><strong>Description: </strong>${currentDescription}</p>
          </div>
        </td>
      </tr>
    `);
    $("#row"+rowNum+"-description").css('background-color',primaryLight);
    $("#row"+rowNum+"-description").children('td').css('padding','0 10px');
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

 /*
  * 3-day forecast:
  * Day , High , Low , conditions icon
  * Sat , 54F , 32F , icon 
  * Sun , 54F , 32F , icon 
  * Mon , 54F , 32F , icon 
  * Tue , 54F , 32F , icon
  */
