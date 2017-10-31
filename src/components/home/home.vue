<template>
  <div class="home">
    <section class="section_introduce">
      <header class="introduce_title">We Are 伐木累</header>
      <div class="introduce_explain">一群逗比青年的聚集地</div>
      <p class="text">long long ago,有着一群活泼可爱的青年，他们洋溢着青春的笑容。</p>
      <p class="text">but..</p>
      <p class="text">他们走上了一条与众不同的道路，变得屌丝了起来</p>
      <p class="text">————程序员的道路————</p>
    </section>
    <section class="section_message" id="section_message">
      <header class="message_title">We Are...</header>
      <div class="message_portrait_ulBox">
        <ul class="message_portrait_list">
          <li>
            <div class="message_portrait"></div>
            <div class="message_introduction">
              <p>小普</p>
              <p>前端中级工程师（一个屌丝）</p>
              <p>对vue,node有着深入的研究</p>
            </div>
          </li>
          <li>
            <div class="message_portrait"></div>
            <div>aaaa</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section_time">
      <header class="time_title">我们的相识</header>
      
    </section>
    <section class="section_technology">
      <header>
        <h2>SKILLS & EXPERTICE</h2>
        <h3>We can say We Are quite good at</h3>
      </header>
      <div class="section_design">
        <div class="skillbar">
          <div class="skillbar-title">Web design</div>
          <div class="skillbar-bar"></div>
          <div class="skill-bar-percent">94%</div>
        </div>
        <div class="skillbar">
          <div class="skillbar-title">HTML / CSS</div>
          <div class="skillbar-bar"></div>
          <div class="skill-bar-percent">60%</div>
        </div>
        <div class="skillbar">
          <div class="skillbar-title">JavaScript</div>
          <div class="skillbar-bar"></div>
          <div class="skill-bar-percent">70%</div>
        </div>
      </div>
    </section>
    <div class="fullScreen" @click="fullScreen">
      <i class="iconfont icon-fullscreen"></i>
      全屏展示
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      handleScroll () {
        // console.log(document.getElementById('section_message').offsetTop - window.scrollY)
      },
      fullScreen (el) {
        const docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen()
        }
      }
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  section {
      position: relative;
      margin: 0;
      opacity: 1;
      overflow: hidden;
      color: #fff;
      height: 100vh;
      width: 100vw;
      -webkit-transition: opacity 2s ease;
      -moz-transition: opacity 2s ease;
      -ms-transition: opacity 2s ease;
      -o-transition: opacity 2s ease;
      transition: opacity 2s ease;
      user-select: none;
  }
  .section_introduce {
      background: url(http://v5.res.dandyweng.com/images/backgrounds/intro.jpg);
      background-size: cover;
      background-attachment: fixed;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
      .introduce_title {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
          letter-spacing: 1px;
          font-size: 36px;
          margin-top: 150px;
      }
      .introduce_explain {
          margin-top: 3px;
          margin-bottom: 25px;
      }
      .text{
          line-height: 30px;
          font-size: 16px;
      }
  }
  .section_message {
      background: url(http://v5.res.dandyweng.com/images/backgrounds/homeschool.jpg);
      background-size: cover;
      background-attachment: fixed;
      background-position: bottom center;
      background-repeat: no-repeat;
      text-align: center;
      .message_title {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
          letter-spacing: 1px;
          font-size: 36px;
          margin-top: 70px;
      }
      .message_portrait_ulBox {
          width: 100%;
          margin-top: 100PX;
          text-align: center;
      }
      .message_portrait_list {
          display: inline-block;
          li {
              float: left;
              margin: 0 50px;
              text-align: center;
              .message_portrait {
                  width: 120px;
                  height: 120px;
                  border-radius: 100%;
                  box-shadow: 0 0 0 2px rgba(255,255,255,0.5), 0px 2px 18px 3px rgba(0,0,0,0.2);
                  background-color: rgba(255,255,255,0.3);
                  background-image: url('');
                  background-size: cover;
                  background-position: -10px -35px;;
              }
              .message_introduction {
                  width: 120px;
                  margin-top: 20px;
                  p {
                      float: left;
                      width: 40px;
                      writing-mode:tb-rl;
                      line-height: 40px;
                      font-size: 14px;
                  }
              }
          }
      }
  }
  .section_time {
    background: url('../../assets/backgrounds/timeBg.jpg');
    background-size: cover;
    // background-attachment: fixed;
    background-position: bottom center;
    background-repeat: no-repeat;
    text-align: center;
    .time_title {
      text-shadow: 0 2px 5px rgba(0,0,0,0.3);
      letter-spacing: 1px;
      font-size: 36px;
      margin-top: 120px;
    }
  }
  .section_technology {
    header {
      margin-top: 100px;
      text-align: center;
      h2 {
        font-size: 26px;
        line-height: 40px;
        font-weight: 500;
        letter-spacing: 2px;
        display: inline-block;
        position: relative;
        color: #372d38;
      }
      h2:after {
        content: "";
        display: block;
        width: 100px;
        height: 2px;
        background: #5b4c5c;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -50px;
      }
      h3 {
        margin-top: 30px;
        font-family: 'Crimson Text', serif;
        font-style: italic;
        font-size: 22px;
        line-height: 30px;
        color: #5b4c5c;
        padding-bottom: 0;
        font-weight: 300;
        text-transform: none;
        letter-spacing: 1px;
      }
    }
    .section_design {
      margin: 100px auto 0;
      width: 500px;
      .skillbar {
        position: relative;
        display: block;
        margin-bottom: 53px;
        width: 100%;
        background: #e2e1e2;
        height: 7px;
        border-radius: 3px;
        transition: 0.4s linear;
        transition-property: width, background-color;
        .skillbar-title {
          position: absolute;
          top: -27px;
          left: 0;
          font-weight: bold;
          font-size: 13px;
          line-height: 27px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #5b4c5c;
        }
        .skillbar-bar {
          height: 7px;
          width: 94%;
          background: #e88988;
        }
        .skill-bar-percent {
          position: absolute;
          top: -24px;
          font-size: 14px;
          color: #796f7a;
          margin-left: -20px;
          left: 94%;
        }
      }
    }
  }
  .fullScreen {
    position: fixed;
    top: 20px;
    right: 20px;
    color: #fff;
    height: 20px;
    width: 100px;
    text-align: center;
    line-height: 20px;
    opacity: 0.5;
    filter: alpha(opacity = 50);
    cursor: pointer;
    i {
      margin-right: 5px;
      vertical-align: -1px;
    }
  }
  .fullScreen:hover {
    opacity: 0.9;
    filter: alpha(opacity = 90);
  }
</style>
