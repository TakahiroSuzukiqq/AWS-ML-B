const mongoose = require('mongoose');
const { Schema } = mongoose;
const LiqApiSchema = new Schema ({
   "ComputeStatistics": "boolean",
   "DataSourceId": "string",
   "DataSourceName": "string",
   "DataSpec": { 
   "DataLocationS3": "string",
      "DataRearrangement": "string",
      "DataSchema": "string",
      "DataSchemaLocationS3": "string"
    }
});

const LiqApi = mongoose.model('LiqApi', LiqApiSchema);

module.exports = LiqApi;