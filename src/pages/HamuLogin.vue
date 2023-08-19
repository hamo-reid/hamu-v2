<template>
  <div class="page">
    <div class="wrapper" :class="{ active: !isLoginForm }">
      <div class="form-box login" :class="{ hidden: !isLoginForm }">
        <h2>登录</h2>
        <form action="#" @submit.prevent="login">
          <div class="input-box">
            <span class="icon"><i class='bx bxs-envelope'></i></span>
            <input type="email" required v-model="loginEmail">
            <label>邮箱</label>
          </div>
          <div class="input-box">
            <span class="icon"><i class='bx bxs-lock-alt'></i></span>
            <input type="password" required v-model="loginPassword">
            <label>密码</label>
          </div>
          <div class="remember-forgot">
            <a href="#">忘记密码？</a>
          </div>
          <button type="submit" class="btn">登录</button>
          <div class="login-register">
            <p>还没有账号？ <span class="register-link" @click="isLoginForm = false">立即注册</span></p>
          </div>
        </form>
      </div>
      <div class="form-box register" :class="{ hidden: isLoginForm }">
        <h2>注册</h2>
        <form action="#" @submit.prevent="register">
          <div class="input-box">
            <span class="icon"><i class='bx bxs-user'></i></span>
            <input type="text" required v-model="registerNickname">
            <label>昵称</label>
          </div>
          <div class="input-box">
            <span class="icon"><i class='bx bxs-envelope'></i></span>
            <input type="email" required v-model="registerEmail">
            <label>邮箱</label>
          </div>
          <div class="input-box">
            <span class="icon"><i class='bx bxs-shield'></i></span>
            <input type="text" required v-model="registerVerifyCode">
            <label>邮箱验证码</label>
            <button class="btn" @click.prevent="getVarifyCode">{{ isSend ? '已发送（' + lastTime + '）' : "获取验证码" }}</button>
          </div>
          <div class="input-box">
            <span class="icon"><i class='bx bxs-lock-alt'></i></span>
            <input type="password" required v-model="registerPassword">
            <label>密码</label>
          </div>
          <div class="remember-forgot">
            <!-- <label><input type="checkbox">I agree to the terms & conditions</label> -->
          </div>
          <button type="submit" class="btn" @click="">注册</button>
          <div class="login-register">
            <p>已有账号？<span class="register-link" @click="isLoginForm = true">立即登录</span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { auth } from '@/api';
import { useUserStore } from '../store'

const userStore = useUserStore();

const isLoginForm = ref(true);
// 双向绑定的input值
const loginEmail = ref('');
const loginPassword = ref('');
const registerNickname = ref('');
const registerEmail = ref('');
const registerVerifyCode = ref('');
const registerPassword = ref('');

const coldTime = 60   // cd时间
const lastTime = ref(coldTime);   // 倒计时
let verifyTimer = null; // 计时器
const isSend = ref(false);  // 限流标记

// 验证邮箱是否合法
function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

// 获取验证码
function getVarifyCode() {
  if (isSend.value) return; // 若在冷却中就结束函数
  if (!validateEmail(registerEmail.value)) return;  // 邮箱不合法结束函数
  isSend.value = true;
  // 请求后端发送验证码
  auth.getVarifyCode(registerEmail.value).then((res) => {
    if (res.data.code === 0) {
      verifyTimer = setInterval(() => {
        if (lastTime.value > 0) {
          lastTime.value--;
        } else {
          clearInterval(verifyTimer);
          isSend.value = false;
          lastTime.value = coldTime
        }
      }, 1000)
      console.log(registerEmail.value);
    } else {
      isSend.value = false;
    };
  })

};
// 登录
function login() {
  userStore.login(loginEmail.value, loginPassword.value).then((res) => {
    console.log(res.data)
  })
};
// 注册
function register() {
  auth.register(
    registerNickname.value, registerEmail.value, registerPassword.value, registerVerifyCode.value
  ).then((res) => {
    const responseData = res.data;
    console.log(responseData)
    if (responseData.code === 0) {
      isLoginForm.value = true;
      registerNickname.value = "";
      registerEmail.value = "";
      registerPassword.value = "";
      registerVerifyCode.value = "";
    }
  })
};

onUnmounted(() => {
  // 在页面销毁时清除计时器
  if (verifyTimer !== null) clearInterval(verifyTimer);
})

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
$text-color: #162938;

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url('/resources/imgs/bg.png');
  font-family: SourceHanSerif, "Poppins", sans-serif;
  font-size: 16px;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba($color: #fff, $alpha: 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: height 0.3s ease;

  &.active {
    height: 580px;
  }

  .form-box {
    width: 100%;
    padding: 40px;

    h2 {
      font-size: 2em;
      color: $text-color;
      text-align: center;
    }

    .input-box {
      position: relative;
      width: 100%;
      height: 50px;
      border-bottom: 2px solid $text-color;
      margin: 30px 0;

      label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1em;
        color: $text-color;
        font-weight: 700;
        pointer-events: none;
        transition: 0.5s;
      }

      input {
        width: 100%;
        height: 100%;
        padding: 0 35px 0 5px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        color: $text-color;
        font-weight: 600;
      }

      input:focus~label,
      input:valid~label {
        top: -5px;
      }

      .icon {
        position: absolute;
        right: 8px;
        font-size: 1.2em;
        color: $text-color;
      }
    }

    .remember-forgot {
      display: flex;
      justify-content: flex-end;
      font-size: .9em;
      color: $text-color;
      font-weight: 500;
      margin: -15px 0 15px;

      label input {
        accent-color: $text-color;
        margin-right: 3px;
      }

      a {
        color: $text-color;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .btn {
      width: 100%;
      height: 45px;
      background: $text-color;
      border: none;
      outline: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1em;
      color: #fff;
      font-weight: 500;
      font-family: SourceHanSerif, sans-serif;
    }

    .login-register {
      font-size: .9em;
      color: $text-color;
      text-align: center;
      font-weight: 500;
      margin: 25px 0 10px;

      p span {
        color: $text-color;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

    }
  }

  // 给邮箱验证码单独设置样式
  .form-box.register {
    .input-box:nth-child(3) {
      display: flex;
      // align-items: flex-end;
      justify-content: space-between;
      border-bottom: none;

      input {
        width: 65%;
        border-bottom: 2px solid $text-color;
      }

      button {
        width: 30%;
        height: 45px;
        font-size: 14px;
      }

      .icon {
        position: absolute;
        right: calc(35% + 8px);
        font-size: 1.2em;
        color: $text-color;
      }
    }
  }

  .form-box.login.hidden {
    position: absolute;
    transform: translateX(-400px);

  }

  .form-box.register.hidden {
    position: absolute;
    transform: translateX(400px);

    & {
      height: 520px;
    }
  }

  .form-box.login,
  .form-box.register {
    position: absolute;
    transform: translateX(0);
    transition: .3s ease, height .18s ease;
    ;
  }
}
</style>