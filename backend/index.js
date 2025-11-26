const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { default: axios } = require('axios');
const { checkSymptom } = require('./symptom');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors({
  origin: `${process.env.FRONTEND_URL}`,
  credentials: true
}));

const genAI = new GoogleGenerativeAI({GEMINI_API_KEY : process.env.GEMINI_API_KEY});


app.post('/symptom-checker', checkSymptom);


app.post('/nearby-hospital' , async(req, res, next) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(422).json({
        error: "Location Needed",
      });
    }

    const query = `[out:json];
                  node["amenity"="hospital"](around:5000,${latitude},${longitude});
                  out;`;

    const url = process.env.NEARBY_HOSPITALS_URL;
    
    const response = await axios.post(url , query , {
      headers : {
        'Content-Type': 'text/plain'
      }
    });
    
    const hospitals = response.data.elements;

    const hospitalData = hospitals.map(hospital => ({
      name: hospital.tags.name || "No Name",
      latitude: hospital.lat,
      longitude: hospital.lon,
      address : hospital.tags['addr:full'] ? hospital.tags['addr:full'] : `${hospital.tags['addr:street'] || ''}, ${hospital.tags['addr:city'] || ''}, ${hospital.tags['addr:postcode'] || ''}`.trim(),
      phone: hospital.tags['contact:phone'] || hospital.tags.phone || "Not Available"
    }));

    // console.log(response.data);

    
    return res.status(200).json({
      success: "Fetched Successfully",
      //data : response.data,
      hospitalData
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Some Internal Server Error",
    });
  }
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
