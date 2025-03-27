const axios = require("axios");

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    
    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error("Origin and Destination are required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === "OK") {
            const element = response.data.rows[0].elements[0];

            if (element.status === "OK") {
                return {
                    distance: element.distance.text, // e.g., "5.4 km"
                    duration: element.duration.text, // e.g., "10 mins"
                };
            } else {
                throw new Error("No route found between the given locations");
            }
        } else {
            throw new Error("Failed to fetch distance data");
        }
    } catch (error) {
        console.error("Error fetching distance and time:", error.message);
        throw error;
    }
};



module.exports.getAutoCompleteSuggestions = async (req, res) => {
    const { input } = req.query;

    if (!input) {
        return res.status(400).json({ message: "Input is required for suggestions" });
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === "OK") {
            const suggestions = response.data.predictions.map((place) => ({
                description: place.description,
                place_id: place.place_id
            }));

            return res.status(200).json(suggestions);
        } else {
            throw new Error("No suggestions found");
        }
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
