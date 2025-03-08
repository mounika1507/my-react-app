import profilepic from "./assets/profile.avif"
function Card(){
  return(
    <div className="card">
        <img className="card-image" src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">Mounika</h2>
        <p>Web Developer</p>
        <p className="card-text">Aspiring web developer with a passion for building responsive and interactive websites using HTML, CSS, and JavaScript. Currently diving deep into React for dynamic front-end development and exploring Python for backend development and automation. Always eager to learn and build innovative solutions.</p>
    </div>
  )
}
export default Card