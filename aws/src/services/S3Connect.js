import AWS from 'aws-sdk';

export default () =>{
	const config = {};
	return new AWS.S3(config);
}
