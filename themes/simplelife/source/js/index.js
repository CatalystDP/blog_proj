$(function(){
    $('#post-list').on('click','[data-post-item]',function(e){
        var $this=$(this),
            link=$this.data('post-link');
        location.href=link;
    });//监听文章列表点击
});