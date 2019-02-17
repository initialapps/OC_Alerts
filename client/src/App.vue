<template>
  <div id="app">
    <div id="overlay">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>OC<small> Alerts</small></h1>
          </div>
          <div class="col text-right">
            <img class="logo" src="./assets/logo.png"/>
          </div>
        </div>
      </div>
    </div>
    <mapbox
      access-token="pk.eyJ1IjoiaW5pdGlhbGFwcHMiLCJhIjoiY2pzMnBzZGZnMDM0azQ5bDdyOHdraHV1ZyJ9.JdYkI5UwxhJgJOkbm2_8rw"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-117.78, 33.67],
        zoom: 9
      }"
      :nav-control="{ 
        show: false
      }"
      @map-load="mapLoad"
      >
      </mapbox>
  </div>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import TwitterService from "./twitterService";
  import geo from 'mapbox-geocoding';
 
  geo.setAccessToken("pk.eyJ1IjoiaW5pdGlhbGFwcHMiLCJhIjoiY2pzMnBzZGZnMDM0azQ5bDdyOHdraHV1ZyJ9.JdYkI5UwxhJgJOkbm2_8rw");

  export default {
    name: 'app',
    components: { Mapbox },
    methods: {
      mapLoad(map) {
        console.log(map);
        //this.rotateCamera(0);
        this.$data.tweets.map(tweet => { 
          geo.geocode('mapbox.places', tweet.address, function (err, geoData) {
            if(geoData){
              let popup = new mapboxgl.Popup().setHTML(tweet.call + '<br>' + tweet.address + '<br>' + tweet.time);
              new mapboxgl.Marker().setLngLat(geoData.features[0].center).setPopup(popup).addTo(map);
            } 
          });
        })
      },
      rotateCamera(timestamp) {
        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map.rotateTo((timestamp / 100) % 360, {duration: 0});
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
      }
    },
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800,900');
  body{
    margin: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #overlay{
    padding-top:30px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  #overlay h1{
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size:50px;
  }
  #overlay small{
    font-weight: 600;
    font-size: 50%;
  }
  #overlay .logo{
    width: 55px;
    margin: 5px;
  }
  @media only screen and (max-width: 768px) {
    #overlay h1 {
      font-size:32px;
    }
    #overlay .logo {
      width: 34px;
    }
  }
  #map {
    width: 100%;
    height: 100vh;
  }
  #map .mapboxgl-canvas {
    position: inherit !important;
  }
</style>


