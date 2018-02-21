/**
 * This file is part of node-undefined-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {UndefinedError} = require('../lib/undefined-error')

describe('Class {UndefinedError}', () => {
  it('should be a function', () => {
    (UndefinedError).should.be.a.Function()
  })
})

describe('Create a new instance of {UndefinedError}', () => {
  it('without arguments should be an object', () => {
    (new UndefinedError()).should.be.an.Object()
  })
  it('without arguments should be an instance of {UndefinedError}', () => {
    (new UndefinedError()).should.be.an.instanceOf(UndefinedError)
  })
  it('with argument should be an object', () => {
    (new UndefinedError('an error')).should.be.an.Object()
  })
  it('with argument should be an instance of {UndefinedError}', () => {
    (new UndefinedError('an error')).should.be.an.instanceOf(UndefinedError)
  })
})

describe('Throw an {UndefinedError}', () => {
  it('without arguments should be an object', () => {
    (() => { throw new UndefinedError() }).should.throw()
  })
  it('with arguments should be an object', () => {
    (() => { throw new UndefinedError('an error') }).should.throw()
  })
})
