// Add any dummy data to validate graph
const Dummy_Data = [
  { id: 1, value: 10, region: 'North America' },
  { id: 2, value: 2, region: 'South America' },
  { id: 3, value: 5, region: 'Europe' },
  { id: 4, value: 8, region: 'Asia' },
];

// Scaling to fit the graph on x and y axis
const xScale = d3
  .scaleBand()
  .domain(Dummy_Data.map(d => d.region))
  .rangeRound([0, 250])
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .domain([0, 15])
  .range([200, 0]);

// Container for the graph
const container = d3.select('svg').classed('container',true);

// Understand the whole working of the framework
const bars = container
  .selectAll('.bar')
  .data(Dummy_Data)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (dta) => 200-yScale(dta.value))
  .attr('x', dta => xScale(dta.region))
  .attr('y', dta => yScale(dta.value));