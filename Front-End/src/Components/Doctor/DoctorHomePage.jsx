import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { createRoot } from 'react-dom/client';
import {AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

import './DoctorHomePage.css'

function DoctorHomePage() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { PatientName: "Nancy Smith", DateTime: "03/18/2024 10:00 AM - 10:30 AM", PatientMedicalInformation: "Medical Info", Completed: true },
    { PatientName: "Cyrus Harmon", DateTime: "03/18/2024 11:00 AM - 11:30 AM", PatientMedicalInformation: "Medical Info", Completed: false },
  ]);

  // Row Data: The data to be displayed.
  const [rowDataLoc, setRowDataLoc] = useState([
    { Location: "The George Washington University Hospital, 900 23rd St. NW, Washington D.C.,20037"},
  ]);
  
  const rowStyle = { background: '#e7e7ff', height: '74'};
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const getRowStyle = params => {
    if (params.node.rowIndex % 2 == 0){
      return { backgroung: '#e7e7ff'}
    }
  }
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "PatientName", minWidth: 10},
    { field: "DateTime", minWidth: 70, maxWidth: 150 },
    { field: "PatientMedicalInformation", minWidth: 120 },
    { field: "Completed", minWidth: 120}
  ]);

  const [rowDataup, setRowDataup] = useState([
    { PatientName: "Nancy Smith", DateTime: "03/18/2024 10:00 AM - 10:30 AM", PatientMedicalInformation: "Medical Info", Location: "GWU" },
    { PatientName: "Cyrus Harmon", DateTime: "03/18/2024 11:00 AM - 11:30 AM", PatientMedicalInformation: "Medical Info", Location: "GWU"},
  ]);

  const [colDefsup, setColDefsup] = useState([
    { field: "PatientName", minWidth: 10},
    { field: "DateTime", minWidth: 70, maxWidth: 150 },
    { field: "PatientMedicalInformation", minWidth: 120 },
    { field: "Location", minWidth: 120}
  ]);

  const [colDefsLoc, setColDefsLoc] = useState([
    { field: "Location", minWidth: 120}
  ]);
  
  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);
  const onGridSizeChanged = useCallback(
    (params) => {
      // get the current grids width
      var gridWidth = document.querySelector(".ag-body-viewport").clientWidth;
      // keep track of which columns to hide/show
      var columnsToShow = [];
      var columnsToHide = [];
      // iterate over all columns (visible or not) and work out
      // now many columns can fit (based on their minWidth)
      var totalColsWidth = 0;
      var allColumns = params.api.getColumns();
      if (allColumns && allColumns.length > 0) {
        for (var i = 0; i < allColumns.length; i++) {
          var column = allColumns[i];
          totalColsWidth += column.getMinWidth() || 0;
          if (totalColsWidth > gridWidth) {
            columnsToHide.push(column.getColId());
          } else {
            columnsToShow.push(column.getColId());
          }
        }
      }
      // show/hide columns based on current grid width
      params.api.setColumnsVisible(columnsToShow, true);
      params.api.setColumnsVisible(columnsToHide, false);
      // wait until columns stopped moving and fill out
      // any available space to ensure there are no gaps
      window.setTimeout(() => {
        params.api.sizeColumnsToFit();
      }, 10);
    },
    [window],
  );


  return (
    <div className='main-container'>
      <div className='section'>
          <div className='topBar'>
            <span>WeCureIT</span>
          </div>
      </div>
      <div className='main-container1'>
        <div className="text-3">
          <span>Friday Mar, 29</span>
        </div>
        <div className="calendar">
          calendar
        </div>
      </div>
      <div className='main-container2'>
        <div className='text-1'>Today's Appointment</div>
        <div className="appointmentinfo">
          <div className="wrapper">
            <div style={containerStyle} className={"ag-theme-quartz"}>
                <AgGridReact 
                  rowData={rowData} 
                  columnDefs={colDefs}
                  rowStyle={rowStyle}
                  getRowClass={getRowStyle}
                  autoSizeStrategy={autoSizeStrategy}
                  onGridSizeChanged={onGridSizeChanged}
                />
              </div>
          </div>
          <div className="wrapper2">
            <div style={containerStyle} className={"ag-theme-quartz"}>
                <AgGridReact 
                  rowData={rowDataLoc} 
                  columnDefs={colDefsLoc}
                  autoSizeStrategy={autoSizeStrategy}
                  onGridSizeChanged={onGridSizeChanged}
                />
              </div>
          </div>
        </div>
        <div className="text-2">Upcoming Appointments</div>
        <div className="nextappointment">
        <div className="wrapper">
            <div style={containerStyle} className={"ag-theme-quartz"}>
                <AgGridReact 
                  rowData={rowDataup} 
                  columnDefs={colDefsup}
                  rowStyle={rowStyle}
                  getRowClass={getRowStyle}
                  autoSizeStrategy={autoSizeStrategy}
                  onGridSizeChanged={onGridSizeChanged}
                />
              </div>
          </div>
        </div> 
      </div>
    </div>
    
  )
}

export default DoctorHomePage