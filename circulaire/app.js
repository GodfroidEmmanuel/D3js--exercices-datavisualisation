// creer notre cadre

let svg = d3.select('body')
            .append('svg')
            .attr('width', 700)
            .attr('height', 600)
            .style('background', 'antiqueWhite');

var items = [100, 300, 100, 300];

var data = d3.pie().sort(null)(items); //.sort(null) permet de remettre les valeurs dans l'ordre 



let segments = d3.arc()
                .innerRadius(40)
                .outerRadius(125)
                .padAngle(0.02)


//creer un groupe et y ajouter les elemennts path

let sections = svg.append('g')
                    .attr('transform', 'translate(300,300)')
                    .selectAll('path')
                    .data(data)
                    .enter()
                    .append('path')
                    .attr('d', segments)
                    .attr('fill', 'crimson')