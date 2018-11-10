try {
    var mongoose = require('mongoose');
} catch (_) {
    var prequire = require('parent-require'),
        mongoose = prequire('mongoose');
}

const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-extend');

const objectSchema = new Schema({ 
    any: {} 
}, { 
    id: false, 
    timestamps: { createdAt: 'created', updatedAt: 'modified' },
    strict: false
});

objectSchema.index({id: 1, created: 1});
objectSchema.plugin(mongoosePaginate);
objectSchema.plugin(mongooseAggregatePaginate);


module.exports = objectSchema;