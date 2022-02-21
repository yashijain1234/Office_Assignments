import React, { useState } from 'react';
import './Result.css';
import Calculate from "./Calculate";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip,Legend } from "recharts";

function Result(props) {
    const data= props.graphFinal;

    const[change , setChange] = useState(false);
    function changeComponent() {
        setChange(true);
    }

    return(
        <div>
            {change === false && (
                <> 
                    <div> 
                        <h3 className="yaxis_design">Amount (Rs.)</h3>
                        <h3 className="xaxis_design">Periods in Years</h3>
                    </div>
                
                    <div className="sample">
                        <AreaChart width={500} height={300} data={data} 
                                margin={{
                                    top: 20, right: 20, bottom: 20, left: 20,
                                    }}>
                            <CartesianGrid />
                                <XAxis  />
                                    <Area
                                        type="monotone"
                                        dataKey="year"
                                        stackId="1"
                                        stroke="black"
                                        fill="black"
                                        />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                    <Area 
                                        type="monotone" 
                                        dataKey="sipStepUp"
                                        name="Step Up Amount"
                                        stackId="2" 
                                        stroke="#0949b0" 
                                        fill="#0949b0" 
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="totalInvestmentTillDate"
                                        name="Calculated Amount"
                                        stackId="2"
                                        stroke="#6d8dbf"
                                        fill="#6d8dbf"
                                    />
                        </AreaChart>
                    </div>

                    <div className="sample_result">
                        <p className="design">Result</p>
                        <p>If you invest Rs. <b>{props.monthlyInvestment}/-</b> per month for a period of <b>{props.rate} years</b> with 
                            a Step-Up of investment <b>{props.increment}%</b> per year, your SIP amount will grow to Rs. <b>{props.finalDataVal}/-</b>.
                        </p>

                        <p className="design_note">Note: Based on monthly compounding</p>
                        <button className="button1" onClick={changeComponent}>← Re-Calculate</button>
                    </div>
                </>
            )}

            {change === true && (
            <div>   
                <Calculate />
            </div> 
            )}      
      </div>
    );
 }
export default Result;