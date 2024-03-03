import mongoose from "mongoose";

const jsondata = new mongoose.Schema({
    end_year: { type: String,},
    intensity:{ type:Number, },
    sector: { type: String,},
    topic: { type: String,},
    insight: { type: String,},
    url : { type: String,},
    region: { type: String,},
    start_year: { type: String,},
    impact : { type: String,},
    added: { type: Date,},
    published: { type: Date,},
    country : { type: String,},
    relevance : { type:Number, },
    pestle: { type: String,},
    source: { type: String,},
    title: { type: String,},
    likelihood : { type:Number, },
    
},{
    collection:"jsondata",
}
);

export default mongoose.model("jsondata", jsondata);

// {
//     "end_year": "",
//     "intensity": 6,
//     "sector": "Energy",
//     "topic": "gas",
//     "insight": "Annual Energy Outlook",
//     "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
//     "region": "Northern America",
//     "start_year": "",
//     "impact": "",
//     "added": "January, 20 2017 03:51:25",
//     "published": "January, 09 2017 00:00:00",
//     "country": "United States of America",
//     "relevance": 2,
//     "pestle": "Industries",
//     "source": "EIA",
//     "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
//     "likelihood": 3
// },