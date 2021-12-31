import { useEffect, useState } from "react";

export default function FetchHolidays(props) {
    const [holidays, setHolidays] = useState('');

    useEffect(() => {
        fetch('https://holidayapi.com/v1/holidays?&country=US&key=743e9839-3028-4c8d-8e7a-c4b5efdd47d1&year=2020')
            .then((response) => response.json())
            .then((data) => setHolidays(data.holidays[116].date))
            .catch((console.log('holidays bad')));
    });

    const removePunctuation = (dateString) => {
        const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        return dateString.split('')
        .filter((character) => {
          return punctuation.indexOf(character) === -1
        }).join('')
    }

    const removeSpaces = (dateString) => {
        const space = ' '
        return dateString.split('')
        .filter((character) => {
            return space.indexOf(character) === -1
        }).join('')
    }

    const cleanHolidayDate = removePunctuation(holidays)
    const cleanCurrentDate = removeSpaces(removePunctuation(props.date))

    const isItThanksGiving = () => {
        if(cleanCurrentDate === cleanHolidayDate){
            return `Be Thankful, It's Thanksgiving!`
        }else{
            return 'NO'
        }
    }

    return (
        <div>
            {console.log(cleanHolidayDate)}
            {console.log(cleanCurrentDate)}
            Is it Thanksgiving?
            <br></br>
            <br></br>
            {isItThanksGiving()}
        </div>
    );
}