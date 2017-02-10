sparrow.Presenter = function(view){
   
    var _model = new sparrow.Model();
    var _view = view;
    _view.render(_model.getVal());
    

    this.increase = function(){
        //业务逻辑
        _model.add(1)
        _view.render(_model.getVal());
    }

    this.decrease = function(){
        //业务逻辑
        _model.sub(1);
        _view.render(_model.getVal());
    }
}
