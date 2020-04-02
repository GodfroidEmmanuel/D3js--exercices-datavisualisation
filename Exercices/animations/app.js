let svg = d3.select('.box')
            .append('svg')
            .attr('width', 900)
            .attr('height', 600)
            .style('background', 'antiqueWhite');

svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 50)
    .attr('r', 35);


function anim() {
    d3.select('circle')
        .transition()
        .attr('cx', 550)
        //.delay(1000)
        //.duration(1500)
        .transition()
        .attr('cx', 350)
        .transition()
        .attr('cx', 750)
        .transition()
        .attr('cx', 250)
        .transition()
        .attr('cx', 550)
}