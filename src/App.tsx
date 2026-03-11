import './App.css'
import EventCard from './EventCard.tsx'

const App = () => {
  const Events = [
    {
      eventName: "Tech Symposium", 
      venue: "UB Gymnasium",
      date: "February 20, 2026",
      organizer: "Gadgad, Mara Syldeni",
      capacity: 100,
        registeredStudents: ["Gadgad, Mara Syldeni", "Rai, Sandara", "Topacio, Erika Mae", "Opeña, Maria Isabel"]
    },
    {
      eventName: "Leadership Seminar", 
      venue: "UB Gymnasium",
      date: "February 21, 2026",
      organizer: "Rai, Sandara",
      capacity: 150,
      registeredStudents: ["Rai, Sandara", "Dela Cruz, Juan", "Danilo, Samantha"]
    },
    {
      eventName: "Sports Fest", 
      venue: "UB Gymnasium",
      date: "February 22, 2026",
      organizer: "Dela Cruz, Maria",
      capacity: 180,
      registeredStudents: ["Dela Cruz, Maria", "Rey, John", "Torres, Leah"]
    }
  ]

  return (
    <>
      <h1>University Event Registration Dashboard</h1>

      <section>
      
      {Events.map((Event, index) => (
        <EventCard
        key={index}
          eventName={Event.eventName}
          venue = {Event.venue}
          date = {Event.date}
          organizer = {Event.organizer}
          capacity = {Event.capacity}
          registeredStudents = {Event.registeredStudents}
        />
      ))}
      </section>
    </>
  )
}

export default App
