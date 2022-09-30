import React from 'react';
import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import Location from './Location';
import Navbar from './Navbar';
import Temperature from './Temperature';
const Gaschart = () => {

    const data = [
        {
            "name": "SUNDAY",
            "METHANE": 40,
            "LPG": 24,
            "AMMONIA": 24,
            "CARBON": 12,
            "NITROGEN": 15,
            "SULFUR": 43

        },
        {
            "name": "MONDAY",
            "METHANE": 30,
            "LPG": 14,
            "AMMONIA": 16,
            "CARBON": 32,
            "NITROGEN": 25,
            "SULFUR": 43
        },
        {
            "name": "TUESDAY",
            "METHANE": 49,
            "LPG": 28,
            "AMMONIA": 32,
            "CARBON": 22,
            "NITROGEN": 15,
            "SULFUR": 43
        },
        {
            "name": "WEDNESDAY",
            "METHANE": 20,
            "LPG": 24,
            "AMMONIA": 21,
            "CARBON": 12,
            "NITROGEN": 35,
            "SULFUR": 43
        },
        {
            "name": "THURSDAY",
            "METHANE": 17,
            "LPG": 29,
            "AMMONIA": 12,
            "CARBON": 42,
            "NITROGEN": 15,
            "SULFUR": 43
        },
        {
            "name": "FRIDAY",
            "METHANE": 49,
            "LPG": 34,
            "AMMONIA": 25,
            "CARBON": 22,
            "NITROGEN": 25,
            "SULFUR": 43
        },
        {
            "name": "SATURDAY",
            "METHANE": 20,
            "LPG": 14,
            "AMMONIA": 21,
            "CARBON": 32,
            "NITROGEN": 15,
            "SULFUR": 43
        }
    ]
    return (
      <div>
          
           <Navbar></Navbar>
           <Location></Location>
        <div className='chart mx-auto'>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={.1} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={.1} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAmmonia" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FD947E" stopOpacity={.1} />
                        <stop offset="95%" stopColor="#FD947E" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FADE2C " stopOpacity={.1} />
                        <stop offset="95%" stopColor="#FADE2C " stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorNitrogen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5F5A3F " stopOpacity={.1} />
                        <stop offset="95%" stopColor="#5F5A3F " stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSulfur" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FD947E" stopOpacity={.1} />
                        <stop offset="95%" stopColor="#FD947E" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="METHANE" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="LPG" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="AMMONIA" stroke="#FD947E" fillOpacity={1} fill="url(#colorAmmonia)" />
                <Area type="monotone" dataKey="CARBON" stroke="#FADE2C" fillOpacity={1} fill="url(#colorCarbon)" />
                <Area type="monotone" dataKey="NITROGEN" stroke="#5F5A3F" fillOpacity={1} fill="url(#colorNitrogen)" />
            </AreaChart>
        </div>
      </div>
    );
};

export default Gaschart;