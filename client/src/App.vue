<template>
  <div id="app">
    {{tweets}}
    <mapbox
      access-token="pk.eyJ1IjoiaW5pdGlhbGFwcHMiLCJhIjoiY2pzMnBzZGZnMDM0azQ5bDdyOHdraHV1ZyJ9.JdYkI5UwxhJgJOkbm2_8rw"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-117.78, 33.67],
        zoom: 9
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left'
      }"
      :scale-control="{
        show: true,
        position: 'top-left'
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left'
      }">
      </mapbox>
  </div>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';
  import 'bootstrap';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import TwitterService from "./twitterService";

  export default {
    name: 'app',
    components: { Mapbox },
    data(){
      return{
        tweets: [],
        error: ''
      }
    },
    async created(){
      try{
        this.tweets = await TwitterService.getTweets();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #map {
    width: 100%;
    height: 700px;
  }
  #map .mapboxgl-canvas {
    position: inherit !important;
  }
</style>


