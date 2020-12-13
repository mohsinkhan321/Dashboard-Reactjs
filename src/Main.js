import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Comment from "./Comment";
import AttendenceBar from "./Components/AttendenceBar";
import BarChart from "./Components/BarChart";

const Main = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header mt-5">
          <div className="container-fluid">
            <div className="row mb-2 mt-3">
              <div className="col-sm-12">
                <h1 className="m-0">Student Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Online Store Visitors</h3>
                      <NavLink to="">View Report</NavLink>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">820</span>
                        <span>Visitors Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 12.5%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </p>
                    </div>
                    <div className="position-relative mb-4">
                      <canvas id="visitors-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This Week
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last Week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card p-3">
                  <div className="card-header border-0">
                    <h3 className="card-title">
                      <i className="clock-calendar far fa-clock"></i>
                    </h3>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <h3 className="smhed">Next Class</h3>
                    <p className="smpara">Lorem ipsum dolor sit amet</p>
                    <div className="time">1 : 45 : 00</div>
                  </div>
                </div>
                <div className="card p-3">
                  <div className="card-header border-0">
                    <h3 className="card-title">
                      <i className="clock-calendar far fa-calendar"></i>
                    </h3>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <h3 className="smhed">Up coming event</h3>
                    <p className="smpara">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has text ever since the
                      1500
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                      <NavLink to="">View Report</NavLink>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                      </p>
                    </div>

                    <div className="position-relative mb-4">
                      <canvas id="sales-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This year
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last year
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title"> chart</h3>
                  </div>
                  <div className="card-body">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Attendance</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <AttendenceBar />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                      <NavLink to="">View Report</NavLink>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                      </p>
                    </div>

                    <div className="position-relative mb-4">
                      <canvas id="sales-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This year
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last year
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Comment />
              <Comment />
              <Comment />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
