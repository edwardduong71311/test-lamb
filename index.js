import { format } from 'date-fns';

exports.handler = async (event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Today is: ' + format(new Date(), 'dd/MM/yyyy hh:mm:ss aa')),
  };
  return response;
};