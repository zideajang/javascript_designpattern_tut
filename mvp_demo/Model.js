var sparrow = sparrow || {};

sparrow.Model = function(){
    var counter = 0;

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