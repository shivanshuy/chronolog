import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import {event as currentEvent} from 'd3';
import { select } from 'd3-selection';
import Accordion from "../accordion/Accordion";

class PlotMyTravel extends React.Component {

/* 
------------------------------
India is in nothern Hemisphere
------------------------------

North	Indira Col, Siachen Glacier	    Leh	        Jammu and Kashmir	            35.674520°N     76.845245°E	
South	Indira Point, Nicobar Islands	Nicobar	    Andaman and Nicobar Islands	    6.74678°N       93.84260°E
East    Kibithu	                        Anjaw	    Arunachal Pradesh	            28.01744°N      97.40238°E
West	Guhar Moti, Sir Creek	        Kutch	    Gujarat	                        23.71307°N      68.03215°E


 -------------------
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
 -------------------
 
*/
    
    constructor(props) {

        super(props);
        this.state = { 
          curentDestination: {},
          destinations: [],
          eatery: undefined,
          sight: undefined,
          selectedDestination:{
              index: undefined,
              id: undefined
          }
        }
        this.getGeolocation = this.getGeolocation.bind(this);
        this.onAddDestination = this.onAddDestination.bind(this);
        this.onPlotTravel = this.onPlotTravel.bind(this);
        this.handleEnableDestination = this.handleEnableDestination.bind(this);
        this.clear = this.clear.bind(this);
        this.updateEatery = this.updateEatery.bind(this);
        this.addEatery = this.addEatery.bind(this);
        this.selectPanel = this.selectPanel.bind(this);
        this.updateSight = this.updateSight.bind(this);
        this.addSight = this.addSight.bind(this);
    }
    
    initAutocomplete() {

      /*var autocomplete = new google.maps.places.Autocomplete(this.refs.autoCompletePlaces);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
                var place = autocomplete.getPlace();
                this.getGeolocation(place);
      });*/
    }
    
    getGeolocation(place){
        let maxIndex = 0;
        this.state.destinations.forEach((destination) => {
            if(destination.index !== -1){
                maxIndex = destination.index;
            }
        });
        
        if(place){
            this.setState({
              curentDestination: this.createDestinationInfo(place,++maxIndex),
            });  
        }          
    }
    
    onAddDestination(){
        let existingDestination = this.state.destinations.find(destination => destination.id === this.state.curentDestination.id);        
        if(!existingDestination){
            this.setState({
                destinations: [...this.state.destinations, this.state.curentDestination]
            });      
        }
    }
    
    clear(){
        this.setState({
            destinations: []
        });
    }
    
