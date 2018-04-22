
        const works = $('#works');
        const worksLen = works.children().length; 
        const clasName = 'ui-page ui-body-c ui-page-active';         
        //当图片1滑动时
        $(document).on('pageinit','div',function(){
          $('#works div').on('swipeleft',function(){
            //先隐藏所有图片
           // console.log(worksLen);
            //console.log('left'); 
             $('#works').children().removeClass();
            $(this).next('div').addClass(clasName);           
            if($(this).index()>worksLen-2){
              //works.children('div').removeClass(clasName);
              $('#works').children().removeClass();
              $('#img1').addClass(clasName);                     
            }            
          })

          $('#works div').on('swiperight',function(){
            //先隐藏所有图片
            //console.log($(this).index());
           // alert("您向右滑动！");
             $('#works').children().removeClass();
            $(this).prev('div').addClass('ui-page ui-body-c ui-page-active');
            let attr = $(this).attr('tabindex');
            if(attr==1||attr==0){
             // works.children('div').removeClass(clasName);
             $('#works').children().removeClass();
              $('#img4').addClass(clasName);            
            }      
          })

        })
       
 