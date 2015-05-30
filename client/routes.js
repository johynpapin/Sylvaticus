Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/partners', function () {
    this.render('partners');
});

Router.route('/how', function () {
    this.render('how');
});