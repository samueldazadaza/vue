const app = new Vue({
    el: '#app', //dentro de este id se trabajara con vue
    data: { //abrir otro objeto
        titulo: 'hola mundo con vue',
        equipos: [ //contruyendo objetos dentro de array dentro de llaves
            {nombre:'kaon', cantidad:10},
            {nombre:'cisco', cantidad:0},
            {nombre:'huawei', cantidad:11},
        ],
        nuevoequipo: '',
        total: 0
    },
    //creando metodos
    methods:{
        agregarequipo () {
            this.equipos.push({ //this = para accedes al data
                nombre: this.nuevoequipo, cantidad:0 //trae datos desde input desde html
            });
            this.nuevoequipo = ''; // para borrar texto pegote de html del input
        }
        
    },
    computed:{
        sumarequipos(){
            this.total = 0;
            for(item of this.equipos){
                this.total = this.total + item.cantidad;
            }
            return this.total;
        }
    }
})