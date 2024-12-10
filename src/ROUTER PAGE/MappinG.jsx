import React from 'react'

function Mapping() {
    const Animals = [
        {
            id: 1,
            name: "AboutPe",
            Route:"/About"
        },
        {
            id:2,
            name: "cat",
            age:20
        },
        {
            id:3,
            name: "rat",
            age:20
        },
        {
            id:4,
            name: "snake",
            age:20
        },
    ]
  return (
    <div>
    {Animals.map((joshua)=>(
        <div key={joshua.id}>
             <Link> <li>{joshua.name}</li></Link>
        </div>
    ))}
</div>
)
}

export default Mapping