<template id="banner_cpn">
  <div id="banner">
    <div class="box">
      <!--<button @click="imgMove">点击</button>-->
      <div class="main clearfix" @mouseover="btnOpen" @mouseout="btnHide">
        <div class="minMain">
          <div class="item" v-for="(item, index) in list" :key="index">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <div class="btnMain" v-show="btnShow">
          <div class="left" @click="leftClick">
            <img :src="leftCircle" />
          </div>
          <div class="right" @click="rightClick">
            <img :src="rightCircle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgJianzhuwu from './svgs/3.png';
import wuzhen from './svgs/2.png';
import gongyuan from './svgs/1.png';
import leftCircle from './svgs/left-circle.png';
import rightCircle from './svgs/right-circle.png';

export default {
  el: "#banner",
  data() {
    return {
      list: [
        { imgUrl: imgJianzhuwu },
        { imgUrl: wuzhen },
        { imgUrl: gongyuan },
      ],
      pressList: [
        { name: '1', isShow: false },
        { name: '2', isShow: false },
        { name: '3', isShow: false },
      ],
      numList: ['p0', 'p1', 'p2'],
      imgIndex: 0,
      imgTimer: null,
      btnShow: false,
      leftCircle: leftCircle,
      rightCircle: rightCircle,
    };
  },
  mounted: function () {
    var Item = document.getElementsByClassName('item');
    for (var i = 0; i < Item.length; i++) {
      Item[i].className = 'item ' + this.numList[i];
    }
    this.imgMove();
    this.pressList[0].isShow = true;
  },
  methods: {
    imgMove() {
      var Item = document.getElementsByClassName('item');
      this.imgTimer = setInterval(() => {
        this.numList.push(this.numList[0]);
        this.numList.shift();
        this.imgIndex++;
        // console.log(this.imgIndex)
        for (var i = 0; i < Item.length; i++) {
          Item[i].className = 'item ' + this.numList[i];
        }
        for (var i in this.pressList) {
          this.pressList[i].isShow = false;
        }
        if (this.imgIndex > 2) {
          this.imgIndex = 0;
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      }, 10000);
    },
    btnOpen() {
      this.btnShow = true;
      clearInterval(this.imgTimer);
    },
    btnHide() {
      this.btnShow = false;
      this.imgMove();
    },
    leftClick() {
      var Item = document.getElementsByClassName('item');
      this.numList.unshift(this.numList[2]);
      this.numList.pop();
      for (var i = 0; i < Item.length; i++) {
        Item[i].className = 'item ' + this.numList[i];
      }
      for (var i in this.pressList) {
        this.pressList[i].isShow = false;
      }
      this.imgIndex--;
      if (this.imgIndex < 0) {
        this.imgIndex = 2;
        this.pressList[this.imgIndex].isShow = true;
      } else {
        this.pressList[this.imgIndex].isShow = true;
      }
    },
    rightClick() {
      var Item = document.getElementsByClassName('item');
      this.numList.push(this.numList[0]);
      this.numList.shift();
      for (var i = 0; i < Item.length; i++) {
        Item[i].className = 'item ' + this.numList[i];
      }
      for (var i in this.pressList) {
        this.pressList[i].isShow = false;
      }
      this.imgIndex+=1;
      if (this.imgIndex > 2) {
        this.imgIndex = 0;
        this.pressList[this.imgIndex].isShow = true;
      } else {
        this.pressList[this.imgIndex].isShow = true;
      }
    },
  },
  watch: {
    imgIndex() {
      this.$emit('fromChild', this.imgIndex);
    },
  },
};
</script>


<style scoped>

#banner{
  width: 100%;
}

.box {
  position: relative;
  height: 248px;
  width: 1200px;
  margin: 0 auto;
}

.main {
  height: 248px;
  width: 100%;
}

.minMain{
  height: 248px;
}

.item {
  list-style: none;
    width: 700px;
    height: 165px;
    position: absolute;
    top: 45px;
    left: 45px;
    -webkit-transition: all 0.3s ease;
    transition: all 1s ease;
}

.p0 {
  transform: translate3d(197px, 0, 0) scale(1.64);
  opacity: 1;
  filter: alpha(opacity=200);
  z-index: 15;
}

.p1 {
  transform: translate3d(-100px, 0, 0) scale(1.04);
  opacity: 0.6;
  z-index: 2;
}

.p2 {
  transform: translate3d(495px, 0, 0) scale(1.04);
  opacity: 0.6;
  z-index: 3;
}

.newItem {
  position: absolute;
  left: 0px;
  top: 0px;
}

.changeItem{
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -202px;
  transform: scale(1.4);
}

.item img {
  width: 711.5px;
  height: 165px;
}

.btnMain {
    width: 1200px;
    top: 0px;
    left: 0px;
    margin: 0 auto;
    height: 1px;
}

.left {
  position: absolute;
  top: 49%;
  left: -35px;
  z-index: 20;
}

.right {
  position: absolute;
  top: 49%;
  right: -35px;
  z-index: 20;
}

.left img,
.right img {
  width: 30px;
  height: 30px;
}

.pressMain {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 134px;
  height: 24px;
  margin-left: -37px;
  z-index: 20;
}

.pressMain span {
  display: inline-block;
  margin: 2px 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.53);
  text-align: center;
  line-height: 20px;
}

.pressMain .active {
  background: brown;
}
</style>