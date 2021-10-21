class Lampa{
    constructor(elem, id){

        this.elem = elem;
        this.id = id;
        this.allapot = false;
        this.setLampa();

        this.elem.on("click", ()=>{
            this.atvalt();
            this.kattintasTrigger();
        });

        
    }

    atvalt(){
        this.allapot =! this.allapot;
        this.setLampa();
        
    }
    setLampa(){
        if(this.allapot){
            this.elem.css("background-color", "green");
        } else{
            this.elem.css("background-color", "yellow");
        }
    }
    kattintasTrigger(){
        let esemeny = new CustomEvent("lampaKattintas", {detail:this});
        window.dispatchEvent(esemeny);

    }
    

}