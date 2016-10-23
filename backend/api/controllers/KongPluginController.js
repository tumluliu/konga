'use strict';

var unirest = require("unirest")
var _ = require('lodash');

var KongPluginController  = _.merge(_.cloneDeep(require('../base/KongController')), {

    retrieveEnabled : function(req,res) {
        unirest.get(sails.config.kong_admin_url + '/plugins/enabled/')
            .end(function(response){
                if(response.error) return res.kongError(response)
                return res.json(response.body)
            })
    },

    retrieveSchema : function(req,res) {
        unirest.get(sails.config.kong_admin_url + '/plugins/shema/' + req.params.plugin)
            .end(function(response){
                if(response.error) return res.kongError(response)
                return res.json(response.body)
            })
    },

    listApi : function(req,res) {
        unirest.get(sails.config.kong_admin_url + '/apis/' + req.params.api + '/plugins/')
            .end(function(response){
                if(response.error) return res.kongError(response)
                return res.json(response.body)
            })
    },
});

module.exports = KongPluginController;