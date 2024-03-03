import jsondata from "../schema/database.js"


export const getData = async(req,res)=>{
    try {
        
        const getdata = await jsondata.find(
            { country: "Russia" }
        )

        res.status(200).json({
            success: true,
            message: "Successful ",
            data: getdata,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getSpecificData = async(req,res)=>{
    try {
        // Retrieve query parameters from request query
        const { intensity, likelihood, relevance, year, country, topics, region, city } = req.query;
    
        // Build filter object based on query parameters
        console.log(req.query)
        const filter = {};
    
        if (intensity) filter.intensity = intensity;
        if (likelihood) filter.likelihood = likelihood;
        if (relevance) filter.relevance = relevance;
        if (year) filter.start_year = year;
        if (country) filter.country = country;
        if (topics) filter.topic = topics;
        if (region) filter.region = region;
        if (city) filter.city = city;
    
        // Query MongoDB using your Mongoose model
        const data = await jsondata.find(filter);
    
        res.status(200).json({
            success: true,
            message: "Successful ",
            data: data,
        }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}