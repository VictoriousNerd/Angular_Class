var Storage1 = /** @class */ (function () {
    function Storage1() {
        this.items = [];
    }
    Storage1.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Storage1.prototype.getItems = function () {
        return this.items;
    };
    return Storage1;
}());
var stringStorage = new Storage1();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
console.log(stringStorage.getItems());
var numberStorage = new Storage1();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
