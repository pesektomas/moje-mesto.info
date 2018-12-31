import trim from './trim';

describe.each([
	['abcdefgh', 100, 'abcdefgh'],
	['abcdefgh', 1, '...'],
	['a b c d e f g h', 2, 'a...'],
	['a b c d e f g h', 5, 'a b...'],
	['a b c d e f g h', 10, 'a b c d e...']
])(
	'.trim(%s, %i)',
	(string, limit, trimed) => {
	  test(`return ${trimed}`, () => {
		expect(trim(string, limit)).toBe(trimed);
	  });
	},
  );