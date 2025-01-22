async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();

    const result= users.map(function(user) {
        
      return `
      <div class="userCard">
      
    <h2>${user.id}-${user.name}</h2>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
     <p>Address </p>
    <p>Street: ${user.address.street} </p>  
    <p>Suite:  ${user.address.suite}</p>
    <p>City: ${user.address.city}</p>
    <p>Zipcode: ${user.address.zipcode}</p>
    <p>Geo: </p>
    <p>Lat: ${user.address.geo.lat}</p>
    <p>Lng: ${user.address.geo.lng}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: <a href="#">${user.website}</a></p>
    <p>Company: ${user.company.name} </p>
    <p>CatchPhrase:  ${user.company.catchPhrase } </p>
    <p>Bs: ${user.company.bs} </p>
    </div>
    
`;
        
}).join("");
document.querySelector(".users .raw").innerHTML = result;;
}

getUsers();
