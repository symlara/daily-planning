var task= {};


// elements that make up an item
var ItemEl = $("<div>").addClass("group-item");

var updateItem= function(taskEl) {
    var time = moment().format("ddd, hA");

};

// local storage call to save whatever is in the class called 'task'

let saveItems = 'task';
localStorage.setItem(saveItems, 'task');




    if (!task) {
        tasks = {
            item1: [],
            item2: [],
            item3: [],
            item4: [],
            item5: [],
            item6: [],
            item7: [],
            item8: [],
            item9: []
        };
    }

    $.each(task, function(list, arr) {
        console.log(list, arr);

        arr.forEach(function(item) {
            updateItem(item.text, item.time, list);
        });
    });


    // localStorage call to get whatever info is in the 'task' class

let myItem = localStorage.getItem(saveItems);


// jquery that tells the 'task' input section to change the text when it's clicked
$(".group-item").on("click", "p", function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass(".group-item").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

// event listener call for save buttons
$(".btn-save").click(function() {
    
});









$(".container").sortable({
    connectWith: (".container"),
    scroll: false
});

