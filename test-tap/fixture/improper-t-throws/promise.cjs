const test = require('../../../entrypoints/main.cjs');

test('test', t => Promise.resolve().then(() => {
	t.throws(throwSync());
}));

function throwSync() {
	throw new Error('should be detected');
}
