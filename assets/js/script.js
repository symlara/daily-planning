var task = [
    "Work Meeting, Learn Bootstrap, School Work, Meeting, Log off"
];

var date = moment().format("dddd, MMMM D");
console.log(date);

// elements that make up an item
var ItemEl = $("<div>").addClass("group-item");





// local storage call to save whatever is in the class called 'task'



    // localStorage call to get whatever info is in the 'task' class




// jquery that tells the 'task' input section to change the text when it's clicked
$(".group-item").on("click", "textarea", function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass(".group-item").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

var getInput = localStorage.setItem("task", task[0]);

var savedData = localStorage.getItem("getInput");

// event listener call for save buttons
$(".btn-save").click(function() {
  

    console.log(".btn-save");
});




// ex: for first valueid: $("#value0").val("walk the dog");






$(".container").sortable({
    connectWith: (".container"),
    scroll: false
});

