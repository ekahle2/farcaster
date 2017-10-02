
function PlayerBase(){

    this.init();
}

PlayerBase.prototype = {

    constructute: PlayerBase,
    init: function(){
        let contentContainer = document.getElementById('contentDiv');
        let img = document.createElement("img");
        contentContainer.appendChild(img);
        img.src = 'http://via.placeholder.com/350x150';

    }
}
module.exports = PlayerBase;