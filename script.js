$(function () {




    $('.filter-menu').children().addClass('filter-item');
    $('.mix-wrap').children().addClass('filter-mix');
    // $('.mix-wrap').css({
    //     'position':'relative',
    // });
    $('.filter-mix').css({
        'transition':'all .3s linear',
    });
    // // var btnData = $('.filter-menu .filter-item').attr('data-target');
    


    var i;
    var x = $('.filter-item').toArray();
    for (i = 0; i < x.length; i++) {
        
        $(x[i]).on('click',function(e){
            e.preventDefault();
            var attrdata = $(e.target).attr('data-category-name');

            console.log(attrdata);

            var nam = $(this).attr('data-category-name');
            $('.mix-wrap > .filter-mix').css({
                'transform':'scale(0)',
            }).hide(1500);
            $('.mix-wrap > div.filter-mix[data-category-name="'+nam+'"]').css({
                'transform':'scale(1)',
            }).show(1500);

        });

    }

    

   
    


})