$(document).ready(function () {

  $(".saveBtn").click(function (event) {
    var timeBlock = $(this).closest(".time-block");
    var timeBlockId = timeBlock.attr("id");
    var description = timeBlock.find(".description").val();

    localStorage.setItem(timeBlockId, description);
  });

  $(".time-block").each(function () {
    var currentTime = dayjs().format('H');
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentTime) {
      $(this).addClass("past");
    } else if (timeBlockHour == currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    var storageKeyID = $(this).attr("id");
    var storageText = localStorage.getItem(storageKeyID);
    var textAreaEl = $(this).find("textarea");
    if (storageText !== null) {
      textAreaEl.val(storageText);
    } else {
      console.log("Nothing found.")
    }
  });
  var currentDay = dayjs().format('MM/DD/YYYY');
  $("#currentDay").text(currentDay);
});

