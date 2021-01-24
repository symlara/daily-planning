var task = [];

var date = moment().format("dddd, MMMM D");
console.log(date);

// elements that make up an item
var ItemEl = $("<div>").addClass("group-item");





// local storage call to save whatever is in the class called 'task'



    // localStorage call to get whatever info is in the 'task' class




// jquery that tells the 'task' input section to change the text when it's clicked
$(".group-item").on("click", "p", function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass(".group-item").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

localStorage.setItem("Input", "#value1");

var savedData = localStorage.getItem("Input");

// event listener call for save buttons
$(".btn-save").click(function() {
    var taskData = $("#value1").val();
    var taskData = $("#value2").val();
    var taskData = $("#value3").val()
    var taskData = $("#value4").val();
    var taskData = $("#value5").val();
    var taskData = $("#value6").val();
    var taskData = $("#value7").val();
    console.log(".btn-save");
});









$(".container").sortable({
    connectWith: (".container"),
    scroll: false
});

