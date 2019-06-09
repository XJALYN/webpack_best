const path = require('path')
module.exports = {
    entry:{
        index:'./src/index.js',
        admin:'./src/admin.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:["name"].js
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/.css$/,
                use:'css-loader'
            }
        ]
    }
}