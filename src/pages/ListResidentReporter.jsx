import React, { useState, useEffect, forwardRef } from "react";

import Grid from '@material-ui/core/Grid'
import MaterialTable from "material-table";
import Avatar from '@mui/material/Avatar';
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
import {RiEmotionSadLine} from "react-icons/ri"
import { useStateContext } from "../contexts/ContextProvider";
import { Header, Navbar, Sidebar } from "../components";

import adminApi from '../api/adminApi'

// ------------------------------------
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const ListResidentReporter = () => {

  const { activeMenu } = useStateContext();
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const params = { typeUsersId: 4, page: 1, size: 100 }
      const res = await adminApi.getJournaList(params)
      console.log('Fetch products successfully: ', res);
      if (res != null) {
        setUsers(res.data.result.data)
      }
      console.log(res.data.result.data);
    } catch (error) {
      let statusText = " lỗi rồi ahihi "
      try {
        statusText = error.res.statusText;
      } catch (e) {

      }
      console.log(error.toString() + ".\n" + statusText);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const columns = [
    { title: "id", field: "id", hidden: true },
    {
      title: "Avatar", render: rowData =>
        <Avatar maxInitials={1} size={40} round={true}
          name={rowData === undefined ? " " : rowData.givenName} />
      // <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} />
    },
    { title: "Họ và tên", field: "givenName" },
    { title: "Email", field: "email" },
    { title: "Đơn vị làm việc", field: "Institute.name" },
    { title: "Địa chỉ", field: "address" },
    { title: "Số điện thoại", field: "phone" },
    { title: "Cơ quan", field: "TypeUser.name" },
  ]
  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  return (
    <div className="flex relative dark:bg-main-dark-bg">
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
            ? "dark:bg-main-dark-bg  bg-[#e3f2fd] min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-white dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>

        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Danh sách phóng viên thường trú" />
          <Grid>
            <div>
              {iserror &&
                <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                    return <div key={i}>{msg}</div>
                  })}
                </Alert>
              }
              <MaterialTable
                title=""
                localization={{
                  header: {
                    actions: 'Hành động'
                  },
                  body:
                  {
                    editRow:
                    {
                      deleteText: 'Bạn thật sự muốn xóa tài khoản này'
                    },
                    emptyDataSourceMessage:
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <h1 style={{fontSize:'1rem'}}>
                      Xin lỗi! Không có trường này trong bảng 
                      </h1>  <RiEmotionSadLine style={{fontSize:'2rem'}}/>
                    </div>
                  }
                }}
                icons={tableIcons}
                columns={columns}
                data={users}
                options={{
                  actionsColumnIndex: -1, headerStyle: {
                    backgroundColor: " #80d4ff"
                  },
                }}
              />
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default ListResidentReporter;
