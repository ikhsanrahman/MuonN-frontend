import daftar from '@/signup.vue'
console.log(daftar);



Vue.component( {
    template : {
        'daftar' : daftar,
    }
});




new Vue({
    el:"#service",
    data(){
        return {
            form : {
                name : "",
                email : '',
                phone : '',
                program :'',
                pekerjaan : '',
                alamat : '',
            },
            response : '',

        }
    },
    methods : {
        async register(){
            const response = await axios.post(IP, this.form)
            this.response = response.data
        }
    }

})