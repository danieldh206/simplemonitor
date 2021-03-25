//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
var addressPoints = [
    [45.564, -122.23, "mountpleasant-k12"],
    [45.585, -122.328, "washougal-k12"],
    [45.587, -122.402, "camas-lib"],
    [45.591, -122.401, "camas-k12"],
    [45.695, -121.283, "lyle-k12"],
    [45.701, -121.889, "stevensoncarson-k12"],
    [45.725, -122.633, "wsu-vancouver-bacc"],
    [45.73, -121.488, "whitesalmon-k12"],
    [45.738, -122.488, "hockinson-k12"],
    [45.742, -120.218, "roosevelt-k12"],
    [45.753, -120.9, "centerville-k12"],
    [45.757, -121.65, "milla-k12"],
    [45.784, -122.54, "battleground-k12"],
    [45.797, -122.714, "ridgefield-k12"],
    [45.815, -120.815, "goldendale-k12"],
    [46.009, -122.839, "kalama-k12"],
    [46.031, -118.388, "collegeplace-k12"],
    [46.043, -118.672, "touchet-k12"],
    [46.063, -118.344, "willow-k12"],
    [46.065, -118.33, "wallawalla-k12"],
    [46.08, -118.273, "wallawalla-ctc"],
    [46.141, -122.907, "kelso-k12"],
    [46.141, -122.938, "longview-lib"],
    [46.142, -118.15, "dixie-k12"],
    [46.142, -122.956, "longview-k12"],
    [46.144, -122.935, "lowercolumbia-ctc"],
    [46.154, -119.029, "finley-k12"],
    [46.2, -119.01, "columbiawallawalla-k12"],
    [46.201, -123.378, "wahkiakum-k12"],
    [46.241, -119.143, "esd123-k12"],
    [46.252, -119.124, "columbiabasin-ctc"],
    [46.252, -119.738, "wsu-prosser-bacc"],
    [46.267, -118.154, "waitsburg-k12"],
    [46.271, -122.905, "castlerock-k12"],
    [46.274, -119.294, "richland-k12"],
    [46.28, -119.279, "richland-lib"],
    [46.298, -118.32, "prescott-k12"],
    [46.307, -124.038, "graysharbor-ilwaco-ctc "],
    [46.309, -124.039, "oceanbeach-k12"],
    [46.316, -117.975, "dayton-k12"],
    [46.324, -122.741, "toutlelake-k12"],
    [46.33, -119.263, "wsu-tricities-bacc"],
    [46.339, -120.188, "granger-k12"],
    [46.34, -117.053, "asotinanatone-k12"],
    [46.376, -120.396, "heritage-pbacc"],
    [46.378, -120.732, "mountadams-k12"],
    [46.378, -123.802, "nasellegraysriver-k12"],
    [46.412, -117.044, "asotincounty-lib"],
    [46.413, -117.044, "clarkston-k12"],
    [46.421, -117.068, "wallawalla-clarkston-ctc"],
    [46.566, -117.131, "colton-k12"],
    [46.576, -123.299, "peell-k12"],
    [46.582, -122.718, "onalaska-k12"],
    [46.585, -120.53, "cwu-yakima-bacc"],
    [46.585, -120.53, "yakimavalley-ctc"],
    [46.678, -123.741, "graysharbor-raymond-ctc"],
    [46.686, -123.726, "raymond-k12"],
    [46.714, -122.946, "centralia-ctc"],
    [46.726, -122.983, "centralia-k12"],
    [46.727, -117.189, "pullman-k12"],
    [46.728, -120.695, "nachesvalley-k12"],
    [46.729, -117.154, "wsu-puyallup-bacc"],
    [46.73, -117.167, "spokane-pullman-ctc"],
    [46.742, -119.893, "wahluke-k12"],
    [46.983, -123.912, "hoquiam-k12"],
    [46.984, -123.598, "montesano-k12"],
    [46.986, -122.907, "washington-lib"],
    [46.993, -120.524, "ellensburg-k12 "],
    [46.995, -122.917, "esd113-k12"],
    [47.0, -120.542, "cwu-bacc"],
    [47.024, -122.93, "southpugetsound-ctc"],
    [47.035, -122.895, "ospi-k12"],
    [47.037, -122.888, "sbctc-olympia-ctc"],
    [47.037, -122.888, "sbctc-sdc-1-ctc"],
    [47.037, -122.888, "sbctc-sdc-2-ctc"],
    [47.038, -122.817, "stmartins-pbacc"],
    [47.038, -122.897, "councilofpresidents-bacc"],
    [47.038, -122.897, "k20programoffice-other"],
    [47.038, -122.897, "wsu-gov-bacc"],
    [47.039, -122.9, "tvw-other"],
    [47.041, -122.893, "wsu-energy-bacc"],
    [47.044, -122.83, "southpugetsound-lacey-ctc"],
    [47.046, -122.885, "olympia-k12"],
    [47.048, -123.265, "mccleary-k12"],
    [47.051, -122.824, "norththurston-k12"],
    [47.067, -120.67, "thorp-k12"],
    [47.18, -122.578, "steilacoomhistorical-k12"],
    [47.185, -119.328, "bigbend-ctc"],
    [47.185, -119.328, "cwu-moseslake-bacc"],
    [47.186, -122.291, "puyallup-k12"],
    [47.199, -123.056, "southside-k12"],
    [47.201, -117.907, "lamont-k12"],
    [47.245, -122.117, "muckleshoot-nwic"],
    [47.245, -122.436, "wshm-other"],
    [47.246, -122.525, "tacoma-ctc"],
    [47.264, -122.481, "ups-pbacc"],
    [47.297, -117.98, "sprague-k12"],
    [47.312, -122.217, "auburn-k12"],
    [47.395, -120.326, "wenatchee-k12"],
    [47.474, -122.221, "renton-k12"],
    [47.475, -122.28, "tukwila-k12"],
    [47.476, -118.251, "harrington-k12"],
    [47.479, -118.251, "enumclaw-k12"],
    [47.489, -122.176, "renton-ctc"],
    [47.49, -117.578, "cheney-k12"],
    [47.571, -122.223, "mercerisland-k12"],
    [47.573, -122.639, "bremerton-k12"],
    [47.575, -122.635, "olympic-ctc"],
    [47.576, -117.683, "medicallake-k12"],
    [47.584, -122.148, "bellevue-ctc"],
    [47.602, -120.654, "cascade-k12"],
    [47.606, -122.332, "wsu-west-bacc"],
    [47.675, -117.364, "spokane-ctc"],
    [47.676, -117.465, "spokanefalls-ctc"],
    [47.685, -117.239, "eastvalley-spk-k12"],
    [47.686, -117.52, "greatnorthern-k12"],
    [47.687, -119.108, "couleehartline-k12"],
    [47.697, -122.904, "brinnon-k12"],
    [47.707, -122.582, "chiefkitsap-k12"],
    [47.823, -122.874, "quilcene-k12"],
    [47.829, -117.601, "ninemilefalls-k12"],
    [47.835, -120.02, "lakechelan-k12"],
    [47.85, -121.989, "monroe-k12"],
    [47.969, -117.35, "riverside-k12"],
    [48.005, -122.197, "wsu-everett-bacc"],
    [48.005, -122.41, "southwhidbey-k12"],
    [48.534, -123.02, "sanjuanisland-k12"],
    [48.535, -117.902, "spokane-colville-ctc"],
    [48.539, -121.746, "upperskagit-lib"],
    [48.543, -117.897, "colville-k12"],
    [48.544, -117.904, "stevenscounty-lib"],
    [48.546, -123.011, "uw-fhl-bacc"],
    [48.572, -122.961, "shawisland-k12"],
    [48.603, -118.056, "kettlefalls-k12"],
    [48.608, -118.056, "kettlefalls-lib"],
    [48.642, -118.727, "republic-k12"],
    [48.648, -118.737, "spokane-republic-ctc"],
    [48.696, -122.905, "orcasisland-lib "],
    [48.912, -117.789, "northport-k12"],
    [48.934, -119.438, "oroville-k12"],
    [48.953, -122.423, "lynden-k12"],
    [48.964, -122.308, "nooksackvalley-k12"],
    [48.993371, -122.742043, "blaine-k12"],
    ];