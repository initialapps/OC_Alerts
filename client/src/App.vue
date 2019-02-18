<template>
  <div id="app">
    <div id="header" class="forward">
      <div class="container fadeIn">
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
        bearing: 180,
        zoom: 6
      }"
      :nav-control="{ 
        show: false
      }"
      @map-load="mapLoad"
    >
    </mapbox>
    <div id="footer" class="forward text-center">
      <span>NOT AFFILIATED WITH OCSD</span>
    </div>
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
        map.easeTo({
          pitch: 60,
          bearing: 0,
          zoom: 9.7,
          duration: 8000
        });
        this.$data.tweets.map(tweet => { 
          geo.geocode('mapbox.places', tweet.address, function (err, geoData) {
            if(geoData){
              let popup = new mapboxgl.Popup().setHTML(tweet.call + '<br>' + tweet.address + '<br>' + tweet.time);
              let marker = new mapboxgl.Marker().setLngLat(geoData.features[0].center).setPopup(popup).addTo(map);
              // Animate marker on click
              marker.getElement().addEventListener('click', function(e){
                let change = (180*(e.clientX/window.outerWidth))-90;//bearing change by marker pos
                let bearing = map.getBearing();
                bearing += change;
                map.easeTo({
                  center: geoData.features[0].center,
                  bearing: bearing,
                  pitch: 60,
                  zoom: 14,
                  duration: 8000
                });
              });
            } 
          });
        })
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
  .forward{
    z-index: 1;
    pointer-events: none;
  }
  #header{
    padding-top:30px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  #header h1{
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size:50px;
  }
  #header small{
    font-weight: 600;
    font-size: 50%;
  }
  #header .logo{
    width: 55px;
    margin: 5px;
  }
  @media only screen and (max-width: 768px) {
    #header h1 {
      font-size:32px;
    }
    #header .logo {
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
  .mapboxgl-popup-content {
    font-family: "Montserrat";    
    padding: 15px;
  }
  #footer{
    position: absolute;
    bottom: 0;
    width:100%;
    font-size: 10px;
  }
  .fadeIn {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */     
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
</style>


