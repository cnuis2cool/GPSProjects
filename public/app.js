// We’ll add a OSM tile layer to our map
var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib
    });


// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([25.92, 79.84], 5).addLayer(osm);

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

//US Public Saftey
var obj = [
["Place:Dupage  <br> Project: States Attorney Office export,Nowaris MugShot import",41.868235,-88.068124],
["Place:Wayne  <br> Project: NYNIBRS",40.9253720,-74.276544],
["Place:Colarado  <br> Project: CONIBRS",39.5500510,-105.7820670],
["Place:Bell County  <br> Project: Texas UCR",31.1344110,-97.5247240],
["Place:Louisville  <br> Project: eMissingPerson, eCitation, eCrash, PersonnelImport",38.2526650,-85.7584560],
["Place:Virginia  <br> Project: VIBRS",37.4315730,-78.6568940],
["Place:Huntsville  <br> Project: HSVNIBRS",34.7303690,-86.5861040],
["Place:ElkGrove  <br> Project: Informer_upgrade",38.4087990,-121.3716180],
["Place:Flagstaff  <br> Project:Imageware MugShot import,LiveScan import",35.1982840,-111.6513020],
["Place:Aurora <br> Project:1Mage Export,Active Directory Import ",41.7605850,-88.3200720],
["Place:Des Moines  <br> Project: Informer_upgrade",41.6005450,-93.609106],
["Place:Suffolk <br> Project: Informer_upgrade",36.7282050,-76.5835620],
["Place:Madison  <br> Project: Informer_upgrade",43.0730520,-89.4012300],
["Place:Tucson  <br> Project: Web Incident",32.2217430,-110.9264790],
["Place:Arlington  <br> Project: Informer_upgrade",32.7356870,-97.1080660],
["Place: Mountain View  <br> Project: Coplogic DORS Import,Evidence Import,File On Q import",37.3860520,-122.0838510],
["Place:Fairfax  <br> Project: Brazos,Civil Import,Nowaris MugShot import",38.8462240,-77.3063730],
["Place:Jefferson  <br> Project: Informer_upgrade",39.5800300,-105.2662930],
["Place:Baltimore  <br> Project: Comstat Export,ACRS ETIX Import,Personnel export,RWOC export,Juvenile Export,LIMS import,Warrant export",39.2903850,-76.6121890],
["Place:Salt Lake city  <br> Project: Bair export",40.7607790,-111.8910470],
["Place:San Antonio  <br> Project: Column export,",29.4241220,-98.493628],
["Place:Calgary,Canada  <br> Project: EUCW",51.0486150,-114.0708460],
["Place:Toranto  <br> Project: TPS",43.6532260,-79.383184],
["Place:Swindon,UK  <br> Project:FiReControl, NWP, RAC,EUCW",51.5557740,-1.7797180],
["Place:Vienna,Austria  <br> Project: EUCW,CADP,IPR",47.5162310,14.5500720],
["Place:Munich,Germany  <br> Project: EUCW",51.1656910,10.4515260],
["Place:Bucharest,Romania  <br> Project: Border Guard",44.426767,26.1025380],
["Place:Belgium  <br> Project: ASTRID",50.5038870,4.4699360],
["Place:Denmark  <br> Project: Danish Ambulance",56.2639200,9.5017850],
["Place:France  <br> Project: Mobile Antares",46.2276380,2.2137490],
["Place:Mecca  <br> Project: MOI",21.3890820,39.857912],
["Place:Madhya Pradesh <br> Project: MP dial 100 ",22.973423,78.656894],
["Place:Uttar Pradesh  <br> Project:UP 100",26.8467090,80.9461590],
["Place:Rajasthan  <br> Project: Rajasthan Police",27.0238040,74.2179330],
["Place:Melbourne <br> Project: RACV, ESTA, SACAD, SAPN ,ACC",-37.81360,144.96310],
["Place:Christchurch  <br> Project: NZ PS & FS",-43.53210,172.63620],
["Place:Wellington  <br> Project: NZ PS & FS",-41.28650,174.77620],
["Place:Qingdao  <br> Project: Joint Solution",36.06710,120.38260],
["Place:Tasmania  <br> Project: TAS Networks",-41.640079,146.315918],
["Place:Manila,Philippines  <br> Project:PureForce",14.5995,120.9842],
["Place:Switzerland  <br> Project:Convergence (IOT), EUCW",46.8182,8.2275],
["Place:Malayasia <br> Project:EUCW",4.2105,101.9758],
["Place:Jakarta,Indonesia  <br> Project:BNPB (JS)",-6.175372,106.8650],
["Place:Cochabamba  <br> Project:Joint Solution",-17.413977, -66.1653],
["Place:Barcelona,Spain  <br> Project:EUCW",41.3851,2.1734]
];

//var markerClusters = L.markerClusterGroup();
var i;
for(i=0; i<obj.length; i++)
{
var m = new  L.marker([obj[i][1],obj[i][2]], {icon: greenIcon}).bindPopup(obj[i][0]).addTo(map);
  //markerClusters.addLayer( m );
}
