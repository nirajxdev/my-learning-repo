

// function ProfileCard() {
//     const user = {
//         name:"Niraj Singh Kushwaha",
//         role: "Backend developer",
//         age: 19,
//         location: "Lucknow, India"
//     };

//     const imageUrl = "https://shorthand.com/the-craft/raster-images/index.html";

//     return (
//         <div className="profile-container">
//             <h1>{user.name} </h1>
//             <h2>{user.role} </h2>
//             <h3>{user.age} </h3>
//             <h3>{user.location} </h3>

//             <img src={imageUrl} />

//             <button onClick={() => window.alert("clicked")}>BUTTON</button>
//         </div>
//     )
// }

// destructure props
function ProfileCard({name, role, age, location, imageUrl}) {
    return (
        <div className="profile-container">
            <img src={imageUrl} />

            <h2>{name}</h2>
            <p>{role} </p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>

            <button>View profile</button>
        </div>
    )
}

export default ProfileCard;