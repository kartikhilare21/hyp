import { Handler } from 'aws-lambda';
 
// Lambda handler function
const handler: Handler = async (event, context) => {
  console.log('Hello, World!');
  return 'Hello, World!';
};
 
export { handler };
