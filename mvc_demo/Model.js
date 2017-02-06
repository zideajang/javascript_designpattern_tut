var sparrow = sparrow || {};

sparrow.Model = function(){
    var counter = 0;

    var views = [];
    var self = this;

    this.register = function(view){
        views.push(view);
    }

    this.notify = function(){
        for( var i = 0; i < views.length; i++){
            views[i].render(self);
        }
    }

    this.add = function(v){
        if(counter < 100) counter += v;
    }

    this.sub = function(v){
        if(counter > 0 ) counter -= v;
    }

    this.getVal = function(){
        return counter;
    }
}