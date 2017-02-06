sparrow.View = function(controller){

    var $counter = $("#count");
    var $incrementButton = $("#increment");
    var $decrementButton = $("#decrement");

    $incrementButton.click(controller.increase);
    $decrementButton.click(controller.decrease);
    this.render = function(model){
        $counter.text("计数器: " + model.getVal());
    }
}