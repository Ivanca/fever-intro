const fs = require('fs');

function convertWoffToBase64(filePath) {
    try {
        // Read the WOFF file as binary data
        const woffData = fs.readFileSync(filePath);

        // Convert the binary data to base64 string
        const base64String = woffData.toString('base64');

        // Create the data URI string
        const dataUri = `data:application/font-woff;base64,${base64String}`;

        return dataUri;
    } catch (error) {
        console.error('Error converting WOFF to base64:', error);
        return null;
    }
}

// Usage example
const woffFilePath = 'AristotelicaDisplayTrialDmBd-Regular.woff';
const base64String = convertWoffToBase64(woffFilePath);
console.log(base64String);