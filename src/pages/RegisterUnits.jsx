import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';

import { Header } from '../components';
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Sidebar, PropertyPane } from "../components";
import adminApi from '../api/adminApi';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button, Select, FormControl, InputLabel, TextField, Box, Autocomplete, FormHelperText } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const RegisterUnits = () => {

  const navigate = useNavigate();
  const { activeMenu } = useStateContext();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [typeinstitute, setTypeInstitute] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [kkl, setkkl] = useState({});
  const [loading, setLoading] = useState(false)
  // ------------------------------------------
  const MySwal = withReactContent(Swal)
  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log(inputValues);
    const data = { ...inputValues }
    const formData = new FormData();
    formData.append("provinceId", data.provinceId)
    formData.append("name", data.name)
    formData.append("files", data.files)
    formData.append("description", data.description)
    formData.append("typeInstituteId", data.typeInstituteId)
    formData.append("address", data.address)

    const config = {
      method: 'post',
      url: 'http://10.220.5.65:8090/api/v1/admin/register-institute',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      data: formData
    };

    axios(config)
      .then(function (response) {
        if (response.data?.success === true) {
          MySwal.fire({
            title: '<strong>Tạo thành công</strong>',
            icon: 'success',
            confirmButtonText: 'Truy cập',
            cancelButtonText: 'Hủy',
            html:
              'Bạn có thể truy cập đến danh sách để xem',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
          }).then((result) => {
            if (result.isConfirmed && oo === '1') {
              navigate('/listunits');
            } else if (result.isConfirmed && oo === '2') {
              navigate('/listunitscqnn');
            }
          })
        } else {
          MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            icon: 'error',
            title: 'Tạo không thành công'
          })
        }
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const oo = inputValues.typeInstituteId
  const ooo = parseInt(inputValues.provinceId) + 1

  console.log(ooo);
  const fetchData = async () => {
    try {
      const res = await adminApi.getInf();
      console.log('Fetch products successfully: ', res);

      const provincesaaa = res.data?.result?.province.map((item) => {
        return (
          item
        )
      })
      if (res != null) {
        setProvinces(provincesaaa)
        setTypeInstitute(res.data.result?.typeInstitute)
      }
    } catch (error) {
      let statusText = "get lỗi rồi ahihi "
      try {
        statusText = error.res.statusText;
      } catch (e) {

      }
      console.log(error.toString() + ".\n" + statusText);
    }
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };
  const xxxx = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setkkl((prev) => ({ ...prev, [name]: value }));
  };
  console.log(provinces)
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  useEffect(() => {
    fetchData();
  }, [])

  // ----- dropdown treee
  var ddTree;
  const fields = { dataSource: provinces, value: 'id', text: 'name', parentValue: 'parentId', child: 'children' };
  const handleOnChangeDropdownTree = () => {
    setInputValues((prev) => ({ ...prev, provinceId: ddTree.value && ddTree.value.length > 0 ? ddTree.value[0] : "" }));
  } 
 

  const [selected, setSelected] = useState([]);
  console.log(kkl);
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
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
          <Header category="Trang" title="Cấp tài khoản đơn vị" />
          <form onSubmit={onSubmit} className="w-full">

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-3">
                <InputLabel htmlFor="my-input">Chọn tỉnh/huyện/xã</InputLabel>
                <div className="my-0 mx-auto h-[50px] bg-slate-50 border rounded-md">
                  <DropDownTreeComponent
                    ref={(dropdowntree) => { ddTree = dropdowntree }}
                    fields={fields}
                    allowFiltering={false}
                    change={handleOnChangeDropdownTree}
                    placeholder="Chọn trường thích hợp"
                    changeOnBlur={false}
                    popupHeight="400px"
                    style={{ fontSize: '16px', height: '45px', paddingLeft: '14px' }}
                  />
                </div>
              </div>
              <div className='w-full px-3 mb-3 '>
                <InputLabel htmlFor="my-input">Đơn vị</InputLabel>
                <select
                  name='typeInstituteId'
                  onChange={handleOnChange}
                  className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-[14px] py-[16.5px] mt-1"
                >
                  {typeinstitute.map((institute, index) => (
                    <option value={institute.id} key={index} >
                      {institute.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='w-full px-3 mb-3 '>
                <InputLabel htmlFor="my-input">Đơn vị</InputLabel>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  onChange={handleOnChange}
                  options={typeinstitute.map((x,index) => x.value)}
                  renderInput={(params) => <TextField {...params}  label="freeSolo" />}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputLabel htmlFor="my-input">Mã ED</InputLabel>
                <TextField
                  sx={{ mt: 1 }}
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='maED'
                  onChange={handleOnChange}
                  disabled={oo === '1' ? true : false}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputLabel htmlFor="my-input">Mã ID</InputLabel>
                <TextField
                  sx={{ mt: 1 }}
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='maID'
                  onChange={handleOnChange}
                  disabled={oo === '1' ? true : false}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <InputLabel htmlFor="my-input">Tên</InputLabel>
                <TextField
                  sx={{ mt: 1 }}
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='name'
                  onChange={handleOnChange}
                // {...register("name", { required: "Bắt buộc nhập." })}
                // error={Boolean(errors.name)}
                // helperText={errors.name?.message}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <InputLabel htmlFor="my-input">Mô tả</InputLabel>
                <TextField
                  sx={{ mt: 1 }}
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='description'
                  onChange={handleOnChange}
                // error={Boolean(errors.description)}
                // helperText={errors.description?.message}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <InputLabel htmlFor="my-input">Địa chỉ</InputLabel>
                <TextField
                  sx={{ mt: 1 }}
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='address'
                  onChange={handleOnChange}
                // error={Boolean(errors.address)}
                // helperText={errors.address?.message}
                />
              </div>
              <div className="w-full px-3 mb-3 pt-10">
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: 'none' }}

                  // onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="mt-10"
                  name='files'
                  onChange={(e) => {
                    setInputValues((prev) => ({ ...prev, files: e.target.files[0] }));
                    setSelectedImage(e.target.files[0])
                  }
                  }
                />
                <label htmlFor="select-image">
                  <Button variant="contained" component="span">
                    Cập nhật ảnh
                  </Button>
                </label>
                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center">
                    <div>Hình ảnh xem trước:</div>
                    <img src={imageUrl} alt={selectedImage.name} height="100px" />
                  </Box>
                )}
              </div>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                className="w-64"
                sx={{
                  ml: 1,
                  backgroundColor: '#6738b3',
                  '&:hover': {
                    backgroundColor: '#6738b3',
                  },
                }}
              >
                Đăng ký
              </Button>
            </div>
          </form>
        </div>

      </div >
    </div >
  );
};
export default RegisterUnits;