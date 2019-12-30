<template>
    <div>
        <button class="btn btn-success" @click="tang">tang</button>
        <button class="btn btn-success" @click="giam">giam</button>
    </div>
</template>
 
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        tang() {
            this.$store.dispatch('up')
        },
        giam(){
            this.$store.dispatch('down')
        }
    }
}
</script>

<style >

</style>