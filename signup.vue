<template>
    <div>
        <div id="id01" class="modal">
  
            <form class="modal-content animate" action="/action_page.php">
                <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
                </div>

                <div class="container">
                <label for="uname"><b>Full Name</b></label>
                <input type="text" placeholder="Full Name" v-model="form.name" required>

                <label for="email"><b>Email</b></label>
                <input type="email" placeholder="abc@**.com" v-model="form.email" required>

                 <label for="phone"><b>Phone Number</b></label>
                <input type="number" placeholder="your phone number" v-model="form.phone" required>

                <label for="program"><b>Program</b></label>
                <input type="text" placeholder="choose program" v-model="form.program" required>
                 
                 <label for="pekerjaan"><b>Pekerjaan</b></label>
                <input type="text" placeholder="Pekerjaan" v-model="form.pekerjaan" required>

                <label for="alamat"><b>Alamat</b></label>
                <input type="text" placeholder="alamat" v-model="form.alamat" required>
                 

                <button type="submit" v-on:click="register">Login</button>

                </div>

            </form>
        </div>

    </div>
</template>

<script>
export default {
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
}
</script>
