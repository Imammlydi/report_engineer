import React, { useState, useEffect } from "react";

import { useLocation, useParams, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const DetailReport3 = () => {
    const token = localStorage.getItem("token");
    const id_engineer = localStorage.getItem("engineerId");
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    const { state } = useLocation();
    console.log(state);
    const index = state;
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const indexs = queryParams.index;
    const [reports, setReports] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [wrokerH, setWrokerH] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [weather, setWeather] = useState([]);
    const [status, setStatus] = useState("");

    const setuju = () => {
        return setStatus("sudah di setujui");
    };
    const batalsetuju = () => {
        return setStatus("belum di setujui");
    };

    const [approvalStatus, setApprovalStatus] = useState('');

  const handleApprovalChange = (event) => {
    setApprovalStatus(event.target.value);
    setStatus(event.target.value)
    console.log(event.target.value,token,`http://127.0.0.1:8000/api/reportUpdate/${reports.id}`)
    handleUpdateStatus()
    fetchReports()
  };
    const handleUpdateStatus = async () => {
        try {
            const updatedStatus = {
                status,
            };

            const response = await axios.put(
                `http://127.0.0.1:8000/api/reportUpdate/${reports.id}`,
                updatedStatus,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Report status updated:", response.data,updatedStatus);
        } catch (error) {
            console.error("Error updating report status:", error);
        }
    };
    const fetchReports = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/reportWithEngineer/${id_engineer}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setReports(response.data.data[indexs]);
            console.log("-->", response.data.data[indexs].worker);
            console.log("-->", response.data.data[indexs].equipment);
            console.log("-->", response.data.data[indexs].working_hours);
            console.log("photo-->", response.data.data[indexs].photo);
            console.log("-->", response.data.data[indexs].weather);
            setWorkers(response.data.data[indexs].worker);
            setEquipment(response.data.data[indexs].equipment);
            setWrokerH(response.data.data[indexs].working_hours);
            setPhoto(response.data.data[indexs].photo);
            setWeather(response.data.data[indexs].weather);
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
    };

    useEffect(() => {
        console.log(indexs, "index--->");
        fetchReports();
    }, []);
    useEffect(() => {
        console.log(reports, "index--->");
        // fetchReports()
    }, [reports]);

    const [editRow, setEditRow] = useState(null);

    const handleEdit = (index) => {
        setEditRow(index);
        // chart();
        console.log(index);
    };
    return (
        <div className="container mx-auto  px-10 py-4 font-Bitter ">
            {/* DetailReport3 */}
            <ul></ul>
            <p>{reports.title}</p>
            <p>{reports.description}</p>
            <div className="flex items-center">
                <p>Status: {reports.status}</p>
                {/* {reports.status == "belum di setujui" ? (
                    <button
                    className="ml-2 border font-Bitter font-bold"

                        onClick={() => {
                            handleEdit()
                        }}
                    >
                        Setujui
                    </button>
                ) : (
                    <button
                    className="ml-2 border font-Bitter font-bold"
                        onClick={() => {
                            handleEdit()
                        }}
                    >
                        Batal Setujui
                    </button>
                )} */}
                <div className="border ml-4">

                     {/* <label htmlFor="approvalStatus">Status Persetujuan:</label> */}
      <select id="approvalStatus" value={approvalStatus} onChange={handleApprovalChange}>
        <option value="">Select Status</option>
        <option value="not yet approved">Approve</option>
        <option value="already approved">Cancel Approval </option>
      </select>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-3">
                <div>
                    <div className="mb-8">
                        <h2 className="mb-2 text-lg font-semibold">
                            Equipment
                        </h2>
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipment.map((item) => (
                                    <tr key={item.id} className="border">
                                        <td className="px-4 py-2">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.qty}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <h2 className="mb-2 text-lg font-semibold">
                            Working Hours
                        </h2>
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Length</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wrokerH.map((item) => (
                                    <tr key={item.id} className="border">
                                        <td className="px-4 py-2">
                                            {item.working_name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.length}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h2 className="mb-2 text-lg font-semibold">Workers</h2>
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Type of Worker</th>
                                <th className="px-4 py-2">Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workers.map((item) => (
                                <tr key={item.id} className="border">
                                    <td className="px-4 py-2">
                                        {item.type_of_worker}
                                    </td>
                                    <td className="px-4 py-2">{item.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="mb-2 text-lg font-semibold">Weather</h2>
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Temperature</th>
                                <th className="px-4 py-2">Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weather.map((item) => (
                                <tr key={item.id} className="border">
                                    <td className="px-4 py-2">
                                        {item.temperature}
                                    </td>
                                    <td className="px-4 py-2">{item.cuaca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
                
                {/* <div>
                    <h1 className="mb-4 text-2xl font-bold">{reports.title}</h1>
                    <p>{reports.description}</p>
                    <p className="mb-4">Status: {reports.status}</p>
                </div> */}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-1 border p-2 rounded-md mt-8">
                <p>Image</p>
            <div className="grid grid-cols-4 gap-4">
          {photo.map((item) => (
            <div key={item.id} className="border border-gray-300 p-2">
              <img src={`http://127.0.0.1:8000${item.imageUrl}`} alt="" className="w-full h-auto" />
              {/* <button onClick={() => handleDelete(item.id)} className="mt-2 text-red-500">
                Delete
              </button> */}
            </div>
          ))}
        </div>
            </div>
        </div>
    );
};

export default DetailReport3;
