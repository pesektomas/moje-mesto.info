import { Parser } from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';
import iconv from 'iconv-lite';

export default async (body) => {
	
	let xml = body;
	const match = body.toString(undefined, 0, 100).match(/<\?xml[^>]+encoding="([^"]+)"[^>]+/m);
	if (match) {
		xml = iconv.decode(body, match[1]);
	}
	
	return new Promise((resolve, reject) => {
		new Parser({
			trim: true,
			explicitArray: false,
			emptyTag: undefined,
			mergeAttrs: true,
			attrValueProcessors: [parseNumbers],
			valueProcessors: [parseNumbers]
		}).parseString(xml, (err, data) => {
			if (err) {
				return reject(`JsonParser error: ${err}`);
			}
			resolve(data);
		});
	});
}
