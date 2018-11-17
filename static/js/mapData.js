// An array containing all of the information needed to create country markers
var locations = [
    {
      Coordinates: [42.546245, 1.601554],
      country: {
        name: "Andorra",
        code: "AD",
        market: 100
      }
    },
    {
      Coordinates: [-38.416097, -63.616672],
      country: {           
      name: "Argentina",
      code: "AR",
      market: 100
      }
    },
    {
      Coordinates: [47.516231, 14.550072],
      country: {
      name: "Austria",
      code: "AT",
      market: 100
      }
    },
    {
      Coordinates: [-25.274398, 133.775136],
      country: {                    
      name: "Australia",
      code: "AU",
      market: 100
      }
    },
    {
      Coordinates: [50.503887, 4.469936],
      country: {                    
      name: "Belgium",
      code: "BE",
      market: 100
      }
    },
    {
      Coordinates: [42.733883, 25.48583],
      country: {                    
      name: "Bulgaria",
      code: "BG",
      market: 100
      }
    },
    {
      Coordinates: [-16.290154, -63.588653],
      country: {                    
      name: "Bolivia",
      code: "BO",
      market: 100
      }
    },
    {
      Coordinates: [-14.235004, -51.92528],
      country: {                   
      name: "Brazil",
      code: "BR",
      market: 100
      }
    },
    {
      Coordinates: [56.130366, -106.346771],
      country: {                  
      name: "Canada",
      code: "CA",
      market: 100
      }
    },
    {
      Coordinates: [46.818188, 8.227512],
      country: {                   
      name: "Switzerland",
      code: "CH",
      market: 100
      }
    },
    {
      Coordinates: [-35.675147, -71.542969],
      country: {                    
      name: "Chile",
      code: "CL",
      market: 100
      }
    },
    {
      Coordinates: [4.570868, -74.297333],
      country: {                    
      name: "Colombia",
      code: "CO",
      market: 100
      }
    },
    {
      Coordinates: [9.748917, -83.753428],
      country: {                   
      name: "Costa Rica",
      code: "CR",
      market: 100
      }
    },
    {
      Coordinates: [35.126413, 33.429859],
      country: {                    
      name: "Cyprus",
      code: "CY",
      market: 100
      }
    },
    {
      Coordinates: [49.817492, 15.472962],
      country: {                    
      name: "Czech Republic",
      code: "CZ",
      market: 100
      }
    },
    {
      Coordinates: [51.165691, 10.451526],
      country: {                    
      name: "Germany",
      code: "DE",
      market: 100
      }
    },
    {
      Coordinates: [56.26392, 9.501785],
      country: {                    
      name: "Denmark",
      code: "DK",
      market: 100
      }
    },
    {
      Coordinates: [18.735693, -70.162651],
      country: {                    
      name: "Dominican Republic",
      code: "DO",
      market: 100
      }
    },
    {
      Coordinates: [-1.831239, -78.183406],
      country: {                    
      name: "Ecuador",
      code: "EC",
      market: 100
      }
    },
    {
      Coordinates: [58.595272, 25.013607],
      country: {                    
      name: "Estonia",
      code: "EE",
      market: 100
      }
    },
    {
      Coordinates: [40.463667, -3.74922],
      country: {                  
      name: "Spain",
      code: "ES",
      market: 100
      }
    },
    {
      Coordinates: [61.92411, 25.748151],
      country: {                    
      name: "Finland",
      code: "FI",
      market: 100
      }
    },
    {
      Coordinates: [46.227638, 2.213749],
      country: {                    
      name: "France",
      code: "FR",
      market: 100
      }
    },
    {
      Coordinates: [55.378051, -3.435973],
      country: {                    
      name: "United Kingdom",
      code: "GB",
      market: 100
      }
    },
    {
      Coordinates: [39.074208, 21.824312],
      country: {                    
      name: "Greece",
      code: "GR",
      market: 100
      }
    },
    {
      Coordinates: [15.783471, -90.230759],
      country: {                    
      name: "Guatemala",
      code: "GT",
      market: 100
      }
    },
    {
      Coordinates: [22.396428, 114.109497],
      country: {                    
      name: "Hong Kong",
      code: "HK",
      market: 100
      }
    },
    {
      Coordinates: [15.199999, -86.241905],
      country: {                    
      name: "Honduras",
      code: "HN",
      market: 100
      }
    },
    {
      Coordinates: [47.162494, 19.503304],
      country: {                  
      name: "Hungary",
      code: "HU",
      market: 100
      }
    },
    {
      Coordinates: [-0.789275, 113.921327],
      country: {                    
      name: "Indonesia",
      code: "ID",
      market: 100
      }
    },
    {
      Coordinates: [53.41291, -8.24389],
      country: {                    
      name: "Ireland",
      code: "IE",
      market: 100
      }
    },
    {
      Coordinates: [31.046051, 34.851612],
      country: {                    
      name: "Israel",
      code: "IL",
      market: 100
      }
    },
    {
      Coordinates: [64.963051, -19.020835],
      country: {                    
      name: "Iceland",
      code: "IS",
      market: 100
      }
    },
    {
      Coordinates: [41.87194, 12.56738],
      country: {                    
      name: "Italy",
      code: "IT",
      market: 100
      }
    },
    {
      Coordinates: [36.204824, 138.252924],
      country: {                    
      name: "Japan",
      code: "JP",
      market: 100
      }
    },
    // {
    //   Coordinates: [[47.166, 9.555373]],
    //   country: {                    
    //   name: "Liechtenstein",
    //   code: "LI",
    //   market: 100
    //   }
    // },
    {
      Coordinates: [55.169438, 23.881275],
      country: {                    
      name: "Lithuania",
      code: "LT",
      market: 100
      }
    },
    {
      Coordinates: [49.815273, 6.129583],
      country: {                    
      name: "Luxembourg",
      code: "LU",
      market: 100
    }
    },
    {
      Coordinates: [56.879635, 24.603189],
      country: {                   
      name: "Latvia",
      code: "LV",
      market: 100
      }
    },
    {
      Coordinates: [43.750298, 7.412841],
      country: {                    
      name: "Monaco",
      code: "MC",
      market: 100
    }
    },
    {
      Coordinates: [35.937496, 14.375416],
      country: {                    
      name: "Malta",
      code: "MT",
      market: 100
      }
    },
    {
      Coordinates: [23.634501, -102.552784],
      country: {                    
      name: "Mexico",
      code: "MX",
      market: 100
      }
    },
    {
      Coordinates: [4.210484, 101.975766],
      country: {                    
      name: "Malaysia",
      code: "MY",
      market: 100
      }
    },
    {
      Coordinates: [12.865416, -85.207229],
      country: {                    
      name: "Nicaragua",
      code: "NI",
      market: 100
    }
    },
    {
      Coordinates: [52.132633, 5.291266],
      country: {                    
      name: "Netherlands",
      code: "NL",
      market: 100
      }
    },
    {
      Coordinates: [60.472024, 8.468946],
      country: {                    
      name: "Norway",
      code: "NO",
      market: 100
      }
    },
    {
      Coordinates: [-40.900557, 174.885971],
      country: {                    
      name: "New Zealand",
      code: "NZ",
      market: 100
      }
    },
    {
      Coordinates: [8.537981, -80.782127],
      country: {                    
      name: "Panama",
      code: "PA",
      market: 100
      }
    },
    {
      Coordinates: [-9.189967, -75.015152],
      country: {                    
      name: "Peru",
      code: "PE",
      market: 100
      }
    },
    {
      Coordinates: [12.879721, 121.774017],
      country: {                    
      name: "Philippines",
      code: "PH",
      market: 100
    }
    },
    {
      Coordinates: [51.919438, 19.145136],
      country: {                    
      name: "Poland",
      code: "PL",
      market: 100
      }
    },
    {
      Coordinates: [39.399872, -8.224454],
      country: {                    
      name: "Portugal",
      code: "PT",
      market: 100
      }
    },
    {
      Coordinates: [-23.442503, -58.443832],
      country: {                    
      name: "Paraguay",
      code: "PY",
      market: 100
      }
    },
    {
      Coordinates: [45.943161, 24.96676],
      country: {                    
      name: "Romania",
      code: "RO",
      market: 100
      }
    },
    {
      Coordinates: [60.128161, 18.643501],
      country: {                    
      name: "Sweden",
      code: "SE",
      market: 100
      }
    },
    {
      Coordinates: [1.352083, 103.819836],
      country: {                    
      name: "Singapore",
      code: "SG",
      market: 100
      }
    },
    {
      Coordinates: [48.669026, 19.699024],
      country: {                    
      name: "Slovakia",
      code: "SK",
      market: 100
      }
    },
    {
      Coordinates: [13.794185, -88.89653],
      country: {                    
      name: "El Salvador",
      code: "SV",
      market: 100
      }
    },
    {
      Coordinates: [15.870032, 100.992541],
      country: {                    
      name: "Thailand",
      code: "TH",
      market: 100
      }
    },
    {
      Coordinates: [38.963745, 35.243322],
      country: {                    
      name: "Turkey",
      code: "TR",
      market: 100
    }
    },
    {
      Coordinates: [23.69781, 120.960515],
      country: {                    
      name: "Taiwan",
      code: "TW",
      market: 100
      }
    },
    {
      Coordinates: [37.09024, -95.712891],
      country: {                    
      name: "United States",
      code: "US",
      market: 100
    }
    },
    {
      Coordinates: [-32.522779, -55.765835],
      country: {                    
      name: "Uruguay",
      code: "UY",
      market: 100
      }
    },
    {
      Coordinates: [14.058324, 108.277199],
      country: {                    
      name: "Vietnam",
      code: "VN",
      market: 100
      }
    },
    {
      Coordinates: [-30.559482, 22.937506],
      country: {                    
      name: "South Africa",
      code: "ZA",
      market: 100
      }
    }
];