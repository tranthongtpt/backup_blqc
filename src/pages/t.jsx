import { Paper } from "@material-ui/core";
import React, { useState, forwardRef, useEffect } from "react";
import ReactDOM from "react-dom";
import MaterialTable, { MTableBody } from "material-table";

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

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => {
    console.log("props", props);
    return <ChevronRight {...props} ref={ref} />;
  }),
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

const App = () => {
  const tableRef = React.createRef();

  const tableColumns = [
    {
      title: "First field",
      field: "commodityCode",
      cellStyle: { width: "10%" },
      width: "10%",
      headerStyle: { width: "10%" }
    },
    {
      title: "Second field",
      field: "name",
      width: "10%",
      cellStyle: { width: "10%" },
      headerStyle: { width: "10%" }
    },
    {
      title: "Third field",
      field: "customsStatus",
      width: "20%",
      cellStyle: { width: "20%" },
      headerStyle: { width: "20%" }
    },
    {
      title: "Fourth field",
      field: "planQty",
      width: "10%",
      cellStyle: { width: "10%" },
      headerStyle: { width: "10%" }
    },
    {
      title: "Fifth field",
      field: "origin",
      width: "5%",
      cellStyle: { width: "5%" },
      headerStyle: { width: "5%" }
    },
    {
      title: "Sixth field",
      field: "uom",
      width: "5%",
      cellStyle: { width: "5%" },
      headerStyle: { width: "5%" }
    },
    {
      title: "Seventh field",
      field: "incomingProcess",
      width: "10%",
      cellStyle: { width: "10%" },
      headerStyle: { width: "10%" }
    },
    {
      title: "Eight field",
      field: "customsDocument",
      width: "17%",
      cellStyle: { width: "17%" },
      headerStyle: { width: "17%" }
    },
    {
      title: "Ninth field",
      field: "action",
      width: "13%",
      cellStyle: { width: "13%" },
      headerStyle: { width: "13%" }
    }
  ];

  const tableData = [
    {
      commodityCode: "aaassssss",
      name: "aaaaa",
      customsStatus: "nnnnnnn",
      planQty: "wwwwwww",
      uom: "tttttt",
      origin: "hhhhhhh",
      incomingProcess: "nnnnnnn",
      customsDocument: "ccccccc",
      action: "vvvvvvv"
    },
    {
      commodityCode: "aaassssss",
      name: "another",
      customsStatus: "nnnnnnn",
      planQty: "wwwwwww",
      uom: "tttttt",
      origin: "hhhhhhh",
      incomingProcess: "nnnnnnn",
      customsDocument: "ccccccc",
      action: "vvvvvvv"
    }
  ];

  const [selectedRow, setSelectedRow] = useState(null);

  const detailSubtable = rowData => {
    const subTableOptions = {
      emptyRowsWhenPaging: false,
      toolbar: false,
      paging: false,
      tableLayout: "fixed",
      headerStyle: {
        border: "none"
      },
      rowStyle: {
        border: "none"
      },
      defaultExpanded: true
    };

    const subTableColumns = [
      {
        title: "First field",
        field: "commodityCode",
        cellStyle: { width: "10%" },
        width: "10%",
        headerStyle: { width: "10%" }
      },
      {
        title: "Second field",
        field: "name",
        width: "10%",
        cellStyle: { width: "10%" },
        headerStyle: { width: "10%" }
      },
      {
        title: "Third field",
        field: "customsStatus",
        width: "20%",
        cellStyle: { width: "20%" },
        headerStyle: { width: "20%" }
      },
      {
        title: "Fourth field",
        field: "planQty",
        width: "10%",
        cellStyle: { width: "10%" },
        headerStyle: { width: "10%" }
      },
      {
        title: "Fifth field",
        field: "origin",
        width: "5%",
        cellStyle: { width: "5%" },
        headerStyle: { width: "5%" }
      },
      {
        title: "Sixth field",
        field: "uom",
        width: "5%",
        cellStyle: { width: "5%" },
        headerStyle: { width: "5%" }
      },
      {
        title: "Seventh field",
        field: "incomingProcess",
        width: "10%",
        cellStyle: { width: "10%" },
        headerStyle: { width: "10%" }
      },
      {
        title: "Eight field",
        field: "customsDocument",
        width: "17%",
        cellStyle: { width: "17%" },
        headerStyle: { width: "17%" }
      },
      {
        title: "Ninth field",
        field: "action",
        width: "13%",
        cellStyle: { width: "13%" },
        headerStyle: { width: "13%" }
      }
    ];

    const subTableData = [
      {
        commodityCode: "aaassssss",
        name: "aaaaa",
        customsStatus: "nnnnnnn",
        planQty: "wwwwwww",
        uom: "tttttt",
        origin: "hhhhhhh",
        incomingProcess: "nnnnnnn",
        customsDocument: "ccccccc",
        action: "vvvvvvv"
      },
      {
        commodityCode: "aaassssss",
        name: "another sub row",
        customsStatus: "nnnnnnn",
        planQty: "wwwwwww",
        uom: "tttttt",
        origin: "hhhhhhh",
        incomingProcess: "nnnnnnn",
        customsDocument: "ccccccc",
        action: "vvvvvvv"
      }
    ];

    return (
      <MaterialTable
        title=""
        columns={subTableColumns}
        data={subTableData}
        options={subTableOptions}
        components={{
          Container: props => <Paper {...props} elevation={0} />
        }}
      />
    );
  };
  useEffect(() => {
    tableRef.current.state.data = tableRef.current.state.data.map(data => {
      console.log(data);
      data.tableData.showDetailPanel = tableRef.current.props.detailPanel;
      return data;
    });
  }, []);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        tableRef={tableRef}
        columns={tableColumns}
        data={tableData}
        onRowClick={(evt, selectedRow, x) => {
          // tableRef.current.props.icons.DetailPanel.render()
          // console.log('x', x())
          // console.log('selectedRow', tableRef.current.props.icons.DetailPanel.render())
          console.log("selectedRow", tableRef.current);
          setSelectedRow(selectedRow.tableData.id);
        }}
        title="Remote Data Example"
        detailPanel={detailSubtable}
        defaultExpanded={true}
        options={{
          rowStyle: rowData => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF"
          }),
          defaultExpanded: true
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
