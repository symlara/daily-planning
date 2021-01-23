var items= {};


// elements that make up an item
var ItemEl = $("<div>").addClass("group-item");

var updateItem= function(taskEl) {
    var time = moment().format("ddd, hA");

};

var loadItem = function() {
    items = JSON.parse(localStorage.getItem("items"));

    if (!items) {
        items = {
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

    $.each(items, function(list, arr) {
        console.log(list, arr);

        arr.forEach(function(item) {
            updateItem(item.text, item.time, list);
        });
    });
};

var saveItems = function() {
    localStorage.setItem("items", JSON.stringify(items));
}

$(".group-item").on("click", "p", function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass(".group-item").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});









$(".container").sortable({
    connectWith: (".container"),
    scroll: false
});

