$.fn.ready(function(){
    $('.counter-btn').click(function() {
        var counterEl = $('.counter-val')
            counterVal = counterEl.text(),
            $this = $(this);
        counterVal = parseInt(counterVal, 10);
        if($this.hasClass("counter-incr")) {
            counterVal++;
        } else if($this.hasClass("counter-decr")) {
            counterVal--;
        }
        counterEl.removeClass('counter-green counter-red counter-gray');
        if(counterVal > 0) {
            counterEl.addClass('counter-green');
        } else if (counterEl === 0) {
            counterEl.addClass('counter-gray');
        } else {
            counterEl.addClass('counter-red');
        }
        $('.counter-val').text(counterVal);
    });
});
