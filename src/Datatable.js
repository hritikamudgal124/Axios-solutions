import useFetch from "./customHook";
function Datatable(){
  const [data] =useFetch('https://jsonplaceholder.typicode.com/users');
    return(
        <table>
            <thead>
                <tr>
                <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>phone</th>
        <th>website</th>
        <th>street</th>
        <th>suite</th>
        <th>city</th>
        <th>zipcode</th>

                </tr>

            </thead>
            <tbody>
                {data &&
                    data.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.suite}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.zipcode}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Datatable