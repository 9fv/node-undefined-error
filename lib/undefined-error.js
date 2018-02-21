/**
 * This file is part of node-undefined-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module undefined-error
 * @description An exception class to throw undefined error.
 * @example
 *
 * const {UndefinedError} = require('@9fv.io/undefined-error')
 *
 * function test(name) {
 *   if (!name) {
 *     throw new UndefinedError('an error') // throw an error of type {UndefinedError}.
 *   }
 *   return name;
 * }
 *
 */

const {ExtendedError} = require('@9fv.io/extended-error')

/**
 * An exception class to throw undefined error.
 *
 * @category error
 * @class
 * @public
 */
class UndefinedError extends ExtendedError {

}

module.exports = {}
module.exports.UndefinedError = UndefinedError
