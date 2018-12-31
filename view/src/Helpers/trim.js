export default function trim (title, maxLength = 100) {
	let trimmedTitle = title.substr(0, maxLength);
	
	if (title.length > trimmedTitle.length) {
		trimmedTitle = trimmedTitle.substr(0, Math.min(trimmedTitle.length, trimmedTitle.lastIndexOf(' ')));
	}
	
	return trimmedTitle + (title.length > trimmedTitle.length ? '...' : '');
}