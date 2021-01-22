<template>
  <div class="container emp-profile">
    <form method="post">
      <div class="column is-full">
        <div class="profile-head">
          <h5>
            Mon Profil
            <div class="line"></div>
          </h5>
        </div>
      </div>
      <div class="columns ">
        <div class="column is-4">
          <div class="profile-img">
            <img src="http://placehold.it/150x100" alt=""/>
            <div class="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file"/>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="profile-head">
            <ul class="nav nav-tabs">
              <div class="nav-item">
                <div class="nav-link">Informations</div>
              </div>
            </ul>
          </div>
          <div class="profile-tab">
            <div class="row">
              <div class="col-md-6">
                <label>Nom d'utilisateur :</label>
              </div>
              <div class="column is-6">
                <p>Ousti</p>
                <!--<p>{{loggedInUser.username}}</p>-->
              </div>
            </div>
            <div class="row">
              <div class="column is-6">
                <label>Nom Entreprise :</label>
              </div>
              <div class="column is-6">
                <p>SOGA</p>
              </div>
            </div>
            <div class="row">
              <div class="column is-6">
                <label>Siret :</label>
              </div>
              <div class="column is-6">
                <p>FR87892E874</p>
              </div>
            </div>
            <div class="row">
              <div class="column is-6">
                <label>Adresse :</label>
              </div>
              <div class="column is-6">
                <p>7 Place de la vente 75020 Paris</p>
              </div>
            </div>
            <div class="row">
              <div class="column is-6">
                <label>Email :</label>
              </div>
              <div class="column is-6">
                <p>{{loggedInUser.email}}</p>
              </div>
            </div>
            <div class="row">
              <div class="column is-6">
                <label>Téléphone :</label>
              </div>
              <div class="col-md-6">
                <p>013764920</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2 is-offset-1">
          <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Modifier le profil"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Profile",
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  },
}
</script>

<style scoped>
.emp-profile{
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 5%;
}

.profile-img img{
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  width: 70%;
  border: none;
  border-radius: 0;
  background: #212529b8;
  cursor: pointer!important;
}
.profile-img .file:hover {
  background: #DB663C;
}

.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
  cursor: pointer!important;
}
.profile-head h5{
  color: #333;
  padding-bottom:8%;
  text-transform: uppercase;
  font-weight: bold;
  text-align:center;
  font-size: 40px;
}

.profile-head .line{
  margin: auto;
  width: 70px;
  position: relative;
  border-top: 2px solid #3cae68;
  margin-top: 15px!important;
}
.profile-head .line:before{
  background: #3cae68;
}
.profile-head .line:before{
  position: absolute;
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
  top: -10px;
  border: 4px solid #fff;
  border-radius: 50%;
  background: #DB663C;
  left: 27px;
}
.profile-edit-btn{
  border: none;
  width: 100%;
  padding: 5%;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background: #212529b8;
}
.profile-edit-btn:hover{
  color: white;
  background: #DB663C;
}
.profile-head .nav-tabs{
  margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
  font-weight:600;
  border: none;
  text-transform: uppercase;
}
.profile-head .nav-tabs .nav-link{
  border: none;
  border-bottom:2px solid #3cae68;
}

.profile-tab label{
  font-weight: 600;
}
.profile-tab p{
  font-weight: 600;
  color: #3cae68;
}
</style>
