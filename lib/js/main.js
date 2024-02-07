const app = {
    data(){
      return {
        neueAufgabe: "",
        aufgaben:[
          {beschreibung: "Aufstehen", stand: false},
          {beschreibung: "lavar", stand: true},
          {beschreibung: "sacar basura", stand: true},
          {beschreibung: "tender cama", stand: false},
          {beschreibung: "sepillar", stand: true},
          {beschreibung: "mover", stand: false},
          {beschreibung: "colocar", stand: true},
        ],
        //neueAufgabe:'' //Ich denke eine zweite "neueAufgabe" wäre hier überflusich, oder?. 
      };
    },

    

    methods:{
      aufgabeHinzufuegen(){
          this.aufgaben.push({beschreibung: this.neueAufgabe, stand:false});
          this.neueAufgabe = '';
      },
      loeschen(index){
        this.aufgaben.splice(index, 1);
      },
      
      erledigtWechseln(index){
        this.aufgaben[index].stand = !this.aufgaben[index].stand;
        
      },
    },
  
  
    computed: {
erledigt() {
return this.aufgaben.filter(aufgabe => aufgabe.stand);
},
nichtErledigt() {
return this.aufgaben.filter(aufgabe => !aufgabe.stand);
},
anzahlErledigt() {
return this.erledigt.length;
},
anzahlNichtErledigt() {
return this.nichtErledigt.length;
}
},
};

  
  
   Vue.createApp(app).mount("#aufgabenApp");