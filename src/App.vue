<template>
  <div id="app">
    <h1>Vuex Test</h1>
    <hr>
    <AppResult :result="result"/>
    <hr>
    <AppCounter @updated="result += $event"/>
  </div>
</template>

<script>
import AppCounter from './components/Counter'
import AppResult from './components/Result'

export default {
  data(){
    return{
      result : 0
    }
  },
  components:{
    AppResult,
    AppCounter
  } 
}
</script>

<style>

</style>
