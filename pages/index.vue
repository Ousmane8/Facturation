<template>
  <div class="container">
    <div class="landing-page-container">
      <div class="content__wrapper">
        <p class="coords">N 49° 16' 35.173" / W 0° 42' 11.30"</p>

        <div class="ellipses-container">

          <h2 class="greeting">SOGA</h2>

          <div class="ellipses ellipses__outer--thin">

            <div class="ellipses ellipses__orbit"></div>

          </div>

          <div class="ellipses ellipses__outer--thick"></div>
        </div>

        <div class="scroller">
          <p class="page-title">Accueil</p>

          <div class="timeline">
            <span class="timeline__unit"></span>
            <span class="timeline__unit timeline__unit--active"></span>
            <span class="timeline__unit"></span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.landing-page-container {
  width: 100%;
  min-height: 100%;
  height: 56rem;
  background-image: url("https://s29.postimg.org/vho8xb2pj/landing_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  color: #09383e;
}

.content__wrapper {
  max-width: 1200px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.coords {
  font-size: 1rem;
  display: inline-block;
  transform: rotate(-90deg) translateY(50%);
  float: left;
  position: relative;
  top: 30%;
  letter-spacing: 0.2rem;
  left: -11.5rem;
  margin: 0;
}

.ellipses-container {
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: 3.5rem;
}
.ellipses-container .greeting {
  position: absolute;
  top: 20.6rem;
  left: 11rem;
  right: 0;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 4rem;
  font-size: 6rem;
  font-weight: 400;
  opacity: 0.5;
}
.ellipses-container .greeting:after {
  content: "";
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  background-color: #0c383e;
  position: relative;
  top: -0.65rem;
  left: -5.05rem;
}

.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses__outer--thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(9, 56, 62, 0.1);
  -webkit-animation: ellipsesOrbit 15s ease-in-out infinite;
  animation: ellipsesOrbit 15s ease-in-out infinite;
}
.ellipses__outer--thin:after {
  content: "";
  background-image: url("https://s29.postimg.org/5h0r4ftkn/ellipses_dial.png");
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  opacity: 0.15;
}

.ellipses__outer--thick {
  width: 99.5%;
  height: 99.5%;
  border-color: #09383e transparent;
  border-width: 2px;
  transform: rotate(-45deg);
  -webkit-animation: ellipsesRotate 15s ease-in-out infinite;
  animation: ellipsesRotate 15s ease-in-out infinite;
}

.ellipses__orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: #09383e;
  top: 5rem;
  right: 6.75rem;
}
.ellipses__orbit:before {
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  display: inline-block;
  background-color: #09383e;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.scroller {
  width: 7.5rem;
  display: inline-block;
  float: right;
  position: relative;
  top: -15%;
  transform: translateY(50%);
  overflow: hidden;
}
.scroller .page-title {
  letter-spacing: 0.3rem;
  display: inline-block;
  float: left;
  margin-top: 1rem;
}
.scroller .timeline {
  width: 1.5rem;
  height: 9rem;
  display: inline-block;
  float: right;
}
.scroller .timeline .timeline__unit {
  width: 100%;
  height: 0.1rem;
  display: block;
  background-color: #0c383e;
  margin: 0 0 2rem;
  opacity: 0.2;
}
.scroller .timeline .timeline__unit.timeline__unit--active {
  opacity: 1;
}
.scroller .timeline .timeline__unit.timeline__unit--active:after {
  opacity: 0.2;
}
.scroller .timeline .timeline__unit:after {
  content: "";
  width: 70%;
  height: 0.1rem;
  display: block;
  position: relative;
  float: right;
  background-color: #0c383e;
  top: 1rem;
}

@-webkit-keyframes ellipsesRotate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes ellipsesRotate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@-webkit-keyframes ellipsesOrbit {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes ellipsesOrbit {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
