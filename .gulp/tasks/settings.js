const JSONPath = require('JSONPath')
const currentGitBranch = require('current-git-branch')
const {githubUriHttpsParser} = require('github-uri-https-parser')

const PACKAGE = require('../../package.json')
const SETTINGS = require('../configuration.json')


SETTINGS.github = githubUriHttpsParser(PACKAGE.repository.url)
SETTINGS.github.branch = currentGitBranch()
SETTINGS.package = PACKAGE

module.exports = {}
module.exports.settings = (p) => {
  if (p === 'year') {
    return new Date().getFullYear()
  } else if (p === 'generatedDate') {
    return new Date().toUTCString()
  }
  const value = JSONPath.eval(SETTINGS, p)
  if ((value instanceof Array) && (value.length === 1)) {
    return value[0]
  }
  return value
}
module.exports.allSettings = SETTINGS
