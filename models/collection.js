try {
    var mongoose = require('mongoose');
} catch (_) {
    var prequire = require('parent-require'),
        mongoose = prequire('mongoose');
}
const Schema = mongoose.Schema;
const uuid = require('uuid');
const mongoosePaginate = require('mongoose-paginate');

let collectionSchema = new Schema({  
    id: { type: String, default: uuid.v4 },
    title: { type: String, required: true },
    description: String,
    // can_read (required) boolean (runtime)
    // can_write (required) boolean (runtime)., POST) objects to this Collection.
    media_types: [String],
    apiRoot: {type: Schema.Types.ObjectId, ref: 'ApiRoot'}
}, {
    timestamps: { createdAt: 'created', updatedAt: 'modified' }
});

collectionSchema.plugin(mongoosePaginate);

console.log("DEBUG - LOADING COLLECTION MODEL");

module.exports = mongoose.model('Collection', collectionSchema);