
sparrow.ViewModel = function(){
    var self = this;
    var model = new sparrow.Model();
    console.log(model);
    self.val = ko.observable(model.getVal());
    self.increase = function(){

    }

    // self.increase = function(){
    //     model.add(1);
    //     self.val(model.getVal());
    // }

    // self.decrease = function(){
    //     model.sub(1);
    //     self.val(model.getVal());
    // }

}
var model = new sparrow.Model();
sparrow.ViewModel = {
    val :  ko.observable(model.getVal()),
    increase : function(){
        
            model.add(1);
            this.val(model.getVal());
        
    },
    decrease : function(){
       
            model.sub(1);
            this.val(model.getVal());
        
    }
}

ko.applyBindings(sparrow.ViewModel)