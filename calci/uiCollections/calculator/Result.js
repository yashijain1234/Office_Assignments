import React, { useState } from 'react';
import '../../media/css/Result.scss';
import Calculate from './Calculate';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip,Legend } from "recharts";

function Result(props) {
    const data= props.graphFinal;

    const[change , setChange] = useState(false);
    function changeComponent() {
        setChange(true);
    }

    const money = props.monthlyInvestment;
    // const f_data = props.finalDataVal;

    return(
        <div>
            {change === false && (
                <> 
                    <div> 
                        <h3 className="yaxis_design">Amount (Rs.)</h3>
                        <h3 className="xaxis_design">Periods in Years</h3>
                    </div>
                
                    <div className="sample">
                        <AreaChart width={700} height={300} data={data} 
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
                        <p className="result">Result</p>
                        <p>If you invest Rs. <b>{(money).toLocaleString('en-IN')}/-</b> per month for a period of <b>{props.increment} years</b> with 
                            a Step-Up of investment <b>{props.rate}%</b> per year, your SIP amount 
                            will grow to Rs. <b>{Math.round(props.finalDataVal).toLocaleString("en-IN")}/-</b>.</p>
                        <p className="design_note">Note: Based on monthly compounding</p>
                    </div>
                    <button className="recalculate-btn" onClick={changeComponent}>← Re-Calculate</button>
                </>
            )}

            {change === true && (
            <div>   
                <Calculate />
            </div> )}      
      </div>
    );
 }
export default Result;