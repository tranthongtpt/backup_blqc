import Box from "@mui/material/Box";
import React, { useMemo, useState, useEffect } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter,GridLinkOperator, } from "@mui/x-data-grid";
import { useDemoData } from '@mui/x-data-grid-generator';
// import './TableMUI.css'
import moment from "moment"
import {
    Button,
    Modal,
} from "@mui/material";
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {  BiEdit, BiMailSend, BiRefresh } from "react-icons/bi";
import {MdLibraryAdd} from 'react-icons/md'
import { RiFilter2Fill } from "react-icons/ri";
import {AiOutlineDelete} from "react-icons/ai"
// import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";
import Avatar from '@mui/material/Avatar';
import { MdKeyboardArrowRight } from "react-icons/md";
import adminApi from "../../api/adminApi";
import MyDialog from "../MyDialog";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from "../../pages/Register";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    height:"auto",
    width: "auto"
};

export default function InviteWorkTable(props) {
    const loadingStorage = localStorage.getItem('loading');
    const [user, setUser] = useState([]);
    const [idUser, setIdUsers] = useState([])
    const [nameUsers, setNameUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const url = 'http://10.220.5.65:8090/api/v1/media/view/'

    function CustomToolbar() {
        return (
            <GridToolbarContainer className="flex justify-between">
                <Box>
                    <InviteWork />
                    <Button >
                        <RiFilter2Fill className="hover:!bg-blue-300 rounded w-6 h-6"/>
                    </Button>
                </Box>
                <Box
                    sx={{
                        p: 0.5,
                        pb: 0,
                    }}
                >
                    <GridToolbarQuickFilter
                        quickFilterParser={(searchInput) =>
                        searchInput
                            .split(',')
                            .map((value) => value.trim())
                            .filter((value) => value !== '')
                        }
                    />
                </Box>
            </GridToolbarContainer>
        );
    }

    const columns = [
        { 
            field: "id", 
            headerName: "id", 
            hide: true,
        },
        {
            field: "avatar",
            headerName: "Ảnh đại diện",
            sortable: false,
            disableColumnMenu:true,
            width:110,
            align:'center',
            renderCell: (params) => (
                <Avatar alt="avt" src={url + `${params.value}`} />
        ),
        },
        {
            field: "givenName",
            headerName: "Họ & Tên",
            width:250,
        },
        {
            field: "email",
            headerName: "Email",
            width:250,
        },
        {
            field: "Institute",
            headerName: "Đơn vị làm việc",
            width:250,
        },
        {
            field: "Province",
            headerName: "Địa chỉ",
            width:180,
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            width:160,
        },
        { 
            field: "TypeUser",
            headerName: "Cơ quan", 
            width:160
        },
        {
            field: "actions",
            headerName: "Work Invite",
            sortable: false,
            disableClickEventBubbling: true,
            disableColumnMenu:true,
            width:100,
            align:'center',
            renderCell: (params) => (
                    <strong className="flex justify-center">
                        <IconButton className="hover:!bg-blue-300 hover:!text-white">
                            <BiEdit />
                        </IconButton>
                        <IconButton className="hover:!bg-blue-300 hover:!text-white">
                            <AiOutlineDelete />
                        </IconButton>
                    </strong>
            ),
        },
    ];
    const fetchData = async () => {
        try {
          const params = { page: 1, size: 100 }
          const res = await adminApi.getListReporter(params)
          console.log('Fetch products successfully: ', res);
          if(res != null) {
            setUser(res.data?.result?.data);
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
    useEffect(() => {
        fetchData();
    }, [loadingStorage]);


    const Rows = useMemo(() => {
        const cloneData = [...user];
        const arr = cloneData.map((item) => ({
            id: item.id,
            avatar: item.avatar,
            givenName: item.givenName,
            email: item.email,
            Institute: item.Institute?.name,
            Province: item.Province?.name,
            phone: item.phone,
            TypeUser: item.TypeUser?.name,
        }));
        return arr;
    }, [user]);
    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => Rows.find((row) => row.id === id));
        setNameUsers(() => ({selectedRowsData}));
        setIdUsers(() => ({ id: ids}));
    };
    // console.log(idUser);
    // console.log(nameUsers);


    return (
        <>
            <Box sx={{ height: 631, width: "100%" }}>
                <DataGrid
                    columns={columns}
                    rows={Rows}
                    pageSize={10}
                    disableSelectionOnClick {...Rows}
                    onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                    rowsPerPageOptions={[10]}
                    loading={isLoading}
                    experimentalFeatures={{ newEditingApi: true }}
                    components={{ 
                        Toolbar: CustomToolbar,
                    }}
                    initialState={{
                        filter: {
                          filterModel: {
                            items: [],
                            quickFilterLogicOperator: GridLinkOperator.Or,
                          },
                        },
                    }}
                />
            </Box>
        </>
    );
};
const InviteWork = ({ }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  




    const [value, setValue] = useState();
    const [loading, setLoading] = useState();
    const handleOpen = () => setOpen(true);
 
    const { workcontent, control, formState: { errors } } = useForm();

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data = {...value}
        console.log(data)
        
        try {
            const res = await axiosClient.post("user/add-workContent",data)
            if(res.success){
                localStorage.setItem("loading", true)
                // toast("Đã thêm nội dung làm việc");
                console.log(res)
                setOpen(false)
                setLoading(false)
                setTimeout(() => {
                    localStorage.setItem("loading", false)
                },2000)

            }else{
                // toast.warn(`${res.error}`);
                setLoading(false)
            }
        } catch (error) {
            // toast.error(`${error}`);
            setLoading(false)
        }
    };

//    {title:res.result?.title}
const styles = theme => ({
    root: {
      margin: 0,
      padding: "20px",
      backgroundColor: theme.palette.primary.main,
      zIndex: "888"
    },
    white: {
      color: theme.palette.white
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.white
    }
  });
  
    return (
        <>  
            <Button variant="outlined" onClick={handleClickOpen}>
                <MdLibraryAdd onClick={handleOpen} className="hover:!bg-blue-300 hover:!text-white rounded-none w-6 h-6"/>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <Register/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
  
