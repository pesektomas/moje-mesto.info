import pino from 'pino';
import config from 'config';

const logger = ({ level = config.get('mojeMesto.logger.level'), ...additionalInfo }) => {
	return pino({ level }).child(additionalInfo);
};

export default logger;