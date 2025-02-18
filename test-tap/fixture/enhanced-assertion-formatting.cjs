const test = require('../../entrypoints/main.cjs');

const foo = 'foo';

test('fails with multiple empty string expressions and mixed quotes', t => {
	// eslint-disable-next-line quotes, yoda
	t.assert(foo === '' && "" === foo);
});

test('fails with "instanceof" expression', t => {
	// eslint-disable-next-line no-new-object
	t.assert(!(new Object(foo) instanceof Object));
});

test('fails with multiple lines', t => {
	/* eslint-disable unicorn/prefer-array-some, arrow-body-style */
	t.assert(
		[foo].filter(item => {
			return item === 'bar';
		}).length > 0,
	);
	/* eslint-enable unicorn/prefer-array-some, arrow-body-style */
});
