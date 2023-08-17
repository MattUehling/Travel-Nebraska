
let noPerfectMatch;
function reset()
{
    userAtts=[];
    if(noPerfectMatch = true)
    {
        document.getElementById("backup").innerHTML = "";
        document.getElementById("backup2").innerHTML = "";
    }
    (returned.length===1)?
    (document.getElementById("one").innerHTML = '')
:(returned.length=== 2)? 
    (document.getElementById("one").innerHTML ="", 
    document.getElementById("two").innerHTML ="")
:(returned.length=== 3)? 
    (document.getElementById("one").innerHTML = "", 
    document.getElementById("two").innerHTML = "", 
    document.getElementById("three").innerHTML = "")
:(returned.length=== 4)? 
    (document.getElementById("one").innerHTML = "", 
    document.getElementById("two").innerHTML = "", 
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "")
:(returned.length=== 5)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "", 
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "",
    document.getElementById("five").innerHTML = "")
:(returned.length=== 6)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "")
:(returned.length=== 6)? 
    (document.getElementById("one").innerHTML ="",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML ="",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "")
:(returned.length=== 7)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML ="",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "")
:(returned.length=== 8)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML ="",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML ="",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "",
    document.getElementById("nine").innerHTML = "")
:(returned.length=== 9)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML ="",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML ="",
    document.getElementById("nine").innerHTML = "",
    document.getElementById("ten").innerHTML ="")
:(returned.length=== 10)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML ="",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML ="",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "",
    document.getElementById("nine").innerHTML ="",
    document.getElementById("ten").innerHTML = "",
    document.getElementById("eleven").innerHTML = "")
:(returned.length=== 11)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML ="", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "",
    document.getElementById("nine").innerHTML = "",
    document.getElementById("ten").innerHTML = "",
    document.getElementById("eleven").innerHTML = "",
    document.getElementById("twelve").innerHTML = "")
:(returned.length=== 12)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML ="",
    document.getElementById("nine").innerHTML = "",
    document.getElementById("ten").innerHTML = "",
    document.getElementById("eleven").innerHTML = "",
    document.getElementById("twelve").innerHTML = "",
    document.getElementById("thirteen").innerHTML ="")
:(returned.length=== 13)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "",
    document.getElementById("ten").innerHTML = "",
    document.getElementById("eleven").innerHTML = "",
    document.getElementById("twelve").innerHTML = "",
    document.getElementById("thirteen").innerHTML = "")
:(returned.length=== 14)? 
    (document.getElementById("one").innerHTML = "",
    document.getElementById("two").innerHTML = "",
    document.getElementById("three").innerHTML = "",
    document.getElementById("four").innerHTML = "", 
    document.getElementById("five").innerHTML = "",
    document.getElementById("six").innerHTML = "",
    document.getElementById("seven").innerHTML = "",
    document.getElementById("eight").innerHTML = "",
    document.getElementById("nine").innerHTML = "",
    document.getElementById("ten").innerHTML = "",
    document.getElementById("eleven").innerHTML = "",
    document.getElementById("twelve").innerHTML = "",
    document.getElementById("thirteen").innerHTML ="",
    document.getElementById("fourteen").innerHTML = "")

