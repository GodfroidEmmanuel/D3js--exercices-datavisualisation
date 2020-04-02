///////firt exercice///////


// const box = d3.select('.box');
// const svg = box.append('svg')
//         .attr('height', 500)
//         .attr('width', 600);

// const groupe = svg.append('g')
//         .attr('transform', 'translate(0,100)')

// groupe.append('rect')
//     .attr('width', 150)
//     .attr('height', 75)
//     .attr('fill',"red")
//     .attr('x', 50)
//     .attr('y', 200);


// groupe.append('line')
//     .attr('x1', 50)
//     .attr('y1', 100)
//     .attr('x2', 250)
//     .attr('y2', 200)
//     .attr('stroke', 'green');



// groupe.append('circle')
//     .attr('r', 100)
//     .attr('cx', 350)
//     .attr('cy', 150)
//     .attr('fill',"pink");


// let myData = ['50','45','40','35','30'];

// d3.selectAll('p')
//     .data(myData)
//     .text(function(d){
//         return d;
//     })
//     .style("font-size", function(d){
//         return d + "px"
//     })



///////second  exercice///////

// var donnee = [{radius:20, x:50, y:50, color:"red"},
//                {radius:25, x:150, y:50, color:"deeppink"},
//                {radius:30, x:250, y:50, color:"indigo"},
//                {radius:35, x:350, y:50, color:"pink"},
//                {radius:40, x:450, y:50, color:"green"}];

// const svg = d3.select('svg');

// const circles = svg.selectAll('circle')
//                 .data(donnee)
//                 .attr('r', function(d){ return d.radius})
//                 .attr('cx', function(d){ return d.x})
//                 .attr('cy', function(d){ return d.y})
//                 .attr('fill', function(d){ return d.color})

// circles.enter()
//         .append('circle')
//         .attr('r', function(d){ return d.radius})
//                 .attr('cx', function(d){ return d.x})
//                 .attr('cy', function(d){ return d.y})
//                 .attr('fill', function(d){ return d.color})

//  ==== less code and no html ====

// var donnee = [{radius:20, x:50, y:50, color:"red"},
//                {radius:25, x:150, y:50, color:"deeppink"},
//                {radius:30, x:250, y:50, color:"indigo"},
//                {radius:35, x:350, y:50, color:"pink"},
//                {radius:40, x:450, y:50, color:"green"}];

// const svg = d3.select('svg');

// const circles = svg.selectAll('circle')
//                 .data(donnee)
                

// circles.enter()
//         .append('circle')
//         .attr('r', function(d){ return d.radius})
//         .attr('cx', function(d){ return d.x})
//         .attr('cy', function(d){ return d.y})
//         .attr('fill', function(d){ return d.color})


///////second  exercice data from extern source///////


d3.json('data.json').then(donnee => {
    const svg = d3.select('svg');

    const circles = svg.selectAll('circle')
                    .data(donnee)
                    .attr('r', function(d){ return d.radius})
                    .attr('cx', function(d){ return d.x})
                    .attr('cy', function(d){ return d.y})
                    .attr('fill', function(d){ return d.color})
    
    circles.enter()
            .append('circle')
            .attr('r', function(d){ return d.radius})
                    .attr('cx', function(d){ return d.x})
                    .attr('cy', function(d){ return d.y})
                    .attr('fill', function(d){ return d.color})
})



