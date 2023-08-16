import React, { useState, useEffect } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReportListAll from "../components/ReportListAll";
import axios from "axios";

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const id_engineer = localStorage.getItem("engineerId");
    const role ="6746ce06-163f-4225-8684-c624389f0a54"

    const notifsuccess = () =>
        toast.success("berhasil tambahakan report!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const [showForm, setShowForm] = useState(false);
    const [inspectors, setInspectors] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchUser = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/findUser');
            setUsers(response.data.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
    }
    const fetchInspectors = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/inspectors/by-engineer/${id_engineer}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setInspectors(response.data);
            console.log(response.data,'---inspector');
        } catch (error) {
            console.error(error);
        }
    };

    const UserForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [role_id, setRole_id] = useState('6746ce06-163f-4225-8684-c624389f0a54');
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const newUser = {
            name,
            email,
            password,
            role_id
          };
          console.log(JSON.stringify(newUser))
      
          try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', newUser, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
      
            setEmail('');
            setName('');
            setPassword('');
            fetchUser()
      
            if (response.status === 200) {
              // Handle success (e.g., show a success message)
            } else {
              // Handle error (e.g., show an error message)
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        return (
          <div className="rounded bg-white p-6 shadow-md">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label  className="text-gray-700 block text-sm font-medium" >Name:</label>
                <input type="text" className="border-gray-300 mt-1 w-full rounded-md border p-2" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label  className="text-gray-700 block text-sm font-medium">Email:</label>
                <input type="email" className="border-gray-300 mt-1 w-full rounded-md border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label  className="text-gray-700 block text-sm font-medium">Password:</label>
                <input type="password" className="border-gray-300 mt-1 w-full rounded-md border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {/* <div>
                <label>Role ID:</label>
                <input type="text" className="border-gray-300 mt-1 w-full rounded-md border p-2" value={roleId} onChange={(e) => setRoleId(e.target.value)} />
              </div> */}
              <button type="submit">Create</button>
            </form>
          </div>
        );
      };

    useEffect(() => {
        fetchInspectors();
        fetchUser()

        console.log(id_engineer);
    }, [id_engineer]);

    useEffect(() => {
        console.log(inspectors);
        
    }, [inspectors]);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleDelete = async (id) => {
        // if (!id) {
        //   console.log('Inspector ID is required.');
        //   return;
        // }
    console.log(id)
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/inspectors/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
        //   fetchInspectors()
          if (response.status === 200) {
            console.log('Inspector deleted successfully.');
            fetchInspectors()
            // Do additional actions if needed
          }
        } catch (error) {
          console.error('Error deleting inspector:', error);
        }
      };
    const CreateInspector = () => {
        const [discipline, setDiscipline] = useState("");
        const [position, setPosition] = useState("");
        const [name, setName] = useState("");
        const [user_id, setUser_id] = useState("");
        const [engineer_id, setEngineer_id] = useState(id_engineer);

      
        const handleSubmit = async (e) => {
            e.preventDefault();

            const data = {
                discipline,
                position,
                name,
                user_id,
                engineer_id,
            };
            console.log(data);
              try {
                const response = await axios.post('http://127.0.0.1:8000/api/inspectors', data, {
                  headers: {
                    Authorization: `Bearer ${token}`, // Ganti dengan JWT token yang valid
                  },
                });

                console.log('Inspector created:', response.data);
                fetchInspectors()
              } catch (error) {
                console.error('Error creating inspector:', error);
              }
        };

        return (
            <div className="max-w-md  rounded bg-white p-6 shadow-md">
                <h2 className="mb-4 text-2xl font-semibold">
                    Create Inspector
                </h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="text-gray-700 block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border-gray-300 mt-1 w-full rounded-md border p-2"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="discipline"
                            className="text-gray-700 block text-sm font-medium"
                        >
                            Didicpline
                        </label>
                        <input
                            type="text"
                            id="discipline"
                            className="border-gray-300 mt-1 w-full rounded-md border p-2"
                            onChange={(e) => setDiscipline(e.target.value)}
                            value={discipline}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="position"
                            className="text-gray-700 block text-sm font-medium"
                        >
                            Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            className="border-gray-300 mt-1 w-full rounded-md border p-2"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
                            required
                        />
                    </div>
                   
                    <div className="mb-4">
          <label htmlFor="user_id" className="text-gray-700 block text-sm font-medium">
            User ID
          </label>
          <select
            id="user_id"
            className="border-gray-300 mt-1 w-full rounded-md border p-2"
            onChange={(e) => setUser_id(e.target.value)}
            value={user_id}
            required
          >
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name} - {user.email}
              </option>
            ))}
          </select>
        </div>
                    {/* <div className="mb-4">
                <label htmlFor="engineer_id" className="block text-sm font-medium text-gray-700">
                  Engineer ID
                </label>
                <input
                  type="text"
                  id="engineer_id"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300"
                  onChange={(e) => setEngineer_id(e.target.value)}
                  value={engineer_id}
                  required
                />
              </div> */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 text-primary"
                    >
                        Create Inspector
                    </button>
                </form>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* <header className="bg-blue-500 py-4 px-8 text-white">
                <h1 className="text-2xl font-bold">Aplikasi Laporan</h1>
            </header> */}
            <main className="container mx-auto p-4">
                <div className="fllex relative  mx-auto grid grid-cols-1 gap-4 px-4 pt-0 md:grid-cols-3  md:px-8 lg:max-w-7xl lg:grid-cols-2 lg:gap-1 ">
                    {/* <div>

                <button
                className="bg-blue-500 hover:bg-blue-700 border py-2 px-4 font-Bitter text-sm font-bold  text-primary"
                onClick={toggleForm}
            >
                {showForm ? "X" : "Tambah Laporan"}
            </button>
            {
                showForm &&
                    <ReportForm notsucces={notifsuccess} />
            }
                    </div> */}
                    {/* <ReportList /> */}
                    <CreateInspector />
                    <UserForm/>
                </div>
                <div className="fllex relative  mx-auto grid grid-cols-1 gap-4 px-4 pt-8 md:grid-cols-3  md:px-8 lg:max-w-7xl lg:grid-cols-1 lg:gap-1 ">
                    {/* <ReportForm notsucces={notifsuccess} /> */}
                    {/* <ReportListAll /> */}
                    <div className="max-w-2xl">
                        <table className="my-6 w-full rounded bg-white shadow-md">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                                    <th className="py-1 px-6 text-left">No</th>
                                    <th className="py-1 px-6 text-left">
                                        Name
                                    </th>
                                    <th className="py-1 px-6 text-left">
                                        position
                                    </th>
                                    <th className="py-1 px-6 text-left">
                                        discipline
                                    </th>
                                    <th className="py-1 px-6 text-left">
                                        Action
                                    </th>
                                    {/* Add more table headers as needed */}
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {inspectors.map((inspector, index) => (
                                    <tr
                                        key={inspector.id}
                                        className="border-gray-200 hover:bg-gray-100 border-b"
                                    >
                                        <td className="py-1 px-6">
                                            {(index = 1)}
                                        </td>
                                        <td className="py-1 px-6">
                                            {inspector.name}
                                        </td>
                                        <td className="py-1 px-6">
                                            {inspector.position}
                                        </td>
                                        <td className="py-1 px-6">
                                            {inspector.discipline}
                                        </td>
                                        <td>
                                            <button onClick={()=>{ handleDelete(inspector.id),console.log(inspector.id)}}>delete</button>
                                        </td>
                                        {/* Add more table cells as needed */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-200 py-2 text-center">
                {/* <p className="text-gray-500 text-sm">
                    © 2023 Aplikasi Laporan. All rights reserved.
                </p> */}
            </footer>
        </div>
    );
};

export default Feed;
