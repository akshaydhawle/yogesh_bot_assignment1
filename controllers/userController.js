const { users:userModel } = require('../models/userModel');

exports.getReports = async(req,res)=>{
    try {
            //generate reports
         const reports = await getReports();   
          return res.send({ msg:"report generated successfully.", reports });
 
    } catch (ex) {
        return ex.message;
    }
}



const getReports = async()=>{
       //add bucket to query
    const bucket =   {
        $bucket: {
            groupBy: "$dob.age",                        // Field to group by
            boundaries: [ 0, 30, 50 ], // Boundaries for the buckets
            default: "50 and above",  
            output: {                                     // Output for each bucket
                "count": { $sum: 1 }
            }  
        }
      }   ;

    //get the analysis result 
   const reports = await userModel.aggregate([
    {
        $facet:{
            male:[
                { $match: { $and:[ { nat:'NL' }, {gender: 'male'} ] } },
                bucket  
            ],
            female:[
                {  $match:{ $and:[ { nat: 'NL'},{ gender: 'female' } ] } },
                bucket
            ]
        }
    }
  ]) 

  return reports;
}