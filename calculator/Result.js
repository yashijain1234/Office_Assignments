import React from 'react';
import './Result.css';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip,Legend } from "recharts";

function Result(props) {
    const data= props.graphFinal;
        return(
            <div>
                 <div className="sample">
                    <AreaChart width={500} height={300} data={data} margin={{
                                top: 20, right: 20, bottom: 20, left: 20,}}>
                        <CartesianGrid />
                            <XAxis  />
                                 <Area
                                    type="monotone"
                                    dataKey="year"
                                    stackId="2"
                                    stroke="black"
                                    fill="black"
                                    // label="Periods in Years"
                                    />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                                <Area 
                                    type="monotone" 
                                    dataKey="sipStepUp"
                                    stackId="2" 
                                    stroke="#0949b0" 
                                    fill="#0949b0" 
                                />
                                <Area
                                    type="monotone"
                                    dataKey="totalInvestmentTillDate"
                                    stackId="2"
                                    stroke="#6d8dbf"
                                    fill="#6d8dbf"
                                />
                    </AreaChart>
                </div>

                 {/* <br /> */}

            <div className="sample_result">
                <p className="design">Result</p>
                <p>If you invest Rs. <b>{props.monthlyInvestment}/-</b> per month for a period of <b>{props.rate} years</b> with 
                    a Step-Up of investment <b>{props.increment}%</b> per year, your SIP amount will grow to Rs. <b>{props.finalDataVal}/-</b>.
                </p>

                <p className="design_note">Note: Based on monthly compounding</p>
            </div>

            <div className="back-btn">
                <a href="/Calculate" style={{ textDecoration: "none", color: "#333333", marginLeft: "400px" }}>
                     <i class="bi bi-arrow-left-circle" style={{ fontSize: "3rem" }}></i>
                        <span
                            style={{
                            fontSize: "1.20rem",
                            marginLeft: "0.2rem",
                            color: "#333333",
                            }}>
                            ← Re-Calculate
                        </span>
                </a>
            </div>
                
        </div>
    );
 }
    export default Result;