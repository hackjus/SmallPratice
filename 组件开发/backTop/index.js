/*var BackTop=function(ele,distance){
if(!ele) return;
window.addEventListener('scroll',function(){
 ele.style.display = (document.documentElement.scrollTop || document.body.scrollTop) > (this.distance || 500) ? 'block' : 'none';
} ,false);
 
}*/
// 函数节流，主要是对于这种类似短时间内多次触发的函数，
// 通过一个定时器，来进行性能优化


var BackTop=function(ele,distance){
    var a=0;
window.addEventListener('scroll',throttle(function(){
    toggleDom()
},300))

function toggleDom(){
    ele.style.display=(document.documentElement.scrollTop || document.body.scrollTop) >(distance || 200) ? 'block' :'none';
    console.log(a++)
}
ele.onclick=function(){
    window.scroll(0,0)
}
function throttle(fn,delay){
    var timer = null;
    return function(){
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,arguments);
        },delay);
    }
};



}