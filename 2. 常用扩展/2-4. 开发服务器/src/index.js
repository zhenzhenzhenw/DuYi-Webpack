const url = `/api/student/findAll?appkey=demo13_1545210570249`;
fetch(url).then(resp => resp.json()).then(resp => {
    console.log(resp)
})


/**
 * 1.开发的时候有跨域问题：
 * 
 * http://localhost:8080
 * 
 * https://developer.duyi.com
 * 
 * 
 *              http://localhost:8000/api/stu...
 *             只要请求第hi包含/api
 *            "/api": {
                target: "http://open.duyiedu.com"
                }
                这样就解决了跨问题了，因为node层没有跨域问题
 * 
 * 2.线上时候，前端页面和JS开发完成之后，往往会部署到同一个域中
 * 
 * 后台的服务器域：http://duyi.com
 * 
 * 前端开发完成后当到服务器的域： http://duyi.com
 * 
 * **/