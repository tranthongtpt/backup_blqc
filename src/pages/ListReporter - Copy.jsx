import React, { useState, useEffect, forwardRef, useRef } from "react";
import Grid from '@material-ui/core/Grid'
import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Alert from '@mui/material/Alert';

import { RiEmotionSadLine } from "react-icons/ri"

import { useStateContext } from "../contexts/ContextProvider";
import { Header, Navbar, Sidebar, useTable } from "../components";
import axiosClient from "../api/axiosClient";
import adminApi from '../api/adminApi'
import axios from "axios"
// var axios = require('axios');
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

const ListReporter = () => {
  const tableRef = useRef();
  const { activeMenu } = useStateContext();
  // ---------------------
  const [users, setUsers] = useState([]);
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
      let statusText = "get l???i r???i ahihi "
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
        <span className="relative text-green-700 relative ">??ang ho???t ?????ng</span>
      </div>
    ) : (
      <div className="relative rounded-lg bg-red-200 w-22 text-center py-1">
        <span className="relative text-red-700 relative ">B??? kh??a</span>
      </div>
    )
  }
  const validateEmail = (email) => {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

  const columns = [
    { title: "id", field: "id", hidden: true },
    { title: "H??? v?? t??n", field: "givenName" },
    { title: "Email", field: "email" },
    { title: "????n v??? l??m vi???c", field: "Institute.name" },
    { title: "?????a ch???", field: "Province.name" },
    { title: "S??? ??i???n tho???i", field: "phone" },
    { title: "C?? quan", field: "TypeUser.name" },
    {
      title: "Tr???ng th??i",
      field: "actived",
      editComponent: props => (
        <select>
          <option
            value={props.value}
            onChange={e => props.onChange(e.target.value)}>
            block
          </option>
          <option
            value={props.value}
            onChange={e => props.onChange(e.target.value)}>
            active
          </option>
        </select>
      ),
      render: props => statusdetails(props)
    }
  ]


  const handleRowUpdate = async (newData, oldData, resolve) => {
    //validation
    var FormData = require('form-data');
    var data = new FormData();
    data.append('givenName', 'Nguy???n ????ng Tr?????ng');
    data.append('address', '254 Nguy???n V??n Linh');
    data.append('email', 'phongvientest_1111@gmail.com');
    data.append('typeUsersId', '7');
    data.append('instituteId', '23');
    data.append('provinceId', '1');
    data.append('actived', '1');
    data.append('block', '0');
    let errorList = []
    if (newData.givenName === "") {
      errorList.push("L??m ??n nh???p h??? v?? t??n")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("L??m ??n nh???p email")
    }
    if (newData.Institute.name === "") {
      errorList.push("L??m ??n nh???p ????n v??? l??m vi???c")
    }
    if (newData.Province.name === "") {
      errorList.push("L??m ??n nh???p ?????a ch???")
    }
    if (newData.phone === "") {
      errorList.push("L??m ??n nh???p s??? ??i???n tho???i")
    }
    if (errorList.length < 1) {
      axiosClient.patch("/admin/update-users", data)
        .then(res => {
          console.log(res)
          // const dataUpdate = [...users];
          // const index = oldData.tableData.id
          // dataUpdate[index] = newData;
          // setUsers([...dataUpdate]);
          // resolve()
          // setIserror(false)
          // setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }
  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    // if(newData.givenName === undefined){
    //   errorList.push("Please enter givenname")
    // }
    // if(newData.email === undefined || validateEmail(newData.email) === false){
    //   errorList.push("Please enter a valid email")
    // }
    // if(newData.typeUsersId === undefined){
    //   errorList.push("Please enter typeUsersId")
    // }
    // if(newData.instituteId === undefined){
    //   errorList.push("Please enter instituteId")
    // }
    // if(newData.provinceId === undefined){
    //   errorList.push("Please enter provinceId")
    // }
    if(errorList.length < 1){ //no error
      axiosClient.post("/admin/users-register", newData)
      .then(res => {
        let dataToAdd = [...users];
        dataToAdd.push(newData);
        setUsers(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

    
  }
  const handleRowDelete = (oldData, resolve) => {

    axiosClient.delete("/admin/manager-user/" + oldData.id)
      .then(res => {
        const dataDelete = [...users];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setUsers([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
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
          <Header category="Trang" title="Danh s??ch ng?????i d??ng" />
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
                    actions: 'H??nh ?????ng'
                  },
                  body:
                  {
                    editRow:
                    {
                      deleteText: 'B???n th???t s??? mu???n x??a t??i kho???n n??y'
                    },
                    emptyDataSourceMessage:
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '1rem' }}>
                          Xin l???i! Kh??ng c?? tr?????ng n??y trong b???ng
                        </h1>  <RiEmotionSadLine style={{ fontSize: '2rem' }} />
                      </div>
                  }
                }}
                icons={tableIcons}
                columns={columns}
                data={users}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);

                    }),
                  onRowAdd: (newData) =>
                    new Promise((resolve) => {
                      handleRowAdd(newData, resolve)
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                      handleRowDelete(oldData, resolve)
                    }),
                }}
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
export default ListReporter;
