<template>
  <div class="container">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <img src="../assets/img_avatar.png" class="profile-image" alt="Avatar">
      <a href="#" @click="quitButton">Back Home</a>
      <a style="color:#434343">Logout</a>
      <a href="#" @click="about">About</a>
    </div>
    <div class="header">
      <div class="nav-open" @click="openNav">&#9776;</div>
      All our pets!
    </div>
    <div class="main">
      <div class="main-canvas">
        <div class="intro-block" v-for="item in allPets">
          <div class="picture-out">
            <div class="picture-in Frankie-icon" v-if="item.petName === 'Frankie'"></div>
            <div class="picture-in Mikky-icon" v-if="item.petName === 'Mikky'"></div>
            <div class="picture-in Cooper-icon" v-if="item.petName === 'Cooper'"></div>
            <div class="picture-in Max-icon" v-if="item.petName === 'Max'"></div>
          </div>
          <div class="name">
            <h4 class="text">{{item.petName}}</h4>
          </div>
          <div class="intro">
            <p>{{item.intro}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" round @click="backButton">BACK</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pet-archive",
  data() {
    return {
      allPets: null
    };
  },
  methods: {
    backButton: function() {
      this.$router.replace({ name: "Welcome" });
    },
    quitButton: function() {
      this.$router.replace({
        name: "Welcome",
        params: {
          username: this.username,
          uniqueId: this.uniqueId,
          isNewUser: this.isNewUser
        }
      });
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
    about: function() {
      window.location.href = "https://mailchi.mp/a38976523c45/petadise";
    }
  },
  mounted: function() {
    this.axios
      .get("/pet-info/all-pets")
      .then(res => {
        this.allPets = res.data.allPets;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.main-canvas {
  overflow-y: auto;
  height: 430px;
}
.intro-block {
  /*border: 1px solid;*/
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
  /*display: flex;*/
}
.picture-out {
  height: 150px;
  width: 120px;
  float: left;
  /*border: 1px solid;*/
  /*flex: 1;*/
}
.picture-in {
  height: 100px;
  top: 25px;
  width: 100px;
  border-radius: 50%;
  /*border: 1px solid;*/
  /*background: url('../assets/dog-food-image-example.jpg') no-repeat center;*/
}
.Frankie-icon {
  background: url("../assets/finalelemnet/frankie_icon.png") no-repeat center;
}
.Mikky-icon {
  background: url("../assets/finalelemnet/mikky_icon.png") no-repeat center;
}
.Cooper-icon {
  background: url("../assets/finalelemnet/cooper_icon.png") no-repeat center;
}
.Max-icon {
  background: url("../assets/finalelemnet/max_icon.png") no-repeat center;
}
.name {
  /*border: 1px solid;*/
  margin-top: 25px;
  text-align: left;
}
.text {
  margin: 0px;
}
.intro {
  /*border: 1px solid;*/
  height: 100px;
  margin-right: 30px;
  overflow-y: auto;
  text-align: left;
  word-wrap: break-word;
}
</style>
