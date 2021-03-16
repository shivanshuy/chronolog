'use babel';

import React from 'react';
import * as d3 from "d3";

export default class Main extends React.Component {
    
  constructor(props) {
        super(props);
        this.state = { 
            centerX: 300,
            centerY: 300,
            radius: 100,
            hrsArray: []
        }
        this.createNodes = this.createNodes.bind(this);
        this.createElements = this.createElements.bind(this);
        this.drawRadialLine = this.drawRadialLine.bind(this);
        
        this.plotRoute = this.plotRoute.bind(this);
        this.plotDestinations = this.plotDestinations.bind(this);
        this.plotCommentBox = this.plotCommentBox.bind(this);
    }
  
  render() { 
      
     /*return (<svg ref={node => this.node = node} width="600" height="600" viewBox="0 0 600 600" >
                <circle cx={this.state.centerX} cy={this.state.centerY} r={this.state.radius} stroke="#B7B7B7" strokeWidth="6" fill="none"/>
                <circle id="startStop" cx={this.state.centerX} cy={this.state.centerY-this.state.radius-16} r={16} fill="blue"/>
            </svg>);*/
            
    return (
            <div class="blog-content">
                <div class="blog-box-container">
                    <svg class="blog-content" ref={node => this.node = node} width="600" height="600" viewBox="0 0 600 600" >
                        
                    </svg>
                </div>
            </div>
            );
  }
  
  componentDidMount (){
      let svgNode = this.node;
      var svg = d3.select(svgNode);
      this.svgElement = svg;
      //this.createElements(svg, 24, this.state.radius);
      
      this.plotRoute(svg);
      
      let that = this;
      d3.select("#startStop").on("click", function() {
        let date = new Date();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        that.drawRadialLine(svg,that.state.centerX,that.state.centerY,that.state.hrsArray[hrs].x,that.state.hrsArray[hrs].y);
      });
  }
  
    createNodes (numNodes, radius) {
     var nodes = [],
         angle,
         x,
         y,
         i;
     for (i=0; i<numNodes; i++) {
      angle = (i / (numNodes/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                            // For a semicircle, we would use (i / numNodes) * Math.PI.
      x = (radius * Math.cos(angle)) + (this.state.centerX); // Calculate the x position of the element.
      y = (radius * Math.sin(angle)) + (this.state.centerY); // Calculate the y position of the element.
      this.state.hrsArray.push({'id': i, 'x': x, 'y': y})
      nodes.push({'id': i, 'x': x, 'y': y});
     }
     return nodes;
   }
   
   createElements (svg, numNodes, radius) {
        let nodes = this.createNodes(numNodes, radius);
        let element = svg.selectAll('myCircle')
                        .data(nodes)
                      .enter().append('svg:circle')
                        .attr('r', 2)
                        .attr('cx', function (d, i) {
                          return d.x;
                        })
                        .attr('cy', function (d, i) {
                          return d.y;
                        });
   }
   
   drawRadialLine (holder,x1,y1,x2,y2){
       holder.append("line")          // attach a line
        .style("stroke", "black")  // colour the line
        .attr("x1", x1)     // x position of the first end of the line
        .attr("y1", y1)      // y position of the first end of the line
        .attr("x2", x2)     // x position of the second end of the line
        .attr("y2", y2);    // y position of the second end of the line
   }
   
   plotRoute(svgElem,lineData1){
       
       let lineData = [{"x":100, "y":200},
                             {"x":100, "y":300},
                             {"x":100, "y":400},
                             {"x":100, "y":500}];
                             
        var lineFunction = d3.line().x(function(d) { return d.x; })
                                    .y(function(d) { return d.y; })
                                    .curve(d3.curveLinear);
  
        var path = svgElem.append("path")
                    .attr("d", lineFunction(lineData))
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("vector-effect", "non-scaling-stroke")// prevent scaling of stroke width
                    .attr("fill", "none");
                    
        
        this.plotDestinations(svgElem,lineData);
        this.plotCommentBox(svgElem,lineData);
    }
    
    plotDestinations(svgElem,lineData){       
       //Add circles to the svgContainer
        var circles = svgElem.selectAll("circle")
                            .data(lineData)
                            .enter()
                            .append("g");
 
        //Outer Circle
        circles.append("circle").attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function (d) { return "blue"; });  
    }
    
    plotCommentBox(svgElem,lineData){       
    let infoGroup = svgElem.selectAll('InfoG').data(lineData).enter().append("g");        
        
    let rectsMod = infoGroup.append("rect")
                        .attr("x", function (d) { return d.x+5; })
                        .attr("y", function (d) { return d.y+5; })
                        //.attr("rx", function(d,i) { return 20; })
                        //.attr("ry", function(d,i) { return 20; })
                        .attr("width", 200)
                        .attr("height", 50)
                        .style("fill", function (d) { return "yellow"; }); 
    }
}
