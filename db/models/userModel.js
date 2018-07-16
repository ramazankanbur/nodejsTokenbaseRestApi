const mongoose = require('../dbconfig');

const Schema = mongoose.Schema;

//created for UserSchema, not particular db object
const UserCustomWordSchema = new Schema({
    tr: {
        type: String,
        required: [true, 'Türkçe alan zorunlu']
    },
    eng: {
        type: String,
        required: [true, 'İngilizce alan zorunlu']
    },
    customCategory: {
        type: String,
        required: [true, 'Kelime kategorisi seçmek zorunlu'],
        default: 'Default'
    }
});

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: name => name.length > 2,
            message: 'İsim 2 karakterden uzun olmalı'
        },
        unique: [true, 'Daha önce kullanılmış. Lütfen farklı bir takma ad kullanın'],
        required: [true, 'İsim zorunlu']
    },
    email: {
        type: String,
        required: [true, 'Email adresi zorunlu'],
        unique: [true, 'Bu mail adresi ile kayıt oluşturulmuş'],
        validate: {
            validator: (email) => {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;// eslint-disable-line
                return re.test(String(email).toLowerCase());
            },
            message: 'Lütfen uygun bir email adresi girin'
        }
    },
    password: {
        type: String,
        required: [true, 'Şifre zorunlu']
    },
    avatar: {
        type: String,
        default: 'avatar.jpg'
    },
    notificationPeriod: {
        type: Number, //day
        default: null
    },
    notificationPeriodExecutetime: {
        type: Date,
        default: null
    },
    wordLimit: {
        type: Number,
        default: 5
    },
    isPassive: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    isUserAdmin: {
        type: Boolean,
        default: false
    },
    isUserThemaDark: {
        type: Boolean,
        default: false
    },
    lastLoginDate: {
        type: Date,
        default: new Date().getDate()
    },
    connectedUsers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    userCustomerWords: [UserCustomWordSchema]
}, {
        timestamps: true
    });

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
