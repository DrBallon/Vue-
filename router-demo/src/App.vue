<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
div {
  user-select: none;
}
#app {
  width: 600px;
  height: 600px;
  margin: 20px auto;
  position: relative;
}
.block {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.a {
  background-color: rgb(168, 19, 39);
  font-size: 60px;
  line-height: 600px;
}
.b {
  background-color: rgb(2, 71, 83);
  bottom: 300px;
  font-size: 30px;
  line-height: 300px;
}
.b1 {
  background-color: rgb(94, 10, 76);
  top: 300px;
  font-size: 30px;
  line-height: 300px;
}
.b2 {
  background-color: rgb(155, 63, 216);
  top: 300px;
  font-size: 30px;
  line-height: 300px;
}
.c-left-top {
  background-color: rgb(18, 1, 78);
  right: 300px;
  bottom: 300px;
  font-size: 30px;
  line-height: 300px;
}
.c-right-top {
  background-color: rgb(20, 0, 110);
  left: 300px;
  font-size: 30px;
  line-height: 300px;
}
.c-left-bottom {
  background-color: rgb(8, 87, 5);
  top: 300px;
  right: 300px;
  font-size: 30px;
  line-height: 300px;
}
.c-right-bottom {
  background-color: rgb(8, 87, 5);
  top: 300px;
  left: 300px;
  font-size: 30px;
  line-height: 300px;
}
.right1 {
  background-color: rgb(0, 102, 105);
}
.right2 {
  background-color: rgb(102, 37, 0);
}
.b21 {
  background-color: rgb(11, 31, 17);
  font-size: 20px;
}
.b22 {
  background-color: rgb(168, 48, 0);
  font-size: 20px;
}
.c1 {
  background-color: rgb(100, 73, 0);
}
.c2 {
  background-color: rgb(39, 0, 43);
}
.c3 {
  background-color: rgb(87, 0, 7);
}
.c4 {
  background-color: rgb(3, 70, 6);
}
.not-found {
  background-color: rgb(0, 0, 0);
  color: white;
  line-height: 600px;
  font-size: 80px;
}

.d {
  left: 100px;
  right: 100px;
  top: 50px;
  bottom: 500px;
  background-color: rgb(102, 186, 255);
  line-height: 50px;
  font-size: 30px;
}
</style>
