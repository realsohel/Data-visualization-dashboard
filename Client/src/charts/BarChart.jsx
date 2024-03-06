import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const Barchart = ({data1}) => {
    const ref = useRef();
    // const [h, setH] = useState(100);

    useEffect(() => {
        const max = Math.max(...data1.map(d => d.intensity));
        // set the dimensions and margins of the graph
        const margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

        // Parse the Data
        d3.csv(data1).then(function (data) {
            // console.log(data1)
        // X axis
        const x = d3
            .scaleBand()
            .range([0, width])
            .domain(data1.map((d) => d.sector))
            .padding(0.4);
        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-35)")
            .style("text-anchor", "end");

        // Add Y axis
        const y = d3.scaleLinear().domain([0, (Math.ceil(max / 10) * 10)]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));
        
        
        // Bars
        svg
            .selectAll("mybar")
            .data(data1)
            .join("rect")
            .attr("x", (d) => x(d.sector))
            .attr("y", (d) => y( d.intensity))
            .attr("width", x.bandwidth())
            .attr("height", (d) => height - y(d.intensity))
            .attr("fill", "rgb(129 140 248 /1)")
        });
    }, [data1]);

    return <svg width={1000} height={620} id="barchart" ref={ref} />;
};

export default Barchart;
