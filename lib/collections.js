Curses = new Meteor.Collection("courses");

var Schemas = {};

Schemas.Curse = new SimpleSchema({
    edxid: {
        type: String
    },
    name:{
        type: String
    },
    category:{
        type: String
    },
    org:{
        type: String
    },
    run: {
        type: String
    },
    course:{
        type: String
    },
    uri:{
        type: String
    },
    image_url:{
        type: String
    },
    start:{
        type: String
    },
    end:{
        type: String
    },
    author: {
        type: String,
        label: "Author"
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    childrens: {
        type: [String]
    },
    quizs: {
        type: [Object]
    },
    "quizs.$.children": {
        type: String
    },
    "quizs.$.questions": {
        type: [Object]
    },
    "quizs.$.questions.$.question": {
        type: String
    },
    "quizs.$.questions.$.answers": {
        type: [Object]
    },
    "quizs.$.questions.$.answers.$.answer": {
        type: String
    },
    "quizs.$.questions.$.answers.$.grade": {
        type: Number
    }
});

Schemas.quiz = new SimpleSchema({
    questions: {
        type: [Object]
    },
    "questions.$.question": {
        type: String
    },
    "questions.$.answers": {
        type: [Object]
    },
    "questions.$.answers.$.answer": {
        type: String
    },
    "questions.$.answers.$.grade": {
        type: Number
    }
});

Curses.attachSchema(Schemas.Curse);

EasySearch.createSearchIndex('curses', {
    'collection': Curses,
    'field': ['title'],
    'limit': 10,
    'use' : 'minimongo',
    'sort': function() {
        return { 'bookRates': -1 };
    },
    'query': function(searchString, opts) {
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
        return query;
    }
});

AdminConfig = {
    adminEmails: ['johynpapin@kiwiasso.org'],
    collections:
    {
        Curses: {}
    }
};