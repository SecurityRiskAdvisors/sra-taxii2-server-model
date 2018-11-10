try {
    var mongoose = require('mongoose');
} catch (_) {
    var prequire = require('parent-require'),
        mongoose = prequire('mongoose');
}
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let AccountSchema = new Schema({
    name: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    system: { type: Boolean }
}, {
    timestamps: { createdAt: 'created', updatedAt: 'modified' }
});

AccountSchema.pre('save', function (next) {
    let account = this;
    bcrypt.hash(account.password, 12, function (err, hash){
        if (err) {
            return next(err);
        }
        account.password = hash;
        next();
    })
});

module.exports = mongoose.model('Account', AccountSchema);