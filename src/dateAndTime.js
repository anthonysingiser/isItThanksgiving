import FetchHolidays from './FetchHolidays';

export default function DateAndTime() {

    const currentDate = new Date();

    return (
        <div>
            <p>Date : {currentDate.toLocaleDateString('ko-KR')}</p>
        
            <FetchHolidays 
                date = {currentDate.toLocaleDateString('ko-KR')}
            />
        </div>
        )
};
