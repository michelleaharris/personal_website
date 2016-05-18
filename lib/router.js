Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});
Router.route('/publications', {name: 'publications'});
Router.route('/research', {name: 'research'});
Router.route('/other', {name: 'other'});
Router.route('/outreach', {name: 'outreach'});
Router.route('/articles', {name: 'articles'});
Router.route('/scuba', {name: 'scuba'});

