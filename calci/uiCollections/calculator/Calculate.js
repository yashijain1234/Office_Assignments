import React,{ useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Result from "./Result.js";
import '../../media/css/Calculate.scss';

const Input = styled(MuiInput)
`width: 80px; 
 font-size: 14px;
 padding: 5px;
 border: solid 1px #cccccc;
 border-radius:3px;`

      const monthlySavingsMarks = [
        {
          value: 1000,
          label: '1k',
        },
        {
          value: 100000,
          label: '100k',
        },
        {
          value: 200000,
          label: '200k',
        },
        {
          value: 300000,
          label: '300k',
        },
        {
          value: 400000,
          label: '400k',
        },
        {
          value: 500000,
          label: '500k',
        },
        {
          value: 600000,
          label: '600k',
        },
        {
          value: 700000,
          label: '700k',
        },
        {
          value: 800000,
          label: '800k',
        },
        {
          value: 900000,
          label: '900k',
        },
        {
          value: 1000000,
          label: '1M',
        },
      ];
      
          const yearlyIncrementMarks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 5,
          label: '5',
        },
        {
          value: 8,
          label: '8',
        },
        {
          value: 10,
          label: '10',
        },
        {
          value: 13,
          label: '13',
        },
        {
          value: 15,
          label: '15',
        },
        {
          value: 18,
          label: '18',
        },
        {
          value: 20,
          label: '20',
        },
        {
          value: 23,
          label: '23',
        },
        {
          value: 25,
          label: '25',
        }
      ];
      
          const investmentPeriodMarks = [
        {
          value: 1,
          label: '1',
        },
        {
          value: 5,
          label: '5',
        },
        {
          value: 11,
          label: '11',
        },
        {
          value: 16,
          label: '16',
        },
        {
          value: 21,
          label: '21',
        },
        {
          value: 26,
          label: '26',
        },
        {
          value: 30,
          label: '30',
        },
        {
          value: 35,
          label: '35',
        },
        {
          value: 40,
          label: '40',
        },
        {
          value: 45,
          label: '45',
        },
        {
          value: 50,
          label: '50',
        },
      ];
      
          const expectedRateMarks = [
        {
          value: 1,
          label: '1',
        },
        {
          value: 3.9,
          label: '3.9',
        },
        {
          value: 6.8,
          label: '6.8',
        },
        {
          value: 9.7,
          label: '9.7',
        },
        {
          value: 12.6,
          label: '12.6',
        },
        {
          value: 15.5,
          label: '15.5',
        },
        {
          value: 18.4,
          label: '18.4',
        },
        {
          value: 21.3,
          label: '21.3',
        },
        {
          value: 24.2,
          label: '24.2',
        },
        {
          value: 27.1,
          label: '27.1',
        },
        {
          value: 30,
          label: '30',
        },
      ];
    
