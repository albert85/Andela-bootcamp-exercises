

module.exports = {
    word: (inputString) => {
        // Check if valid input is supplied
        if(typeof inputString !== 'string'){
            return 'Please supply a String';
        }

        // Check if empty string is supplied
        if (inputString.length === 0) {
            return 'Please supply a non-empty String';
        }

        // divide the setence into word
        let words = inputString.split(" ");
        
        // create empty json object
        let output = {};
        
        // count no of occurences
        words.forEach((arrayWords)=>{
            let regexp = new RegExp("\\b" + arrayWords +"\\b",'ig');
            let result = inputString.match(regexp);

            // store the out into memory
            output[arrayWords] = result.length;
            
        });
        console.log(output);
        return output;

    }
}

