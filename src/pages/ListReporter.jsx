import React, { useState, useEffect, forwardRef, useRef } from "react";
import Grid from '@material-ui/core/Grid'
import MaterialTable from 'material-table';
import { Button, TextField, Paper } from "@material-ui/core";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import Alert from '@mui/material/Alert';
import { AiFillFileAdd } from 'react-icons/ai'
import { RiEmotionSadLine } from "react-icons/ri"
import Tableuser from '../components/table/tableuser'
import { useStateContext } from "../contexts/ContextProvider";
import { Header, Navbar, Sidebar, useTable } from "../components";
import axiosClient from "../api/axiosClient";
import adminApi from '../api/adminApi'
import axios from "axios"
import MyDialog from "../components/MyDialog"

// var axios = require('axios');
// ------------------------------------

const ListReporter = () => {
  const tableRef = useRef();
  const { activeMenu } = useStateContext();
  const [users, setUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogWord, setDialogWord] = useState('');
  const [dialogId, setDialogId] = useState('');
  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const fetchData = async () => {
    try {
      const params = { page: 1, size: 100 }
      const res = await adminApi.getListReporter(params)
      console.log('Fetch products successfully: ', res);
      setUsers(res.data?.result?.data);
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
  }, [])

  function statusdetails(props) {
    return (props.actived === true && props.block === false) ? (
      <div className="relative rounded-lg bg-green-200 text-center py-1">
        <span className="relative text-green-700 relative ">Đang hoạt động</span>
      </div>
    ) : (
      <div className="relative rounded-lg bg-red-200 w-22 text-center py-1">
        <span className="relative text-red-700 relative ">Bị khóa</span>
      </div>
    )
  }
  const validateEmail = (email) => {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

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
            ? "bg-[#e3f2fd] min-h-screen md:ml-72 w-full"
            : "bg-[#e3f2fd]   w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-white  navbar w-full ">
          <Navbar />
        </div>

        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Trang" title="Danh sách người dùng" />
          <Tableuser/>
        </div>
      </div>
    </div>
  );
};
export default ListReporter;
