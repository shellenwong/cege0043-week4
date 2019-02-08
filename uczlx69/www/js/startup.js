var userMarker;
var userCircle;
var userPolygon;

function trackAndCircle(){
	if (navigator.geolocation){
		navigator.geolocation.watchPosition(showposition);
		} else{
			document.getElementById('showLocation').innerHTML='Geolocation is not supported by this browser';}}

function showposition(position){
	if (userMarker){mymap.removeLayer(userMarker);}
	userMarker=L.marker([position.coords.latitude,position.coords.longitude],{icon:testMarkerRed}).addTo(mymap).bindPopup('<b>I am here!</b>'+
	[position.coords.latitude,position.coords.longitude]);
	userCircle=L.circle([position.coords.latitude,position.coords.longitude],500,{
	   color:'red',
	   fillColor:'#f03',
	   fillOpacity:0.3
	   }).addTo(mymap).bindPopup('I am a circle.');
	userPolygon=L.polygon([[position.coords.latitude,position.coords.longitude],[position.coords.latitude+1.0,position.coords.longitude+1.0],[position.coords.latitude-1.0,position.coords.longitude-1.0]],
	{color:'red',fillColor:"#f03",fillOpacity:0.1}).addTo(mymap).bindPopup('I am a polygon');
  }
	
	   var testMarkerRed=L.AwesomeMarkers.icon({
	   icon:'play',
	   markerColor:'red'});
	   
	   
	   
	   
	   
function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		trackAndCircle();
	},false);
}	   