var add = require('../lib/add')
var should = require('should')

describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532').should.equal('63861')
  })

  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    add('843529812342341234', '236124361425345435').should.equal(
      '1079654173767686669'
    )
  })
})

describe('测试 should', function () {
  it('测试 User 对象', function () {
    var user = {
      name: 'tj',
      pets: ['tobi', 'loki', 'jane', 'bandit']
    }
    user.should.have.property('name', 'tj')
    user.should.have.property('pets').with.lengthOf(4)
    // If the object was created with Object.create(null)
    // then it doesn't inherit `Object.prototype`, so it will not have `.should` getter

    // so you can do:
    should(user).have.property('name', 'tj')
    // also you can test in that way for null's
    should(null).not.be.ok()
  })
})
