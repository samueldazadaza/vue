const app = new Vue({
    el: '#app', //dentro de este id se trabajara con vue
    data: { //abrir otro objeto
        titulo: 'Aplicativo para crear inventario en empresa',
        equipos: [ //contruyendo objetos dentro de array dentro de llaves
            {nombre:'Video gatuno', cantidad:10, user:'User: Cat10', url:'https://source.unsplash.com/250x150/?cat'},
            {nombre:'Video perruno', cantidad:0, user:'User: Dogstyle', url:'https://source.unsplash.com/250x150/?dog'},
            {nombre:'video de aves', cantidad:11, user:'User: BirdBox', url:'https://source.unsplash.com/250x150/?bird'},
        ],
        nuevoequipo: '',
        total: 0
    },
    //creando metodos
    methods:{
        agregarequipo () {
            this.equipos.push({ //this = para accedes al data
                nombre: this.nuevoequipo,//trae datos desde input desde html
                cantidad:0,
                url:'https://source.unsplash.com/250x150/',
                user: 'User: NameX',
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