function Bomb(){
    this.message = "bomb!!!";
    this.explode = function(){
        setTimeout((function(){
            console.log(this.message);
        }).bind(this), 2000)
    }
}

var bomb = new Bomb();
bomb.explode();