:document.getElementById("one").innerHTML ="sorry we found nothing" 



}
let userAtts =[];
function myFunction() {
    if (userAtts.length >0)
    {
    reset();
    }
    userAtts[0] = document.getElementById("city").value;
    // document.getElementById("demo0").innerHTML = userAtts[0];
    userAtts[1] = document.getElementById("location").value;
    // document.getElementById("demo1").innerHTML = userAtts[1];
    userAtts[2] = document.getElementById("priceRange").value;
    // document.getElementById("demo2").innerHTML = userAtts[2];
    userAtts[3] = document.getElementById("handicap").value;
    // document.getElementById("demo3").innerHTML = userAtts[3];
    userAtts[4] = document.getElementById("transportation").value;
    // document.getElementById("demo4").innerHTML = userAtts[4];
    userAtts[5] = document.getElementById("physcialActivity").value;
    // document.getElementById("demo5").innerHTML = userAtts[5];
    userAtts[6] = document.getElementById("rating").value;
    // document.getElementById("demo6").innerHTML = userAtts[6];
    userAtts[7] = document.getElementById("programmers").value;
    // document.getElementById("demo7").innerHTML = userAtts[7];
    // document.getElementById("Fill").innerHTML =
    returned = perfectMatch(userAtts);
    console.log("here are the returned to the returned matches");
    console.log(returned);
    for(let i = 0; i<returned.length; i++)
    {
        console.log(returned[i]['name']);
        // document.getElementById(i).innerHTML = returned[i]['name'];
    }
    if(noPerfectMatch === true)
    {
        document.getElementById("backup").innerHTML = "Sorry we couldn't find a perfect match,"
        document.getElementById("backup2").innerHTML = "but here are the next best locations:"
    }

    (returned.length===1)?
        (document.getElementById("one").innerHTML = returned[0]['name'])
    :(returned.length=== 2)? 
        (document.getElementById("one").innerHTML = returned[0]['name'], 
        document.getElementById("two").innerHTML = returned[1]['name'])
    :(returned.length=== 3)? 
        (document.getElementById("one").innerHTML = returned[0]['name'], 
        document.getElementById("two").innerHTML = returned[1]['name'], 
        document.getElementById("three").innerHTML = returned[2]['name'])
    :(returned.length=== 4)? 
        (document.getElementById("one").innerHTML = returned[0]['name'], 
        document.getElementById("two").innerHTML = returned[1]['name'], 
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'])
    :(returned.length=== 5)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'], 
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'],
        document.getElementById("five").innerHTML = returned[4]['name'])
    :(returned.length=== 6)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'])
    :(returned.length=== 7)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'])
    :(returned.length=== 8)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'])
    :(returned.length=== 9)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'])
    :(returned.length=== 10)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'],
        document.getElementById("ten").innerHTML = returned[9]['name'])
    :(returned.length=== 11)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'],
        document.getElementById("ten").innerHTML = returned[9]['name'],
        document.getElementById("eleven").innerHTML = returned[10]['name'])
    :(returned.length=== 12)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'],
        document.getElementById("ten").innerHTML = returned[9]['name'],
        document.getElementById("eleven").innerHTML = returned[10]['name'],
        document.getElementById("twelve").innerHTML = returned[11]['name'])
    :(returned.length=== 13)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'],
        document.getElementById("ten").innerHTML = returned[9]['name'],
        document.getElementById("eleven").innerHTML = returned[10]['name'],
        document.getElementById("twelve").innerHTML = returned[11]['name'],
        document.getElementById("thirteen").innerHTML = returned[12]['name'])
    :(returned.length=== 14)? 
        (document.getElementById("one").innerHTML = returned[0]['name'],
        document.getElementById("two").innerHTML = returned[1]['name'],
        document.getElementById("three").innerHTML = returned[2]['name'],
        document.getElementById("four").innerHTML = returned[3]['name'], 
        document.getElementById("five").innerHTML = returned[4]['name'],
        document.getElementById("six").innerHTML = returned[5]['name'],
        document.getElementById("seven").innerHTML = returned[6]['name'],
        document.getElementById("eight").innerHTML = returned[7]['name'],
        document.getElementById("nine").innerHTML = returned[8]['name'],
        document.getElementById("ten").innerHTML = returned[9]['name'],
        document.getElementById("eleven").innerHTML = returned[10]['name'],
        document.getElementById("twelve").innerHTML = returned[11]['name'],
        document.getElementById("thirteen").innerHTML = returned[12]['name'],
        document.getElementById("fourteen").innerHTML = returned[13]['name'])
    
    :document.getElementById("one").innerHTML ="sorry we found nothing" 
  }

