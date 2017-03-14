'use strict';
(function(window){
    function tab(selector,options){
        this.init(selector,options);
        this.bindDom();
    }
    tab.prototype={
        init:function(selector,options){
            if(typeof selector==='string'){
                this.dom=document.querySelector(selector);
            }
            else {
                this.dom=selector;
            }
            this.event=options.event || 'click';
        },
        bindDom:function(){
            var dom=this.dom;
            var list=dom.querySelectorAll('.tab-title-list');
            var content=dom.querySelectorAll('.tab-content-list');
            var len=list.length;
            for(let i=0;i<len;i++){
                list[i].index=i;
                list[i].addEventListener(this.event,function(){
                    for(var j=0;j<len;j++){
                        list[j].style.cssText='background-color:#e8e8e8;color:white';
                        content[j].style.display='none';
                    }
                    this.style.cssText = "background-color:blue;color:#fff;"
                    content[i].style.display='block';
                },false);


            }



        }



    }
    window.tab=tab;
})(window);
new tab('#tab',{event:'click'})