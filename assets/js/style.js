/*
 * Styling and animation for StudyBuddy
 */

// Click expand
// $(".expander").on("click", function() {
//   event.stopPropagation();
//   if ($(this).closest('tr').next('tr').css('display') === 'none') {
//     $(this).closest('tr')
//       .next('tr')
//       .css({
//         'display': 'table-row',
//         'opacity': 0,
//       })
//       .animate({opacity: 1}, 500);
//   }
//   else {
//     $(this).closest('tr')
//     .next('tr')
//     .animate({opacity: 0}, 500, function() {
//       $(this).css('display','none');
//     });
//   }
// });

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
  if ($(this).closest('tr').next('tr').val('class').is('.schedule')) {
    let rowId = $(this).closest('tr').attr('id');
    let rowNumber = parseInt(rowId[3]);
    let nextRowNumber = rowNumber++;
    let nextRow = "row" + nextRowNumber;
    
    // Expand the row
    $(this).closest('tr').after(`
      <tr id="row${rowNumber}-description">
        <td colspan="5">
          <div id="row${rowNumber}-div" style="display: none;">
            <p><strong>Description: </strong>
        </td>
      </tr>
    `);
  }
  else {
    console.log('false');
  }
});

// $("#row1 .expander").on("click", function() {
//   if ($(this).closest('tr').next('tr').val("id").is("#row1-description")) {
//     // Contract the row
//     $('#row1-div').slideUp(500, function() {
//       $('#row1-description').remove();  
//     }); 
//   }
//   else {
//     // Expand the row
//     $('#row1').after(`
//       <tr id="row1-description">
//         <td colspan="5">
//           <div id="row1-div" style="display: none;">
//             <p><strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, quos perferendis eos est animi dicta ab repellendus earum blanditiis hic obcaecati odio debitis, cum, dignissimos magni error asperiores velit!</p>
//             <p><strong>Address: </strong>123 Study St., City, ST 12345</p>
//           </div>
//         </td>
//       </tr>
//     `);
//     $("#row1-div").slideDown();
//   }
// });

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
