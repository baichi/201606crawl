module.exports = function(name){//logger:school
    return function(msg){
        var start = Date.now();
        var DEBUG = process.env.DEBUG;
        // DEBUG=logger:* => /^logger:.*$/
        DEBUG = DEBUG.replace('*','.*');
        var regex = new RegExp('^'+DEBUG+'$');
        if(regex.test(name))
            console.log(`${name} ${msg} +${Date.now()-start}ms`);
    }
}