/*
  SUI Mobile init setup
  
*/

$(function () {
  'use strict';

  //无线滚动
  $(document).on("pageInit", "#index", function(e, id, page) {
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = 0; i < 7; i++) {
        html += '<div class="card"><div class="card-header"> list[i] </div><div class="card-content"><div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div></div><div class="card-footer"> title </div></div>';
      }
      // 添加新条目
      $('.infinite-scroll #card-block').append(html);
    }
    var loading = false;
    $(page).on('infinite', function() {

      // 如果正在加载，则退出
      if (loading) return;

      // 设置flag
      loading = true;

      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;

        addItems();
        $.refreshScroller();
      }, 1000);
    });
  });

  $.init();
});
