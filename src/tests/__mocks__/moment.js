const moment = require.requireActual('moment');
//We are mocking the moment data
//Since every time the moment() run , it returns a timestamp which is different from the previous one
//calling moment() always return the current timestamp.
//NOTE: We have set this up so that whenever the timestamp is not set. It will always default to
// JAN - 00:00 - 1970
export default (timestamp = 0) => {
  return moment(timestamp);
};
