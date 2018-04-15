
        const works = $('#works');
        const worksLen = works.children().length; 
        const clasName = 'ui-page ui-body-c ui-page-active';         
        //当图片1滑动时
        $(document).on('pageinit','#img1',function(){
          $('div').on('swipeleft',function(){
            //先隐藏所有图片
            console.log(worksLen);
            console.log('left'); 
             $(this).removeClass();
            $(this).parent().next().addClass(clasName);           
            if($(this).index()>worksLen-2){
              works.children('div').removeClass(clasName);
              works.children('#img1').addClass(clasName);                     
            }
            //console.log($(this).index());
             $(this).attr('tabindex',$(this).index());                   
          })

          $('div').on('swiperight',function(){
            //先隐藏所有图片
            console.log($(this).index());
           // alert("您向右滑动！");
             $(this).removeClass();
            $(this).parent().prev().addClass('ui-page ui-body-c ui-page-active');
            let attr = $(this).attr('tabindex');
            //alert(attr);
            if(attr<=1){
              works.children('div').removeClass(clasName);
              works.children('#img4').addClass(clasName);
             
            }
             if(attr=4){
              $(this).removeClass();
              $(this).parent().prev().addClass('ui-page ui-body-c ui-page-active');              
            }          
          })

        })
       
 