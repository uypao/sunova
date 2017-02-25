import dotenv from 'dotenv';
dotenv.load({path:'.env'});

export default {
  getHostURI: function(env) {
    return `${process.env.MONGODB_URI}/pt-${env}`;
  }
}
