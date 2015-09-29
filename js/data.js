/*
	data

*/


// $.ajax({
//   type: 'GET',
//   url: 'https://leancloud.cn:443/1.1/classes/Product?limit=10&&order=-updatedAt&&',
//   // type of data we are expecting in return:
//   dataType: 'json',
//   timeout: 300,
//   headers: {
//   	Content-Type: 'json'
//   },
//   success: function(data){
//     // Supposing this JSON payload was received:
//     //   {"project": {"id": 42, "html": "<div>..." }}
//     // append the HTML to context object.
//     var html = template('card-block-temp', data);
//   	document.getElementById('card-block').innerHTML = html;
//   },
//   error: function(xhr, type){
//     alert('Ajax error!')
//   }
// })

// $.get('https://leancloud.cn:443/1.1/classes/Product?limit=10&&order=-updatedAt&&', function(res){
//   var html = template('card-block-temp', result);
//   document.getElementById('card-block').innerHTML = html; 
//   // $(document.body).append(res)
// })

// Browser 层面获取数据
var data = {
	title: '前端来的',
	list: ['11', '22', '33', '44', '55', '66', '77']
};
// 数据 ＋ 模版 拼装成 DOM
var html = template('card-block-temp', data);
// 用做好的 DOM 插入到想要的位置
document.getElementById('card-block').innerHTML = html; 


// alert(appId);
// // $(function() {
// AV.initialize(appId, appKey);

// var Product = AV.Object.extend('Product');
// var query = new AV.Query('Product');
// // query.limit(10);
// query.find({
//   success: function (result) {
//     var list = [];
//     var length = result.length;
//     for (var i = 0; i < length; i++) {
//       // console.log(result[i]);
//       list.push(result[i].attributes.title);
//     };
//     console.log(list);
//     return (
//     var data = {
//       title: '前端来的',
//       list: ['11', '22', '33', '44', '55', '66', '77']
//       // list: list
//     };
// 		var html = template('test', data);  
//     document.getElementById('here').innerHTML = html;
//     )
//   },
//   error: function (error) {
//     return error;
//   }
// });

// });