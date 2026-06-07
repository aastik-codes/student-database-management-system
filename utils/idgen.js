
function generateID(){
    const quickID = ()=> Math.random().toString(36).substring(2,7);
    return quickID();
}


module.exports = {generateID}