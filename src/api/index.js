import Request from "@/utils/http";

const webV1 = new Request({
  baseURL: '/api/v1',
  timeout: 12000,
})

function getVarifyCode(email) {
  return webV1.request({
    url: "/auth/verify/code",
    method: "get",
    params: { email },
  })
}

function register(nickname, email, password, code) {
  return webV1.request({
    url: "/auth/register",
    method: "post",
    data: { nickname, email, password, code }
  })
}

function login(email, password) {
  return webV1.request({
    url: "/auth/login",
    method: "post",
    data: { email, password }
  })
}

function varifyJWT(jwt) {
  return webV1.request({
    url: "/auth/varify/jwt",
    method: "post",
    data: { jwt }
  })
}

export const auth = {
  getVarifyCode,
  register,
  login
}