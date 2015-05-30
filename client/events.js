Template.home.created = function () {
    Session.set('toggled', false);
    var instance = EasySearch.getComponentInstance(
        { index : 'curses' }
    );

    instance.on('searchingDone', function (searchingIsDone) {
        searchingIsDone
    });

    instance.on('currentValue', function (val) {
        if(val == '') {
            if($(".input-blocker").is(":hidden")) {
                $(".input-blocker").slideDown("slow");
                $(".gray-background").slideDown("slow");
            }
        } else {
            if(!$(".input-blocker").is(":hidden")) {
                $(".input-blocker").slideUp("slow");
                $(".gray-background").slideUp("slow");
            }
        }
        Session.set('toggled', false);
    });
};

Template.curse.events({
    'click .canI': function(e, template) {
         var length = $('.searchresults').children().length;
         /*
        $(e.target).closest('.curse').addClass('current');
         (function theLoop (i) {
         setTimeout(function () {
         if($('.searchresults .curse:nth-child('+i+')').hasClass('current')) {
         } else {
         $('.searchresults .curse:nth-child('+i+')').toggle("slide", {direction: "left"}, 500);
         }
         if (--i) theLoop(i);      //  decrement i and call myLoop again if i > 0
         }, 500)
         })(length);                        //  pass the number of iterations as an argument
         */
        Session.set('current', this._id);

        $('#searchpage').slideUp('slow', function() {
            Session.set('toggled', true);
        });
    }
});

Template.graph.events({
    'click .after': function(e, template) {
        $(e.target).closest('.after').toggleClass('target');
        $('.current .panel-body').slideToggle('slow', function(){
            $('.after:not(.target)').toggle("slide", {direction: "right"}, 'slow', function() {
                $(e.target).closest('.after').find('.panel-body').slideToggle();
            });
        });
    },
    'click .participate': function(e, template) {
        Modal.show('quizForm');
    }
});