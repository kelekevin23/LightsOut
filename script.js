$(function(){

    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const meret = 9;
    const lampaTomb = [];
    
    for (let index = 0; index < meret; index++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const lampa = new Lampa(ujElem, index); 
            lampaTomb.push(lampa);
    }

    sablonElem.remove();


    $(window).on("lampaKattintas", (event)=>{
        //console.log(event.detail);// aktuális kártya adata
        let azon = event.detail.id;
        let meret = 3;

        if(azon > meret - 1){
            lampaTomb[azon - meret].atvalt();
        }
        if(azon < meret * meret - meret){
            lampaTomb[azon + meret].atvalt();
        }
        if(azon % meret !== 0){
            lampaTomb[azon - 1].atvalt();
        }
        if(azon % meret !== meret -1){
            lampaTomb[azon + 1].atvalt();
        }

        /*let db = 0;
        for (let index = 0; index < lampaTomb.length; index++) {
            if (event.detail.allapot === true){
                console.log("jó")
                db++;
            }
            
        }
        if (db === 45){
            alert("Nyertél!");
        }*/
        /*
        if (event.detail.id === 0){
            lampaTomb[1].atvalt();
            lampaTomb[3].atvalt();
        } else if (event.detail.id === 1){
            lampaTomb[0].atvalt();
            lampaTomb[2].atvalt();
            lampaTomb[4].atvalt();
        } else if (event.detail.id === 2){
            lampaTomb[1].atvalt();
            lampaTomb[5].atvalt();
        } else if (event.detail.id === 3){
            lampaTomb[0].atvalt();
            lampaTomb[4].atvalt();
            lampaTomb[6].atvalt();
        } else if (event.detail.id === 4){
            lampaTomb[1].atvalt();
            lampaTomb[3].atvalt();
            lampaTomb[5].atvalt();
            lampaTomb[7].atvalt();
        } else if (event.detail.id === 5){
            lampaTomb[2].atvalt();
            lampaTomb[4].atvalt();
            lampaTomb[8].atvalt();
        } else if (event.detail.id === 6){
            lampaTomb[3].atvalt();
            lampaTomb[7].atvalt();
        } else if (event.detail.id === 7){
            lampaTomb[4].atvalt();
            lampaTomb[6].atvalt();
            lampaTomb[8].atvalt();
        } else if (event.detail.id === 8){
            lampaTomb[5].atvalt();
            lampaTomb[7].atvalt();
        }*/
        
    });
});