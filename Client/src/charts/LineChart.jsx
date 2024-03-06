import * as d3 from "d3";
import React, { useEffect, useRef } from 'react'

const LineChart = ({}) => {

    const data = [
        {x:1, y: 90},
        {x: 2, y: 12},
        {x: 3, y: 34},
        {x: 4, y: 53},
        {x: 5, y: 98},
    ]
    const ref = useRef();
    
    useEffect(() => {
        const  margin = {top: 10, right: 30, bottom: 30, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        var svg = d3
        .select(ref.current)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        d3.csv(data).then(function(data) {
            // Add X axis --> it is a date format
            var x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.x; }))
            .range([ 0, width ]);
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
            // Add Y axis
            var y = d3.scaleLinear()
            .domain( [0, 10])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y));
            // Add the line
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function(d) { return x(d.x) })
                .y(function(d) { return y(d.y) })
                )
            // Add the points
            svg
            .append("g")
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", function(d) { return x(d.x) } )
                .attr("cy", function(d) { return y(d.y) } )
                .attr("r", 5)
                .attr("fill", "#69b3a2")
        })
    }, []);

    return <svg width={1000} height={620} id="scatterplot" ref={ref} />;
};
export default LineChart;
