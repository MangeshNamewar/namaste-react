import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restau Container
 *   - Restaurant Card
 *      - Img
 *      - Name of Res, Star rating, cuisine, delivery time etc
 * Footer
 *  - Coyright
 *  - Link
 *  - Addres
 *  - Contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/53703663-f2ea-4e81-8b89-44965b073800/logo-search-grid-1x?logoTemplateVersion=1&v=637781767853000000" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const styleCard = {
    backgroundColor: "#FOFOF"
}

// const RestauCard = ({restauName, cuisine}) // destructuring on fly 
const RestaurantCard = (props) => {
    const { restauData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = restauData?.data; //  '?' indicates optional chaining
    console.log(props);
    return (
        <div className="restau-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="restau-logo" 
                alt="restau-logo" 
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
                    cloudinaryImageId
                } 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>₹{costForTwo / 100} FOR TWO</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}
const restauList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5107",
            "name": "Blue Nile",
            "uuid": "993c071c-422e-44b3-ba73-0ab949457996",
            "city": "6",
            "area": "Camp Area",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "usj6ahnbc4lvrmxlzuee",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 70000,
            "costForTwoString": "₹700 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "blue-nile-camp",
                "city": "pune"
            },
            "cityState": "6",
            "address": "4, Bund Garden Road, Opposite Poona Club, Camp Area, Pune",
            "locality": "Bund Garden Road",
            "parentId": 145,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6330867~p=1~eid=00000187-5f2f-8ecc-1736-cca400d20108",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "5107",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "64313",
            "name": "Bedekar Misal",
            "uuid": "76e91fa0-4762-4781-b7b0-6eba02470db8",
            "city": "6",
            "area": "Shaniwar Peth",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "s7iaru1tltotpdqnk8fa",
            "cuisines": [
                "Maharashtrian"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "bedekar-misal-budhwar-peth-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Munjabacha Bol, Near Patrya Maruti Temple, Narayan Peth, Pune",
            "locality": "Budhwar Peth",
            "parentId": 42915,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "64313",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "491702",
            "name": "NAADBRAMHA IDLI",
            "uuid": "cb7035f8-ee39-4707-8e8a-1ac65c32af1d",
            "city": "6",
            "area": "Swargate",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "ydrbvdsobyfzyapbkdmj",
            "cuisines": [
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
                "restaurant": "naadbramha-idli-swargate-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop No.3 ,Ground floor H.No.184 A/MP 2, Shivaji road,Kasba peth,pune-411011",
            "locality": "Rasta Peth",
            "parentId": 251339,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "491702",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "lastMileTravel": 0.30000001192092896,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 50,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "594722",
            "name": "Chaayos Chai+Snacks=Relax",
            "uuid": "b7a5a8e6-3b6a-462d-9965-6f4d7d8fac20",
            "city": "6",
            "area": "Camp Area",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "0a6f66d75eb042123e34d89bef7189ce",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 2.700000047683716,
            "slugs": {
                "restaurant": "chaayos-chaisnacksrelax-mg-road-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop No1, Sterling Center 11, Moledina Road, MG Road, Pune Cantonment, Pune 411001, Pune Cantonment Board, Pune, Maharashtra - 411001",
            "locality": "MG Road",
            "parentId": 281782,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6435263~p=13~eid=00000187-5f2f-8ecc-1736-cca800d20d77",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "594722",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 2.700000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "678891",
            "name": "Upwas Uphargruha",
            "uuid": "48671b03-a60f-409b-8865-92e8510eefbf",
            "city": "6",
            "area": "Swargate",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "94d6ea27c9bcf6dcf564330c31cf3b1a",
            "cuisines": [
                "Indian",
                "Street Food",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "slaString": "34 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
                "restaurant": "upwas-uphargruha-swargate-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop No 1, Jayda Apartments,  Besides Indorkar Jwellers, 448,  Hasabnis Bakhal,Shanivar Peth,  Pune 411030, Kasba Vishrambag,  Pune, , Maharashtra, 411030",
            "locality": "Jayda Apartments",
            "parentId": 239073,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "678891",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "lastMileTravel": 0.4000000059604645,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 20,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "18808",
            "name": "Faasos - Wraps & Rolls",
            "uuid": "e4e6312a-96fd-4e7c-b924-e109cf7df89a",
            "city": "6",
            "area": "Shaniwar Peth",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "tgyneuoixge7zhinzrhg",
            "cuisines": [
                "Fast Food",
                "North Indian",
                "Street Food",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
                "restaurant": "fassos-subhamangal-housing-society-shivaji-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "S.no 457 shaniwar peth ,Pune 411030",
            "locality": "Shaniwar Peth FC",
            "parentId": 21809,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "18808",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 0.4000000059604645,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "147865",
            "name": "Aamhi Pohekar",
            "uuid": "6823a98d-af0b-4a5d-af39-73b2abbe1dce",
            "city": "6",
            "area": "Shaniwar Peth",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
            "cuisines": [
                "North Indian",
                "Maharashtrian",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
                "restaurant": "aamhi-pohekar-narayan-peth-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop no.2,Near Patrya Maruti Mandir,Narayan Peth,Pune, Pune PMC,411030",
            "locality": "Narayan Peth",
            "parentId": 25785,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "147865",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.100000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "97272",
            "name": "Ramsar Bakery",
            "uuid": "cfe42fd8-bd52-45b2-8109-a713b7be6bcb",
            "city": "6",
            "area": "Shivaji Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "rmf8gsxyxtgejfj73dxe",
            "cuisines": [
                "Bakery",
                "Snacks",
                "Desserts",
                "Fast Food",
                "Beverages",
                "Indian",
                "Street Food"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "slaString": "19 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
                "restaurant": "ramsar-bakery-shivaji-nagar-shivaji-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Opposite PMC Building, Shivaji Nagar, Pune",
            "locality": "Congress House Road",
            "parentId": 166716,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "97272",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 0.699999988079071,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "350705",
            "name": "Krushna Pure Veg",
            "uuid": "a741fabc-0d0e-4a12-a5fd-4a027ec2f399",
            "city": "6",
            "area": "Wanowrie",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "ohrooroghiooqsfytjri",
            "cuisines": [
                "South Indian",
                "Indian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 46,
            "minDeliveryTime": 46,
            "maxDeliveryTime": 46,
            "slaString": "46 MINS",
            "lastMileTravel": 7.900000095367432,
            "slugs": {
                "restaurant": "krushna-pure-veg-wanowrie-wanowrie",
                "city": "pune"
            },
            "cityState": "6",
            "address": "sr no 6/9, shivarkar road, opp mahatma phule sanskrutik bhavan, wanvadi, pune",
            "locality": "Shivarkar Road",
            "parentId": 121215,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6500,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6500,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6500",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6319800~p=10~eid=00000187-5f2f-8ecc-1736-cca700d20a23",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "350705",
                "deliveryTime": 46,
                "minDeliveryTime": 46,
                "maxDeliveryTime": 46,
                "lastMileTravel": 7.900000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "409927",
            "name": "Hindavi Swarajya Special Tupatil Sabudane Wade",
            "uuid": "a53c0c77-c2d3-43ca-ab82-73b18c55740c",
            "city": "6",
            "area": "Shivajinagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "uqmhdd4bvsjwtytuhmwa",
            "cuisines": [
                "Snacks",
                "Maharashtrian",
                "Fast Food"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "slaString": "19 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "hindavi-swarajya-–-special-tupatil-sabudane-wade-shivaji-nagar-shivaji-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Junglee Maharaj Road, Opposite Jungli Maharaj Mandir, JM Road, Pune",
            "locality": "JM Road",
            "parentId": 246850,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "409927",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "62934",
            "name": "LunchBox - Meals and Thalis",
            "uuid": "adc8ae31-eff6-406f-b5ab-541eb74f4e3d",
            "city": "6",
            "area": "Narayan Peth",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Biryani",
                "Healthy Food",
                "Jain",
                "Thalis",
                "Indian",
                "Mughlai",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
                "restaurant": "lunchbox-shaniwar-peth-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "S.no 457 shaniwar peth ,Pune 411030",
            "locality": "Shaniwar Peth",
            "parentId": 4925,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT125 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "62934",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 0.4000000059604645,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "43274",
            "name": "Panchali Restaurant",
            "uuid": "5e0d6248-9ecb-4138-af9f-43c02d6d23c7",
            "city": "6",
            "area": "Shivajinagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ul9xzko9eliviajj2wft",
            "cuisines": [
                "North Indian"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "panchali-restaurant-jm-road-shivaji-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Om Chambers, Opposite Jangali Maharaj Temple, JM Road, Pune",
            "locality": "JM Road",
            "parentId": 154209,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "43274",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "56514",
            "name": "Neha's Yummy Cafe",
            "uuid": "d905f4aa-83fc-420b-bbf2-76bdb86b6420",
            "city": "6",
            "area": "Shaniwar Peth",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "ciycaw241uwy7xbvdxzi",
            "cuisines": [
                "Fast Food"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
                "restaurant": "nehas-yummy-cafe-shaniwar-peth-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Opposite Shaniwar Wada, Shaniwar Peth, Pune",
            "locality": "Bajirav Road",
            "parentId": 145470,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "56514",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 0.20000000298023224,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.7",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "6148",
            "name": "Yolkshire",
            "uuid": "d935d137-449f-4e9f-b8dc-c442aaa89992",
            "city": "6",
            "area": "Kothrud",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "w7ayqn1glwepodxbga4k",
            "cuisines": [
                "Healthy Food",
                "Italian",
                "Salads",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 4.699999809265137,
            "slugs": {
                "restaurant": "yolk-shire-karishma-society-kothrud",
                "city": "pune"
            },
            "cityState": "6",
            "address": "20, Karishma Society, Off Karve Road, Kothrud, Pune",
            "locality": "Late GA Kulkarni Path",
            "parentId": 1202,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6321712~p=16~eid=00000187-5f2f-8ecc-1736-cca900d21045",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "6148",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "lastMileTravel": 4.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "70614",
            "name": "Wadeshwar (Bajirao road)",
            "uuid": "bf7a0b7b-9a10-4d13-ac15-bdcb79fd8f35",
            "city": "6",
            "area": "Sadashiv Peth",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "pgpzbjwj4chlpcvafm2l",
            "cuisines": [
                "South Indian",
                "Snacks",
                "Street Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "shree-wadeshwar-bhuvan-shukrawar-peth-swargate",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Near Telephone Exchange, Bajirao Road, Natubaug Chouk, Shukrawar Peth, Pune",
            "locality": "Bajirao Road",
            "parentId": 1770,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "70614",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    }
];

// not using keys (not acceptable) ---- index as key --- unique id (best practice)
const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="restau-container">
                {
                    restauList.map(restaurant => (
                        <RestaurantCard key={restaurant.data.id} restauData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);