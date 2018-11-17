window.addEventListener('load', function() {
    //初始化左侧分类swiper内容滚动
  var swiper = new Swiper('.ifica-left .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
  });
    //初始化右侧分类swiper内容滚动
  var swiper = new Swiper('.ifica-right .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      mousewheel: true,
  });


    /*实现分类左侧点击功能： 点击当前的菜单要位移到 当前菜单吸顶的位置
     1. 默认插件使用translate3d设置的位移
     2. 要位移多少距离 =  当前点击的li的下标 * li的高度
     3. 设置当前swiper-wrapper 元素的位移属性上
     实现思路
        1. 给所有li添加点击事件 拿到当前点击li的索引
        2. 拿到当前li的高度
        3. 计算位移距离 =  li的索引+li的高度
        4. 获取当前swiper-wrapper元素设置位移
        5. 判断当前位移的距离是否超过了最小位移的距离(往上位移负值) 如果超过了就 设置为最小位移的距离
        6. 如果需要过渡在给swiper-wrapper添加一个过渡效果
        7. 获取所有li删除active类名
        8. 给当前li添加一个active类名
     */
    
     //1.获取所有的li元素
     var lis = document.querySelectorAll('.ifica-left ul li');
    //   console.log(lis);
    //2.遍历li
    for(var i=0;i<lis.length;i++){
       //3.给li添加上一个索引
       lis[i].index = i;
       //4.给li添加一个点击事件
       lis[i].addEventListener('click',function(){
         //5.获取当前的点击li的索引
         var index = this.index;
         console.log(index);
         //6.获取当前点击li的高度
         var liHeight = this.offsetHeight;
          console.log(liHeight);
         //7.计算需要位移的距离，往上走是负值
         var translateY = -index*liHeight;
         console.log(translateY);
         
         //8.计算最小位移的值  父元素ifica-left - 子元素ul的高度 
         var  minTranslateY  = document.querySelector('.ifica-left').offsetHeight 
              - this.parentNode.offsetHeight;
         //9.如果位移的值大于最小位移，那么可以继续滑动，小于最小位移就不能滑动
         if(translateY < minTranslateY){
             //如果小于最小值，就直接等于最小值
             translateY = minTranslateY;
         }
         //10.把位移的值，设置在滑动元素上
         document.querySelector('.swiper-wrapper').style.transfrom = 'translate3d(0px,'+ 
                                                                     translateY +'px,0px)';
         //11.如果需要慢慢位移，可以添加过渡时间
         document.querySelector('.swiper-wrapper').style.transition = 'all .6s';
         //12.把所有li中的类active去掉
         for(var i=0;i<lis.length;i++){
             lis[i].classList.remove('active');
         }  
         //13.给当前li添加active；
         this.classList.add('active');


       })


    }
      
})