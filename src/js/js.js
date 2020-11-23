(function ($) {

  // load && scroll
  $(function(){
    const win = $(window);
    const coinArea = $('.coin-area');

    coinArea.addClass('load');

    win.on('scroll', function(){
      const winT = $(this).scrollTop();
      
      coinArea.find('> p').each(function(){
        const $this = $(this);
        const idx = $this.index();
        const translateTop = winT * idx * 0.1;

        $this.css('transform', 'translate3d(0,' + translateTop + 'px, 0)');
      });
    });
  });

  // 참여하기
  $(function () {  
    const btnJoin = $('.btn-join > a');
    const layer = $('.layer-box');
    const layerClose = layer.find('.close');

    btnJoin.on('click', function(){
      layer.addClass('active');
      return false;
    });

    layerClose.on('click', function(){
      layer.removeClass('active');
      return false;
    })
  });

})(jQuery);