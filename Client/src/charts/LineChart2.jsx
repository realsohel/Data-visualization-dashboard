import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { IoRefreshCircleOutline } from "react-icons/io5";

const LineChart2 = () => {
    
    const ref = useRef();
    const data1 = [
        {x:1, y: 90},
        {x: 2, y: 12},
        {x: 3, y: 34},
        {x: 4, y: 53},
        {x: 5, y: 98},
    ]
    const createGraph = async () => {
        let data = await d3.csv(data1)
        
        var margin = { top: 20, right: 20, bottom: 50, left: 70 },
        width = 500 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
    // append the svg object to the body of the page
        var svg = d3.select(ref.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Add X axis and Y axis
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);
        x.domain(d3.extent(data, (d) => { return d.x; }));
        y.domain([0, d3.max(data, (d) => { return d.y; })]);
        svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
        svg.append("g")
        .call(d3.axisLeft(y));

        var valueLine = d3.line()
            .x((d) => { return x(d.x); })
            .y((d) => { return y(d.y); });

        svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", x)
    }

    useEffect(() => {
        createGraph();
    }, []);

    return <svg width={500} height={300} id="line"  ref={ref}/>
}

export default LineChart2
