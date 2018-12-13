export class Grupos {
    
    //grupos:any[];
    grupoA; grupoB; grupoC; grupoD; grupoE;grupoF; grupoG; grupoH;

    constructor(){
        this.cargarGrupos();
       // this.grupos=[this.grupoA,this.grupoB,this.grupoC,this.grupoD,this.grupoE,this.grupoF,this.grupoG,this.grupoH];
    }

    cargarGrupos():void{

        this.grupoA={
            "nombre":"Grupo A",
            "equipos":[
                {"id":"A1","nombre":"Egipto"},{"id":"A2","nombre":"Rusia"},
                {"id":"A3","nombre":"Saudita"},{"id":"A4","nombre":"Uruguay"}
            ],
            "resultadosBD":""
        };
        this.grupoB={
            "nombre":"Grupo B",
            "equipos":[
                {"id":"B1","nombre":"Irán"},{"id":"B2","nombre":"Marruecos"},
                {"id":"B3","nombre":"Portugal"},{"id":"B4","nombre":"España"}
            ],
            "resultadosBD":""
        };
        this.grupoC={
            "nombre":"Grupo C",
            "equipos":[
                {"id":"C1","nombre":"Australia"},{"id":"C2","nombre":"Dinamarca"},
                {"id":"C3","nombre":"Francia"},{"id":"C4","nombre":"Perú"}
            ],
            "resultadosBD":""
        };
        this.grupoD={
            "nombre":"Grupo D",
            "equipos":[
                {"id":"D1","nombre":"Argentina"},{"id":"D2","nombre":"Croacia"},
                {"id":"D3","nombre":"Islandia"},{"id":"D4","nombre":"Nigeria"}
            ],
            "resultadosBD":""
        };
        this.grupoE={
            "nombre":"Grupo E",
            "equipos":[
                {"id":"E1","nombre":"Brazil"},{"id":"E2","nombre":"Costa Rica"},
                {"id":"E3","nombre":"Suiza"},{"id":"E4","nombre":"Serbia"}
            ],
            "resultadosBD":""
        };
        this.grupoF={
            "nombre":"Grupo F",
            "equipos":[
                {"id":"F1","nombre":"Alemania"},{"id":"F2","nombre":"Corea"},
                {"id":"F3","nombre":"México"},{"id":"F4","nombre":"Suecia"}
            ],
            "resultadosBD":""
        };
        this.grupoG={
            "nombre":"Grupo G",
            "equipos":[
                {"id":"G1","nombre":"Bélgica"},{"id":"G2","nombre":"Inglaterra"},
                {"id":"G3","nombre":"Panamá"},{"id":"G4","nombre":"Túnez"}
            ],
            "resultadosBD":""
        };
        this.grupoH={
            "nombre":"Grupo H",
            "equipos":[
                {"id":"H1","nombre":"Colombia"},{"id":"H2","nombre":"Japón"},
                {"id":"H3","nombre":"Polonia"},{"id":"H4","nombre":"Senegal"}
            ],
            "resultadosBD":""
        };
    }

 
}
