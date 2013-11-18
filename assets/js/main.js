$(function() {
    FastClick.attach(document.body);
});
$('.main_frank').infinitescroll({
 
    navSelector  : ".pagination_frank",
    debug: true,         
                   // selector for the paged navigation (it will be hidden)
    nextSelector : ".pagination_frank a.older-posts",    
                   // selector for the NEXT link (to page 2)
    itemSelector : ".main_frank .article_frank"          
                   // selector for all items you'll retrieve
});