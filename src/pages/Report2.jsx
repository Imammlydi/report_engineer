import React, { useState, useEffect } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Report2 = () => {
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // Add this state
    const [status, setStatus] = useState("");

    const handleUpdateStatus = async () => {
        try {
            const updatedStatus = {
                status,
            };

            const response = await axios.put(
                `http://127.0.0.1:8000/api/reports/${id}`,
                updatedStatus,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Report status updated:", response.data);
        } catch (error) {
            console.error("Error updating report status:", error);
        }
    };

    const toggleForms = () => {
        setShowForm(!showForm);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const token = localStorage.getItem("token");
    const id_engineer = localStorage.getItem("engineerId");

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

    const ReportListEngineer = () => {
        const [reports, setReports] = useState([]);

        useEffect(() => {
            fetchReports();
        }, []);

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
                setReports(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };

        const [editRow, setEditRow] = useState(null);

        const handleEdit = (index) => {
            setEditRow(index);
            // chart();
            console.log(index);
        };

        return (
            <div className="container mx-auto mt-8">
                <h1 className="mb-4 text-2xl font-semibold">
                    Approved Reports
                </h1>
                <div className="border-gray-200 max-w-3xl overflow-x-auto border-b shadow sm:rounded-lg">
                    <table className="divide-gray-200 min-w-full divide-y">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-gray-500 px-2 py-2 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                {/* <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th> */}
                                <th
                                    scope="col"
                                    className="text-gray-500 px-2 py-2 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="text-gray-500 px-2 py-2 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    Area
                                </th>
                                <th
                                    scope="col"
                                    className="text-gray-500 px-2 py-2 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-gray-200 divide-y bg-white font-Bitter">
                            {reports.map((report, index) => (
                                <tr key={report.id}>
                                    <td className="whitespace-nowrap px-2 py-2">
                                        {report.title}
                                    </td>
                                    {/* <td className="px-2 py-2 whitespace-nowrap">{report.description}</td> */}
                                    <td className="whitespace-nowrap px-2 py-2">
                                        {report.date}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-2">
                                        {report.status}
                                        {/* {editRow == index
                                            ? null
                                            : report.status}
                                        {editRow == index ? (
                                            <>
                                            
                                            <select
  className="bg-blue-500 hover:bg-blue-700 border py-2 px-4 font-Bitter text-sm font-bold text-primary"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option value="">Pilih Status</option>
  <option value="belum-disetujui">Belum di Setujui</option>
  <option value="sudah-disetujui">Sudah di Setujui</option>
</select>

                                            </>
                                        ) : null} */}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-2">
                                        <Link to={`/report3?index=${index}`}>
                                            View
                                        </Link>
                                        {/* <button
                                            className="bg-blue-500 hover:bg-blue-700 border py-2 px-4 font-Bitter text-sm font-bold  text-primary"
                                            onClick={() => {
                                                handleEdit(index);
                                            }}
                                        >
                                            View
                                        </button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // function TabContent1() {
    //     return <div>Content of Tab 1</div>;
    //   }

    const TabContent1 = () => {
        return <div className="bg-red1">Report2</div>;
    };

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
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
            <header className="bg-blue-500 py-4 px-8 text-white">
                <h1 className="text-2xl font-bold">Aplikasi Laporan</h1>
            </header>
            <main className="container mx-auto p-4">
                <div className="fllex relative  mx-auto grid grid-cols-1 gap-4 px-4 pt-0 md:grid-cols-3  md:px-8 lg:max-w-7xl lg:grid-cols-2 lg:gap-1 ">
                    {/* <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 border py-2 px-4 font-Bitter text-sm font-bold  text-primary"
                            onClick={toggleForm}
                        >
                            {showForm ? "X" : "Tambah Laporan"}
                        </button>
                        {showForm && <ReportForm notsucces={notifsuccess} />}
                    </div> */}
                    {/* <ReportList /> */}
                </div>
                <div className="fllex relative  mx-auto grid grid-cols-1 gap-4 px-4 pt-8 md:grid-cols-3  md:px-8 lg:max-w-7xl lg:grid-cols-1 lg:gap-1 ">
                    {/* <ReportForm notsucces={notifsuccess} /> */}
                    {/* <ReportList /> */}
                    <ReportListEngineer />
                    {/* <ReportListEngineer />   */}
                    <Routes>
                        <Route path="/report2/tab1" element={<TabContent1 />} />
                    </Routes>
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

export default Report2;
