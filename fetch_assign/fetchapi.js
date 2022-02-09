import React,{useState , useEffect} from "react";
import './Fetch.css';
// import Fetch1 from "./Fetch1";

function FetchAPI() 
{
const[count , setCount]=useState(1);
const[resources,setResources]=useState('todos');
 const [tableData, setTableData] = useState([])
    
    function increase() {
        setCount(count+1);
    }
    function decrease() {
        setCount(count-1);
    }

 const changeData=fld=>{
     setResources(fld)
}

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
  .then(response => response.json())
//   .then(json => console.log(json))
  .then(json => setTableData(json))
});

    return(
        <div>
            <div>
                <center> 
                <h1>Fetching Data Using API call</h1>
                <h3>Counter:{count}</h3>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease} disabled={count === 0}>Decrease</button>
                <br />
                <br />
                <button onClick={()=>changeData('posts')} >posts</button>
                <button onClick={()=>changeData('comments')} >comments</button>
                <button onClick={()=>changeData('albums')} >albums</button>
                <button onClick={()=>changeData('photos')} >Photos</button>
                <button onClick={()=>changeData('todos')} >todos</button>
                <button onClick={()=>changeData('users')} >users</button>
                
                </center>
            </div>   
            {resources=='posts'&&<div>
                    <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr>Posts Data</tr> */}
                        <tr>
                            <th>UserId</th>
                            {/* <th>Id</th> */}
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.userId}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>}
                {resources=='comments'&&<div>
                    <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr>Comment Data</tr> */}
                        <tr>
                            <th>PostId</th>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Body</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.postId}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>}
                {resources=='albums'&&<div>
                    <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr>Album Data</tr> */}
                        <tr>
                            <th>UserId</th>
                            {/* <th>Id</th> */}
                            <th>Title</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.userId}</td>
                                    <td>{ele.title}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>}
                {resources=='photos'&&<div>
                    <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr> Photos Data</tr> */}
                        <tr>
                            <th>AlbumId</th>
                            {/* <th>Id</th> */}
                            <th>Title</th>
                            <th>URL</th>
                            <th>ThumbnailUrl</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.albumId}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.url}</td>
                                    <td>{ele.thumbnailUrl}</td>
                                </tr>))}
                        </tbody>
                    </table>
            </div>}
            {resources=='todos'&& <div>
            <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr>Todos Data</tr> */}
                        <tr>
                            <th>UserId</th>
                             {/* <th>Id</th> */}
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.userId}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.completed ?"Yes":"No"}</td>
                                 </tr>))} 
                        </tbody>
                    </table>
                </div>}
                {resources=='users'&& <div>
            <table align="center" border="1" cellSpacing="2" cellPadding="5">
                        {/* <tr>Users Data</tr> */}
                        <tr>
                            {/* <th>Id</th> */}
                             <th>Name</th>
                            <th>Username</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                        <tbody>
                                {tableData.map(ele=>(<tr key={ele.id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                 </tr>))} 
                        </tbody>
                    </table>
                </div>}
                
                {/* <div>
                    <Fetch1 tableData={tableData} />
                </div> */}
        </div>
    );
}
export default FetchAPI;
