import StudentList from './StudentList.tsx'

type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
    };

const EventCard = ({eventName, venue, date, organizer, capacity, registeredStudents}: EventProps) => {
  return (
    <>
        <h3>Event Name: {eventName}</h3>
        <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Organizer: {organizer}</p>
        <p>Capacity: {capacity}</p>
        
        <p>Registered Students: </p>
        <StudentList
        students={registeredStudents}
        />
    </>
  );
}

export default EventCard