function monthlySavingsText(value) {
    return `Rs. ${value}`;
  }
  
  function yearlyIncrementText(value) {
    return `${value} yrs`;
  }
  
  function investmentPeriodText(value) {
    return `${value} %`;
  }
  
  function expectedRateText(value) {
    return  `${value} months`;
  }
  export default function Stepup() { 
    const [monthlySavingsValue, setMonthlySavings] = React.useState(1000);
    const [yearlyIncrementValue, setYearlyIncrement ] = React.useState(10);
    const [investmentPeriodValue, setInvestmentPeriod] = React.useState(15);
    const [expectedRateValue, setExpectedRate] = React.useState(12);   
    let   [finalData, setfinalData]=useState();  
    let   [graph, setGraph]=useState([]);
  
  const handleMonthlySavingsSliderChange = (event, newMonthlySavingsValue) => {
    setMonthlySavings(newMonthlySavingsValue);
  };

  const handleYearlyIncrementSliderChange = (event, newYearlyIncrementValue) => {
    setYearlyIncrement(newYearlyIncrementValue);
  };

  const handleInvestmentPeriodSliderChange = (event, newInvestmentPeriodValue) => {
    setInvestmentPeriod(newInvestmentPeriodValue);
  };

  const handleExpectedRateSliderChange = (event, ExpectedRateValue) => {
    setExpectedRate(ExpectedRateValue);
  };
  const handleMonthlySavingsChange = (event) => {
    setMonthlySavings(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleYearlyIncrementChange = (event) => {
    setYearlyIncrement(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleInvestmentPeriodChange = (event) => {
    setInvestmentPeriod(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleExpectedRateChange = (event) => {
    setExpectedRate(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleMonthlySavingsBlur = () => {
    if (monthlySavingsValue < 0) {
      setMonthlySavings(2000);
    } else if (monthlySavingsValue > 1000000) {
      setMonthlySavings(1000000);
    }
  };

  const handleYearlyIncrementBlur = () => {
    if (yearlyIncrementValue < 0) {
      setYearlyIncrement(1);
    } else if (yearlyIncrementValue > 30) {
      setYearlyIncrement(30);
    }
  };

  const handleInvestmentPeriodBlur = () => {
    if (investmentPeriodValue < 0) {
      setInvestmentPeriod(1);
    } else if (investmentPeriodValue > 30) {
      setInvestmentPeriod(30);
    }
  };
  const handleExpectedRateBlur = () => {
    if (expectedRateValue < 0) {
      setExpectedRate(1);
    } else if (expectedRateValue > 120) {
      setExpectedRate(120);
    }
  };

  const[slide,setSlide]=useState(true);
   async function changeState() {
   const body = {monthlySavings: monthlySavingsValue,
    yearlyIncrement: yearlyIncrementValue,
    investmentPeriod: investmentPeriodValue,
    rateOfReturn: expectedRateValue,}
    const response = await fetch("/sipStepUpCalculator",{method:"POST",headers: { 
    'Content-Type': 'application/json'
    },body:JSON.stringify(body)});
    const data = await response.json();
    
    setSlide(false);
    finalData=data.result.totalSipStepUpAmount;
    setfinalData(finalData)
    setGraph(data.result.graph)  
  }

  return (
          <div>  
              <div>
              {slide === true && (
                      <div className="box">
                        
              
                        <Box sx={{ width: 800, marginLeft: 5, marginRight: 5 }}>
                          <br></br>
                          <div className="slider-1">
                            <div className="slider-text">
                              <Typography id="input-slider" gutterBottom>
                                <b>Monthly Savings (Rs.)</b>
                              </Typography>
                            </div>
                            <div className="slider-bar">
                              <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                  <Slider
                                    value={typeof monthlySavingsValue === 'number' ? monthlySavingsValue : 0}
                                    onChange={handleMonthlySavingsSliderChange}
                                    aria-label="Monthly Savings"
                                    marks={monthlySavingsMarks}
                                    getAriaValueText={monthlySavingsText}
                                    color="primary"
                                    valueLabelDisplay="auto"
                                    min={1000}
                                    max={1000000}/>
                                  
                                </Grid>
                                <Grid item>
                                  <Input
                                    value={(monthlySavingsValue)}
                                    onChange={handleMonthlySavingsChange}
                                    onBlur={handleMonthlySavingsBlur}
                                    inputProps={{
                                    style: { textAlign: 'center' }
                                   }} 
                                  />
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Box>
              
                        <Box sx={{ width: 800, marginLeft: 5, marginRight: 5 }}>
                          <br></br>
                          <div className="slider-2">
                            <div className="slider-text">
                              <Typography id="input-slider" gutterBottom>
                                   <b>Yearly Increment (%)</b> 
                              </Typography>
                            </div>
                            <div className="slider-bar">
                              <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                  <Slider
                                    value={typeof yearlyIncrementValue === 'number' ? yearlyIncrementValue : 0}
                                    onChange={handleYearlyIncrementSliderChange}
                                    aria-label="Yearly Increment"
                                    color="primary"
                                    marks={yearlyIncrementMarks}
                                    getAriaValueText={yearlyIncrementText}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={30}/>
                                </Grid>
                                <Grid item>
                                  <Input
                                     value={yearlyIncrementValue}
                                     onChange={handleYearlyIncrementChange}
                                     onBlur={handleYearlyIncrementBlur}
                                     inputProps={{  
                                     min: 0,
                                     max: 25,
                                     type: 'number',
                                     'aria-labelledby': 'input-slider',
                                     style: { textAlign: 'center' }
                                     }}/>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Box>
              
                        <Box sx={{ width: 800, marginLeft: 5, marginRight: 5 }}>
                          <br></br>
                          <div className="slider-3">
                            <div className="slider-text">
                              <Typography id="input-slider" gutterBottom>
                              <b>Investment Period (in years)</b>
                              </Typography>
                            </div>
                            <div className="slider-bar">
                              <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                  <Slider
                                    value={typeof investmentPeriodValue === 'number' ? investmentPeriodValue : 0}
                                    onChange={handleInvestmentPeriodSliderChange}
                                    aria-label="Investment Period"
                                    color="primary"
                                    marks={investmentPeriodMarks}
                                    getAriaValueText={investmentPeriodText}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={50}/>
                                </Grid>
                                <Grid item>
                                  <Input
                                   value={investmentPeriodValue}
                                   onChange={handleInvestmentPeriodChange}
                                   onBlur={handleInvestmentPeriodBlur}
                                   inputProps={{
                                   step: 1,
                                   min: 1,
                                   max: 50,
                                   type: 'number',
                                   'aria-labelledby': 'input-slider',
                                   style: { textAlign: 'center' }
                                 }}/>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Box>
              
                        <Box sx={{ width: 800, marginLeft: 5, marginRight: 5 }}>
                          <br></br>
                          <div className="slider-4">
                            <div className="slider-text">
                              <Typography id="input-slider" gutterBottom>
                              <b>Expected Rate of Return (% p.a.)</b>
                              </Typography>
                            </div>
                            <div className="slider-bar">
                              <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                  <Slider
                                    value={typeof expectedRateValue === 'number' ? expectedRateValue : 0}
                                    onChange={handleExpectedRateSliderChange}
                                    aria-label="Expected Rate of Return"
                                    color="primary"
                                    marks={expectedRateMarks}
                                    getAriaValueText={expectedRateText}
                                    step={0.1}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={30}/>
                                  
                                </Grid>
                                <Grid item>
                                  <Input
                                     value={expectedRateValue}
                                     onChange={handleExpectedRateChange}
                                     onBlur={handleExpectedRateBlur}
                                     inputProps={{
                                     step:0.1,
                                     min: 1,
                                     max: 30,
                                     type: 'number',
                                     'aria-labelledby': 'input-slider',
                                     style: { textAlign: 'center' }
                                     }}/>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Box>
                   <br />
                  <button className="calculate-btn" onClick={changeState}>Calculate ➝</button>
                </div>)}
            </div>
    
                    {slide === false && (
                        <div>
                          <Result monthlyInvestment={monthlySavingsValue} rate={yearlyIncrementValue} 
                          increment={investmentPeriodValue} finalDataVal={finalData} graphFinal={graph}/>
                        </div>
                      )}
      </div>
   );
}