const getLocation = (country) => {

    let location;
    let distance;
    let distanceAsString;

    if(country == 'Sweden'){
        location = 'Linköping, Sweden';
        distance = 7941.08,
        distanceAsString = '7941.08';

    } else if( country == 'United States'){
        location = 'Ashburn, United States';
        distance = 3494.20;
        distanceAsString = '3494.20';

    } else if( country == 'Italy'){
        location = 'Rome, Italy';
        distance = 9389.47;
        distanceAsString = '9389.47';
        
    } else if( country == 'Singapore'){
        location  = 'Singapore, Singapore';
        distance = 13315.17;
        distanceAsString = '13315.17';

        
    }

    return {
        location: location,
        distance: distance,
        distanceAsString: distanceAsString
    }



}


module.exports = { getLocation: getLocation};