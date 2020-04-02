 
// Les dimensions 
let margin = {top: 20, right: 20, bottom: 30, left: 50};
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

//creer cadre SVG
//ajouter le groupe qui contient le groupe
//deplacer ce groupe

let svg = d3.select("body").append("svg")
            .attr('width', 960)
            .attr('height', 550)
            .style('background', 'antiqueWhite')
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)


//creation groupes x et y

const groupX = svg.append('g')
                    .attr('transform', `translate(0, ${height})`)

const groupY = svg.append('g');

d3.json('data.json').then(data => {

    //on va mettre en variable la methode tme parse

    let parseTime = d3.timeParse("%d-%b-%y");

    //formatage des strings en objet date

    data.forEach(d => {
        console.log(parseTime(d.date));
        
        d.date = parseTime(d.date)
    });

    //mettre en place les portee(range) et les domaines de nos axes

    let x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);

    let y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.valeur)])
            .range([height, 0])



    // X

    const axeX = d3.axisBottom(x);

    groupX.call(axeX)
        .style('font-size', '14px')

        groupX.selectAll('text')
            .attr('transform', 'rotate(-30) translate(0,10)')
            .attr('text_anchor', 'end');



    // Y

    const axeY = d3.axisLeft(y)
                .ticks(5)

    groupY.call(axeY)
        .style('font-size', '13px');


    //creation des coordonées

    let valueLine = d3.line()
                        .x(d => {return x(d.date)})
                        .y(d => {return y(d.valeur)})


    //ajout du path

    svg.append('path')
        .attr('class', 'line')
        .attr('d', valueLine(data))
        



    

})