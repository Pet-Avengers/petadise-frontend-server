<template>
  <div class="container">
    <div class="header">NEARBY SHELTERS</div>
    <div class="searchBar">
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
          style="width: 64%; border-color: #a43f49 ; border-style: groove; border-radius: 20px; height: 30px; ">
        </gmap-autocomplete>
        <el-button @click="addMarker">Add Mark</el-button>
      </label>
      <br/>

    </div>
    <br/>
    <gmap-map
      :center="center"
      :zoom="11"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    <br/>
    <el-row :gutter="12">
      <el-col :span="12">
        <el-card shadow="always">
          <img src="../assets/shelter1.png" class="image">
          <div style="padding: 10px;">
            <p style="font-size: smaller">Pet Smart</p>
            <p style="font-size: small">2440 Charleston Rd, Mountain View, CA 94043</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <img src="../assets/shelter2.png" class="image">
          <div style="padding: 10px;">
            <p style="font-size: smaller">Palo Alto Animal Service</p>
            <p style="font-size: small">250 Hamilton Ave, Palo Alto, CA 94301</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <el-button type="primary" @click="backButton">BACK</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoogleMap",
    data () {
      return{
        // change this to whatever makes sense
        center: { lat: 37.4104, lng: -122.0597 },
        markers: [],
        places: [],
        currentPlace: true
      };
    },

    mounted() {
      this.geolocate();
      this.markers.push({ position: {lat: 37.422940, lng: -122.096069} });
      this.places.push('Pet Smart');
      this.markers.push({ position: {lat: 37.444227, lng: -122.159606} });
      this.places.push('Palo Alto Animal Service');
    },

    methods: {
      backButton: function () {
        this.$router.replace({name: 'Welcome'})
      },
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers.push({ position: marker });
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }}};
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }

</style>