var locations=[
    {
        id:1,
        name:"Henry Doorly Zoo and Aqaurium",
        city:"Omaha",
        inOrOut:"Outside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.5,
        recommendation:"Yes"

    },
    {
        id:2,
        name:"Old Market",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.5,
        recommendation:"No"
    },
    {
        id:3,
        name:"Strategic Air and Space Museum",
        city:"Ashland",
        inOrOut:"Inside",
        price:"10-20",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:4,
        name:"Chimney Rock Historical Site",
        city:"Morrill County",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4,
        recommendation:"Yes"
    },
    {
        id:5,
        name:"Haymarket District",
        city:"Lincoln",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:6,
        name:"Scotts Bluff National Monument",
        city:"Gering",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.8,
        recommendation:"No"
    },
    {
        id:7,
        name:"Golden Spike Tower",
        city:"North Platte",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:8,
        name:"Indian Cave State Park",
        city:"Shubert",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.5,
        recommendation:"Yes"
    },
    {
        id:9,
        name:"Carhenge",
        city:"Alliance",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.6,
        recommendation:"Yes"
    },
    {
        id:10,
        name:"Scenic Driving Tour of the Sandhills",
        city:"Grand Island",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.6,
        recommendation:"Yes"
    },
    {
        id:11,
        name:"Ride the Cowboy Trail",
        city:"Omaha",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.5,
        recommendation:"No"
    },
    {
        id:12,
        name:"Archway",
        city:"Grand Platte",
        inOrOut:"Outside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.6,
        recommendation:"No"
    },
    {
        id:13,
        name:"Sandhill Crane Migration",
        city:"Gibbon",
        inOrOut:"Outside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 5,
        recommendation:"Yes"
    },
    {
        id:14,
        name:"Durham Museum",
        city:"Omaha",
        inOrOut:"Inside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:15,
        name:" Wilderness and Pioneer Courage Park",
        city:"Omaha",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.4,
        recommendation:"Yes"
    },
    {
        id:16,
        name:"Joslyn Art Museum",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:17,
        name:"Performing Arts Center",
        city:"Omaha",
        inOrOut:"Inside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:18,
        name:"Lauritzen Gardens",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.8,
        recommendation:"No"
    },
    {
        id:19,
        name:"Omaha Children's Museum",
        city:"Omaha",
        inOrOut:"Inside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:20,
        name:"Bob Kerrey Pedestrian Bidge",
        city:"Omaha",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:21,
        name:"Saint Cecilia Cathedral",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:22,
        name:"Lewis & Clark Landing",
        city:"Omaha",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.6,
        recommendation:"Yes"
    },
    {
        id:23,
        name:"Trains at Kenefick Park",
        city:"Omaha",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.8,
        recommendation:"Yes"
    },
    {
        id:24,
        name:"Freedom Park Navy Musuem",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.4,
        recommendation:"Yes"
    },
    {
        id:25,
        name:"Lee G. Simmons Conservation Park & Wildlife Safari",
        city:"Omaha",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:26,
        name:"Mormon Trail Center",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.8,
        recommendation:"No"
    },
    {
        id:27,
        name:"Malcolm X House Site",
        city:"Omaha",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 4.5,
        recommendation:"Yes"
    },
    {
        id:28,
        name:"Tour the Capitol",
        city:"Lincoln",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 5,
        recommendation:"Yes"
    },
    {
        id:29,
        name:"UNL State Museum",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:30,
        name:"Memorial Stadium Game",
        city:"Lincoln",
        inOrOut:"Outside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.8,
        recommendation:"Yes"
    },
    {
        id:31,
        name:"Sunken Gardens",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.8,
        recommendation:"No"
    },
    {
        id:32,
        name:"Museum of American Speed",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.8,
        recommendation:"Yes"
    },
    {
        id:33,
        name:"Pioneers Park Nature Center",
        city:"Lincoln",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:34,
        name:"Sheldon Musuem of Art",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.5,
        recommendation:"No"
    },
    {
        id:35,
        name:"Lincolns Children's Zoo",
        city:"Lincoln",
        inOrOut:"Outside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:36,
        name:"Lincolns Children Museum",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"No"
    },
    {
        id:37,
        name:"International Quilt Study Center & Musuem",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.6,
        recommendation:"No"
    },
    {
        id:38,
        name:"Governor's Residence",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 5,
        recommendation:"Yes"
    },
    {
        id:39,
        name:"National Roller Skating Museum",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.3,
        recommendation:"No"
    },
    {
        id:40,
        name:"Lester F. Larsen Tractor Test and Power Museum",
        city:"Lincoln",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.6,
        recommendation:"Yes"
    },
    {
        id:41,
        name:"Court House and Jail Rocks",
        city:"West Camp Clarke",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:42,
        name:"Toadstool Geological Park",
        city:"Harrison",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:43,
        name:"Chadron State Park",
        city:"Chadron",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.7,
        recommendation:"Yes"
    },
    {
        id:44,
        name:"Agate Fossil Beds National Monument",
        city:"Whistle Creek",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.5,
        recommendation:"Yes"
    },
    {
        id:45,
        name:"Snake River Falls",
        city:"Valentine",
        inOrOut:"Outside",
        price: "0-5",
        wheelchair: "No",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4,
        recommendation:"No"
    },
    {
        id:46,
        name:"Fremont Lakes State Recreation Area",
        city:"Fremont",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.4,
        recommendation:"Yes"
    },
    {
        id:47,
        name:"Bryson's Airboat Tours",
        city:"Fremont",
        inOrOut:"Outside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "No",
        ranking: 5,
        recommendation:"Yes"
    },
    {
        id:48,
        name:"Fremont Splash Station",
        city:"Fremont",
        inOrOut:"Outside",
        price: "6-10",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.4,
        recommendation:"Yes"
    },
    {
        id:49,
        name:"Tin Lizzy Tavern",
        city:"Fremont",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.3,
        recommendation:"Yes"
    },
    {
        id:50,
        name:"Louis E. May Museum",
        city:"Fremont",
        inOrOut:"Inside",
        price: "0-5",
        wheelchair: "Yes",
        publicTransportation:  "Yes",
        physicalActivity: "No",
        ranking: 4.3,
        recommendation:"No"
    },
    {
        id:51,
        name:"Ruff House",
        city:"Fremont",
        inOrOut:"Inside",
        price: "20+",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.3,
        recommendation:"No"
    },
    {
        id:52,
        name:"Thirty Bowl",
        city:"Fremont",
        inOrOut:"Inside",
        price: "10-20",
        wheelchair: "Yes",
        publicTransportation:  "No",
        physicalActivity: "Yes",
        ranking: 4.4,
        recommendation:"No"
    }
];
function perfectMatch(userAtt)
{
    var returnLocations = [];
    var backup6 = [];
    var backup5 = [];
    var backup7 = [];
    let id;
    for(let row = 0; row<locations.length; row++)
    {   
        let count = 0;
        id = row;
        // console.log(row);
        if(userAtt[0] === 'Other')
        {
            if(locations[id]['city'] !== 'Omaha'&& locations[id]['city'] !== 'Lincoln'&& locations[id]['city'] !== 'Fremont')
            {
                count++;
            }
        }
        if (locations[id]['city'] === userAtt[0]) 
        {
            count++;  
        }
        if(locations[id]['inOrOut']=== userAtt[1])
        {
            count++;
            
        }
        if(locations[id]['price'] === userAtt[2]|| userAtt[2] ==='Any')
        {
            count++;
        }
        if(userAtt[3]==="No"|| locations[id]['wheelchair']=== userAtt[3])
        {
            count++;
        }
        if(userAtt[4]==="No"|| locations[id]['publicTransportation']=== userAtt[3])
        {
            count++;
        }
        if( locations[id]['physicalActivity']=== userAtt[5])
        {
            count++;
        }
        if(locations[id]['ranking']>=userAtt[6])
        {
            count++;
        }
        if(locations[id]['recommendation']=== userAtt[7]|| userAtt[7]==="No")
        {
            count++;
        }
        console.log(count);
        if(count===8)
        {
            noPerfectMatch = false;
            console.log('huh');
            returnLocations.push(locations[id]);
        }
        if (count === 7)
        {
            backup7.push(locations[id]);
        }
        if (count === 6)
        {
            backup6.push(locations[id]);
        }
        if (count === 5)
        {
            backup5.push(locations[id]);
        }
    }
    if(returnLocations.length === 0 && backup7.length >= 1)
    {  
        noPerfectMatch = true;
        console.log("here are the backups 7: ");
        return backup7;
    }
    else if(returnLocations.length ===0 && backup7.length===0 && backup6.length>=1)
    {
        noPerfectMatch = true;
        console.log("here are the backups 6: ")
        return backup6
    }
    else if(returnLocations.length ===0 && backup7.length===0 && backup6.length===0 && backup5.length>=1)
    {
        noPerfectMatch = true;
        console.log("here are the backups 5: ")
        return backup5
    }
    console.log('here are the perfect matches');
    console.log(returnLocations);
    return returnLocations;


}



