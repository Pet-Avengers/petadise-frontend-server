<template>
  <div class="container">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <img src="../assets/img_avatar.png" class="profile-image" alt="Avatar">
      <a href="#" @click="closeNav">Back Home</a>
      <a style="color:#434343">Logout</a>
      <a href="#" @click="about">About</a>
    </div>
    <div class="header">
      <div class="nav-open" @click="openNav">&#9776;</div>
      Petadise
    </div>
    <div class="main">
      <el-carousel indicator-position="outside" height="220px">
        <el-carousel-item>
          <img src="./../assets/front1.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/front2.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/front3.png">
        </el-carousel-item>
      </el-carousel>
      <div class="entries-block">
        <div class="entry-block">
          <i class="icon el-icon-place" @click="petGameButton"></i>
          <p class="text">Pet Game</p>
        </div>
        <div class="entry-block">
          <i class="icon el-icon-location" @click="shelterLocationButton"></i>
          <p class="text">Shelter Location</p>
        </div>
        <div class="entry-block">
          <i class="icon el-icon-document" @click="petArchiveButton"></i>
          <p class="text">Pet Archive</p>
        </div>
      </div>
      <h1>
        The Best Pet Matcher
      </h1>
      <p>
        Need help with a recommendation on your best-matched pet? Our guides have got you covered. All you need to do is play a game, and you will receive our tailored match rate report for you.
      </p>
      <img src="./../assets/front-dog.png">
      <h1>
        Adoption Preparation
      </h1>
      <p>
        Have no experience in raising a pet? No worries. We will get you well trained in an interesting digital game. Play fun, and learn fun.
      </p>
      <a href="https://mailchi.mp/a38976523c45/petadise" style= "color:#a43f49">About Petadise</a>
      <br/>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      // username: this.$route.params.username || 'Anonymous',
      // uniqueId: this.$route.params.uniqueId,
      // isNewUser: this.$route.params.isNewUser
      username: 'fake',
      uniqueId: '',
      isNewUser: true
    }
  },
  methods: {
    petGameButton: function () {
      console.log(this.isNewUser);
      if (this.isNewUser) {
        this.$router.replace({
          name: 'Questionnaire',
          params: {username: this.username, uniqueId: this.uniqueId, isNewUser: this.isNewUser}
        })
      } else {
        this.$router.replace({name: 'GameMain', params: {petIndex: 0, uniqueId: this.uniqueId}})
      }
    },
    shelterLocationButton: function () {
      this.$router.replace({name: 'GoogleMap'})
    },
    petArchiveButton: function () {
      this.$router.replace({name: 'PetArchive'})
    },
    mounted: function () {
      this.axios.post('/users/unique-id')
        .then(res => {
          this.uniqueId = res.data.uniqueId
        }).catch(err => {
          console.log(err)
        })
    },
    quitButton: function () {
      this.$router.replace({name: 'Welcome', params: {username: this.username, uniqueId: this.uniqueId, isNewUser: this.isNewUser}});
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
    about: function() {
      window.location.href = "https://mailchi.mp/a38976523c45/petadise"
    }
  }
}
</script>

<style scoped>
  .welcome-block {
    /*border: 1px solid;*/
    /*margin-top: 50px;*/
    height: 100px;
  }
  .entries-block {
    /*border: 1px solid;*/
    /*margin-top: 50px;*/
    height: 120px;
    display: flex;
  }
  .icon {
    /*border: 1px solid;*/
    font-size: 60px;
  }
  .text {
    margin: 0;
    /*border: 1px solid;*/
  }
  .entry-block {
    /*border: 1px solid;*/
    flex: 1;
  }

  .el-carousel__item:nth-child() {
    background-color: #99a9bf;
    height: 100%;
  }

  .el-carousel {
    height: 250px;
  }
  /*.footer {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*height: 60px;*/
    /*!*border: 1px solid;*!*/
  /*}*/

</style>
