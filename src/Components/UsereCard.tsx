import type { User } from "../data/data"


function UserCard({ user }: { user: User }) {
    const { id, name, role, isOnline, bio, skills } = user;
    return (
        <>
            <div 
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    width: "300px",
                    margin: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                {/*Avatar */}
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#4f46e5",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        marginBottom: "10px",
                    }}
                >
                    {name.charAt(0)}
                </div>
            
            <div>
                <h2>{name}</h2>
                <p>{role}</p>
                <p style={{ color: isOnline ? "green" : "gray", fontWeight: "bold" }}>
                    {isOnline ? "Online" : "Offline"}
                </p>
                {isOnline && (
                    <>
                        <p>{bio}</p>
                        <h4>{skills}</h4>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{ skill}</li>
                            ))}
                        </ul>
                    </>
                )}
                </div>
            </div>    
        </>    
    )
}

export default UserCard