import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import dayjs from "dayjs";
import { createRoot } from 'react-dom/client';
import {AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { generateDate, months } from "./calendar";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import './CalView.css';
import './DoctorHomePage.css'

function DoctorHomePage() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

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
          <span>{months[today.month()]} {[today.date()]}, {today.year()}</span>
        </div>
        <div className="calendar1">
          <div className="CalendarCont">
            <div className="header">
                <h1 className="h1">
                {months[today.month()]}, {today.year()}
                </h1>
                <div className="header2">
                <GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
                        <h1
							className=" currentDate hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
                        <GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
                </div>
            </div>
            <div className="daySec">
                {days.map((day, index) => {
                            return (
                                <span
                                    key={index}
                                    className="day"
                                >
                                    {day}
                                </span>
                            );
                        })}
            </div>
            <div className="daySec2">
            {generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="dateBlock"
								>
									<div
										className={cn(
											currentMonth ? "" : "date text-black",
											today
												? "bg-red-600"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black"
												: "",
											"date"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</div>
								</div>
							);
						}
					)}
            </div>

        </div>
        </div>
        <div className="locInfo">
          <span className='text-11'>
            Your Schedule for {selectDate.toDate().toDateString()}
            <br />
            <br />
          </span>
          <span className='text-12'>
            9:00 AM - 4:00 PM (5 Hours 30 Mins)
            <br />
            <br/>
          </span>
          <span className='text-13'>Location: <br /><br/></span>
          <span className='text-14'>
            The George Washington University Hospital</span>
            <br />
            <span className='text-14'>900 23rd St. NW</span>
            <br />
            <span className='text-14'>Washington D.C.,20037
          </span>
          <button className="viewSchdl" onClick={"./LoginPage"}><label className="text-15">View Schedule</label></button>
        </div>
      </div>
      <div className='main-container2'>
        <div className='text-1'>Today's Appointment
        <button className="viewAppoint" onClick={"./LoginPage"}><label className="text-15">View all appointments</label></button>
        </div>
        
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