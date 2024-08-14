const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const should = chai.should();

describe('Main Route', () => {
    it('should return Hello World on / GET', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Hello World!');
                done();
            });
    });
});
