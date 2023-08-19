<template>
  <div class="page">
    <HamuHeader></HamuHeader>
    <div class="container">
      <section class="interface">
        <div class="rouge-title"></div>
        <div class="introduce">
          <h1>金酒之杯肉鸽挑战赛</h1>
          <p>
            狂乱的浪潮此刻静默，常年的呼啸海风收敛气息。水月走到岸边，此刻繁<br>
            星如此耀眼，无论是夜空，亦或是……深海之下……<br>
            “博士，我们走吧。”<br>
            身边的蓝发小男孩对你微微一笑，招呼着你向前，向前……<br>
            踏入深海，踏入万千分之一可能性的，拯救这片大地唯一的未来…<br>
          </p>
        </div>
        <div class="next-sec">
          <p>征服北境</p>
          <div class="decoration"></div>
        </div>
      </section>
      <section class="information">
        <div class="title">
          <h2><span>01</span>公告信息</h2>
          <a class="more" href="/">
            <span>MORE</span>
            <span>更多</span>
          </a>
        </div>
        <div class="articles">
          <div class="article-list">
            <a class="article-item" href="/">
              <span>2023-8-10</span>比赛开始公告
            </a>
            <a class="article-item" href="/">
              <span>2023-8-10</span>比赛开始公告
            </a>
            <a class="article-item" href="/">
              <span>2023-8-10</span>比赛开始公告
            </a>
            <a class="article-item" href="/">
              <span>2023-8-10</span>比赛开始公告
            </a>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HamuHeader from '@/components/common/HamuHeader.vue';
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 8rem 5rem 0;
    background: url('/resources/imgs/bg.png');
    background-attachment: fixed;
  }

  section:not(:first-child)::after {
    display: block;
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 50rem);
    content: "";
    height: 4rem;
    width: 100rem;
    background: url('/resources/imgs/dr4.png');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    filter: drop-shadow(1px 6px 1px #000);
  }

  section.interface {
    position: relative;
    background: url("/resources/imgs/pv-1-bg.jpg");
    background-size: cover;

    .rouge-title {
      position: absolute;
      top: 10rem;
      right: 21rem;
      width: calc(65.8125rem / 2);
      height: calc(24.8125rem / 2);
      background: url("/resources/imgs/rouge-title.png");
      background-size: cover;
    }

    .introduce {
      position: absolute;
      left: 14rem;
      top: 10rem;
      font-family: SourceHanSerif, sans-serif;

      h1 {
        font-size: 4rem;
        font-weight: 900;
      }
    }

    .next-sec {
      position: absolute;
      left: 50%;
      bottom: 3rem;
      transform: translateX(-50%);

      p {
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 700px;
        font-family: SourceHanSerif, sans-serif;
        text-align: center;
        text-shadow: 0 0 0.5rem #000, 0 0 0.45rem #000, 0 0 0.3rem #000;
        color: #e9e9e9;
      }

      .decoration {
        height: calc(4.625rem * 2);
        width: calc(24.625rem * 2);
        background: url('/resources/imgs/dr2.png');
        background-size: cover;
      }
    }
  }

  section.information {
    font-family: SourceHanSerif, sans-serif;

    .title,
    .articles {
      width: 50rem;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        display: flex;
        font-size: 30px;
        color: #fff;
        text-shadow: 0 0 1rem #000, 0 0 0.75rem #000, 0 0 0.6rem #000;

        span {
          margin-right: 2rem;

        }
      }

      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        position: relative;
        font-size: 16px;
        font-weight: 900;
        color: #fff;
      }

      .more span {
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }

      .more span:nth-child(1) {
        top: -0.35rem;
        font-family: FarNorthRunes, sans-serif;
        font-size: 16px;
        color: #4bc9ca;
        text-shadow: 0 0 0.5rem hsl(0deg 0% 4% / 70%), 0 0 0.25rem hsl(0deg 0% 4% / 70%);
        letter-spacing: 0.4rem;
      }

      .more span:nth-child(2) {
        text-shadow: 0 0 0.5rem #000, 0 0 0.45rem #000, 0 0 0.3rem #000;
      }

    }

    .articles::before {
      display: block;
      content: '';
      margin-right: 2rem;
      height: calc(51.25rem);
      width: calc(2.8125rem);
      background: url('/resources/imgs/dr3.png');
      background-size: cover;
    }

    .articles {
      display: flex;
      margin-top: 2rem;
      height: 60vh;

      .article-list {
        width: 100%;
      }

      .article-item {

        display: flex;
        height: 56px;
        line-height: 56px;
        font-size: 1.6rem;
        font-weight: 600;
        border-bottom: 4px solid red;
        border-image: linear-gradient(to right, rgb(50, 55, 60), rgba(50, 55, 60, 0));
        border-image-slice: 1;
        /* 设置边框图像的切片方式，这里设置为1表示将整个图像用于边框*/

        span:nth-child(1) {
          margin-right: 30px;
        }

      }
    }
  }
}</style>