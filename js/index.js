window.addEventListener('load',function(){
    //获取轮播图的高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
     //获取头部的元素
    var  header = document.querySelector('#header');
    //跟网页设置一个滚动事件
    window.addEventListener('scroll',setOpacity);
    setOpacity();
    function setOpacity(){
        //设置滚动距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //透明度
        var opacity = scrollTop / slideHeight ;
        if(opacity <= 1){
            header.style.backgroundColor = 'rgba(222, 24, 27,'+ opacity +')';
        }else{
            header.style.backgroundColor = 'rgba(222, 24, 27,1)';
        }
    }

   //倒计时部分
    //获取未来的时间  getTime()是把时间转化为毫秒 
    //从1970-1-1-0:00:00 开始算起的  - 2018,11-14-16:00:00
    var  futureTime = new Date(2018,10,14,18,00,00).getTime();
   //获取现在的时间
   var  newTime = new Date().getTime();
   //两个时间相减就可以实现倒计时的值，除1000就可以得出时间秒，一般都是向下取整；
   var time = Math.floor(( futureTime - newTime )/1000); 
   //获取页面显示时间的所有span的元素
   var spans = document.querySelectorAll('.seckill-time span')
   //定义定时器，让总时间每秒都在变化--；
   setInterval(function(){
       //每秒都--
       time--;
       //求时 除3600秒,向下取整
       var hour = Math.floor(time/3600);
       //求分 一个小时有60分，时间可能超过60分即一小时，把超过小时部分取摸，
       var minute  = Math.floor(time/60 % 60)
       //求秒 总时间%60 得出除下的就是剩下的秒；
       var second = time %60;
       //赋值在页面上
       spans[0].innerHTML = Math.floor(hour/10);
       spans[1].innerHTML = Math.floor(hour % 10);
       spans[3].innerHTML = Math.floor(minute/10);
       spans[4].innerHTML = Math.floor(minute % 10);
       spans[6].innerHTML = Math.floor(second/10);
       spans[7].innerHTML = Math.floor(second % 10);
   },1000)

   var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项（默认）垂直(vertical)。
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    //自动切换
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    // 如果需要滚动条
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
})

})