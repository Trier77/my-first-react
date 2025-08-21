export default function User({name, email, image}){
    return (
        <div className="user-card">
            <img src={image} alt={name} />
            <h2>Hello, {name}</h2>
            <p>Emial: {email}</p>
        </div>
    

    )
      
}