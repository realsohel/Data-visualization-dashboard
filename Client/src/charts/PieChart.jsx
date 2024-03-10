import React, { useEffect } from 'react';
import * as d3 from 'd3';

function PieChart({data, total}) {
    
    const innerRadius = 0;
    const outerRadius = 150;

    const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
    };

    // const width = 2 * outerRadius + margin.left + margin.right;
    // const height = 2 * outerRadius + margin.top + margin.bottom;
    const width = 320;
    const height = 320;

    const colorScale = d3     
        .scaleSequential()      
        .interpolator(d3.interpolateWarm)      
        .domain([0, data.length]);

    useEffect(() => {
        drawChart();
    }, [data]);

    function drawChart() {
        d3.select('#pie-container')
        .select('svg')
        .remove();

        const svg = d3
        .select('#pie-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

        const pieGenerator = d3
        .pie()
        .padAngle(0)
        .value((d) => d.value);

        const arc = svg
        .selectAll()
        .data(pieGenerator(data))
        .enter();

        arc
        .append('path')
        .attr('d', arcGenerator)
        .style('fill', (_, i) => colorScale(i))
        .style('stroke', '#ffffff')
        .style('stroke-width', 1);

        arc
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .text((d) => `${(d.data.value / total *100).toFixed(1)}%`)
        .style('none', (_, i) => colorScale(data.length - i))
        .attr('transform', (d) => {
            const [x, y] = arcGenerator.centroid(d);
            return `translate(${x}, ${y})rotate(80)`;
        });
    }    

    return <div id="pie-container" ></div>;
}

export default PieChart;