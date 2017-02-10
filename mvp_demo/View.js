sparrow.View = function(presenter){

    

    var $counter = $("#count");
    var $incrementButton = $("#increment");
    var $decrementButton = $("#decrement");

    
    this.init = function(){
        var presenter = new sparrow.Presenter(this);
        $incrementButton.click(presenter.increase);
        $decrementButton.click(presenter.decrease);
    }
    this.render = function(value){
        $counter.text("计数器: " + value);
    }
}