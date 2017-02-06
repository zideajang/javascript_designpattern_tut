sparrow.Controller = function(){
    var view = null;
    var model = null;
    this.init = function(){
        console.log("init");
        model = new sparrow.Model();
        view = new sparrow.View(this);
        view.render(model);
        model.register(view);
        model.notify();
    }

    this.increase = function(){
        model.add(1)
        model.notify();
    }

    this.decrease = function(){
        model.sub(1);
        model.notify();
    }
}
