import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom";
// ------------------------------------------
import { Header } from '../components';
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Sidebar } from "../components";

import { Button, Select, FormControl, InputLabel, TextField, MenuItem, Autocomplete } from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import adminApi from '../api/adminApi'

const Register = () => {
  const navigate = useNavigate();

  const { activeMenu } = useStateContext();
  const [typeusers, setTypeUsers] = useState([]);
  const [typeinstitute, setTypeInstitute] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [lprovinces, setLprovinces] = useState('');
  const [options, setOptions] = useState("");


  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const [valuee, setValuee] = useState(options[0]);
  const [inputValuee, setInputValuee] = useState('');

  const [valueee, setValueee] = useState(options[0]);
  const [inputValueee, setInputValueee] = useState('');
  console.log(valuee);
  const myStyle = {
    display: 'block',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginBottom: '0.75rem',
    color: '#374151',
    lineHeight: '1.25',
    width: '100 %',
    borderRadius: ' 0.25rem',
    borderWidth: '1px',
    borderColor: '#EF4444',
    appearance: 'none',
  }
  // ------------------------------------------
  const MySwal = withReactContent(Swal)
  // function useLogoutTimer() {
  //   const userIsInactive = useFakeInactiveUser();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (userIsInactive) {
  //       fake.logout();
  //       navigate("/session-timed-out");
  //     }
  //   }, [userIsInactive]);
  // }
  const showSwalWithLink = () => {
    // Swal.fire({
    //   title: 'I will shake when you click outside!',
    //   allowOutsideClick: () => {
    //     const popup = Swal.getPopup()
    //     popup.classList.remove('swal2-show')
    //     setTimeout(() => {
    //       popup.classList.add('animate__animated', 'animate__headShake')
    //     })
    //     setTimeout(() => {
    //       popup.classList.remove('animate__animated', 'animate__headShake')
    //     }, 500)
    //     return false
    //   }
    // })

    MySwal.fire({
      title: '<strong>HTML <u>Tạo thành công</u></strong>',
      icon: 'success',
      cancelButtonText: 'No, cancel!',
      html:
        'Bạn có thể truy cập đến danh sách để xem',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
    }).then((result) => {
      if(result.isConfirmed){
        navigate('/listreporter');
      } 
    })
      // html: (
      //   <HistoryRouter history={browserHistory}>
      //     <Link to={'/listreporter'} onClick={() => Swal.close()}>
      //       Navigate to /about
      //     </Link>
      //   </HistoryRouter>
      // ),
  };
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      givenName: '',
      typeUsersId: '',
      instituteId: '',
      provinceId: '',
    }
  });

  const onSubmit = (data) => {
    const token = localStorage.getItem('token');

    console.log(data);

    const config = {
      method: 'post',
      url: 'http://10.220.5.65:8090/api/v1/admin/users-register',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if (response.data.success === true) {
          MySwal.fire({
            title: '<strong>Tạo thành công</strong>',
            icon: 'success',
            confirmButtonText:'Truy cập',
            cancelButtonText: 'Hủy',
            html:
              'Bạn có thể truy cập đến danh sách để xem',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
          }).then((result) => {
            if(result.isConfirmed){
              navigate('/listreporter');
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

  const fetchData = async () => {
    try {
      const res = await adminApi.getInf()
      console.log('Fetch products successfully: ', res);
      if (res != null) {
        setTypeUsers(res.data.result.typeUsers)
        setTypeInstitute(res.data.result.typeInstitute)
        setProvinces(res.data.result.province)
        console.log(res.data.result.province);
      }
    } catch (error) {
      let statusText = " lỗi rồi ahihi "
      try {
        statusText = error.res.statusText;
      } catch (e) {

      }
      console.log(error.toString() + ".\n" + statusText);
    }
  }
  const handleChange = (e, newValue) => {
    const index = provinces[0]?.children.findIndex(x => x.id === e.target.value);
    setLprovinces(index);
    console.log(index);
    setOptions(e.target.value)
    setValuee(newValue)
  }
  useEffect(() => {
    reset();
    fetchData();
  }, [])
  console.log(provinces);

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
          <Header category="Trang" title="Cấp tài khoản người dùng" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <TextField
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='email'
                  {...register("email", { required: "Bắt buộc nhập email.", pattern: /$^|.+@.+..+/ })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputLabel htmlFor="my-input">Tên</InputLabel>
                <TextField
                  className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  name='givenName'
                  {...register("givenName", { required: "Bắt buộc nhập." })}
                  error={Boolean(errors.givenName)}
                  helperText={errors.givenName?.message}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputLabel htmlFor="my-input">Loại người dùng</InputLabel>
                <FormControl sx={{ width: 1, mt: 2, mb: 2 }}>
                  <Controller
                    render={({ field }) => (
                      <Select {...field}>
                        {typeusers.map((user, index) => (
                          <MenuItem value={user.id} key={index}>
                            {user.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                    name="typeUsersId"
                    control={control}
                  />
                </FormControl>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputLabel htmlFor="my-input">Đơn vị</InputLabel>
                <FormControl sx={{ width: 1, mt: 2, mb: 2 }}>
                  <Controller
                    render={({ field }) => (
                      <Select {...field}>
                        {typeinstitute.map((tpinstitute, index) => (
                          <MenuItem value={tpinstitute.id} key={index}>
                            {tpinstitute.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                    name="instituteId"
                    control={control}
                  />
                </FormControl>
              </div>
              <div className="w-full  flex flex-wrap">
                <div className="w-full md:w-1/3 px-3">
                  <InputLabel htmlFor="my-input">Chọn Tỉnh/Thành</InputLabel>
                  <FormControl sx={{ width: 1, mt: 2, mb: 2 }}>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      name="provinceId"
                      control={control}
                      options={provinces.map((province, index) => (
                        province.name
                      ))}
                      renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                  </FormControl>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <InputLabel htmlFor="my-input">Chọn Quận/Huyện</InputLabel>
                  <FormControl sx={{ width: 1, mt: 2, mb: 2 }}>
                    <Controller
                      render={({ field }) => (
                        <Select {...field} onChange={handleChange} value={options}>
                          {provinces[0]?.children?.map((district, index) => {
                            return (
                              <MenuItem value={district.id} key={index}>
                                {district.name}
                              </MenuItem>
                            )
                          })}
                        </Select>
                      )}
                      name="provinceId"
                      control={control}
                    />
                  </FormControl>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <InputLabel htmlFor="my-input">Chọn Phường/Xã</InputLabel>
                  <FormControl sx={{ width: 1, mt: 2, mb: 2 }}>
                    <Controller
                      render={({ field }) => (
                        <Select {...field}>
                          {provinces[0]?.children[lprovinces]?.children?.map((district, index) => {
                            return (
                              <MenuItem value={district.id} key={index}>
                                {district.name}
                              </MenuItem>
                            )
                          })}
                        </Select>
                      )}
                      name="provinceId"
                      control={control}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                className="w-64"
                onAbort={showSwalWithLink}
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

      </div>
    </div>
  );
};
export default Register;