    onPlotTravel(){
       
        let mahaLineData = [{"lat":15.7202772, "lng":73.6844499,"y":4000 - 1572,"x":7368},
                        {"lat":20.13697, "lng":72.7377855,"y":4000 - 2013,"x":7273},                       
                       {"lat":21.9527961, "lng":74.1406926,"y":4000 - 2195,"x":7414},                       
                       {"lat":21.0851577, "lng":76.1701836,"y":4000 - 2108,"x":7617},
                       {"lat":21.3286069, "lng":80.6573181,"y":4000 - 2132,"x":8065},
                       {"lat":19.471793, "lng":80.8921628,"y":4000 - 1947,"x":8089},
                       {"lat":18.7234352, "lng":80.2737904,"y":4000 - 1872,"x":8027},
                        {"lat":19.4016126, "lng":79.9760816,"y":4000 - 1940,"x":7997},                      
                       {"lat":19.9167065, "lng":78.3244382,"y":4000 - 1991,"x":7832},
                       {"lat":18.2804269, "lng":77.5541392,"y":4000 - 1828,"x":7755},
                       {"lat":16.5440663, "lng":74.2770771,"y":4000 - 1654,"x":7427},
                       {"lat":15.6497692, "lng":74.1254554,"y":4000 - 1564,"x":7412},
                       {"lat":15.7202772, "lng":73.6844499,"y":4000 - 1572,"x":7368}];               
        
        let goaLineData = [{"lat":14.8982904, "lng":74.0953634,"y":4000 - 1489,"x":7409},
                           {"lat":15.7202772, "lng":73.6844499,"y":4000 - 1572,"x":7368},
                           {"lat":15.6497692, "lng":74.1254554,"y":4000 - 1564,"x":7412}];
                       
        let karnatakaLineData = [{"lat":12.7574041, "lng":74.8649096,"y":4000 - 1275,"x":7486},
                                 {"lat":14.8982904, "lng":74.0953634,"y":4000 - 1489,"x":7409},
                                 {"lat":15.6497692, "lng":74.1254554,"y":4000 - 1564,"x":7412},
                                 {"lat":16.5440663, "lng":74.2770771,"y":4000 - 1654,"x":7427},
                                 {"lat":18.2804269, "lng":77.5541392,"y":4000 - 1828,"x":7755},
                                 {"lat":15.9304299, "lng":77.5101862,"y":4000 - 1593,"x":7751},
                                 {"lat":15.910356, "lng":77.0761753,"y":4000 - 1591,"x":7707},
                                 {"lat":15.0936951, "lng":76.7739849,"y":4000 - 1509,"x":7677},
                                 {"lat":13.7425961, "lng":76.9959711,"y":4000 - 1374,"x":7699},
                                 {"lat":13.963519, "lng":77.9736223,"y":4000 - 1396,"x":7797},
                                 {"lat":13.3141029, "lng":78.5629054,"y":4000 - 1331,"x":7856},
                                 {"lat":12.7525391, "lng":78.2191378,"y":4000 - 1275,"x":7821},
                                 {"lat":12.8875518, "lng":77.9215174,"y":4000 - 1288,"x":7792},
                                 {"lat":12.2078695, "lng":77.4725573,"y":4000 - 1220,"x":7747},
                                 {"lat":12.117259, "lng":77.7767532,"y":4000 - 1211,"x":7777},
                                 {"lat":11.6569473, "lng":76.4267437,"y":4000 - 1165,"x":7642},
                                 {"lat":12.7574041, "lng":74.8649096,"y":4000 - 1275,"x":7486}];
        
        let telanganaLineData = [{"lat":15.9304299, "lng":77.5101862,"y":4000 - 1593,"x":7751},
                                 {"lat":18.2804269, "lng":77.5541392,"y":4000 - 1828,"x":7755},
                                 {"lat":19.9167065, "lng":78.3244382,"y":4000 - 1991,"x":7832},
                                 {"lat":19.4016126, "lng":79.9760816,"y":4000 - 1940,"x":7997},
                                 {"lat":18.7234352, "lng":80.2737904,"y":4000 - 1872,"x":8027},
                                 {"lat":17.8025881, "lng":81.0878394,"y":4000 - 1780,"x":8108},
                                 {"lat":17.8145962, "lng":81.3920404,"y":4000 - 1781,"x":8139},
                                 {"lat":15.9304299, "lng":77.5101862,"y":4000 - 1593,"x":7751}];
        
        let andhraLineData = [{"lat":12.7525391, "lng":78.2191378,"y":4000 - 1275,"x":7821},
                              {"lat":13.3141029, "lng":78.5629054,"y":4000 - 1331,"x":7856},
                              {"lat":13.963519, "lng":77.9736223,"y":4000 - 1396,"x":7797},
                              {"lat":13.7425961, "lng":76.9959711,"y":4000 - 1374,"x":7699},
                              {"lat":15.0936951, "lng":76.7739849,"y":4000 - 1509,"x":7677},
                              {"lat":15.910356, "lng":77.0761753,"y":4000 - 1591,"x":7707},
                              {"lat":15.9304299, "lng":77.5101862,"y":4000 - 1593,"x":7751},
                              {"lat":17.8145962, "lng":81.3920404,"y":4000 - 1781,"x":8139},
                              {"lat":19.1535057, "lng":83.6278613,"y":4000 - 1915,"x":8362},
                              {"lat":18.7825743, "lng":84.3162682,"y":4000 - 1878,"x":8431},
                              {"lat":19.1204718, "lng":84.7919206,"y":4000 - 1912,"x":8479},
                              {"lat":15.8556941, "lng":80.775803,"y":4000 - 1585,"x":8077},
                              {"lat":13.431413, "lng":80.3169693,"y":4000 - 1343,"x":8031},
                              {"lat":12.7525391, "lng":78.2191378,"y":4000 - 1275,"x":7821}];
                              
        let tamilnaduLineData = [{"lat":8.2876635, "lng":77.0908964,"y":4000 - 828,"x":7709},
                                 {"lat":9.5018039, "lng":77.3955257,"y":4000 - 950,"x":7739},
                                 {"lat":10.3410477, "lng":77.2186764,"y":4000 - 1034,"x":7721},
                                 {"lat":10.2151845, "lng":76.9555968,"y":4000 - 1021,"x":7695},
                                 {"lat":11.5669663,"lng":76.2308897,"y":4000 - 1156,"x":7623},
                                 {"lat":11.6569473,"lng":76.4267437,"y":4000 - 1165,"x":7642},
                                 {"lat":12.117259, "lng":77.7767532,"y":4000 - 1211,"x":7777},
                                 {"lat":12.2078695, "lng":77.4725573,"y":4000 - 1220,"x":7747},
                                 {"lat":12.8875518, "lng":77.9215174,"y":4000 - 1288,"x":7792},
                                 {"lat":12.7525391, "lng":78.2191378,"y":4000 - 1275,"x":7821},
                                 {"lat":13.431413, "lng":80.3169693,"y":4000 - 1343,"x":8031},
                                 {"lat":12.4503993, "lng":80.1463517,"y":4000 - 1245,"x":8014},
                                 {"lat":11.5320397, "lng":79.7639383,"y":4000 - 1153,"x":7976},
                                 {"lat":10.2961159, "lng":79.8759263,"y":4000 - 1029,"x":7987},
                                 {"lat":10.3146732, "lng":79.3813896,"y":4000 - 1031,"x":7938},
                                 {"lat":9.4934577, "lng":78.9037074,"y":4000 - 949,"x":7890},
                                 {"lat":9.282401, "lng":79.1905652,"y":4000 - 928,"x":7919},
                                 {"lat":9.2567644, "lng":78.874608,"y":4000 - 925,"x":7887},                                 
                                 {"lat":8.936614, "lng":78.1934193,"y":4000 - 893,"x":7819},                                 
                                 {"lat":8.373673, "lng":78.0677603,"y":4000 - 837,"x":7806},
                                 {"lat":8.0778749, "lng":77.5510302,"y":4000 - 807,"x":7755},
                                 {"lat":8.2876635, "lng":77.0908964,"y":4000 - 828,"x":7709}];                      
       
        
        let keralaLineData = [{"lat":8.2876635, "lng":77.0908964,"y":4000 - 828,"x":7709},
                              {"lat":12.7574041, "lng":74.8649096,"y":4000 - 1275,"x":7486},
                              {"lat":11.6569473,"lng":76.4267437,"y":4000 - 1165,"x":7642},
                              {"lat":11.5669663,"lng":76.2308897,"y":4000 - 1156,"x":7623},
                              {"lat":10.2151845, "lng":76.9555968,"y":4000 - 1021,"x":7695},
                              {"lat":10.3410477, "lng":77.2186764,"y":4000 - 1034,"x":7721},
                              {"lat":9.5018039, "lng":77.3955257,"y":4000 - 950,"x":7739},
                              {"lat":8.2876635, "lng":77.0908964,"y":4000 - 828,"x":7709}];
                              
                                
        
        this.clearSVGContent(); 
        //let viewBoxAttributes = this.getViewBoxAttributes(this.state.destinations);
        let viewBoxAttributes = this.getViewBoxAttributes(mahaLineData);
        viewBoxAttributes = this.getViewBoxAttributes(goaLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        viewBoxAttributes = this.getViewBoxAttributes(karnatakaLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        viewBoxAttributes = this.getViewBoxAttributes(telanganaLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        viewBoxAttributes = this.getViewBoxAttributes(andhraLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        viewBoxAttributes = this.getViewBoxAttributes(tamilnaduLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        viewBoxAttributes = this.getViewBoxAttributes(keralaLineData,viewBoxAttributes.minX,viewBoxAttributes.maxX,viewBoxAttributes.minY,viewBoxAttributes.maxY);
        let svgElem = this.getSVGElement(viewBoxAttributes);
        this.plotMapOfMaharashtra(svgElem,mahaLineData);
        this.plotMapOfGoa(svgElem,goaLineData);
        this.plotMapOfKarnataka(svgElem,karnatakaLineData);
        this.plotMapOfTelangana(svgElem,telanganaLineData);
        this.plotMapOfAndhra(svgElem,andhraLineData);
        this.plotMapOfTamilnadu(svgElem,tamilnaduLineData);
        this.plotMapOfKerala(svgElem,keralaLineData);
        
        let lineData = 
        [{"id":"18.52_73.86","lat":18.5204303,"lng":73.85674369999992,"x":7386,"y":2148,"name":"Pune","address":"Pune, Maharashtra, India","enable": true},
         {"id":"11.02_76.96","lat":11.0168445,"lng":76.95583209999995,"x":7695.999999999999,"y":2898,"name":"Coimbatore","address":"Coimbatore, Tamil Nadu, India","enable": true},
         {"id":"11.35_76.80","lat":11.3530022,"lng":76.7959095,"x":7680,"y":2865,"name":"Coonoor","address":"Coonoor, Tamil Nadu, India","enable": true},
         {"id":"11.41_76.69","lat":11.4064138,"lng":76.6932438,"x":7669,"y":2859,"name":"Ooty","address":"Ooty, Tamil Nadu, India","enable": true}];
        
        this.plotDestinations(svgElem,lineData);
        this.markDestinations(svgElem,lineData,viewBoxAttributes); 
    }
    
    plotMapOfMaharashtra(svgElem,lineData){
        this.plotStateMap(svgElem,lineData); 
    }
    
    plotMapOfGoa(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    plotMapOfKarnataka(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    plotMapOfTelangana(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    plotMapOfAndhra(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    plotMapOfTamilnadu(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    plotMapOfKerala(svgElem,lineData){
        this.plotStateMap(svgElem,lineData);   
    }
    
    
    plotStateMap(svgElem,lineData){
        var lineFunction = d3.line().x(function(d) { return d.x; })
                                    .y(function(d) { return d.y; })
                                    .curve(d3.curveLinear);
  
        svgElem.append("path")
                    .attr("d", lineFunction(lineData))
                    .attr("stroke", "white")
                    .attr("stroke-width", 2)
                    .attr("vector-effect", "non-scaling-stroke")// prevent scaling of stroke width
                    .attr("fill", "none");   
    }
    
    
    plotDestinations(svgElem,lineData){
        var lineFunction = d3.line().x(function(d) { return d.x; })
                                .y(function(d) { return d.y; }).curve(d3.curveLinear);
  
        svgElem.append("path")
                    .attr("d", lineFunction(lineData))
                    .attr("stroke", "#ffd700")
                    .attr("stroke-width", 3)
                    .attr("vector-effect", "non-scaling-stroke")// prevent scaling of stroke width
                    .attr("fill", "none"); 
    }
    
    markDestinations(svgElem,lineData,viewBoxAttributes){
        const svgAttributes = this.getSVGAttributes();
        const scale = svgAttributes.width/viewBoxAttributes.maxDxDy;
        let filterDestinations = (arr) =>{
            return arr.filter(destination => {
                //this.getXY(svgElem,destination.x,destination.y);
                return destination.enable;
            });
        }       
             
             
        let rectHeight = 50;
        let rectWidth = 100;
        let normalizedRectHeight = rectHeight*(1/scale);
        let normalizedRectWidth = rectWidth*(1/scale);
        
        var dragRect =  d3.drag()
                        .on('drag', function () {
                            let evt = currentEvent;
                            if(evt){
                                let x = evt.x;
                                let y = evt.y
                                d3.select(this).select("rect").attr("x", x).attr("y",y);  
                                d3.select(this).select("text").attr("x", x).attr("y",y); 
                                d3.select(this).select("text").select("tspan").attr("x",x);                               
                            }
                        });
                
        let infoGroup = svgElem.selectAll('InfoG').data(filterDestinations(lineData)).enter().append("g").call(dragRect);        
        
        let rectsMod = infoGroup.append("rect")
                            .attr("x", function(d,i) { if(i%2===0){return d.x;}else{return d.x - normalizedRectWidth}; })
                            .attr("y", function(d,i) { if(i%2===0){return d.y;}else{return d.y - normalizedRectHeight}; })
                            .attr("rx", function(d,i) { return 5*(1/scale); })
                            .attr("ry", function(d,i) { return 5*(1/scale); })
                            .attr("width", normalizedRectWidth)
                            .attr("height", normalizedRectHeight)
                            .style("fill", function (d) { return "#b8e4c9"; });                            
         
        
        //Add SVG Text Element Attributes
        var texts = infoGroup.append("text")
                .attr("x", function(d,i) { if(i%2===0){return d.x;}else{return d.x - normalizedRectWidth}; })
                .attr("y", function(d,i) { if(i%2===0){return d.y;}else{return d.y - normalizedRectHeight}; })
                .text( function (d) { 
                    return d.name; 
                })
                .attr("dx", function (d,i) { return 15*(1/scale);})
                .attr("dy", function (d,i) { return 15*(1/scale);})
                .attr("font-size", 12*(1/scale))
                .attr("fill", "black");
                
            texts.append('tspan').text( function (d) { return "tspan"; })
                                 .attr("x", function(d,i) { if(i%2===0){return d.x;}else{return d.x - normalizedRectWidth}; })
                                 //.attr("y", function(d,i) { if(i%2===0){return d.y;}else{return d.y - normalizedRectHeight}; })
                                 .attr("dx", function (d,i) { return 15*(1/scale);})
                                 .attr("dy", function (d,i) { return 15*(1/scale);})
                            
                            
        //Add circles to the svgContainer
        var circles = svgElem.selectAll("circle")
                            .data(filterDestinations(lineData))
                            .enter()
                            .append("g");
 
        //Outer Circle
        circles.append("circle").attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 12*(1/scale); })
                       .style("fill", function (d) { return "white"; });
        
        circles.append("circle").attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10*(1/scale); })
                       .style("fill", function (d) { return "#20c1bd"; });
                       
        //Add radial Lines
        let siteEateryLocations = [];
        let angle = Math.PI/6; // PI radian == 180 degree
        let scaledRadius = 150*(1/scale);
        lineData.forEach((destination,index) => {
            if(destination.enable){
                if(angle === 2*Math.PI){
                    angle = Math.PI/6;
                }
                var siteX = destination.x + ((scaledRadius) * Math.sin(angle));                
                var siteY = destination.y + ((scaledRadius) * Math.cos(angle));
                siteEateryLocations.push({
                    centerX: destination.x,
                    centerY: destination.y,
                    x: siteX,
                    y: siteY,
                    site: true,
                    eatery: false,
                    sights: destination.sights
                });
                angle = angle + Math.PI/6;
                var eateryX = destination.x + ((scaledRadius) * Math.sin(angle));                
                var eateryY = destination.y + ((scaledRadius) * Math.cos(angle));
                siteEateryLocations.push({
                    centerX: destination.x,
                    centerY: destination.y,
                    x: eateryX,
                    y: eateryY,
                    site: false,
                    eatery: true,
                    eateries: destination.eateries
                });
            }
        });
        
        var lineFunction = d3.line().x(function(d) { return d.x; })
                                .y(function(d) { return d.y; }).curve(d3.curveLinear);
        
        siteEateryLocations.forEach((loc,index) => {
                            
                let tempSiteLineData =   {
                                        x1: loc.centerX,
                                        y1: loc.centerY,
                                        x2: loc.x,
                                        y2: loc.y,
                                        site: loc.site,
                                        eatery: loc.eatery,
                                        sights: loc.sights,
                                        eateries: loc.eateries
                                    } 
                
                let siteList;
                
                if(loc.sights && (loc.sights.length > 0)){
                    siteList = loc.sights.map(sight =>{ 
                                   var currentSite = {
                                       name: sight,
                                       x: tempSiteLineData.x2,
                                       y: tempSiteLineData.y2
                                   };
                                   return currentSite;
                                });
                }
                
                let eateryList;
                
                if(loc.eateries && (loc.eateries.length > 0)){
                    eateryList = loc.eateries.map(eatery =>{ 
                                   var currentEatery = {
                                       name: eatery,
                                       x: tempSiteLineData.x2,
                                       y: tempSiteLineData.y2
                                   };
                                   return currentEatery;
                                });
                }
                

                var sitePathLine = svgElem.append("line")
                                            .attr("x1", tempSiteLineData.x1)
                                            .attr("y1", tempSiteLineData.y1)
                                            .attr("x2", tempSiteLineData.x2)
                                            .attr("y2", tempSiteLineData.y2)
                                            .attr("stroke", "#20c1bd")
                                            .attr("stroke-width", 2)
                                            .attr("vector-effect", "non-scaling-stroke")// prevent scaling of stroke width
                                            .attr("fill", "none");//.call(dragSitePath);
                                 
                let siteTextGrp;
                if(siteList){
                    siteTextGrp = svgElem.selectAll("siteText")
                        .data(siteList)
                        .enter().append("g");
                    
                    siteTextGrp.append("text")
                        .attr("x", function (d) { return d.x; })
                        .attr("y", function (d) { return d.y; })
                        .text(function(d){return d.name})
                        .attr("font-size", 12*(1/scale))
                        .attr("fill", "black")
                        //.attr("dx", function (d,i) { return (i+1)*15*(1/scale);})
                        .attr("dy", function (d,i) { return (i+1)*15*(1/scale);});
                }
                
                let eateryTextGrp;
                if(eateryList){
                    eateryTextGrp = svgElem.selectAll("eateryText")
                        .data(eateryList)
                        .enter().append("g");
                    
                    eateryTextGrp.append("text")
                        .attr("x", function (d) { return d.x; })
                        .attr("y", function (d) { return d.y; })
                        .text(function(d){return d.name})
                        .attr("font-size", 12*(1/scale))
                        .attr("fill", "black")
                        .attr("dx", function (d,i) { return 15*(1/scale);})
                        .attr("dy", function (d,i) { return (i+1)*15*(1/scale);});
                }             
                
                
                
                
                let siteCircleGrp = svgElem.selectAll("siteCircle")
                    .data([tempSiteLineData])
                    .enter().append("g");
                
                var dragSiteCircle =  d3.drag()
                            .on('drag', function (d,i) {
                                let evt = currentEvent;
                                let r = 30*(1/scale);
                                //var rad = Math.atan2(currentEvent.y, currentEvent.x);
                                if(evt){
                                    let cx = evt.x;
                                    let cy = evt.y
                                    d3.select(this).attr("cx", cx).attr("cy",cy);
                                                    
                                    sitePathLine.attr("x2",cx).attr("y2",cy);
                                
                                if(siteTextGrp){
                                    siteTextGrp.select("text").attr("x",cx).attr("y",cy);
                                }                                
                                
                                if(eateryTextGrp){
                                    eateryTextGrp.select("text").attr("x",cx).attr("y",cy);
                                }                                 
                                
                                }
                            }); 
                
                
                siteCircleGrp.append("circle")
                    .attr("cx", function (d) { 
                        return d.x2; 
                    })
                    .attr("cy", function (d) { 
                        return d.y2; 
                    })
                    .attr("r", function (d) { return 30*(1/scale); })
                    .style("fill", function (d) { return "92e6e6"; }).call(dragSiteCircle);
                
                
                
                
  
        });            
                
    }
    
    
    addSightsAndEateries(svgElem,lineData){
         
    }
    
    addSights(svgElem,lineData){
         
    }
    
    addEateries(svgElem,lineData){
        
    }
    
    createDestinationInfo(destination,index){
        let lat = this.normalizeLatLng(destination.geometry.location.lat());
        let lng = this.normalizeLatLng(destination.geometry.location.lng());
        return {
            id: this.getDestinationId(lat,lng),
            name: destination.name,
            lat: destination.geometry.location.lat(),
            lng: destination.geometry.location.lng(),            
            x: this.getNormCordinates(lng),
            y: 4000 - this.getNormCordinates(lat),
            address: destination.formatted_address,
            enable: true,
            index
        };
    }
    
    normalizeLatLng(x) {
        return Number.parseFloat(x).toFixed(2);
    }
    
    getNormCordinates(coordinate){
        return 100*coordinate;
    }
    
    getDestinationId(lat,lng){
        return lat+"_"+lng;
    }
    
    componentDidMount(){        
        this.onPlotTravel();
    }
    
    clearSVGContent(){
        let svgNode = this.node;
        var svg = d3.select(svgNode);
        svg.selectAll("*").remove();
    }
    

    getSVGAttributes() {
        return {
            width: 1000,
            height: 1000
        };        
    }
    
    getViewBoxAttributes(destinations,paramMinX = 10000,paramMaxX = 6000,paramMinY = 4000, paramMaxY = 0) {
        let maxX = paramMaxX, minX = paramMinX, maxY = paramMaxY, minY = paramMinY;
        //let maxX = 6000, minX = 10000, maxY = 0, minY = 4000;
        const svgAttributes = this.getSVGAttributes();        
        
        destinations.forEach((destination) => {
            if(destination.x < minX){
                minX = destination.x;
            }
            
            if(destination.x > maxX){
                maxX = destination.x;
            }
            
            if(destination.y < minY){
                minY = destination.y;
            }
            
            if(destination.y > maxY){
                maxY = destination.y;
            } 
        });
        
        let dx = maxX - minX;
        let dy = maxY - minY;
        let maxDxDy;
        if(dx > dy){
            maxDxDy = dx;
        }else {
            maxDxDy = dy;
        }
        
        const scale = svgAttributes.width/maxDxDy; 
        
        minX = minX - 200/scale;
        minY = minY - 200/scale;
        maxDxDy = maxDxDy + 2*(200/scale);
        
        return {
           minX,
           maxX,
           minY,
           maxY,
           dx,
           dy,
           maxDxDy
        };
    }
    
    getSVGElement(viewBoxAttributes) { 
        let svgNode = this.node;  
        //return d3.select(svgNode).attr("viewBox", ""+ minX +" "+ minY + " " + maxX + " " + maxY ).attr("preserveAspectRatio", "xMidYMid meet");
        return d3.select(svgNode).attr("viewBox", ""+ viewBoxAttributes.minX +" "+ viewBoxAttributes.minY + " " + viewBoxAttributes.maxDxDy + " " + viewBoxAttributes.maxDxDy );
    }
    
    createSVGElement() {
       /* let svgNode = this.node;
        var svg = d3.select(svgNode).attr("transform", "translate(6000,674)scale(0.25)");
        return svg;*/
    }
    
    render() {
        const svgAttributes = this.getSVGAttributes();        
      
        return  (             
                    <svg ref={node => this.node = node}
                        className="plot-my-travel"
                        width={svgAttributes.width}
                        height={svgAttributes.height}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                    </svg> 
                );      
    }    
    
    createPanel(panelData){
        let panel = {
            label: panelData.address,
            content: this.createPanelContent(panelData)
        }
        
        return panel;
    }
    
    createPanelContent(panelData){
        let checkBoxId = "enable-"+panelData.id;
        let eateriesElem,sightsElem, currentDestination;
        this.state.destinations.forEach((destination,index) => {
            if(destination.id === this.state.selectedDestination.id){
                currentDestination = destination;
            }
        });
        
        if(currentDestination && currentDestination.eateries && (currentDestination.eateries.length > 0)){
            eateriesElem =  (
                                <ul className="destination-eatery">
                                  {currentDestination.eateries.map(function(eatery,index){
                                    return <li key={index}>{eatery}</li>;
                                  })}
                                </ul>
                            );
        }
        
        if(currentDestination && currentDestination.sights && (currentDestination.sights.length > 0)){
            sightsElem =  (
                                <ul className="destination-sights">
                                  {currentDestination.sights.map(function(sight,index){
                                    return <li key={index}>{sight}</li>;
                                  })}
                                </ul>
                            );
        }
        
        return (
            <div>
                <input type="checkbox" id={checkBoxId} ref={checkBoxId} defaultChecked={panelData.enable} onChange={(evt) => {this.handleEnableDestination(evt,checkBoxId)}} />
                <label htmlFor="check3">Show Destination</label>
                <input type="text" onChange={this.updateEatery}></input>
                <button onClick={this.addEatery}>Add Eatery</button>
                {eateriesElem}
                <input type="text" onChange={this.updateSight}></input>
                <button onClick={this.addSight}>Add Sight</button>
                {sightsElem}
            </div>
        );
    }
    
    updateEatery(evt){
        this.setState({eatery : evt.target.value})
    }
    
    addEatery(){
        let destinations = this.state.destinations;
        destinations.forEach((destination,index) => {
            if(destination.id === this.state.selectedDestination.id){
                let eateries = destination.eateries;
                if(eateries){
                   eateries.push(this.state.eatery); 
                }else{
                    eateries = [];
                    eateries.push(this.state.eatery);
                    destination.eateries = eateries;
                }
            }
        });
        this.setState({
            destinations: destinations
        }); 
    }
    
    updateSight(evt){
        this.setState({sight : evt.target.value})
    }
    
    addSight(){
        let destinations = this.state.destinations;
        destinations.forEach((destination,index) => {
            if(destination.id === this.state.selectedDestination.id){
                let sights = destination.sights;
                if(sights){
                   sights.push(this.state.sight); 
                }else{
                    sights = [];
                    sights.push(this.state.sight);
                    destination.sights = sights;
                }
            }
        });
        this.setState({
            destinations: destinations
        }); 
    }
    
    selectPanel(selectedPanelIndex){
        console.log('selectedPanelIndex: ' + selectedPanelIndex);
        this.state.destinations.forEach((destination,index) => {
            if(index === selectedPanelIndex){
                this.setState({selectedDestination: {index: selectedPanelIndex,id: destination.id}})
            }
        });
    }
    
    handleEnableDestination(evt,checkBoxId){
        let currentRef = this.refs[checkBoxId];
        let currentDestinationId = checkBoxId.split("-")[1];
        this.state.destinations.forEach((destination) => {
            if(destination.id === currentDestinationId){
                destination.enable = currentRef.checked;
            }            
        });
        this.reAssignIndex();
    }
    
    reAssignIndex(){
       let currentIndex = 0;
       this.state.destinations.forEach((destination) => {
            if(destination.enable){
                destination.index = ++currentIndex;
            }else{
                destination.index = -1;
            }        
        }); 
    }
    
    getAddressInput() {
        let lineData = 
        [{"id":"18.52_73.86","lat":18.5204303,"lng":73.85674369999992,"x":7386,"y":2148,"address":"Pune, Maharashtra, India","enable": true},
         {"id":"11.02_76.96","lat":11.0168445,"lng":76.95583209999995,"x":7695.999999999999,"y":2898,"address":"Coimbatore, Tamil Nadu, India","enable": true},
         {"id":"11.35_76.80","lat":11.3530022,"lng":76.7959095,"x":7680,"y":2865,"address":"Coonoor, Tamil Nadu, India","enable": true},
         {"id":"11.41_76.69","lat":11.4064138,"lng":76.6932438,"x":7669,"y":2859,"address":"Ooty, Tamil Nadu, India","enable": true}];
        const panels = this.getPanels(this.state.destinations);
        //const panels = this.getPanels(lineData);
        let accordion;
        if (this.state.destinations.length > 0) {
            accordion = (
                            <div className="accordion-parent">
                                <Accordion panels={panels} onSelectPanel={this.selectPanel}/>
                            </div>
                        )
        }
        
        return  (
                    <div>
                        <div id="locationField">
                              <input 
                                id="autocomplete" 
                                placeholder="Enter your address"
                                onFocus={this.geolocate}
                                onChange={this.handleInputChange}
                                ref="autoCompletePlaces"
                              />
                        </div>
                        <button onClick={this.onAddDestination}>Add Destination</button>
                        <button onClick={this.clear}>Clear</button>
                        <ul>
                          {this.state.destinations.map(function(destination){
                            return <li key={destination.id}>{destination.address}</li>;
                          })}
                        </ul>
                        <button onClick={this.onPlotTravel}>Plot My Travel</button>
                        {accordion}
                    </div>
                );      
    }    
    
    getPanels(destinations){
        const panels = [];
        destinations.forEach((destination) => {
            panels.push(this.createPanel(destination));
        });
        
        return panels;
    }
 
}


export default PlotMyTravel;