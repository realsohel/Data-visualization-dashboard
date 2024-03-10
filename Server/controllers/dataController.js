import jsondata from "../schema/database.js"


export const getData = async(req,res)=>{
    try {
        
        const getdata = await jsondata.find()
        console.log(getdata.length)

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

const getDataFilters = (query) => {
    const fields = Object.keys(jsondata.schema.paths);
    
    console.log(query)
    const filter = {};

    for (const key in query) {
        if (fields.includes(key))
            filter[key] = query[key];
    }

    return filter;
}

const getRequiredFields = (query) => {
    if (!query['_fields']) return {};

    const fields = Object.keys(jsondata.schema.paths);
    const reqFields = {};

    for (const field of query['_fields'].split(";")) {
        console.log(field);
        if (field == "_id")
            reqFields[field] = 0;
        else if (fields.includes(field))        
            reqFields[field] = 1;
    }

    return reqFields;
}

export const getSpecificData = async(req,res)=>{
    try {
        // Retrieve query parameters from request query
        const filters = getDataFilters(req.query);
        const fields = getRequiredFields(req.query);
        console.log(fields);
        const data = await jsondata.find(filters, fields);
        
        console.log(data.length)
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

