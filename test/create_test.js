/* eslint-disable */
const assert = require('assert');
const User = require('../db/models/userModel');
  
describe('User Methods', () => {
    it('register a user', (done) => {
        const riza = new User({ name: 'Mona Rıza' });
        riza.save()
            .then(() => {
                assert(!riza.isNew);
                done();
            });
    });   
});
