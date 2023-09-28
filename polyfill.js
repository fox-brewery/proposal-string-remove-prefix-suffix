'use strict'

if (!String.prototype.removePrefix) {
	String.prototype.removePrefix = function removePrefix(/** @type {string} */ substr) {
		if (this.startsWith(substr)) {
			return this.slice(substr.length)
		}
		return this
	}
}

if (!String.prototype.removeSuffix) {
	String.prototype.removeSuffix = function removeSuffix(/** @type {string} */ substr) {
		if (this.endsWith(substr)) {
			return this.slice(0, this.length - substr.length)
		}
		return this
	}
}

console.log('greninja'.removePrefix('gre'))
console.log('charizard'.removeSuffix('izard'))