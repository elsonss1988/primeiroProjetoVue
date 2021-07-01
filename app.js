console.log("Hello")
const Counter={
    data(){
        return{
           contador: 52,
           mensagem: "Ola",
           imagem: 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png'

        }
    },
    computed:{
        multiplicado(){
            return this.contador*2
        },
        mensagemExtra(){
            return this.mensagem+" !!!"
        }
    },
    methods:{
        Ola(){
            console.log("Hi Hi Hi")
            this.mensagem="Hello World"
        }
    },
    created(){
        alert('Test')
    }
            
}
Vue.createApp(Counter).mount('#app')