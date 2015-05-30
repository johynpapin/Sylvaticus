Template.search.helpers({
    toggled: function() {
        return Session.get('toggled');
    }
});

Template.graph.helpers({
    data: function() {
        return Curses.findOne({_id: Session.get('current')});
    },
    width: function() {
        return (100/this.childrens.length).toString()+"%";
    }
});

Template.quizForm.helpers({
    currentQuiz: function() {
        return Curses.findOne({_id: Session.get('current')});
    },
    i: function() {
        var length = $('.question').size() + 1;
        console.log(length);
        return length;
    }
});