/*
 * Styling and animation for StudyBuddy
 */

// Styling variables (see also _variables.scss)
const primaryLight = "#52c7b8";

$(document).on("click", ".expander", function() {
  const rowNum = $(this).closest('tr').index();
  const rowDiv = "row" + rowNum + "-div";

  if ($(this).closest('tr').next('tr').val('class').is('.description')) {
    const rowDescription = "#row" + rowNum + "-description";

    $("#"+rowDiv).slideUp(500, function() {
      $(rowDescription).remove();
    });
  }
  else {
    console.log("Current row:",rowNum);
    const currentDescription = $(this).closest('tr').attr('data-description');
    
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

 /*
  * 3-day forecast:
  * Day , High , Low , conditions icon
  * Sat , 54F , 32F , icon 
  * Sun , 54F , 32F , icon 
  * Mon , 54F , 32F , icon 
  * Tue , 54F , 32F , icon
  */
