class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref=database.ref('gameState')
        gamestateref.on("value", function(data){
          gameState=data.val()  
        })
    }
    updategamestate(state){
        var gamestateref=database.ref('/')
        gamestateref.update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player= new Player()
            player.getPlayerCount()
            form= new Form()
            form.display()
        }
    }
}
