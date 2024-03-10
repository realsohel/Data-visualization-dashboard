import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart2 = ({data}) => {
    const width = 500;
    const height = 350;
    
    const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Y axis
    const [min, max] = d3.extent(data, (d) => d.v);
    const yScale = d3
        .scaleLinear()
        .domain([0, (max + 50) || 0])
        .range([boundsHeight, 0]);

    // X axis
    const [xMin, xMax] = d3.extent(data, (d) => d.likelihood);
    const xScale = d3
        .scaleLinear()
        .domain([0, (xMax + 0.5) || 0])
        .range([0, boundsWidth]);

    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll('*').remove();
        const xAxisGenerator = d3.axisBottom(xScale).ticks(5); ;
        svgElement
        .append('g')
        .attr('transform', 'translate(0, ' + boundsHeight + ')')
        .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale) ;
        svgElement.append('g').call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight]);

    // Build the line
    const lineBuilder = d3
        .line(width,height)
        .x((d) => xScale(d.likelihood))
        .y((d) => yScale(d.v));
    const linePath = lineBuilder(data);
    if (!linePath) {
        return null;
    }

    // Build the circles
    const allCircles = data.map((item, i) => {
        return (
        <circle
            key={i}
            cx={xScale(item.likelihood)}
            cy={yScale(item.v)}
            r={4}
            fill={'rgb(129 140 248 /1)'}
        />
        );
    });

    return (
        <div>
        <svg width={width} height={height}>
            <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
            >
            <path
                d={linePath}
                opacity={0.3}
                stroke="rgb(85 70 229/1)"
                fill="none"
                strokeWidth={3}
            />
            {allCircles}
            </g>
            <g
            width={boundsWidth}
            height={boundsHeight}
            ref={axesRef}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
            />
        </svg>
        </div>
    );
};

export default LineChart2
