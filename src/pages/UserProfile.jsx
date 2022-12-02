import React, { useState, useEffect } from "react";

import { AiTwotoneEdit, AiOutlineCamera } from 'react-icons/ai'
import { BiCloudUpload } from 'react-icons/bi'
import TextField from '@mui/material/TextField';
import { useStateContext } from "../contexts/ContextProvider";
import { Header, Navbar, Sidebar, useTable } from "../components";
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import adminApi from '../api/adminApi'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import moment from 'moment';
import axiosClient from "../api/axiosClient";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// ------------------------------------

const UserProfile = () => {
    const { activeMenu } = useStateContext();
    const [inputValues, setInputValues] = useState({});
    const [picUrl, setPicUrl] = useState();
    const loadingStorage = localStorage.getItem('loading');
    const [img, setImg] = useState();
    const [namee, setName] = useState([]);
    const [address, setAddress] = useState([]);
    const [unit, setUnit] = useState([]);
    const url = 'http://10.220.5.65:8090/api/v1/media/view/'
    const MySwal = withReactContent(Swal)
    console.log(namee);
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues((prev) => ({ ...prev, [name]: value }));
    };
    // ---------------------
    const fetchData = async () => {
        try {
            const res = await adminApi.getUsers()
            console.log('Fetch products successfully: ', res);
            setImg(res.data?.result?.avatar);
            setName(res.data?.result?.givenName);
            setAddress(res.data?.result?.Address);
            setUnit(res.data?.result?.Unit);
        } catch (error) {
            let statusText = "get lỗi rồi ahihi "
            try {
                statusText = error.res.statusText;
            } catch (e) {
            }
            console.log(error.toString() + ".\n" + statusText);
        }
    };
    useEffect(() => {
        fetchData();
    }, [loadingStorage])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("givenName", namee.givenName);
        formData.append("address", address.Address);
        formData.append("files", inputValues.files);

        try {
            const res = await axiosClient.post("user/update-profile", formData)
            if (res.success) {
                localStorage.setItem('loading', true)
                inputValues.givenName = null;
                inputValues.address = null;
                inputValues.files = null;
                MySwal.fire({
                    toast: true,
                    position: 'top-right',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: 'success',
                    iconColor: "#40E0D0	",
                    text: 'Đăng nhập thành công',
                })
                setTimeout(() => {
                    localStorage.setItem("loading", false)
                }, 3000)
            } else {
                MySwal.fire({
                    toast: true,
                    position: 'top-right',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    icon: 'error',
                    title: 'Error',
                    iconColor: "#CD5C5C	",
                    text: 'Đăng nhập không thành công',
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex relative ">
            {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg ">
                    <Sidebar />
                </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                    <Sidebar />
                </div>
            )}
            <div
                className={
                    activeMenu
                        ? "  bg-[#e3f2fd] min-h-screen md:ml-72 w-full  "
                        : "bg-[#e3f2fd]   w-full min-h-screen flex-2 "
                }
            >
                <div className="fixed md:static bg-white  navbar w-full ">
                    <Navbar />
                </div>

                <section>
                    <div class="font-sans leading-tight m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl bg-grey-lighter p-8">
                        <Header title="Thông tin cá nhân" />
                        <div class=" mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                            <div class="bg-cover h-40 bg-gradient-to-r from-cyan-500 to-blue-500" ></div>
                            <div class="border-b px-4 pb-6">
                                <div class="text-center sm:text-left sm:flex ">
                                    <div class="relative block w-1/4 group rounded-full w-auto h-auto" href="#">
                                        <img class="h-40 w-40 rounded-full border-4 border-white -mt-16 mr-4 absolute inset-0 object-cover group-hover:opacity-50"
                                            src={picUrl ? picUrl : url + `${img?.file_path}/${img?.file_name}`} />
                                        <div className="h-40 w-40 rounded-b-full ">
                                            <div className="transition-all transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 rounded-b-full">
                                                <label className="text-center w-[100px] cursor-pointer" for="uploadAvt">
                                                    <span className="text-black font-bold flex items-center justify-center text-[10px] mt-3">
                                                        <AiOutlineCamera className="w-5 h-5" />
                                                        Thay đổi hình ảnh đại diện
                                                    </span>
                                                </label>
                                                <input
                                                    type="file"
                                                    id="uploadAvt"
                                                    name="files"
                                                    className="h-[60px] w-44 opacity-0 rounded-b-full cursor-pointer"
                                                    onChange={(e) => {
                                                        setInputValues((prev) => ({ ...prev, files: e.target.files[0] }));
                                                        const url = URL.createObjectURL(e.target.files[0]);
                                                        setPicUrl(url);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div class="relative block w-1/4 group rounded-full w-auto h-auto" >
                                            <img class="h-40 w-40 rounded-full border-4 border-white -mt-16 mr-4 absolute inset-0 object-cover group-hover:opacity-50"
                                                src={url + `${img?.file_path}/${img?.file_name}`} />
                                            <div className="h-40 w-40 rounded-b-full ">
                                                <div className="transition-all transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 rounded-b-full">
                                                    <label className="text-center w-[100px] cursor-pointer" for="uploadAvt">
                                                        <span className="text-black font-bold flex items-center justify-center text-[10px] mt-3">
                                                            <AiOutlineCamera className="w-5 h-5" />
                                                            Thay đổi hình ảnh đại diện
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}

                                    <div class="py-2">
                                        <div class="inline-flex text-grey-dark sm:flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> </svg>
                                            <h3 class="font-bold text-2xl mb-1">{namee}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex border-b-1 py-5 pr-5">
                                        <InputLabel htmlFor="my-input" className="w-1/4">Họ tên</InputLabel>
                                        <TextField
                                            variant="outlined"
                                            className="flex-1"
                                            required
                                            defaultValue={namee}
                                            value={namee}
                                            name="givenName"
                                            onChange={(e) => setName(e.target.value)} 
                                        />
                                    </div>
                                    <div className="flex border-b-1 py-5 pr-5">
                                        <InputLabel htmlFor="my-input" className="w-1/4 ">Cơ quan</InputLabel>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            className="flex-1"
                                            required
                                            defaultValue={unit}
                                            value={unit}
                                            name="Unit"
                                            onChange={(e) => setUnit(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex border-b-1 py-5 pr-5">
                                        <InputLabel htmlFor="my-input" className=" w-1/4">Địa chỉ</InputLabel>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            className="flex-1"
                                            required
                                            defaultValue={address}
                                            value={address}
                                            namee="Address"
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-center mt-10">
                                        <Button
                                            variant="contained"
                                            className="w-64"
                                            sx={{
                                                mr: 1,
                                                backgroundColor: '#6738b3',
                                                '&:hover': {
                                                    backgroundColor: '#6738b3',
                                                },
                                            }}
                                            onClick={handleSubmit}
                                        >
                                            Cập nhật
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default UserProfile;
{/* <div class="flex justify-start mt-8">
                                            <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                                                <div class="m-4">
                                                    <label class="inline-block mb-2 text-gray-500">File Upload</label>
                                                    <div class="flex items-center justify-center w-full">
                                                        <label
                                                            class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div class="flex flex-col items-center justify-center pt-7">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                </svg>
                                                                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                    Attach a file</p>
                                                            </div>
                                                            <input type="file" class="opacity-0" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="flex justify-center p-2">
                                                    <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Create</button>
                                                </div>
                                            </div>
                                        </div> */}