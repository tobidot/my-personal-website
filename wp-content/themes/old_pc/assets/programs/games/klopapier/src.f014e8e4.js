// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"kZHg":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ListenerSocket =
/** @class */
function () {
  function ListenerSocket() {
    this.listeners = [];
  }

  ListenerSocket.prototype.add = function (listener) {
    this.listeners.push(listener);
  };

  ListenerSocket.prototype.remove = function (listener) {
    var index = this.listeners.indexOf(listener);
    if (index < 0) return;
    var length = this.listeners.length;
    this.listeners[index] = this.listeners[length - 1];
    this.listeners.pop();
  };

  ListenerSocket.prototype.trigger_event = function (value) {
    this.listeners.forEach(function (listener) {
      listener(value);
    });
  };

  return ListenerSocket;
}();

exports.ListenerSocket = ListenerSocket;

var ValueChangeListenerSocket =
/** @class */
function (_super) {
  __extends(ValueChangeListenerSocket, _super);

  function ValueChangeListenerSocket() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ValueChangeListenerSocket;
}(ListenerSocket);

exports.ValueChangeListenerSocket = ValueChangeListenerSocket;
;
},{}],"YZWB":[function(require,module,exports) {
module.exports = "pallete.ca4925b6.png";
},{}],"P5oC":[function(require,module,exports) {
module.exports = "fire.956e244e.png";
},{}],"Y3iP":[function(require,module,exports) {
module.exports = "infect.ae00b968.png";
},{}],"Wycj":[function(require,module,exports) {
module.exports = "spray.78de1da3.png";
},{}],"LbHn":[function(require,module,exports) {
module.exports = "map1.32a28f52.png";
},{}],"ltfm":[function(require,module,exports) {
module.exports = "map2.5753716a.png";
},{}],"liJu":[function(require,module,exports) {
module.exports = "map3.553c4475.png";
},{}],"fPb7":[function(require,module,exports) {
module.exports = "map4.85a83a75.png";
},{}],"z9Ha":[function(require,module,exports) {
module.exports = "map5.ad22fff7.png";
},{}],"KQEH":[function(require,module,exports) {
module.exports = "map6.28c58d4f.png";
},{}],"CYme":[function(require,module,exports) {
module.exports = "map7.47ab99f3.png";
},{}],"d0DO":[function(require,module,exports) {
module.exports = "map8.526a2c6b.png";
},{}],"hj7Q":[function(require,module,exports) {
module.exports = "map9.0fe7daa4.png";
},{}],"SXqv":[function(require,module,exports) {
module.exports = "furniture1.bcc94254.png";
},{}],"Lp0c":[function(require,module,exports) {
module.exports = "furniture2.29cd0a0d.png";
},{}],"KO1f":[function(require,module,exports) {
module.exports = "furniture3.238e4e85.png";
},{}],"E2UW":[function(require,module,exports) {
module.exports = "furniture4.60bdeca5.png";
},{}],"J9XY":[function(require,module,exports) {
module.exports = "klopapier.cc1ed18a.png";
},{}],"CFaY":[function(require,module,exports) {
module.exports = "moon.10017fbb.png";
},{}],"lHiy":[function(require,module,exports) {
module.exports = "nudel.d0956665.png";
},{}],"ky7R":[function(require,module,exports) {
module.exports = "nudel2.507e83a8.png";
},{}],"NnAj":[function(require,module,exports) {
module.exports = "nudel3.407de15e.png";
},{}],"Djrt":[function(require,module,exports) {
module.exports = "nudel4.47abd1d7.png";
},{}],"GD7C":[function(require,module,exports) {
module.exports = "paper_roll.cc1ed18a.png";
},{}],"DEUu":[function(require,module,exports) {
module.exports = "paper_roll_half.3cf2e632.png";
},{}],"lzrB":[function(require,module,exports) {
module.exports = "paper_roll_last.807be043.png";
},{}],"VTxr":[function(require,module,exports) {
module.exports = "single_paper.9b19c317.png";
},{}],"aCjQ":[function(require,module,exports) {
module.exports = "spray.a315313f.png";
},{}],"smG2":[function(require,module,exports) {
module.exports = "sprayed.867a44f8.png";
},{}],"daOw":[function(require,module,exports) {
module.exports = "sun.a07324ba.png";
},{}],"HMmi":[function(require,module,exports) {
module.exports = "table.8d870b51.png";
},{}],"jhZR":[function(require,module,exports) {
module.exports = "wall.55ac610d.png";
},{}],"KxCF":[function(require,module,exports) {
module.exports = "wall2.5916e51e.png";
},{}],"qp57":[function(require,module,exports) {
module.exports = "error.2abad3e8.png";
},{}],"d11t":[function(require,module,exports) {
module.exports = "splashart.d74a7026.png";
},{}],"vhAp":[function(require,module,exports) {
module.exports = "indoor_empty_clinical_pallette.cc8a1cd7.png";
},{}],"WWuW":[function(require,module,exports) {
module.exports = "indoor_empty_pallette.0fcd5b3c.png";
},{}],"nGQE":[function(require,module,exports) {
module.exports = "indoor_shop.4f79812d.png";
},{}],"DF3z":[function(require,module,exports) {
module.exports = "indoor_shop_with_paper.44a0a7b0.png";
},{}],"OTdI":[function(require,module,exports) {
module.exports = "indoor_shop_with_spray.e9b9cc35.png";
},{}],"dO2A":[function(require,module,exports) {
module.exports = "indoor_table.bba87694.png";
},{}],"eIau":[function(require,module,exports) {
module.exports = "indoor_toilet.99cded58.png";
},{}],"FRSy":[function(require,module,exports) {
module.exports = "outdoor_gras.657b9cee.png";
},{}],"pU7t":[function(require,module,exports) {
module.exports = "outdoor_gras_with_paper.c57ab740.png";
},{}],"OOEk":[function(require,module,exports) {
module.exports = "outdoor_gras_with_spray.7efa784a.png";
},{}],"R4o0":[function(require,module,exports) {
module.exports = "outdoor_klopapier.12aa5d37.png";
},{}],"G05S":[function(require,module,exports) {
module.exports = "outdoor_path_dirt.42c23302.png";
},{}],"nt1q":[function(require,module,exports) {
module.exports = "outdoor_path_dirt_with_paper.643baade.png";
},{}],"fUtU":[function(require,module,exports) {
module.exports = "outdoor_path_dirt_with_spray.5159345c.png";
},{}],"K6Hl":[function(require,module,exports) {
module.exports = "outdoor_path_road.5422d926.png";
},{}],"Do5C":[function(require,module,exports) {
module.exports = "outdoor_path_road_sprayed.a1242999.png";
},{}],"MUXe":[function(require,module,exports) {
module.exports = "outdoor_path_road_with_paper.834d213f.png";
},{}],"B2U8":[function(require,module,exports) {
module.exports = "outdoor_path_road_with_spray.a1242999.png";
},{}],"Jg6q":[function(require,module,exports) {
module.exports = "toilet.99cded58.png";
},{}],"pMZ7":[function(require,module,exports) {
module.exports = "level1.d90e2c8d.png";
},{}],"KuGR":[function(require,module,exports) {
module.exports = "level2.f0258b3f.png";
},{}],"LVgG":[function(require,module,exports) {
module.exports = "level3.757ba937.png";
},{}],"RGxE":[function(require,module,exports) {
module.exports = "level4.9a0870ad.png";
},{}],"LLjf":[function(require,module,exports) {
module.exports = "level5.1efe6329.png";
},{}],"CrZn":[function(require,module,exports) {
module.exports = "level6.a331947f.png";
},{}],"SZV5":[function(require,module,exports) {
module.exports = "level7.e397dc45.png";
},{}],"WD3I":[function(require,module,exports) {
module.exports = "level8.6553a133.png";
},{}],"So0T":[function(require,module,exports) {
module.exports = "level9.270ca0e1.png";
},{}],"r2Xy":[function(require,module,exports) {
module.exports = "smiley_down.5dd3209e.png";
},{}],"DWbv":[function(require,module,exports) {
module.exports = "smiley_left.4fb74aab.png";
},{}],"aiH2":[function(require,module,exports) {
module.exports = "smiley_leftpng.4fb74aab.png";
},{}],"KQnr":[function(require,module,exports) {
module.exports = "smiley_right.e0b4c878.png";
},{}],"VyLQ":[function(require,module,exports) {
module.exports = "smiley_up.555ce760.png";
},{}],"jgge":[function(require,module,exports) {
module.exports = "virus.e2da1cc4.png";
},{}],"pzNn":[function(require,module,exports) {
module.exports = {
  "pallete": require("./..\\pallete.png"),
  "effect": {
    "fire": require("./..\\effect\\fire.png"),
    "infect": require("./..\\effect\\infect.png"),
    "spray": require("./..\\effect\\spray.png")
  },
  "maps": {
    "map1": require("./..\\maps\\map1.png"),
    "map2": require("./..\\maps\\map2.png"),
    "map3": require("./..\\maps\\map3.png"),
    "map4": require("./..\\maps\\map4.png"),
    "map5": require("./..\\maps\\map5.png"),
    "map6": require("./..\\maps\\map6.png"),
    "map7": require("./..\\maps\\map7.png"),
    "map8": require("./..\\maps\\map8.png"),
    "map9": require("./..\\maps\\map9.png")
  },
  "object": {
    "furniture1": require("./..\\object\\furniture1.png"),
    "furniture2": require("./..\\object\\furniture2.png"),
    "furniture3": require("./..\\object\\furniture3.png"),
    "furniture4": require("./..\\object\\furniture4.png"),
    "klopapier": require("./..\\object\\klopapier.png"),
    "moon": require("./..\\object\\moon.png"),
    "nudel": require("./..\\object\\nudel.png"),
    "nudel2": require("./..\\object\\nudel2.png"),
    "nudel3": require("./..\\object\\nudel3.png"),
    "nudel4": require("./..\\object\\nudel4.png"),
    "paper_roll": require("./..\\object\\paper_roll.png"),
    "paper_roll_half": require("./..\\object\\paper_roll_half.png"),
    "paper_roll_last": require("./..\\object\\paper_roll_last.png"),
    "single_paper": require("./..\\object\\single_paper.png"),
    "spray": require("./..\\object\\spray.png"),
    "sprayed": require("./..\\object\\sprayed.png"),
    "sun": require("./..\\object\\sun.png"),
    "table": require("./..\\object\\table.png"),
    "wall": require("./..\\object\\wall.png"),
    "wall2": require("./..\\object\\wall2.png")
  },
  "other": {
    "error": require("./..\\other\\error.png"),
    "splashart": require("./..\\other\\splashart.png")
  },
  "terrain": {
    "indoor_empty_clinical_pallette": require("./..\\terrain\\indoor_empty_clinical_pallette.png"),
    "indoor_empty_pallette": require("./..\\terrain\\indoor_empty_pallette.png"),
    "indoor_shop": require("./..\\terrain\\indoor_shop.png"),
    "indoor_shop_with_paper": require("./..\\terrain\\indoor_shop_with_paper.png"),
    "indoor_shop_with_spray": require("./..\\terrain\\indoor_shop_with_spray.png"),
    "indoor_table": require("./..\\terrain\\indoor_table.png"),
    "indoor_toilet": require("./..\\terrain\\indoor_toilet.png"),
    "outdoor_gras": require("./..\\terrain\\outdoor_gras.png"),
    "outdoor_gras_with_paper": require("./..\\terrain\\outdoor_gras_with_paper.png"),
    "outdoor_gras_with_spray": require("./..\\terrain\\outdoor_gras_with_spray.png"),
    "outdoor_klopapier": require("./..\\terrain\\outdoor_klopapier.png"),
    "outdoor_path_dirt": require("./..\\terrain\\outdoor_path_dirt.png"),
    "outdoor_path_dirt_with_paper": require("./..\\terrain\\outdoor_path_dirt_with_paper.png"),
    "outdoor_path_dirt_with_spray": require("./..\\terrain\\outdoor_path_dirt_with_spray.png"),
    "outdoor_path_road": require("./..\\terrain\\outdoor_path_road.png"),
    "outdoor_path_road_sprayed": require("./..\\terrain\\outdoor_path_road_sprayed.png"),
    "outdoor_path_road_with_paper": require("./..\\terrain\\outdoor_path_road_with_paper.png"),
    "outdoor_path_road_with_spray": require("./..\\terrain\\outdoor_path_road_with_spray.png"),
    "toilet": require("./..\\terrain\\toilet.png")
  },
  "tutorial": {
    "level1": require("./..\\tutorial\\level1.png"),
    "level2": require("./..\\tutorial\\level2.png"),
    "level3": require("./..\\tutorial\\level3.png"),
    "level4": require("./..\\tutorial\\level4.png"),
    "level5": require("./..\\tutorial\\level5.png"),
    "level6": require("./..\\tutorial\\level6.png"),
    "level7": require("./..\\tutorial\\level7.png"),
    "level8": require("./..\\tutorial\\level8.png"),
    "level9": require("./..\\tutorial\\level9.png")
  },
  "unit": {
    "smiley_down": require("./..\\unit\\smiley_down.png"),
    "smiley_left": require("./..\\unit\\smiley_left.png"),
    "smiley_leftpng": require("./..\\unit\\smiley_leftpng.png"),
    "smiley_right": require("./..\\unit\\smiley_right.png"),
    "smiley_up": require("./..\\unit\\smiley_up.png"),
    "virus": require("./..\\unit\\virus.png")
  }
};
},{"./..\\pallete.png":"YZWB","./..\\effect\\fire.png":"P5oC","./..\\effect\\infect.png":"Y3iP","./..\\effect\\spray.png":"Wycj","./..\\maps\\map1.png":"LbHn","./..\\maps\\map2.png":"ltfm","./..\\maps\\map3.png":"liJu","./..\\maps\\map4.png":"fPb7","./..\\maps\\map5.png":"z9Ha","./..\\maps\\map6.png":"KQEH","./..\\maps\\map7.png":"CYme","./..\\maps\\map8.png":"d0DO","./..\\maps\\map9.png":"hj7Q","./..\\object\\furniture1.png":"SXqv","./..\\object\\furniture2.png":"Lp0c","./..\\object\\furniture3.png":"KO1f","./..\\object\\furniture4.png":"E2UW","./..\\object\\klopapier.png":"J9XY","./..\\object\\moon.png":"CFaY","./..\\object\\nudel.png":"lHiy","./..\\object\\nudel2.png":"ky7R","./..\\object\\nudel3.png":"NnAj","./..\\object\\nudel4.png":"Djrt","./..\\object\\paper_roll.png":"GD7C","./..\\object\\paper_roll_half.png":"DEUu","./..\\object\\paper_roll_last.png":"lzrB","./..\\object\\single_paper.png":"VTxr","./..\\object\\spray.png":"aCjQ","./..\\object\\sprayed.png":"smG2","./..\\object\\sun.png":"daOw","./..\\object\\table.png":"HMmi","./..\\object\\wall.png":"jhZR","./..\\object\\wall2.png":"KxCF","./..\\other\\error.png":"qp57","./..\\other\\splashart.png":"d11t","./..\\terrain\\indoor_empty_clinical_pallette.png":"vhAp","./..\\terrain\\indoor_empty_pallette.png":"WWuW","./..\\terrain\\indoor_shop.png":"nGQE","./..\\terrain\\indoor_shop_with_paper.png":"DF3z","./..\\terrain\\indoor_shop_with_spray.png":"OTdI","./..\\terrain\\indoor_table.png":"dO2A","./..\\terrain\\indoor_toilet.png":"eIau","./..\\terrain\\outdoor_gras.png":"FRSy","./..\\terrain\\outdoor_gras_with_paper.png":"pU7t","./..\\terrain\\outdoor_gras_with_spray.png":"OOEk","./..\\terrain\\outdoor_klopapier.png":"R4o0","./..\\terrain\\outdoor_path_dirt.png":"G05S","./..\\terrain\\outdoor_path_dirt_with_paper.png":"nt1q","./..\\terrain\\outdoor_path_dirt_with_spray.png":"fUtU","./..\\terrain\\outdoor_path_road.png":"K6Hl","./..\\terrain\\outdoor_path_road_sprayed.png":"Do5C","./..\\terrain\\outdoor_path_road_with_paper.png":"MUXe","./..\\terrain\\outdoor_path_road_with_spray.png":"B2U8","./..\\terrain\\toilet.png":"Jg6q","./..\\tutorial\\level1.png":"pMZ7","./..\\tutorial\\level2.png":"KuGR","./..\\tutorial\\level3.png":"LVgG","./..\\tutorial\\level4.png":"RGxE","./..\\tutorial\\level5.png":"LLjf","./..\\tutorial\\level6.png":"CrZn","./..\\tutorial\\level7.png":"SZV5","./..\\tutorial\\level8.png":"WD3I","./..\\tutorial\\level9.png":"So0T","./..\\unit\\smiley_down.png":"r2Xy","./..\\unit\\smiley_left.png":"DWbv","./..\\unit\\smiley_leftpng.png":"aiH2","./..\\unit\\smiley_right.png":"KQnr","./..\\unit\\smiley_up.png":"VyLQ","./..\\unit\\virus.png":"jgge"}],"n9mu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ImageID;

(function (ImageID) {
  ImageID[ImageID["TERRAIN__INDOOR_SHOP"] = 0] = "TERRAIN__INDOOR_SHOP";
  ImageID[ImageID["TERRAIN__OUTDOOR_GRAS"] = 1] = "TERRAIN__OUTDOOR_GRAS";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_DIRT"] = 2] = "TERRAIN__OUTDOOR_PATH_DIRT";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_ROAD"] = 3] = "TERRAIN__OUTDOOR_PATH_ROAD";
  ImageID[ImageID["TERRAIN__INDOOR_SHOP_WITH_PAPER"] = 4] = "TERRAIN__INDOOR_SHOP_WITH_PAPER";
  ImageID[ImageID["TERRAIN__OUTDOOR_GRAS_WITH_PAPER"] = 5] = "TERRAIN__OUTDOOR_GRAS_WITH_PAPER";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_DIRT_WITH_PAPER"] = 6] = "TERRAIN__OUTDOOR_PATH_DIRT_WITH_PAPER";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_ROAD_WITH_PAPER"] = 7] = "TERRAIN__OUTDOOR_PATH_ROAD_WITH_PAPER";
  ImageID[ImageID["TERRAIN__INDOOR_SHOP_WITH_SPRAY"] = 8] = "TERRAIN__INDOOR_SHOP_WITH_SPRAY";
  ImageID[ImageID["TERRAIN__OUTDOOR_GRAS_WITH_SPRAY"] = 9] = "TERRAIN__OUTDOOR_GRAS_WITH_SPRAY";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_DIRT_WITH_SPRAY"] = 10] = "TERRAIN__OUTDOOR_PATH_DIRT_WITH_SPRAY";
  ImageID[ImageID["TERRAIN__OUTDOOR_PATH_ROAD_WITH_SPRAY"] = 11] = "TERRAIN__OUTDOOR_PATH_ROAD_WITH_SPRAY";
  ImageID[ImageID["TERRAIN__INDOOR_TOILET"] = 12] = "TERRAIN__INDOOR_TOILET";
  ImageID[ImageID["TERRAIN__INDOOR_EMPTY_PALLETTE"] = 13] = "TERRAIN__INDOOR_EMPTY_PALLETTE";
  ImageID[ImageID["TERRAIN__INDOOR_EMPTY_CLINICAL_PALLETTE"] = 14] = "TERRAIN__INDOOR_EMPTY_CLINICAL_PALLETTE";
  ImageID[ImageID["TERRAIN__INDOOR_TABLE"] = 15] = "TERRAIN__INDOOR_TABLE";
  ImageID[ImageID["OBJECT__PAPER_ROLL"] = 16] = "OBJECT__PAPER_ROLL";
  ImageID[ImageID["OBJECT__PAPER_ROLL_HALF"] = 17] = "OBJECT__PAPER_ROLL_HALF";
  ImageID[ImageID["OBJECT__PAPER_ROLL_LAST"] = 18] = "OBJECT__PAPER_ROLL_LAST";
  ImageID[ImageID["OBJECT__SINGLE_PAPER"] = 19] = "OBJECT__SINGLE_PAPER";
  ImageID[ImageID["OBJECT__SPRAY"] = 20] = "OBJECT__SPRAY";
  ImageID[ImageID["OBJECT__SPRAYED"] = 21] = "OBJECT__SPRAYED";
  ImageID[ImageID["OBJECT__WALL2"] = 22] = "OBJECT__WALL2";
  ImageID[ImageID["OBJECT__FURNITURE1"] = 23] = "OBJECT__FURNITURE1";
  ImageID[ImageID["OBJECT__NUDEL4"] = 24] = "OBJECT__NUDEL4";
  ImageID[ImageID["OBJECT__MOON"] = 25] = "OBJECT__MOON";
  ImageID[ImageID["OBJECT__SUN"] = 26] = "OBJECT__SUN";
  ImageID[ImageID["EFFECT__INFECT"] = 27] = "EFFECT__INFECT";
  ImageID[ImageID["EFFECT__FIRE"] = 28] = "EFFECT__FIRE";
  ImageID[ImageID["EFFECT__SPRAY"] = 29] = "EFFECT__SPRAY";
  ImageID[ImageID["UNIT__SMILEY_LEFT"] = 30] = "UNIT__SMILEY_LEFT";
  ImageID[ImageID["UNIT__SMILEY_UP"] = 31] = "UNIT__SMILEY_UP";
  ImageID[ImageID["UNIT__SMILEY_RIGHT"] = 32] = "UNIT__SMILEY_RIGHT";
  ImageID[ImageID["UNIT__SMILEY_DOWN"] = 33] = "UNIT__SMILEY_DOWN";
  ImageID[ImageID["UNIT__VIRUS"] = 34] = "UNIT__VIRUS";
  ImageID[ImageID["MAPS__MAP1"] = 35] = "MAPS__MAP1";
  ImageID[ImageID["MAPS__MAP2"] = 36] = "MAPS__MAP2";
  ImageID[ImageID["MAPS__MAP3"] = 37] = "MAPS__MAP3";
  ImageID[ImageID["MAPS__MAP4"] = 38] = "MAPS__MAP4";
  ImageID[ImageID["MAPS__MAP5"] = 39] = "MAPS__MAP5";
  ImageID[ImageID["MAPS__MAP6"] = 40] = "MAPS__MAP6";
  ImageID[ImageID["MAPS__MAP7"] = 41] = "MAPS__MAP7";
  ImageID[ImageID["MAPS__MAP8"] = 42] = "MAPS__MAP8";
  ImageID[ImageID["MAPS__MAP9"] = 43] = "MAPS__MAP9";
  ImageID[ImageID["TUTORIAL__LEVEL1"] = 44] = "TUTORIAL__LEVEL1";
  ImageID[ImageID["TUTORIAL__LEVEL2"] = 45] = "TUTORIAL__LEVEL2";
  ImageID[ImageID["TUTORIAL__LEVEL3"] = 46] = "TUTORIAL__LEVEL3";
  ImageID[ImageID["TUTORIAL__LEVEL4"] = 47] = "TUTORIAL__LEVEL4";
  ImageID[ImageID["TUTORIAL__LEVEL5"] = 48] = "TUTORIAL__LEVEL5";
  ImageID[ImageID["TUTORIAL__LEVEL6"] = 49] = "TUTORIAL__LEVEL6";
  ImageID[ImageID["TUTORIAL__LEVEL7"] = 50] = "TUTORIAL__LEVEL7";
  ImageID[ImageID["TUTORIAL__LEVEL8"] = 51] = "TUTORIAL__LEVEL8";
  ImageID[ImageID["TUTORIAL__LEVEL9"] = 52] = "TUTORIAL__LEVEL9";
  ImageID[ImageID["OTHER__ERROR"] = 53] = "OTHER__ERROR";
})(ImageID = exports.ImageID || (exports.ImageID = {}));

;

exports.image_resources = function () {
  var images = require('./images/**/*.png');

  var result = {};
  Object.keys(ImageID).filter(function (k) {
    return typeof ImageID[k] === "number";
  }).forEach(function (name) {
    var path_parts = name.toLowerCase().split('__');
    var path = images;

    while (path_parts.length > 0) {
      var path_part = path_parts.shift();
      if (path_part === undefined || path_part in path === false) throw new Error("Image not found " + name);
      path = path[path_part];
    }

    result[ImageID[name]] = path;
  });
  return result;
}();
},{"./images/**/*.png":"pzNn"}],"Am7D":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Listener_1 = require("../ts_library/ui/Listener");

var ImageResources_1 = require("../assets/ImageResources");

var ImageManager =
/** @class */
function () {
  function ImageManager(resources) {
    var _this = this;

    this.loaded_images_count = 0;
    this.all_images_count = 0;
    this.images = new Map();
    this.on_progress_listener = new Listener_1.ListenerSocket();
    Object.entries(resources).forEach(function (_a) {
      var _b = __read(_a, 2),
          id = _b[0],
          image_url = _b[1];

      var id_number = parseInt(id);
      _this.all_images_count++;
      var image = new Image();
      image.src = image_url;

      image.onload = function () {
        _this.images.set(parseInt(id), image);

        _this.loaded_images_count++;

        _this.on_progress_listener.trigger_event([_this.get_loaded_percent(), image]);
      };

      image.onerror = function () {
        image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAABlBMVEX/////AADrWueTAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADpJREFUeNpjYEQDDECEBEACDEgiUC4jgg+VZ4TzYRqQCUaEYmQBuGU4BdC1oBuKbi26w9CdjuE5NAAAL9AAWd4tUzwAAAAASUVORK5CYII=';

        _this.images.set(parseInt(id), image);

        _this.loaded_images_count++;

        _this.on_progress_listener.trigger_event([_this.get_loaded_percent(), image]);

        console.error('Image not correctly loaded: ' + ImageResources_1.ImageID[id_number] + ' => ' + image_url);
      };
    });
  }

  ImageManager.prototype.get = function (key) {
    var image = this.images.get(key);
    if (!image) throw new Error('Image with ID "' + key + '" does not exist.');
    return image;
  };

  ImageManager.prototype.wait_until_loaded = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve) {
          if (_this.is_loaded()) {
            resolve(_this.loaded_images_count);
          } else {
            _this.on_progress_listener.add(function () {
              if (_this.is_loaded()) {
                resolve(_this.loaded_images_count);
              }
            });
          }
        })];
      });
    });
  };

  ImageManager.prototype.is_loaded = function () {
    return this.all_images_count === this.loaded_images_count;
  };

  ImageManager.prototype.get_loaded_percent = function () {
    return this.loaded_images_count / this.all_images_count;
  };

  return ImageManager;
}();

exports.default = ImageManager;
},{"../ts_library/ui/Listener":"kZHg","../assets/ImageResources":"n9mu"}],"SvKx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FpsCounter =
/** @class */
function () {
  function FpsCounter(average_over_x_frames, expected_fps) {
    if (average_over_x_frames === void 0) {
      average_over_x_frames = 60;
    }

    if (expected_fps === void 0) {
      expected_fps = 60;
    }

    this.last_time_stamp = performance.now();
    this.steps_until_update = this.average_over_x_frames = average_over_x_frames;
    this.current_fps = expected_fps;
  }

  FpsCounter.prototype.get_current_fps = function () {
    return this.current_fps;
  };

  FpsCounter.prototype.update = function () {
    if (this.steps_until_update-- < 0) {
      var now = performance.now();
      var time_diff = now - this.last_time_stamp;
      var frames_per_ms = this.average_over_x_frames / time_diff;
      this.current_fps = 1000 * frames_per_ms;
      this.steps_until_update = this.average_over_x_frames;
      this.last_time_stamp = now;
    }
  };

  return FpsCounter;
}();

exports.default = FpsCounter;
},{}],"EbgX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Direction;

(function (Direction) {
  Direction[Direction["LEFT"] = 0] = "LEFT";
  Direction[Direction["UP"] = 1] = "UP";
  Direction[Direction["RIGHT"] = 2] = "RIGHT";
  Direction[Direction["DOWN"] = 3] = "DOWN";
})(Direction = exports.Direction || (exports.Direction = {}));

;

function direction_invert(direction) {
  switch (direction) {
    case Direction.LEFT:
      return Direction.RIGHT;

    case Direction.RIGHT:
      return Direction.LEFT;

    case Direction.UP:
      return Direction.DOWN;

    case Direction.DOWN:
      return Direction.UP;
  }
}

exports.direction_invert = direction_invert;
},{}],"kRKL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Direction_1 = require("../../ts_library/space/Direction");

var InputDelegator =
/** @class */
function () {
  function InputDelegator(element) {
    var _this = this;

    this.game_over = false;
    this.buffer_action = "";

    this.on_focus = function (event) {
      document.body.style.overflow = 'hidden';
    };

    this.on_blur = function (event) {
      document.body.style.overflow = 'auto';
    };

    this.element = element;

    this.element.onkeydown = function (event) {
      if (_this.on_interact) _this.on_interact();
      var key = event.code || event.key; //if (event.repeat) return;

      if (key === "Escape") {
        _this.on_request_menu && _this.on_request_menu();
        return;
      }

      if (key === "Space" || key === "Spacebar" || key === " ") {
        _this.on_pause && _this.on_pause();
        return;
      }

      if (_this.game_over) return;

      if (_this.try_action(key) === false) {
        _this.buffer_action = key;
      } else {
        _this.buffer_action = "";
      }
    };

    this.element.onclick = function () {
      if (_this.on_interact) _this.on_interact();
    };

    setInterval(function () {
      if (_this.buffer_action !== '') {
        if (_this.try_action(_this.buffer_action)) _this.buffer_action = "";
      }
    }, 0.1);
    if (element === document.activeElement) this.on_focus();
    element.addEventListener('focus', this.on_focus);
    element.addEventListener('blur', this.on_blur);
  }

  InputDelegator.prototype.try_action = function (action) {
    switch (action) {
      case "ArrowLeft":
        if (this.on_direction_input) return this.on_direction_input(Direction_1.Direction.LEFT);
        break;

      case "ArrowUp":
        if (this.on_direction_input) return this.on_direction_input(Direction_1.Direction.UP);
        break;

      case "ArrowRight":
        if (this.on_direction_input) return this.on_direction_input(Direction_1.Direction.RIGHT);
        break;

      case "ArrowDown":
        if (this.on_direction_input) return this.on_direction_input(Direction_1.Direction.DOWN);
        break;

      case "q":
      case "Q":
      case "KeyQ":
        this.on_use_spray && this.on_use_spray();
        break;

      case "w":
      case "W":
      case "KeyW":
        this.on_use_paper && this.on_use_paper();
        break;

      case "e":
      case "E":
      case "KeyE":
        this.on_eat && this.on_eat();
        break;
    }

    return true;
  };

  return InputDelegator;
}();

exports.InputDelegator = InputDelegator;
},{"../../ts_library/space/Direction":"EbgX"}],"c0W6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Listener_1 = require("../../ts_library/ui/Listener");

var System =
/** @class */
function () {
  function System() {}

  System.prototype.handle = function (event) {};

  ;
  System.events = new Listener_1.ListenerSocket();
  return System;
}();

exports.default = System;
},{"../../ts_library/ui/Listener":"kZHg"}],"kbIU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GameResult;

(function (GameResult) {
  GameResult[GameResult["WON"] = 0] = "WON";
  GameResult[GameResult["LOST"] = 1] = "LOST";
  GameResult[GameResult["TIE"] = 2] = "TIE";
})(GameResult = exports.GameResult || (exports.GameResult = {}));
},{}],"fgAD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
;

var Point =
/** @class */
function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.add = function (other) {
    return new Point(this.x + other.x, this.y + other.y);
  };

  Point.prototype.sub = function (other) {
    return new Point(this.x - other.x, this.y - other.y);
  };

  Point.prototype.mul = function (value) {
    if (typeof value === "number") {
      return new Point(this.x * value, this.y * value);
    }

    return new Point(this.x * value.x, this.y * value.y);
  };

  Point.prototype.distance2 = function () {
    return this.x * this.x + this.y * this.y;
  };

  Point.prototype.equals = function (by_x, by_y, epsilon) {
    if (by_x instanceof Point) {
      epsilon = by_y || 0;
      by_y = by_x.y;
      by_x = by_x.x;
    } else {
      if (by_y === undefined) throw new Error('Invalid Parameters to call');
      epsilon = epsilon || 0;
    }

    return Math.abs(this.x - by_x) <= epsilon && Math.abs(this.y - by_y) <= epsilon;
  };

  Point.prototype.move_by = function (by_x, by_y) {
    if (by_x instanceof Point) {
      by_y = by_x.y;
      by_x = by_x.x;
    }

    if (by_y === undefined) throw new Error('Invalid Parameters to call');
    this.x += by_x;
    this.y += by_y;
    return this;
  };

  Point.prototype.copy = function () {
    return new Point(this.x, this.y);
  };

  Point.prototype.map = function (fn) {
    return new Point(fn(this.x), fn(this.y));
  };

  Point.create_random_direction = function () {
    var x = Math.trunc(Math.random() * 3) - 1;
    var y = Math.trunc(Math.random() * 3) - 1;
    return new Point(x, y);
  };

  Point.create_random_direction_non_diagonal = function () {
    switch (Math.trunc(Math.random() * 4)) {
      case 0:
        return new Point(1, 0);

      case 1:
        return new Point(-1, 0);

      case 2:
        return new Point(0, -1);

      case 3:
        return new Point(0, 1);

      default:
        throw new Error("???");
    }
  };

  return Point;
}();

exports.Point = Point;

var Rect =
/** @class */
function () {
  function Rect(left, top, right, bottom) {
    this.left = Math.min(left, right);
    this.top = Math.min(top, bottom);
    this.right = Math.max(left, right);
    this.bottom = Math.max(top, bottom);
    ;
  }

  Rect.prototype.left_top = function () {
    return new Point(this.left, this.top);
  };

  Rect.prototype.right_top = function () {
    return new Point(this.right, this.top);
  };

  Rect.prototype.left_bottom = function () {
    return new Point(this.left, this.bottom);
  };

  Rect.prototype.right_bottom = function () {
    return new Point(this.right, this.bottom);
  };

  Rect.prototype.width = function () {
    return this.right - this.left;
  };

  Rect.prototype.height = function () {
    return this.bottom - this.top;
  };

  Rect.prototype.center = function () {
    return new Point((this.left + this.right) / 2, (this.top + this.bottom) / 2);
  };

  Rect.prototype.get_values_ltrb = function () {
    return [this.left, this.top, this.right, this.bottom];
  };

  Rect.prototype.get_random_point = function () {
    return new Point(this.left + Math.random() * this.width(), this.top + Math.random() * this.height());
  };

  Rect.prototype.move_by = function (x, y) {
    this.left += x;
    this.right += x;
    this.top += y;
    this.bottom += y;
    return this;
  };

  Rect.prototype.for_each_point_in_rect = function (callback) {
    for (var x = this.left; x <= this.right; ++x) {
      for (var y = this.top; y <= this.bottom; ++y) {
        callback(new Point(x, y));
      }
    }
  };

  Rect.prototype.map_points_in_rect = function (callback) {
    var result = new Array(this.width() * this.height());
    var i = 0;

    for (var x = this.left; x <= this.right; ++x) {
      for (var y = this.top; y <= this.bottom; ++y) {
        result[i] = callback(new Point(x, y));
        ++i;
      }
    }

    return result;
  };

  Rect.prototype.set_center = function (center) {
    var old_center = this.center();
    var moved_by = center.sub(old_center);
    return this.move_by(moved_by.x, moved_by.y);
  };

  Rect.prototype.get_inner_rect = function (border) {
    return new Rect(this.left + border, this.top + border, this.right - border, this.bottom - border);
  };

  Rect.prototype.is_containing = function (point) {
    return this.left <= point.x && this.right >= point.x && this.top <= point.y && this.bottom >= point.y;
  };

  Rect.prototype.is_equal = function (other) {
    return this.left === other.left && this.right === other.right && this.top === other.top && this.bottom === other.bottom;
  };

  Rect.prototype.is_intersecting = function (other) {
    return this.left <= other.right && this.right >= other.left && this.top <= other.bottom && this.bottom >= other.top;
  };

  Rect.prototype.get_intersection = function (other) {
    if (!this.is_intersecting(other)) return null;
    return Rect.from_boundries(Math.max(this.left, other.left), Math.max(this.top, other.top), Math.min(this.right, other.right), Math.min(this.bottom, other.bottom));
  };

  Rect.from_boundries = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };

  Rect.from_point_with_size = function (center, width, height) {
    return new Rect(center.x - width / 2, center.y - height / 2, center.x + width / 2, center.y + height / 2);
  };

  return Rect;
}();

exports.Rect = Rect;
},{}],"SlkT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent =
/** @class */
function () {
  function MapObjectComponent() {}

  MapObjectComponent.prototype.update = function (delta_seconds, self, game_state) {
    return [];
  };

  MapObjectComponent.prototype.handle = function (game_state, task, self) {
    return game_state;
  };

  ;
  return MapObjectComponent;
}();

exports.default = MapObjectComponent;
},{}],"Rl51":[function(require,module,exports) {
"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ComponentContainer =
/** @class */
function () {
  function ComponentContainer() {
    this.components = new Map();
  }

  ComponentContainer.prototype.add = function (component) {
    this.components.set(component.constructor.name, component);
    return this;
  };

  ComponentContainer.prototype.has = function (component_class) {
    return this.components.has(component_class.name);
  };

  ComponentContainer.prototype.get = function (component_class) {
    return this.components.get(component_class.name);
  };

  ComponentContainer.prototype.remove = function (component_class) {
    return this.components.delete(component_class.name);
  };

  ComponentContainer.prototype.update = function (delta_seconds) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var tasks = [];
    this.components.forEach(function (component) {
      tasks.push.apply(tasks, __spread(component.update.apply(component, __spread([delta_seconds], args))));
    });
    return tasks;
  };

  ComponentContainer.prototype.each = function (callback) {
    this.components.forEach(callback);
  };

  ComponentContainer.prototype.get_all = function () {
    return __spread(this.components.values());
  };

  return ComponentContainer;
}();

exports.default = ComponentContainer;
},{}],"BVhu":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ComponentContainer_1 = __importDefault(require("../components/ComponentContainer"));

var MapObject =
/** @class */
function (_super) {
  __extends(MapObject, _super);

  function MapObject(type) {
    var _this = _super.call(this) || this;

    _this.instance_ID = MapObject.next_instance_ID++;
    _this.type = type;
    _this._is_destroyed = false;
    MapObject.all_instances[_this.instance_ID] = _this;
    return _this;
  }

  MapObject.prototype.destroy = function () {
    this._is_destroyed = true;
    delete MapObject.all_instances[this.instance_ID];
  };

  MapObject.prototype.is_destroyed = function () {
    return this._is_destroyed;
  };

  MapObject.prototype.handle = function (game_state, task) {
    var _this = this;

    return _super.prototype.get_all.call(this).reduce(function (game_state, component) {
      return component.handle(game_state, task, _this);
    }, game_state);
  };

  MapObject.prototype.update = function (delta_seconds, game_state) {
    return _super.prototype.update.call(this, delta_seconds, this, game_state);
  };

  MapObject.get = function (id) {
    return MapObject.all_instances[id];
  };

  MapObject.next_instance_ID = 0;
  MapObject.all_instances = [];
  return MapObject;
}(ComponentContainer_1.default);

exports.default = MapObject;
},{"../components/ComponentContainer":"Rl51"}],"mo7A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task =
/** @class */
function () {
  function Task() {}

  Task.prototype.before_execute = function (game_state) {
    return true;
  };

  ;

  Task.prototype.execute = function (game_state) {
    return game_state;
  };

  ;
  return Task;
}();

exports.Task = Task;
},{}],"Em0L":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var PositionComponent_1 = require("../components/PositionComponent");

var MoveObjectTask =
/** @class */
function (_super) {
  __extends(MoveObjectTask, _super);

  function MoveObjectTask(source, target, object_id) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.target = target;
    _this.object_id = object_id;
    return _this;
  }

  MoveObjectTask.prototype.before_execute = function (game_state) {
    var task = this;
    var field = game_state.world_map.at(task.source);
    if (!field) return false;
    var object_index = field.objects.findIndex(function (object) {
      return object.instance_ID === task.object_id;
    });
    if (object_index < 0) return false;
    var object = field.objects[object_index];
    var target_field = game_state.world_map.at(task.target);
    if (!target_field) return false;
    if (!this.is_valid_target(object, target_field)) return false;
    return true;
  };

  MoveObjectTask.prototype.execute = function (game_state) {
    var task = this;
    var field = game_state.world_map.at(task.source);
    if (!field) return game_state;
    var target_field = game_state.world_map.at(task.target);
    if (!target_field) return game_state;
    var object = field.objects.find(function (object) {
      return object.instance_ID === task.object_id;
    });
    if (!object) return game_state;
    field.objects = field.objects.filter(function (object) {
      return task.object_id !== object.instance_ID;
    });
    target_field.objects.push(object);
    return game_state;
  };

  MoveObjectTask.prototype.is_valid_target = function (object, field) {
    var position = object.get(PositionComponent_1.PositionComponent);
    if (!position) return field.objects.length === 0;
    return field.objects.reduce(function (result, field_object) {
      if (!result) return false;
      var field_object_position = field_object.get(PositionComponent_1.PositionComponent);
      if (!field_object_position) return false;
      return !(position.collision_mask & field_object_position.collision_group);
    }, true);
  };

  return MoveObjectTask;
}(Task_1.Task);

exports.MoveObjectTask = MoveObjectTask;
},{"./Task":"mo7A","../components/PositionComponent":"SUj7"}],"SUj7":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var MoveObjectTask_1 = require("../tasks/MoveObjectTask");

var CollisionGroups;

(function (CollisionGroups) {
  CollisionGroups[CollisionGroups["GHOST"] = 0] = "GHOST";
  CollisionGroups[CollisionGroups["COLLECTABLE"] = 1] = "COLLECTABLE";
  CollisionGroups[CollisionGroups["INTERACTABLE"] = 2] = "INTERACTABLE";
  CollisionGroups[CollisionGroups["MOVEABLE"] = 4] = "MOVEABLE";
  CollisionGroups[CollisionGroups["PURIFIED"] = 8] = "PURIFIED";
  CollisionGroups[CollisionGroups["UNPASSABLE"] = 31] = "UNPASSABLE";
})(CollisionGroups = exports.CollisionGroups || (exports.CollisionGroups = {}));

var PositionComponent =
/** @class */
function (_super) {
  __extends(PositionComponent, _super);

  function PositionComponent() {
    var _this = _super.call(this) || this;

    _this.position = new SimpleShapes_1.Point(0, 0); // collision_mask & collision_group === 0  => can walk here 

    _this.collision_mask = CollisionGroups.GHOST;
    _this.collision_group = CollisionGroups.UNPASSABLE;
    return _this;
  }

  PositionComponent.prototype.handle = function (game_state, task, self) {
    if (task instanceof MoveObjectTask_1.MoveObjectTask && task.object_id === self.instance_ID) {
      this.position = task.target;
    }

    return game_state;
  };

  ;
  return PositionComponent;
}(MapObjectComponent_1.default);

exports.PositionComponent = PositionComponent;
},{"./MapObjectComponent":"SlkT","../../ts_library/space/SimpleShapes":"fgAD","../tasks/MoveObjectTask":"Em0L"}],"xDlw":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var IsCollectableComponent =
/** @class */
function (_super) {
  __extends(IsCollectableComponent, _super);

  function IsCollectableComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return IsCollectableComponent;
}(MapObjectComponent_1.default);

exports.default = IsCollectableComponent;
},{"./MapObjectComponent":"SlkT"}],"URlb":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var MapObject_1 = __importDefault(require("../objects/MapObject"));

var IsCollectableComponent_1 = __importDefault(require("../components/IsCollectableComponent"));

var InventarComponent_1 = __importDefault(require("../components/InventarComponent"));

var PositionComponent_1 = require("../components/PositionComponent");

var PickUpItemsTask =
/** @class */
function (_super) {
  __extends(PickUpItemsTask, _super);

  function PickUpItemsTask(picker_id, target) {
    var _this = _super.call(this) || this;

    _this.picker_id = picker_id;
    _this.target = target;
    return _this;
  }

  PickUpItemsTask.prototype.execute = function (game_state) {
    var picker = MapObject_1.default.get(this.picker_id);
    if (!picker) return game_state;
    var field = game_state.world_map.at(this.target);
    if (!field) return game_state;
    var inventar = picker.get(InventarComponent_1.default);
    if (!inventar) return game_state;
    field.objects = field.objects.filter(function (object) {
      if (inventar.items.length >= inventar.size) return true;
      var is_collectable = object.get(IsCollectableComponent_1.default);

      if (is_collectable) {
        object.remove(PositionComponent_1.PositionComponent);
        inventar.items.push(object.instance_ID);
        return false;
      } else {
        return true;
      }
    });
    return game_state;
  };

  return PickUpItemsTask;
}(Task_1.Task);

exports.default = PickUpItemsTask;
},{"./Task":"mo7A","../objects/MapObject":"BVhu","../components/IsCollectableComponent":"xDlw","../components/InventarComponent":"hEXs","../components/PositionComponent":"SUj7"}],"HMDK":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var MapObject_1 = __importDefault(require("../objects/MapObject"));

var DestroyObjectTask =
/** @class */
function (_super) {
  __extends(DestroyObjectTask, _super);

  function DestroyObjectTask(object_id) {
    var _this = _super.call(this) || this;

    _this.object_id = object_id;
    return _this;
  }

  DestroyObjectTask.prototype.execute = function (game_state) {
    var object = MapObject_1.default.get(this.object_id);
    if (object) object.destroy();
    return game_state;
  };

  return DestroyObjectTask;
}(Task_1.Task);

exports.default = DestroyObjectTask;
},{"./Task":"mo7A","../objects/MapObject":"BVhu"}],"hEXs":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var MapObject_1 = __importDefault(require("../objects/MapObject"));

var PositionComponent_1 = require("./PositionComponent");

var IsCollectableComponent_1 = __importDefault(require("./IsCollectableComponent"));

var PickUpItemsTask_1 = __importDefault(require("../tasks/PickUpItemsTask"));

var DestroyObjectTask_1 = __importDefault(require("../tasks/DestroyObjectTask"));

var InventarComponent =
/** @class */
function (_super) {
  __extends(InventarComponent, _super);

  function InventarComponent() {
    var _this = _super.call(this) || this;

    _this.money = 0;
    _this.items = [];
    _this.size = 12;
    _this.holding = null;
    return _this;
  }

  InventarComponent.prototype.handle = function (game_state, task) {
    if (!(task instanceof DestroyObjectTask_1.default)) return game_state;
    this.items = this.items.filter(function (object_id) {
      return object_id !== task.object_id;
    });
    return game_state;
  };

  InventarComponent.prototype.update = function (delta_seconds, self, game_state) {
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    var field = game_state.world_map.at(position.position);
    if (!field) return [];
    var tasks = field.objects.filter(function (object) {
      return object.get(IsCollectableComponent_1.default) !== null;
    }).map(function (object) {
      return new PickUpItemsTask_1.default(self.instance_ID, position.position);
    });
    tasks.push.apply(tasks, __spread(this.update_inventar_items(delta_seconds, self, game_state)));
    return tasks;
  };

  InventarComponent.prototype.has = function (item) {
    return this.items.includes(item);
  };

  InventarComponent.prototype.remove = function (item) {
    var found = false;
    this.items = this.items.filter(function (current) {
      if (!found && current === item) {
        found = true;
        return false;
      }

      return true;
    });
  };

  InventarComponent.prototype.update_inventar_items = function (delta_seconds, self, game_state) {
    // update items
    var inventar = self.get(InventarComponent);
    if (!inventar) return [];
    return inventar.items.flatMap(function (object_id) {
      var object = MapObject_1.default.get(object_id);
      if (!object) throw new Error('Invalid Object ID in Inventar');
      return object.update(delta_seconds, game_state);
    });
  };

  return InventarComponent;
}(MapObjectComponent_1.default);

exports.default = InventarComponent;
},{"./MapObjectComponent":"SlkT","../objects/MapObject":"BVhu","./PositionComponent":"SUj7","./IsCollectableComponent":"xDlw","../tasks/PickUpItemsTask":"URlb","../tasks/DestroyObjectTask":"HMDK"}],"ZpDG":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var VisualComponent =
/** @class */
function (_super) {
  __extends(VisualComponent, _super);

  function VisualComponent() {
    var _this = _super.call(this) || this;

    _this.image = ImageResources_1.ImageID.OTHER__ERROR;
    _this.icon = ImageResources_1.ImageID.OTHER__ERROR;
    _this.priority = 0;
    return _this;
  }

  return VisualComponent;
}(MapObjectComponent_1.default);

exports.default = VisualComponent;
},{"./MapObjectComponent":"SlkT","../../assets/ImageResources":"n9mu"}],"sItu":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var InventarComponent_1 = __importDefault(require("../../logic/components/InventarComponent"));

var MapObject_1 = __importDefault(require("../../logic/objects/MapObject"));

var ImageResources_1 = require("../../assets/ImageResources");

var VisualComponent_1 = __importDefault(require("../../logic/components/VisualComponent"));

var InventarOnScreen =
/** @class */
function () {
  function InventarOnScreen(context, images, display_size, slot_page_size) {
    this.display_money_height = 50;
    this.display_size = display_size;
    this.images = images;
    this.slot_page_size = slot_page_size;
    this.context = context;
    this.cell_size = new SimpleShapes_1.Point(this.display_size.x / this.slot_page_size.x, this.display_size.y / this.slot_page_size.y);
  }

  InventarOnScreen.prototype.display = function (object) {
    var _this = this;

    this.context.translate(650, 0);
    var inventar = object.get(InventarComponent_1.default);

    if (inventar) {
      this.context.font = '32px';
      this.context.fillStyle = 'yellow'; //this.context.fillText(inventar.money.toString() + '$', 16, 32);

      this.context.fillStyle = '#4e220d';
      this.context.fillRect(0, 0, this.display_size.x, this.display_size.y);
      var items_per_page = this.slot_page_size.x * this.slot_page_size.y;
      inventar.items.slice(0, items_per_page).forEach(function (item, index) {
        var x = index % _this.slot_page_size.x;
        var y = Math.trunc(index / _this.slot_page_size.x);
        var max_size = Math.min(_this.cell_size.x, _this.cell_size.y);
        var screen_x = x * _this.cell_size.x + (_this.cell_size.x - max_size) / 2;
        var screen_y = y * _this.cell_size.y + (_this.cell_size.y - max_size) / 2;

        var image = _this.get_image_for_inventar_item(item);

        _this.context.drawImage(image, screen_x, screen_y, max_size, max_size);
      });
    }

    this.context.setTransform(1, 0, 0, 1, 0, 0);
  };

  InventarOnScreen.prototype.get_image_for_inventar_item = function (item) {
    var object = MapObject_1.default.get(item);
    if (!object) return this.images.get(ImageResources_1.ImageID.OTHER__ERROR);
    var visual_component = object.get(VisualComponent_1.default);
    if (!visual_component) return this.images.get(ImageResources_1.ImageID.OTHER__ERROR);
    var image = this.images.get(visual_component.icon);
    if (!image) return this.images.get(ImageResources_1.ImageID.OTHER__ERROR);
    return image;
  };

  return InventarOnScreen;
}();

exports.default = InventarOnScreen;
},{"../../ts_library/space/SimpleShapes":"fgAD","../../logic/components/InventarComponent":"hEXs","../../logic/objects/MapObject":"BVhu","../../assets/ImageResources":"n9mu","../../logic/components/VisualComponent":"ZpDG"}],"V2d0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function create_timed_function(interval_in_seconds, callback) {
  var seconds_until_trigger = interval_in_seconds;
  return function (delta_seconds) {
    seconds_until_trigger -= delta_seconds;

    while (seconds_until_trigger < 0) {
      seconds_until_trigger += interval_in_seconds;
      callback();
    }
  };
}

exports.create_timed_function = create_timed_function;

function create_timed_boolean(interval_in_seconds) {
  var seconds_until_trigger = interval_in_seconds;
  return function (delta_seconds) {
    seconds_until_trigger -= delta_seconds;

    if (seconds_until_trigger < 0) {
      seconds_until_trigger += interval_in_seconds;
      return true;
    }

    return false;
  };
}

exports.create_timed_boolean = create_timed_boolean;

function create_timed_array(interval_in_seconds) {
  var counter = 0;
  var seconds_until_trigger = interval_in_seconds;
  var array = new Array();
  return function (delta_seconds) {
    seconds_until_trigger -= delta_seconds;

    while (seconds_until_trigger < 0) {
      seconds_until_trigger += interval_in_seconds;
      array.push(counter++);
    }

    return array;
  };
}

exports.create_timed_array = create_timed_array;

function create_timed_array_elements(interval_in_seconds) {
  var seconds_until_trigger = interval_in_seconds;
  return function (delta_seconds) {
    var array = new Array();
    var counter = 0;
    seconds_until_trigger -= delta_seconds;

    while (seconds_until_trigger < 0) {
      seconds_until_trigger += interval_in_seconds;
      array.push(counter++);
    }

    return array;
  };
}

exports.create_timed_array_elements = create_timed_array_elements;
},{}],"mUmB":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var DestroyObjectTask_1 = __importDefault(require("../tasks/DestroyObjectTask"));

var HitPointsComponent =
/** @class */
function (_super) {
  __extends(HitPointsComponent, _super);

  function HitPointsComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.current = 10;
    _this.max = 10;
    return _this;
  }

  HitPointsComponent.prototype.update = function (delta_seconds, self) {
    if (this.current <= 0) return [new DestroyObjectTask_1.default(self.instance_ID)];
    return [];
  };

  return HitPointsComponent;
}(MapObjectComponent_1.default);

exports.default = HitPointsComponent;
},{"./MapObjectComponent":"SlkT","../tasks/DestroyObjectTask":"HMDK"}],"oEgK":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var MapObject_1 = __importDefault(require("../objects/MapObject"));

var HitPointsComponent_1 = __importDefault(require("../components/HitPointsComponent"));

var DamageObjectTask =
/** @class */
function (_super) {
  __extends(DamageObjectTask, _super);

  function DamageObjectTask(target_id, amount) {
    var _this = _super.call(this) || this;

    _this.target_id = target_id;
    _this.amount = amount;
    return _this;
  }

  ;

  DamageObjectTask.prototype.execute = function (game_state) {
    var object = MapObject_1.default.get(this.target_id);
    if (!object) return game_state;
    var health = object.get(HitPointsComponent_1.default);
    if (!health) return game_state;
    health.current -= this.amount;
    return game_state;
  };

  return DamageObjectTask;
}(Task_1.Task);

exports.default = DamageObjectTask;
},{"./Task":"mo7A","../objects/MapObject":"BVhu","../components/HitPointsComponent":"mUmB"}],"psSw":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var Timed_1 = require("../../ts_library/utility/Timed");

var DamageObjectTask_1 = __importDefault(require("../tasks/DamageObjectTask"));

var HungerComponent =
/** @class */
function (_super) {
  __extends(HungerComponent, _super);

  function HungerComponent(object) {
    var _this = _super.call(this) || this;

    _this.urge_to_eat = 0;
    _this.ticks_before_damage = 0;
    _this.every_second = Timed_1.create_timed_array_elements(1);
    _this.object_id = object.instance_ID;
    return _this;
  }

  HungerComponent.prototype.update = function (delta_seconds) {
    var _this = this;

    this.urge_to_eat = Math.min(this.urge_to_eat + delta_seconds * 2, 100);
    if (this.urge_to_eat < 100) return [];
    return this.every_second(delta_seconds).map(function () {
      return new DamageObjectTask_1.default(_this.object_id, 0.25);
    });
  };

  return HungerComponent;
}(MapObjectComponent_1.default);

exports.default = HungerComponent;
},{"./MapObjectComponent":"SlkT","../../ts_library/utility/Timed":"V2d0","../tasks/DamageObjectTask":"oEgK"}],"Pvd8":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HungerComponent_1 = __importDefault(require("../../logic/components/HungerComponent"));

var HungerOnScreen =
/** @class */
function () {
  function HungerOnScreen(context, images, display_rect) {
    this.context = context;
    this.images = images;
    this.display_rect = display_rect;
  }

  HungerOnScreen.prototype.display = function (object) {
    var hunger = object.get(HungerComponent_1.default);
    if (!hunger) return;
    var bar_width = this.display_rect.width();
    var percentage = 1 - hunger.urge_to_eat / 100.0;
    this.context.font = "32px sans-serif";
    this.context.fillStyle = "gray";
    this.context.fillRect(this.display_rect.left, this.display_rect.top, bar_width, this.display_rect.height());
    this.context.fillStyle = "yellow";
    this.context.fillRect(this.display_rect.left, this.display_rect.top, percentage * bar_width, this.display_rect.height());
    this.context.fillStyle = "black";
    this.context.fillText('Hunger', Math.max(10, percentage * bar_width - 130), this.display_rect.top + this.display_rect.height() / 2 + 12);
  };

  return HungerOnScreen;
}();

exports.default = HungerOnScreen;
},{"../../logic/components/HungerComponent":"psSw"}],"W3w5":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HitPointsComponent_1 = __importDefault(require("../../logic/components/HitPointsComponent"));

var LifeOnScreen =
/** @class */
function () {
  function LifeOnScreen(context, images, display_rect) {
    this.context = context;
    this.images = images;
    this.display_rect = display_rect;
  }

  LifeOnScreen.prototype.display = function (object) {
    var hitpoints = object.get(HitPointsComponent_1.default);
    if (!hitpoints) return;
    var bar_width = this.display_rect.width();
    var percentage = Math.max(0, hitpoints.current) / hitpoints.max;
    this.context.font = "32px sans-serif";
    this.context.fillStyle = "gray";
    this.context.fillRect(this.display_rect.left, this.display_rect.top, bar_width, this.display_rect.height());
    this.context.fillStyle = "red";
    this.context.fillRect(this.display_rect.left, this.display_rect.top, bar_width * percentage, this.display_rect.height());
    this.context.fillStyle = "black";
    this.context.fillText('Health', Math.max(10, percentage * bar_width - 130), this.display_rect.top + this.display_rect.height() / 2 + 12);
  };

  return LifeOnScreen;
}();

exports.default = LifeOnScreen;
},{"../../logic/components/HitPointsComponent":"mUmB"}],"ksSS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ImageResources_1 = require("../../assets/ImageResources");

var DayTimeOnScreen =
/** @class */
function () {
  function DayTimeOnScreen(context, images, display_rect) {
    this.context = context;
    this.images = images;
    this.display_rect = display_rect;
  }

  DayTimeOnScreen.prototype.display = function (time_of_day_percent, day) {
    var image_moon = this.images.get(ImageResources_1.ImageID.OBJECT__MOON);
    var image_sun = this.images.get(ImageResources_1.ImageID.OBJECT__SUN);
    var center = this.display_rect.center();
    var size = 32;
    var circle_radius_x = this.display_rect.width() / 2 - size / 2;
    var circle_radius_y = this.display_rect.height() / 2 - size / 2;
    var sun_strength = Math.min(1, Math.max(-0.1, Math.sin((time_of_day_percent - 0.25) * Math.PI * 2)) + 0.2);
    var moon_strength = Math.min(1, Math.max(-0.1, -Math.sin((time_of_day_percent - 0.25) * Math.PI * 2)) + 0.2);
    var sx = center.x - Math.sin(time_of_day_percent * Math.PI * 2) * circle_radius_x - size / 2;
    var sy = center.y + Math.cos(time_of_day_percent * Math.PI * 2) * circle_radius_y - size / 2;
    var mx = center.x + Math.sin(time_of_day_percent * Math.PI * 2) * circle_radius_x - size / 2;
    var my = center.y - Math.cos(time_of_day_percent * Math.PI * 2) * circle_radius_y - size / 2;
    this.context.globalAlpha = sun_strength;
    this.context.drawImage(image_sun, sx, sy, 32, 32);
    this.context.globalAlpha = moon_strength;
    this.context.drawImage(image_moon, mx, my, 32, 32);
    this.context.globalAlpha = 1;
    this.context.font = "24px fantasy";
    this.context.fillStyle = "white";
    this.context.fillText('Day ' + day, center.x - this.display_rect.width() / 5, center.y + 8);
  };

  return DayTimeOnScreen;
}();

exports.default = DayTimeOnScreen;
},{"../../assets/ImageResources":"n9mu"}],"S3Ae":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InfectionOnScreen =
/** @class */
function () {
  function InfectionOnScreen(context, images, display_rect) {
    this.context = context;
    this.images = images;
    this.display_rect = display_rect;
  }

  InfectionOnScreen.prototype.display = function (infection_count) {
    if (infection_count < 20) {
      this.context.fillStyle = "white";
    } else if (infection_count < 40) {
      this.context.fillStyle = "green";
    } else if (infection_count < 100) {
      this.context.fillStyle = "orange";
    } else if (infection_count < 250) {
      this.context.fillStyle = "red";
    }

    this.context.font = "32px monospace";
    this.context.fillText('Count: ' + infection_count, this.display_rect.left, this.display_rect.top + this.display_rect.height() / 2 + 12);
  };

  return InfectionOnScreen;
}();

exports.default = InfectionOnScreen;
},{}],"fYsn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function display_number_on_screen(context) {
  return function (x, y) {
    return function (printing_number) {
      context.font = "32px monospace";
      context.fillStyle = "red";
      context.fillText(printing_number.toFixed(2), 20, 20);
    };
  };
}

exports.default = display_number_on_screen;
},{}],"vnHf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var Camera =
/** @class */
function () {
  function Camera() {
    this._map_source_rect = SimpleShapes_1.Rect.from_boundries(0, 0, 1, 1);
    this._display_target_rect = SimpleShapes_1.Rect.from_boundries(0, 0, 1, 1);
  }

  Object.defineProperty(Camera.prototype, "map_source_rect", {
    get: function get() {
      return this._map_source_rect;
    },
    set: function set(rect) {
      this._map_source_rect = rect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Camera.prototype, "display_target_rect", {
    get: function get() {
      return this._display_target_rect;
    },
    set: function set(rect) {
      this._display_target_rect = rect;
    },
    enumerable: true,
    configurable: true
  });

  Camera.prototype.get_field_size_in_pixels = function () {
    var x = this.display_target_rect.width() / this.map_source_rect.width();
    var y = this.display_target_rect.height() / this.map_source_rect.height();
    return {
      x: x,
      y: y
    };
  };

  Camera.prototype.get_camera_without_stretching = function () {
    var original_field_size = this.get_field_size_in_pixels();
    var camera = new Camera();
    camera.map_source_rect = this.map_source_rect;
    camera.display_target_rect = this.display_target_rect;
    var space_x = (original_field_size.x - original_field_size.y) * this.map_source_rect.width();
    var space_y = (original_field_size.y - original_field_size.x) * this.map_source_rect.height();

    if (space_x > 0) {
      camera.display_target_rect.move_by(space_x / 2, 0);
      camera.display_target_rect.right -= space_x;
    } else if (space_y > 0) {
      camera.display_target_rect.move_by(0, space_y);
      camera.display_target_rect.bottom -= space_y;
    }

    return camera;
  };

  return Camera;
}();

exports.Camera = Camera;

var WorldMapVisualizer =
/** @class */
function () {
  function WorldMapVisualizer(context, image_manager) {
    this.context = context;
    this.image_manager = image_manager;
    this.camera = new Camera();
  }

  return WorldMapVisualizer;
}();

exports.WorldMapVisualizer = WorldMapVisualizer;
},{"../../ts_library/space/SimpleShapes":"fgAD"}],"JHBG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleShapes_1 = require("../../../ts_library/space/SimpleShapes");

var WorldMapVisualizer_1 = require("../WorldMapVisualizer");

var FieldDrawer =
/** @class */
function () {
  function FieldDrawer(context, image_manager) {
    var _this = this;

    this.camera = new WorldMapVisualizer_1.Camera();
    this.next_field_pixel_size = {
      x: 32,
      y: 32
    };
    this.next_field_screen_position = new SimpleShapes_1.Point(0, 0);
    this.partial_field_drawers = [];

    this.draw_part_field_function = function (image, offset) {
      if (offset === void 0) {
        offset = new SimpleShapes_1.Point(0, 0);
      }

      var field_size = _this.next_field_pixel_size;

      var screen_position = _this.next_field_screen_position.add(offset.mul(field_size));

      _this.context.drawImage(image, screen_position.x, screen_position.y, field_size.x, field_size.y);
    };

    this.context = context;
    this.image_manager = image_manager;
  }

  FieldDrawer.prototype.get_visual_data_for_field = function (field) {
    return {};
  };

  FieldDrawer.prototype.add = function (field_part_drrawer) {
    this.partial_field_drawers.push(field_part_drrawer);
  };

  FieldDrawer.prototype.get_drawer_functions = function () {
    var _this = this;

    var non_distorted_camera = this.camera.get_camera_without_stretching();
    this.next_field_pixel_size = non_distorted_camera.get_field_size_in_pixels();
    return this.partial_field_drawers.map(function (part_drawer) {
      return function (field) {
        var data = _this.get_visual_data_for_field(field);

        _this.next_field_screen_position = field.location.sub(non_distorted_camera.map_source_rect.left_top()).mul(_this.next_field_pixel_size).add(non_distorted_camera.display_target_rect.left_top());
        part_drawer.draw(_this.draw_part_field_function, field, data);
      };
    });
  };

  ;
  return FieldDrawer;
}();

exports.default = FieldDrawer;
},{"../../../ts_library/space/SimpleShapes":"fgAD","../WorldMapVisualizer":"vnHf"}],"cAzr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TerrainTypeID;

(function (TerrainTypeID) {
  TerrainTypeID[TerrainTypeID["INDOOR_SHOP"] = 0] = "INDOOR_SHOP";
  TerrainTypeID[TerrainTypeID["OUTDOOR_GRAS"] = 1] = "OUTDOOR_GRAS";
})(TerrainTypeID = exports.TerrainTypeID || (exports.TerrainTypeID = {}));
},{}],"SAPV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FieldPartDrawer =
/** @class */
function () {
  function FieldPartDrawer() {}

  return FieldPartDrawer;
}();

exports.FieldPartDrawer = FieldPartDrawer;
},{}],"OL76":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ImageResources_1 = require("../../../assets/ImageResources");

var TerrainResources_1 = require("../../../assets/TerrainResources");

var FieldPartDrawer_1 = require("./FieldPartDrawer");

var TerrainDrawer =
/** @class */
function (_super) {
  __extends(TerrainDrawer, _super);

  function TerrainDrawer(images) {
    var _this = _super.call(this) || this;

    _this.images = images;
    return _this;
  }

  TerrainDrawer.prototype.draw = function (draw, field, visual_data) {
    var terrain_image_id = TerrainDrawer.get_image_for_terrain_type(field.terrain);

    if (terrain_image_id !== null) {
      var terrain_image = this.images.get(terrain_image_id);
      draw(terrain_image);
    }
  };

  TerrainDrawer.get_image_for_terrain_type = function (terrain) {
    switch (terrain.type) {
      case TerrainResources_1.TerrainTypeID.INDOOR_SHOP:
        return ImageResources_1.ImageID.TERRAIN__INDOOR_SHOP;

      case TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS:
        return ImageResources_1.ImageID.TERRAIN__OUTDOOR_GRAS;

      default:
        return null;
    }
  };

  return TerrainDrawer;
}(FieldPartDrawer_1.FieldPartDrawer);

exports.TerrainDrawer = TerrainDrawer;
},{"../../../assets/ImageResources":"n9mu","../../../assets/TerrainResources":"cAzr","./FieldPartDrawer":"SAPV"}],"BWOB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MapObjectTypeID;

(function (MapObjectTypeID) {
  MapObjectTypeID[MapObjectTypeID["PLAYER"] = 0] = "PLAYER";
  MapObjectTypeID[MapObjectTypeID["PAPER_ROLL"] = 1] = "PAPER_ROLL";
  MapObjectTypeID[MapObjectTypeID["PAPER_BLOB"] = 2] = "PAPER_BLOB";
  MapObjectTypeID[MapObjectTypeID["SPRAY"] = 3] = "SPRAY";
  MapObjectTypeID[MapObjectTypeID["SPRAY_BLOB"] = 4] = "SPRAY_BLOB";
  MapObjectTypeID[MapObjectTypeID["NUDEL"] = 5] = "NUDEL";
  MapObjectTypeID[MapObjectTypeID["VIRUS"] = 6] = "VIRUS";
  MapObjectTypeID[MapObjectTypeID["WALL"] = 7] = "WALL";
  MapObjectTypeID[MapObjectTypeID["FURNITURE1"] = 8] = "FURNITURE1";
  MapObjectTypeID[MapObjectTypeID["DISH"] = 9] = "DISH";
  MapObjectTypeID[MapObjectTypeID["TOILET"] = 10] = "TOILET";
  MapObjectTypeID[MapObjectTypeID["CLINICAL_PALLETTE"] = 11] = "CLINICAL_PALLETTE";
})(MapObjectTypeID = exports.MapObjectTypeID || (exports.MapObjectTypeID = {}));

;
},{}],"XFiS":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var Direction_1 = require("../../ts_library/space/Direction");

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var PositionComponent_1 = require("./PositionComponent");

var MoveObjectTask_1 = require("../tasks/MoveObjectTask");

var MovingComponent =
/** @class */
function (_super) {
  __extends(MovingComponent, _super);

  function MovingComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.position_buffer = null;
    _this.previous_position = new SimpleShapes_1.Point(0, 0);
    _this.look_direction = Direction_1.Direction.DOWN;
    _this.time_needed_to_move = 1;
    _this.progress = false;
    return _this;
  }

  MovingComponent.prototype.update = function (delta_seconds, self) {
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];

    if (this.progress !== false) {
      this.progress = Math.min(1, this.progress + delta_seconds / this.time_needed_to_move);

      if (this.progress >= 1) {
        this.progress = false;
      }
    }

    return [];
  };

  MovingComponent.prototype.handle = function (game_state, task, self) {
    if (!(task instanceof MoveObjectTask_1.MoveObjectTask)) return game_state;
    if (task.object_id !== self.instance_ID) return game_state;
    this.previous_position = task.source;
    this.progress = 0;
    return game_state;
  };

  return MovingComponent;
}(MapObjectComponent_1.default);

exports.default = MovingComponent;
},{"./MapObjectComponent":"SlkT","../../ts_library/space/Direction":"EbgX","../../ts_library/space/SimpleShapes":"fgAD","./PositionComponent":"SUj7","../tasks/MoveObjectTask":"Em0L"}],"uEVL":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
;

var ImageResources_1 = require("../../../assets/ImageResources");

var MapObjectResources_1 = require("../../../assets/MapObjectResources");

var FieldPartDrawer_1 = require("./FieldPartDrawer");

var MovingComponent_1 = __importDefault(require("../../../logic/components/MovingComponent"));

var VisualComponent_1 = __importDefault(require("../../../logic/components/VisualComponent"));

var PositionComponent_1 = require("../../../logic/components/PositionComponent");

var ObjectDrawer =
/** @class */
function (_super) {
  __extends(ObjectDrawer, _super);

  function ObjectDrawer(images) {
    var _this = _super.call(this) || this;

    _this.images = images;
    return _this;
  }

  ObjectDrawer.prototype.draw = function (draw, field, visual_data) {
    var _this = this;

    field.objects.sort(function (a, b) {
      var visual_a = a.get(VisualComponent_1.default);
      var visual_b = b.get(VisualComponent_1.default);
      return ((visual_a === null || visual_a === void 0 ? void 0 : visual_a.priority) || 0) - ((visual_b === null || visual_b === void 0 ? void 0 : visual_b.priority) || 0);
    }).forEach(function (object) {
      var object_image_id = ObjectDrawer.get_image_for_object_type(object);
      if (object_image_id === null) return;

      var object_image = _this.images.get(object_image_id);

      var position = object.get(PositionComponent_1.PositionComponent);
      var moving = object.get(MovingComponent_1.default);
      if (!position || !moving || moving.progress === false || moving.previous_position === null) return draw(object_image);
      var offset = position.position.sub(moving.previous_position).mul(moving.progress - 1);
      draw(object_image, offset);
    });
  };

  ObjectDrawer.get_image_for_object_type = function (object) {
    if (!object) return null;
    var moving_component = object.get(MovingComponent_1.default);

    switch (object.type) {
      case MapObjectResources_1.MapObjectTypeID.PAPER_ROLL:
        return ImageResources_1.ImageID.OBJECT__PAPER_ROLL;

      case MapObjectResources_1.MapObjectTypeID.NUDEL:
        return ImageResources_1.ImageID.OBJECT__NUDEL4;

      case MapObjectResources_1.MapObjectTypeID.SPRAY:
        return ImageResources_1.ImageID.OBJECT__SPRAY;

      case MapObjectResources_1.MapObjectTypeID.WALL:
        return ImageResources_1.ImageID.OBJECT__WALL2;

      case MapObjectResources_1.MapObjectTypeID.FURNITURE1:
        return ImageResources_1.ImageID.OBJECT__FURNITURE1;

      case MapObjectResources_1.MapObjectTypeID.VIRUS:
        return ImageResources_1.ImageID.UNIT__VIRUS;

      case MapObjectResources_1.MapObjectTypeID.PLAYER:
        if (moving_component) {
          return [ImageResources_1.ImageID.UNIT__SMILEY_LEFT, ImageResources_1.ImageID.UNIT__SMILEY_UP, ImageResources_1.ImageID.UNIT__SMILEY_RIGHT, ImageResources_1.ImageID.UNIT__SMILEY_DOWN][moving_component.look_direction];
        }

        return ImageResources_1.ImageID.UNIT__SMILEY_DOWN;

      default:
        if (object.type in ObjectDrawer.failed_at_object_types === false) console.error('No custom Image specified for Object ' + object.type);
        ObjectDrawer.failed_at_object_types.push(object.type);
        var visual = object.get(VisualComponent_1.default);
        if (!visual) return ImageResources_1.ImageID.OTHER__ERROR;
        return visual.image;
    }
  };

  ObjectDrawer.failed_at_object_types = [];
  return ObjectDrawer;
}(FieldPartDrawer_1.FieldPartDrawer);

exports.ObjectDrawer = ObjectDrawer;
},{"../../../assets/ImageResources":"n9mu","../../../assets/MapObjectResources":"BWOB","./FieldPartDrawer":"SAPV","../../../logic/components/MovingComponent":"XFiS","../../../logic/components/VisualComponent":"ZpDG","../../../logic/components/PositionComponent":"SUj7"}],"KZdV":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WorldMapVisualizer_1 = require("../WorldMapVisualizer");

var FieldDrawer_1 = __importDefault(require("./FieldDrawer"));

var TerrainDrawer_1 = require("./TerrainDrawer");

var ObjectDrawer_1 = require("./ObjectDrawer");

var SimpleShapes_1 = require("../../../ts_library/space/SimpleShapes");

var WorldMapVisualizerDefault =
/** @class */
function (_super) {
  __extends(WorldMapVisualizerDefault, _super);

  function WorldMapVisualizerDefault(context, image_manager) {
    var _this = _super.call(this, context, image_manager) || this;

    var _a = __read(WorldMapVisualizerDefault.create_offscreen_canvas(), 2),
        offscreen_canvas = _a[0],
        offscreen_context = _a[1];

    _this.field_drawer = new FieldDrawer_1.default(offscreen_context, _this.image_manager);
    _this.offscreen_canvas = offscreen_canvas;
    _this.offscreen_context = offscreen_context;

    _this.field_drawer.add(new TerrainDrawer_1.TerrainDrawer(_this.image_manager));

    _this.field_drawer.add(new ObjectDrawer_1.ObjectDrawer(_this.image_manager));

    _this.field_drawer.camera = _this.camera;
    offscreen_context.imageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    return _this;
  }

  WorldMapVisualizerDefault.create_offscreen_canvas = function () {
    var offscreen_canvas = new OffscreenCanvas(800, 600);
    var context = offscreen_canvas.getContext('2d');
    if (!context) throw new Error('Unable to create context');
    return [offscreen_canvas, context];
  };

  WorldMapVisualizerDefault.prototype.display = function (world_map, delta_seconds) {
    var target_width = this.camera.display_target_rect.right;
    var target_height = this.camera.display_target_rect.bottom;

    if (Math.abs(target_width - this.offscreen_canvas.width) || Math.abs(target_height - this.offscreen_canvas.height)) {
      this.offscreen_canvas.width = target_width;
      this.offscreen_canvas.height = target_height;
      this.offscreen_context.imageSmoothingEnabled = false;
    }

    this.offscreen_context.clearRect(this.camera.display_target_rect.left, this.camera.display_target_rect.top, target_width, target_height);
    var source_rect = SimpleShapes_1.Rect.from_boundries(Math.trunc(this.camera.map_source_rect.left), Math.trunc(this.camera.map_source_rect.top), Math.ceil(this.camera.map_source_rect.right), Math.ceil(this.camera.map_source_rect.bottom));
    this.field_drawer.get_drawer_functions().forEach(function (draw) {
      world_map.map_fields_in_rect(source_rect, draw);
    });
    var image_data = this.offscreen_context.getImageData(this.camera.display_target_rect.left, this.camera.display_target_rect.top, target_width, target_height);
    this.context.putImageData(image_data, this.camera.display_target_rect.left, this.camera.display_target_rect.top, 0, 0, target_width, target_height);
  };

  return WorldMapVisualizerDefault;
}(WorldMapVisualizer_1.WorldMapVisualizer);

exports.default = WorldMapVisualizerDefault;
},{"../WorldMapVisualizer":"vnHf","./FieldDrawer":"JHBG","./TerrainDrawer":"OL76","./ObjectDrawer":"uEVL","../../../ts_library/space/SimpleShapes":"fgAD"}],"Xj3t":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GameMode;

(function (GameMode) {
  GameMode[GameMode["INITIAL"] = 0] = "INITIAL";
  GameMode[GameMode["LOADING"] = 1] = "LOADING";
  GameMode[GameMode["PLAYING"] = 2] = "PLAYING";
  GameMode[GameMode["PAUSE"] = 3] = "PAUSE";
  GameMode[GameMode["INTERMISSION"] = 4] = "INTERMISSION";
  GameMode[GameMode["MENU"] = 5] = "MENU";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
},{}],"NGgy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LoosingScreen =
/** @class */
function () {
  function LoosingScreen(context) {
    this.context = context;
  }

  LoosingScreen.prototype.display = function (delta_seconds, game_state) {
    this.context.font = '64px gothic';
    this.context.fillStyle = 'red';
    this.context.fillText('You died', 50, 50, 200);
    this.context.font = '48px fantasy';
    this.context.fillStyle = 'gold';
    this.context.fillText('Day ' + game_state.day, 150, 150, 200);
    this.context.font = '24px fantasy';
    this.context.fillStyle = 'white';
    this.context.fillText('Press SPACE to retry', 200, 550, 300);
    this.context.font = '16px fantasy';
    this.context.fillText('Press ESC to skip level', 500, 550, 200);
  };

  return LoosingScreen;
}();

exports.default = LoosingScreen;
},{}],"fK4z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WinningScreen =
/** @class */
function () {
  function WinningScreen(context) {
    this.context = context;
  }

  WinningScreen.prototype.display = function (delta_seconds, game_state) {
    this.context.font = '64px gothic';
    this.context.fillStyle = 'green';
    this.context.fillText('You survived', 50, 50, 200);
    this.context.font = '48px fantasy';
    this.context.fillStyle = 'gold';
    this.context.fillText('Day ' + game_state.day, 150, 150, 200);
    this.context.font = '24px fantasy';
    this.context.fillStyle = 'white';
    this.context.fillText('Press SPACE to continue', 200, 550, 300);
  };

  return WinningScreen;
}();

exports.default = WinningScreen;
},{}],"fCby":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TimeOfDayEffect =
/** @class */
function () {
  function TimeOfDayEffect(context, target) {
    this.context = context;
    this.target = target;
  }

  TimeOfDayEffect.prototype.display = function (delta_seconds, game_state) {
    var time_of_day_p = game_state.time_of_day / 24;

    if (time_of_day_p < 0.25 || time_of_day_p > 0.75) {
      var time_of_night_p = (time_of_day_p + 1 - 0.75) % 1 * 2;
      var strength = (time_of_day_p - 0.25) * (time_of_day_p - 0.75) * 4;
      this.context.fillStyle = "hsla(" + (time_of_night_p * 0.25 + 0.5) * 365 % 356 + ", 90%, 10%, " + strength + ")";
      this.context.fillRect(0, 0, this.target.width(), this.target.height());
    }
  };

  return TimeOfDayEffect;
}();

exports.default = TimeOfDayEffect;
},{}],"fhts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InventarOnScreen_1 = __importDefault(require("../visualization/components/InventarOnScreen"));

var HungerOnScreen_1 = __importDefault(require("../visualization/components/HungerOnScreen"));

var LifeOnScreen_1 = __importDefault(require("../visualization/components/LifeOnScreen"));

var DayTimeOnScreen_1 = __importDefault(require("../visualization/components/DayTimeOnScreen"));

var InfectionOnScreen_1 = __importDefault(require("../visualization/components/InfectionOnScreen"));

var NumberOnScreen_1 = __importDefault(require("../visualization/utils/NumberOnScreen"));

var WorldMapVisualizerDefault_1 = __importDefault(require("../visualization/visualize_world/default/WorldMapVisualizerDefault"));

var SimpleShapes_1 = require("../ts_library/space/SimpleShapes");

var GameState_1 = require("./GameState");

var GameMode_1 = require("./GameMode");

var LoosingScreen_1 = __importDefault(require("../visualization/screens/LoosingScreen"));

var WinningScreen_1 = __importDefault(require("../visualization/screens/WinningScreen"));

var MapObject_1 = __importDefault(require("../logic/objects/MapObject"));

var TimeOfDayEffect_1 = __importDefault(require("../visualization/effect/TimeOfDayEffect"));

var GameVisualizer =
/** @class */
function () {
  function GameVisualizer(context, images) {
    this.fps_counter = NumberOnScreen_1.default(context)(0, 0);
    this.inventar = new InventarOnScreen_1.default(context, images, new SimpleShapes_1.Point(150, 500), new SimpleShapes_1.Point(2, 8));
    this.hunger = new HungerOnScreen_1.default(context, images, SimpleShapes_1.Rect.from_boundries(0, 500, 650, 550));
    this.life = new LifeOnScreen_1.default(context, images, SimpleShapes_1.Rect.from_boundries(0, 550, 650, 600));
    this.daytime = new DayTimeOnScreen_1.default(context, images, SimpleShapes_1.Rect.from_boundries(650, 500, 800, 600));
    this.infection = new InfectionOnScreen_1.default(context, images, SimpleShapes_1.Rect.from_boundries(400, 0, 650, 50));
    this.loosing_screen = new LoosingScreen_1.default(context);
    this.winning_screen = new WinningScreen_1.default(context);
    this.world_map = new WorldMapVisualizerDefault_1.default(context, images);
    this.world_map.camera.map_source_rect = SimpleShapes_1.Rect.from_boundries(0, 0, 14, 10);
    this.world_map.camera.display_target_rect = SimpleShapes_1.Rect.from_boundries(0, 0, 650, 500);
    this.daytime_effect = new TimeOfDayEffect_1.default(context, SimpleShapes_1.Rect.from_boundries(0, 0, 650, 500));
  }

  GameVisualizer.prototype.display = function (delta_seconds, game_state) {
    switch (game_state.modus) {
      case GameMode_1.GameMode.INTERMISSION:
        this.display_intersection(delta_seconds, game_state);
        break;

      case GameMode_1.GameMode.PLAYING:
      case GameMode_1.GameMode.LOADING:
      case GameMode_1.GameMode.PAUSE:
      default:
        this.display_playing(delta_seconds, game_state);
        break;
    }
  };

  GameVisualizer.prototype.display_playing = function (delta_seconds, game_state) {
    this.world_map.camera.map_source_rect.set_center(game_state.camera_position);
    this.world_map.display(game_state.world_map, delta_seconds);
    this.daytime_effect.display(delta_seconds, game_state);

    if (game_state.selected) {
      var selected = MapObject_1.default.get(game_state.selected);

      if (selected) {
        this.inventar.display(selected);
        this.hunger.display(selected);
        this.life.display(selected);
      }
    } // this.context.fillStyle = "gray";
    //this.context.fillRect(650, 500, 150, 100);


    this.daytime.display(game_state.time_of_day / 24, game_state.day); // this.fps_counter(game_state.calculated.fps);
    //this.visualizers.infection.display(this.infection_count);
  };

  GameVisualizer.prototype.display_intersection = function (delta_seconds, game_state) {
    //if (game_state.has_won)
    switch (game_state.post_game_stats.won_or_lost) {
      case GameState_1.GameResult.TIE:
      case GameState_1.GameResult.LOST:
        this.loosing_screen.display(delta_seconds, game_state);
        break;

      case GameState_1.GameResult.WON:
        this.winning_screen.display(delta_seconds, game_state);
        break;
    } // if (this.current_intersect !== null && this.intersections[this.game_state.current_level]) {
    //     let intersect_image_id = this.intersections[this.game_state.current_level][this.current_intersect];
    //     if (intersect_image_id) {
    //         const image = this.images.get(intersect_image_id);
    //         this.context.drawImage(image, 0, 0);
    //     }
    // }

  };

  return GameVisualizer;
}();

exports.default = GameVisualizer;
},{"../visualization/components/InventarOnScreen":"sItu","../visualization/components/HungerOnScreen":"Pvd8","../visualization/components/LifeOnScreen":"W3w5","../visualization/components/DayTimeOnScreen":"ksSS","../visualization/components/InfectionOnScreen":"S3Ae","../visualization/utils/NumberOnScreen":"fYsn","../visualization/visualize_world/default/WorldMapVisualizerDefault":"KZdV","../ts_library/space/SimpleShapes":"fgAD","./GameState":"kbIU","./GameMode":"Xj3t","../visualization/screens/LoosingScreen":"NGgy","../visualization/screens/WinningScreen":"fK4z","../logic/objects/MapObject":"BVhu","../visualization/effect/TimeOfDayEffect":"fCby"}],"igT0":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameMode_1 = require("../../main/GameMode");

var System_1 = __importDefault(require("./System"));

var UpdateMapSystem =
/** @class */
function (_super) {
  __extends(UpdateMapSystem, _super);

  function UpdateMapSystem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  UpdateMapSystem.prototype.update = function (delta_seconds, game_state) {
    var _a;

    if (game_state.modus !== GameMode_1.GameMode.PLAYING) return game_state;

    (_a = game_state.tasks).push.apply(_a, __spread(game_state.world_map.update(delta_seconds, game_state)));

    return game_state;
  };

  return UpdateMapSystem;
}(System_1.default);

exports.default = UpdateMapSystem;
},{"../../main/GameMode":"Xj3t","./System":"c0W6"}],"tLR9":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var GameMode_1 = require("../../main/GameMode");

var TaskHandleSystem =
/** @class */
function (_super) {
  __extends(TaskHandleSystem, _super);

  function TaskHandleSystem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TaskHandleSystem.prototype.update = function (delta_seconds, game_state) {
    var _this = this;

    if (game_state.modus !== GameMode_1.GameMode.PLAYING) return game_state;
    game_state = game_state.tasks.reduce(function (game_state, task) {
      return _this.handle_task(task, game_state);
    }, game_state);
    game_state.tasks = [];
    return game_state;
  };

  TaskHandleSystem.prototype.handle_task = function (task, game_state) {
    var is_allowed = task.before_execute(game_state);
    if (!is_allowed) return game_state;
    game_state = game_state.world_map.get_fields_in_rect(game_state.world_map.get_map_boundries()).reduce(function (game_state, field) {
      return field.objects.reduce(function (game_state, object) {
        return object.handle(game_state, task);
      }, game_state);
    }, game_state);
    game_state = task.execute(game_state);
    return game_state;
  };

  return TaskHandleSystem;
}(System_1.default);

exports.default = TaskHandleSystem;
},{"./System":"c0W6","../../main/GameMode":"Xj3t"}],"Sd28":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputMoveTask =
/** @class */
function (_super) {
  __extends(InputMoveTask, _super);

  function InputMoveTask(direction) {
    var _this = _super.call(this) || this;

    _this.direction = direction;
    _this.controlled_callbacks = [];
    return _this;
  }

  InputMoveTask.prototype.execute = function (game_state) {
    var new_game_state = this.controlled_callbacks.reduce(function (game_state, callback) {
      return callback(game_state);
    }, game_state);
    this.controlled_callbacks = [];
    return new_game_state;
  };

  return InputMoveTask;
}(Task_1.Task);

exports.default = InputMoveTask;
},{"./Task":"mo7A"}],"nCYO":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputUseSprayTask =
/** @class */
function (_super) {
  __extends(InputUseSprayTask, _super);

  function InputUseSprayTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return InputUseSprayTask;
}(Task_1.Task);

exports.default = InputUseSprayTask;
},{"./Task":"mo7A"}],"tAPE":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputEatTask =
/** @class */
function (_super) {
  __extends(InputEatTask, _super);

  function InputEatTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return InputEatTask;
}(Task_1.Task);

exports.default = InputEatTask;
},{"./Task":"mo7A"}],"t39t":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputOpenMenuTask =
/** @class */
function (_super) {
  __extends(InputOpenMenuTask, _super);

  function InputOpenMenuTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return InputOpenMenuTask;
}(Task_1.Task);

exports.default = InputOpenMenuTask;
},{"./Task":"mo7A"}],"wx4U":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputTogglePauseTask =
/** @class */
function (_super) {
  __extends(InputTogglePauseTask, _super);

  function InputTogglePauseTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return InputTogglePauseTask;
}(Task_1.Task);

exports.default = InputTogglePauseTask;
},{"./Task":"mo7A"}],"LlP9":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var InputUsePaperTask =
/** @class */
function (_super) {
  __extends(InputUsePaperTask, _super);

  function InputUsePaperTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return InputUsePaperTask;
}(Task_1.Task);

exports.default = InputUsePaperTask;
},{"./Task":"mo7A"}],"l7X5":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var InputMoveTask_1 = __importDefault(require("../tasks/InputMoveTask"));

var InputUseSprayTask_1 = __importDefault(require("../tasks/InputUseSprayTask"));

var InputEatTask_copy_1 = __importDefault(require("../tasks/InputEatTask copy"));

var GameMode_1 = require("../../main/GameMode");

var InputOpenMenutask_1 = __importDefault(require("../tasks/InputOpenMenutask"));

var InputTogglePauseTask_1 = __importDefault(require("../tasks/InputTogglePauseTask"));

var InputUsePaperTask_1 = __importDefault(require("../tasks/InputUsePaperTask"));

var InputHandlingSystem =
/** @class */
function (_super) {
  __extends(InputHandlingSystem, _super);

  function InputHandlingSystem(input) {
    var _this = _super.call(this) || this;

    _this.tasks = [];

    input.on_direction_input = function (direction) {
      _this.tasks.push(new InputMoveTask_1.default(direction));

      return true;
    };

    input.on_use_spray = function () {
      _this.tasks.push(new InputUseSprayTask_1.default());

      return true;
    };

    input.on_use_paper = function () {
      _this.tasks.push(new InputUsePaperTask_1.default());

      return true;
    };

    input.on_eat = function () {
      _this.tasks.push(new InputEatTask_copy_1.default());

      return true;
    };

    input.on_request_menu = function () {
      _this.tasks.push(new InputOpenMenutask_1.default());

      return true;
    };

    input.on_pause = function () {
      _this.tasks.push(new InputTogglePauseTask_1.default());

      return true;
    };

    return _this;
  }

  InputHandlingSystem.prototype.update = function (delta_seconds, game_state) {
    var next_task = this.get_tasks().shift();
    if (next_task) this.handle_task(delta_seconds, game_state, next_task);
    return game_state;
  };

  InputHandlingSystem.prototype.get_tasks = function () {
    var buffer = this.tasks;
    this.tasks = [];
    return buffer;
  };

  InputHandlingSystem.prototype.handle_task = function (delta_seconds, game_state, task) {
    if (task instanceof InputTogglePauseTask_1.default) {
      switch (game_state.modus) {
        case GameMode_1.GameMode.PLAYING:
          game_state.modus = GameMode_1.GameMode.PAUSE;
          break;

        case GameMode_1.GameMode.PAUSE:
          game_state.modus = GameMode_1.GameMode.PLAYING;
          break;

        case GameMode_1.GameMode.INTERMISSION:
          game_state.modus = GameMode_1.GameMode.PLAYING;
          break;
      }

      game_state.tasks.push(task);
      return;
    }

    if (game_state.modus === GameMode_1.GameMode.PLAYING) game_state.tasks.push(task);
  };

  return InputHandlingSystem;
}(System_1.default);

exports.default = InputHandlingSystem;
},{"./System":"c0W6","../tasks/InputMoveTask":"Sd28","../tasks/InputUseSprayTask":"nCYO","../tasks/InputEatTask copy":"tAPE","../../main/GameMode":"Xj3t","../tasks/InputOpenMenutask":"t39t","../tasks/InputTogglePauseTask":"wx4U","../tasks/InputUsePaperTask":"LlP9"}],"b5KT":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var GameMode_1 = require("../../main/GameMode");

var TimeOfDaySystem =
/** @class */
function (_super) {
  __extends(TimeOfDaySystem, _super);

  function TimeOfDaySystem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeOfDaySystem.prototype.update = function (delta_seconds, game_state) {
    if (game_state.modus !== GameMode_1.GameMode.PLAYING) return game_state;
    game_state.time_of_day += delta_seconds * 2;

    if (game_state.time_of_day > 24) {
      game_state.time_of_day -= 24;
      game_state.day++;
    }

    return game_state;
  };

  return TimeOfDaySystem;
}(System_1.default);

exports.default = TimeOfDaySystem;
},{"./System":"c0W6","../../main/GameMode":"Xj3t"}],"ODNs":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var PositionComponent_1 = require("../components/PositionComponent");

var CreateObjectTask =
/** @class */
function (_super) {
  __extends(CreateObjectTask, _super);

  function CreateObjectTask(create_template, target, collision_mask) {
    if (collision_mask === void 0) {
      collision_mask = PositionComponent_1.CollisionGroups.MOVEABLE;
    }

    var _this = _super.call(this) || this;

    _this.create_template = create_template;
    _this.target = target;
    _this.collision_mask = collision_mask;
    return _this;
  }

  CreateObjectTask.prototype.before_execute = function (game_state) {
    var _this = this;

    var field = game_state.world_map.at(this.target);
    if (!field) return false;
    var is_walkable = field.objects.reduce(function (walkable, object) {
      var position = object.get(PositionComponent_1.PositionComponent);
      if (!position) return walkable;
      return walkable && !(position.collision_group & _this.collision_mask);
    }, true);
    if (!is_walkable) return false;
    return true;
  };

  CreateObjectTask.prototype.execute = function (game_state) {
    var field = game_state.world_map.at(this.target);
    if (!field) return game_state;
    var object = this.create_template(game_state);
    var position = object.get(PositionComponent_1.PositionComponent);

    if (position) {
      position.position = this.target.copy();
    }

    field.objects.push(object);
    return game_state;
  };

  return CreateObjectTask;
}(Task_1.Task);

exports.default = CreateObjectTask;
},{"./Task":"mo7A","../components/PositionComponent":"SUj7"}],"R0cs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleShapes_1 = require("../space/SimpleShapes");

var Direction_1 = require("../space/Direction");

function move_by_direction(target, direction, step) {
  switch (direction) {
    case Direction_1.Direction.LEFT:
      return target.move_by(new SimpleShapes_1.Point(-step, 0));

    case Direction_1.Direction.RIGHT:
      return target.move_by(new SimpleShapes_1.Point(step, 0));

    case Direction_1.Direction.UP:
      return target.move_by(new SimpleShapes_1.Point(0, -step));

    case Direction_1.Direction.DOWN:
      return target.move_by(new SimpleShapes_1.Point(0, step));
  }

  return target;
}

exports.move_by_direction = move_by_direction;

function direction_to_point(direction, step) {
  switch (direction) {
    case Direction_1.Direction.LEFT:
      return new SimpleShapes_1.Point(-step, 0);

    case Direction_1.Direction.RIGHT:
      return new SimpleShapes_1.Point(step, 0);

    case Direction_1.Direction.UP:
      return new SimpleShapes_1.Point(0, -step);

    case Direction_1.Direction.DOWN:
      return new SimpleShapes_1.Point(0, step);
  }
}

exports.direction_to_point = direction_to_point;
},{"../space/SimpleShapes":"fgAD","../space/Direction":"EbgX"}],"DpDN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function get_random_of_array(array) {
  if (array.length === 0) return null;
  var i = Math.floor(Math.random() * array.length);
  return array[i];
}

exports.get_random_of_array = get_random_of_array;
},{}],"RWZA":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var IsSprayComponent =
/** @class */
function (_super) {
  __extends(IsSprayComponent, _super);

  function IsSprayComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return IsSprayComponent;
}(MapObjectComponent_1.default);

exports.default = IsSprayComponent;
},{"./MapObjectComponent":"SlkT"}],"q75i":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var PositionComponent_1 = require("./PositionComponent");

var IsSprayComponent_1 = __importDefault(require("./IsSprayComponent"));

var DestroyObjectTask_1 = __importDefault(require("../tasks/DestroyObjectTask"));

var DieOnSprayComponent =
/** @class */
function (_super) {
  __extends(DieOnSprayComponent, _super);

  function DieOnSprayComponent() {
    return _super.call(this) || this;
  }

  DieOnSprayComponent.prototype.update = function (delta_seconds, self, game_state) {
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    var field = game_state.world_map.at(position.position);
    if (!field) return [];
    var sprays = field.objects.filter(function (object) {
      return object.get(IsSprayComponent_1.default);
    });
    if (sprays.length === 0) return [];
    return [new DestroyObjectTask_1.default(self.instance_ID)];
  };

  return DieOnSprayComponent;
}(MapObjectComponent_1.default);

exports.default = DieOnSprayComponent;
},{"./MapObjectComponent":"SlkT","./PositionComponent":"SUj7","./IsSprayComponent":"RWZA","../tasks/DestroyObjectTask":"HMDK"}],"cLFq":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var fromDirection_1 = require("../../ts_library/conversion/fromDirection");

var RandomObjects_1 = require("../../ts_library/utility/RandomObjects");

var PositionComponent_1 = require("./PositionComponent");

var MoveObjectTask_1 = require("../tasks/MoveObjectTask");

var Direction_1 = require("../../ts_library/space/Direction");

var InfectedWalkingComponent =
/** @class */
function (_super) {
  __extends(InfectedWalkingComponent, _super);

  function InfectedWalkingComponent() {
    var _this = _super.call(this) || this;

    _this.steps_interval_in_seconds = 1;
    _this.time_to_next_step = 0;
    _this.chance_to_move = 0.5;
    return _this;
  }

  InfectedWalkingComponent.prototype.update = function (delta_seconds, self, game_state) {
    // Check only in certain intervalls
    this.time_to_next_step -= delta_seconds;
    if (this.time_to_next_step > 0) return [];
    this.time_to_next_step += this.steps_interval_in_seconds; // With a random chance

    var daytime_p = game_state.time_of_day / 24 - 0.25;
    var night_strength = -Math.sin(daytime_p * Math.PI * 2) * 0.5 + 0.5;
    var current_chance_to_move = night_strength * night_strength * this.chance_to_move;
    if (Math.random() >= current_chance_to_move) return []; // determin valid neighbour fields

    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    var directions = [Direction_1.Direction.LEFT, Direction_1.Direction.UP, Direction_1.Direction.RIGHT, Direction_1.Direction.DOWN].reduce(function (list, direction) {
      var target = position.position.add(fromDirection_1.direction_to_point(direction, 1));
      var field = game_state.world_map.at(target);
      if (!field) return list;
      var is_colliding = field.objects.reduce(function (is_colliding, other) {
        var other_position = other.get(PositionComponent_1.PositionComponent);
        if (!other_position) return true;
        return is_colliding && 0 === (position.collision_mask & other_position.collision_group);
      }, false);
      if (is_colliding) return list;
      list.push(direction);
      return list;
    }, []); // pick a random direction

    var direction = RandomObjects_1.get_random_of_array(directions);
    if (direction === null) return [];
    var target = position.position.add(fromDirection_1.direction_to_point(direction, 1));
    var field = game_state.world_map.at(target);
    if (!field) return [];
    return [new MoveObjectTask_1.MoveObjectTask(position.position, target, self.instance_ID)];
  };

  InfectedWalkingComponent.NAME = "infected_walking";
  return InfectedWalkingComponent;
}(MapObjectComponent_1.default);

exports.default = InfectedWalkingComponent;
},{"./MapObjectComponent":"SlkT","../../ts_library/conversion/fromDirection":"R0cs","../../ts_library/utility/RandomObjects":"DpDN","./PositionComponent":"SUj7","../tasks/MoveObjectTask":"Em0L","../../ts_library/space/Direction":"EbgX"}],"LKDj":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var IsHumanComponent =
/** @class */
function (_super) {
  __extends(IsHumanComponent, _super);

  function IsHumanComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return IsHumanComponent;
}(MapObjectComponent_1.default);

exports.default = IsHumanComponent;
},{"./MapObjectComponent":"SlkT"}],"VryN":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var PositionComponent_1 = require("./PositionComponent");

var IsHumanComponent_1 = __importDefault(require("./IsHumanComponent"));

var DamageObjectTask_1 = __importDefault(require("../tasks/DamageObjectTask"));

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var DamageHumansComponent =
/** @class */
function (_super) {
  __extends(DamageHumansComponent, _super);

  function DamageHumansComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.interval_in_seconds = 1;
    _this.damage_per_tick = 1;
    _this.timer = 0;
    return _this;
  }

  DamageHumansComponent.prototype.update = function (delta_seconds, self, game_state) {
    var _this = this; // Do not work on daytime


    if (game_state.time_of_day > 6 && game_state.time_of_day < 18) return [];
    this.timer -= delta_seconds;
    if (this.timer > 0) return [];
    this.timer += this.interval_in_seconds;
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    var fields = game_state.world_map.get_fields_in_rect(SimpleShapes_1.Rect.from_point_with_size(position.position, 2, 2));
    if (!fields) return [];
    return fields.flatMap(function (field) {
      return field.objects.filter(function (object) {
        return object.has(IsHumanComponent_1.default);
      }).map(function (object) {
        return new DamageObjectTask_1.default(object.instance_ID, _this.damage_per_tick);
      });
    });
  };

  return DamageHumansComponent;
}(MapObjectComponent_1.default);

exports.default = DamageHumansComponent;
},{"./MapObjectComponent":"SlkT","./PositionComponent":"SUj7","./IsHumanComponent":"LKDj","../tasks/DamageObjectTask":"oEgK","../../ts_library/space/SimpleShapes":"fgAD"}],"PaVE":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var InfectedSpreadComponent_1 = __importDefault(require("../components/InfectedSpreadComponent"));

var DieOnSprayComponent_1 = __importDefault(require("../components/DieOnSprayComponent"));

var InfectedWalkingComponent_1 = __importDefault(require("../components/InfectedWalkingComponent"));

var HitPointsComponent_1 = __importDefault(require("../components/HitPointsComponent"));

var DamageHumansComponent_1 = __importDefault(require("../components/DamageHumansComponent"));

var MovingComponent_1 = __importDefault(require("../components/MovingComponent"));

var Virus =
/** @class */
function (_super) {
  __extends(Virus, _super);

  function Virus(game_state) {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.VIRUS) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.MOVEABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.INTERACTABLE | PositionComponent_1.CollisionGroups.MOVEABLE | PositionComponent_1.CollisionGroups.PURIFIED;

    _this.add(position);

    var moving = new MovingComponent_1.default();
    moving.time_needed_to_move = 0.0625;

    _this.add(moving);

    var spread = new InfectedSpreadComponent_1.default();

    _this.add(spread);

    var die_on_spray = new DieOnSprayComponent_1.default();

    _this.add(die_on_spray);

    var walking = new InfectedWalkingComponent_1.default();

    _this.add(walking);

    walking.steps_interval_in_seconds = 0.125;
    walking.chance_to_move = 2;
    var hitpoints = new HitPointsComponent_1.default();
    hitpoints.current = hitpoints.max = 10;

    _this.add(hitpoints); // let damage_other_objects = new DamageOtherObjectsComponent();
    // damage_other_objects.interval_in_seconds = 0.5;
    // this.add(damage_other_objects);


    var damage_humans = new DamageHumansComponent_1.default();

    _this.add(damage_humans);

    if (game_state) {
      spread.last_day = game_state.day;
    }

    return _this;
  }

  return Virus;
}(MapObject_1.default);

exports.default = Virus;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/InfectedSpreadComponent":"FWTD","../components/DieOnSprayComponent":"q75i","../components/InfectedWalkingComponent":"cLFq","../components/HitPointsComponent":"mUmB","../components/DamageHumansComponent":"VryN","../components/MovingComponent":"XFiS"}],"FWTD":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var CreateObjectTask_1 = __importDefault(require("../tasks/CreateObjectTask"));

var Direction_1 = require("../../ts_library/space/Direction");

var PositionComponent_1 = require("./PositionComponent");

var fromDirection_1 = require("../../ts_library/conversion/fromDirection");

var RandomObjects_1 = require("../../ts_library/utility/RandomObjects");

var Virus_1 = __importDefault(require("../objects/Virus"));

var InfectedSpreadComponent =
/** @class */
function (_super) {
  __extends(InfectedSpreadComponent, _super);

  function InfectedSpreadComponent() {
    var _this = _super.call(this) || this;

    _this.last_day = 0;
    return _this;
  }

  InfectedSpreadComponent.prototype.update = function (delta_seconds, self, game_state) {
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    if (this.last_day >= game_state.day) return [];
    this.last_day = game_state.day;
    var directions = [Direction_1.Direction.LEFT, Direction_1.Direction.UP, Direction_1.Direction.RIGHT, Direction_1.Direction.DOWN].reduce(function (list, direction) {
      var target = position.position.add(fromDirection_1.direction_to_point(direction, 1));
      var field = game_state.world_map.at(target);
      if (!field) return list;
      if (field.objects.length > 0) return list;
      list.push(direction);
      return list;
    }, []);
    var direction = RandomObjects_1.get_random_of_array(directions);
    if (direction === null) return [];
    var target = position.position.add(fromDirection_1.direction_to_point(direction, 1));
    return [new CreateObjectTask_1.default(function (game_state) {
      return new Virus_1.default(game_state);
    }, target)];
  };

  return InfectedSpreadComponent;
}(MapObjectComponent_1.default);

exports.default = InfectedSpreadComponent;
},{"./MapObjectComponent":"SlkT","../tasks/CreateObjectTask":"ODNs","../../ts_library/space/Direction":"EbgX","./PositionComponent":"SUj7","../../ts_library/conversion/fromDirection":"R0cs","../../ts_library/utility/RandomObjects":"DpDN","../objects/Virus":"PaVE"}],"mW26":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var InfectedSpreadComponent_1 = __importDefault(require("../components/InfectedSpreadComponent"));

var IsHumanComponent_1 = __importDefault(require("../components/IsHumanComponent"));

var CalculateInformationSystem =
/** @class */
function (_super) {
  __extends(CalculateInformationSystem, _super);

  function CalculateInformationSystem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  CalculateInformationSystem.prototype.update = function (delta_seconds, game_state) {
    var _this = this;

    var new_calculated_state = {
      remaining_humans: 0,
      remaining_virusses: 0
    };
    var all_fields = game_state.world_map.get_fields_in_rect(game_state.world_map.get_map_boundries());
    var calculated_state = all_fields.reduce(function (calculated_state, field) {
      calculated_state = _this.update_calculations_from_objects(calculated_state, field.objects);
      return calculated_state;
    }, new_calculated_state);
    return Object.assign(game_state, {
      calculated: calculated_state
    });
  };

  CalculateInformationSystem.prototype.update_calculations_from_objects = function (calculated_state, objects) {
    return objects.reduce(function (calculated_state, next) {
      if (next.has(InfectedSpreadComponent_1.default)) calculated_state.remaining_virusses += 1;
      if (next.has(IsHumanComponent_1.default)) calculated_state.remaining_humans += 1;
      return calculated_state;
    }, calculated_state);
  };

  return CalculateInformationSystem;
}(System_1.default);

exports.default = CalculateInformationSystem;
},{"./System":"c0W6","../components/InfectedSpreadComponent":"FWTD","../components/IsHumanComponent":"LKDj"}],"XCPr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SystemEvent =
/** @class */
function () {
  function SystemEvent() {}

  return SystemEvent;
}();

exports.default = SystemEvent;
},{}],"qXK9":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SystemEvent_1 = __importDefault(require("./SystemEvent"));

var RestartLevelSystemEvent =
/** @class */
function (_super) {
  __extends(RestartLevelSystemEvent, _super);

  function RestartLevelSystemEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return RestartLevelSystemEvent;
}(SystemEvent_1.default);

exports.default = RestartLevelSystemEvent;
},{"./SystemEvent":"XCPr"}],"xMk3":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SystemEvent_1 = __importDefault(require("./SystemEvent"));

var LoadNextLevelSystemEvent =
/** @class */
function (_super) {
  __extends(LoadNextLevelSystemEvent, _super);

  function LoadNextLevelSystemEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return LoadNextLevelSystemEvent;
}(SystemEvent_1.default);

exports.default = LoadNextLevelSystemEvent;
},{"./SystemEvent":"XCPr"}],"KKVU":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var GameState_1 = require("../../main/GameState");

var GameMode_1 = require("../../main/GameMode");

var RestartLevelSystemEvent_1 = __importDefault(require("./events/RestartLevelSystemEvent"));

var LoadNextLevelSystemEvent_1 = __importDefault(require("./events/LoadNextLevelSystemEvent"));

var WinOrLooseSystem =
/** @class */
function (_super) {
  __extends(WinOrLooseSystem, _super);

  function WinOrLooseSystem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  WinOrLooseSystem.prototype.update = function (delta_seconds, game_state) {
    if (game_state.calculated.remaining_humans <= 0) {
      var post_game_stats = {
        won_or_lost: GameState_1.GameResult.LOST
      };
      System_1.default.events.trigger_event(new RestartLevelSystemEvent_1.default());
      return Object.assign(game_state, {
        modus: GameMode_1.GameMode.INTERMISSION,
        post_game_stats: post_game_stats
      });
    }

    if (game_state.calculated.remaining_virusses <= 0) {
      var post_game_stats = {
        won_or_lost: GameState_1.GameResult.WON
      };
      System_1.default.events.trigger_event(new LoadNextLevelSystemEvent_1.default());
      return Object.assign(game_state, {
        modus: GameMode_1.GameMode.INTERMISSION,
        post_game_stats: post_game_stats
      });
    }

    return game_state;
  };

  return WinOrLooseSystem;
}(System_1.default);

exports.default = WinOrLooseSystem;
},{"./System":"c0W6","../../main/GameState":"kbIU","../../main/GameMode":"Xj3t","./events/RestartLevelSystemEvent":"qXK9","./events/LoadNextLevelSystemEvent":"xMk3"}],"vY3p":[function(require,module,exports) {
"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var PositionComponent_1 = require("../components/PositionComponent");

var WorldMap =
/** @class */
function () {
  function WorldMap(width, height, field_generator) {
    this.fields = [];
    this.width = width;
    this.height = height;
    this.events = new WorldEventDelegator(this);
    this.field_generator = field_generator;
    this.fields = this.construct_fields();
  }

  WorldMap.prototype.construct_fields = function () {
    var _this = this;

    return __spread(new Array(this.width * this.height)).map(function (_, i) {
      var field = _this.field_generator(_this, i % _this.width, Math.trunc(i / _this.width));

      return field;
    });
  };

  WorldMap.prototype.get_map_boundries = function () {
    return SimpleShapes_1.Rect.from_boundries(0, 0, this.width - 1, this.height - 1);
  };

  WorldMap.prototype.at = function (pos) {
    if (!this.get_map_boundries().is_containing(pos)) return null;
    var id = pos.x + pos.y * this.width;
    return this.fields[id];
  };

  WorldMap.prototype.update = function (delta_seconds, game_state) {
    return this.map_fields_in_rect(this.get_map_boundries(), function (field) {
      field.objects = field.objects.filter(function (object) {
        return !object.is_destroyed();
      });
      return field.objects.flatMap(function (object, index) {
        // Should be done in own System?
        var position = object.get(PositionComponent_1.PositionComponent);
        if (position) position.position = field.location.copy();
        return object.update(delta_seconds, game_state);
      });
    }).flatMap(function (tasks) {
      return tasks;
    });
  };

  WorldMap.prototype.update_field_at_point = function (pos, field) {
    if (this.get_map_boundries().is_containing(pos)) {
      var id = pos.x + pos.y * this.width;
      this.fields[id] = Object.assign({}, this.fields[id], field);
    }
  };

  WorldMap.prototype.map_fields_in_rect = function (rect, callback) {
    var _this = this;

    var safe_rect = this.get_map_boundries().get_intersection(rect);
    if (!safe_rect) return [];
    var fields = safe_rect.map_points_in_rect(function (pos) {
      return _this.fields[pos.x + pos.y * _this.width];
    });
    return fields.map(callback);
  };

  WorldMap.prototype.get_fields_in_rect = function (rect) {
    var _this = this;

    var safe_rect = this.get_map_boundries().get_intersection(rect);
    if (!safe_rect) return [];
    return safe_rect.map_points_in_rect(function (pos) {
      return _this.fields[pos.x + pos.y * _this.width];
    });
  };

  return WorldMap;
}();

exports.default = WorldMap;

var WorldEventDelegator =
/** @class */
function () {
  // public readonly on_destroy: ListenerSocket<ObjectDestroyedEvent> = new ListenerSocket();
  // public readonly on_touched: ListenerSocket<ObjectTouchedEvent> = new ListenerSocket();
  // public readonly on_touches: ListenerSocket<ObjectTouchesEvent> = new ListenerSocket();
  // public readonly on_damaged: ListenerSocket<ObjectDamagedEvent> = new ListenerSocket();
  // public readonly on_attack: ListenerSocket<ObjectAttacksEvent> = new ListenerSocket();
  // public readonly on_effect: ListenerSocket<Field> = new ListenerSocket();
  function WorldEventDelegator(map) {// map.on_effect.add((event) => this.on_effect.trigger_event(event));
  }

  WorldEventDelegator.prototype.connect = function (object) {// object.on_destroy.add((event: ObjectDestroyedEvent) => this.on_destroy.trigger_event(event));
    // object.on_touched_by.add((event: ObjectTouchedEvent) => this.on_touched.trigger_event(event));
    // object.on_damaged_by.add((event: ObjectDamagedEvent) => this.on_damaged.trigger_event(event));
    // object.on_attack.add((event: ObjectAttacksEvent) => this.on_attack.trigger_event(event));
  };

  return WorldEventDelegator;
}();
},{"../../ts_library/space/SimpleShapes":"fgAD","../components/PositionComponent":"SUj7"}],"qQyX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map1 = {
  width: 8,
  height: 8,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f00, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"Lc89":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map2 = {
  width: 10,
  height: 10,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xffff00ff, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f00, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff]
};
},{}],"cxU9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map3 = {
  width: 12,
  height: 12,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff0000ff, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f0000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xffff0000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"O26Z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map4 = {
  width: 14,
  height: 14,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xffff0000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xffff0000, 0xff1f1f00, 0xff1f0000, 0xff000000, 0xff000000, 0xff001f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xffff0000, 0xff1f0000, 0xff1f0000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"hvwC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map5 = {
  width: 16,
  height: 16,
  data: [0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff0000ff, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff00001f, 0xff000000, 0xff00ff00, 0xff000000, 0xffff0000, 0xffff0000, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00001f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff00001f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff00ffff, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff00ffff, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f00, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xffff00ff, 0xff1f1f1f, 0xff1f1f1f, 0xffff00ff, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff000000, 0xffff0000, 0xff1f1f1f, 0xffff0000, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff000000, 0xff00ffff, 0xff1f1f1f, 0xff1f1f1f, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xffff00ff, 0xff1f1f1f, 0xff1f1f1f, 0xffff00ff, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff000000, 0xffff0000, 0xff1f1f1f, 0xffff0000, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"VeRh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map6 = {
  width: 18,
  height: 18,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xffff00ff, 0xff1f0000, 0xffff0000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff001f1f, 0xff000000, 0xff001f1f, 0xff000000, 0xff001f1f, 0xff000000, 0xff001f1f, 0xff000000, 0xff001f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ffff, 0xff1f1f1f, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xffffff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00001f, 0xff00001f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff000000, 0xff1f001f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"a8wb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map7 = {
  width: 20,
  height: 20,
  data: [0xffff0000, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xffff0000, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff00001f, 0xff00001f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff00ff, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff00ff, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xffff0000, 0xffff0000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xffffff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff00001f, 0xff00001f, 0xff00001f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff00001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff1f1f1f]
};
},{}],"Eibq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map8 = {
  width: 22,
  height: 22,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xffff0000, 0xffff0000, 0xffff0000, 0xff000000, 0xff001f1f, 0xff000000, 0xff001f1f, 0xff000000, 0xff1f001f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff0000ff, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff0000ff, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff0000ff, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff0000ff, 0xff0000ff, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f0000, 0xff1f0000, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f0000, 0xff1f1f00, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff001f1f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f001f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff00ffff, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ffff, 0xffff0000, 0xffff0000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ffff, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff000000, 0xff001f1f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xffff0000, 0xffff0000, 0xffff0000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000]
};
},{}],"vVTn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map9 = {
  width: 24,
  height: 24,
  data: [0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xffff0000, 0xffff0000, 0xffff0000, 0xff000000, 0xffff0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f0000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xffff00ff, 0xff000000, 0xff00001f, 0xff00001f, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f00, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff001f1f, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff001f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00001f, 0xff00001f, 0xff000000, 0xff00ffff, 0xff00ffff, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xffff0000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff001f1f, 0xff000000, 0xff000000, 0xff00001f, 0xff00001f, 0xff00001f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff00ffff, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff0000ff, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff001f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f1f1f, 0xff1f1f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff00ffff, 0xff000000, 0xff000000, 0xff1f0000, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f1f1f, 0xff1f001f, 0xff000000, 0xff00ff00, 0xff0000ff, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff001f1f, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff000000, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff0000ff, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff00ffff, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff000000, 0xff00ff00, 0xff00ff00, 0xff00ff00, 0xff1f1f1f, 0xff1f1f1f, 0xff001f1f]
};
},{}],"KmiH":[function(require,module,exports) {
"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TerrainResources_1 = require("../assets/TerrainResources");

var Direction_1 = require("../ts_library/space/Direction");

var MapData =
/** @class */
function () {
  function MapData(width, height) {
    this.snippets = [];
    this.width = width;
    this.height = height;
    this.data = __spread(new Array(width)).map(function () {
      return __spread(new Array(height)).map(function () {
        return {
          terrain: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS
        };
      });
    });
  }

  MapData.prototype.set = function (x, y, data) {
    Object.assign(this.data[Math.abs(x) % this.width][Math.abs(y) % this.height], data);
  };

  MapData.prototype.at = function (x, y) {
    return this.data[Math.abs(x) % this.width][Math.abs(y) % this.height];
  };

  MapData.prototype.add_snippet = function (snippet, width, height) {
    if (snippet instanceof Array === false) return -1;
    var data = snippet.map(function (field) {
      var result = {
        terrain: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS
      };

      if (field instanceof Array) {
        result = {
          terrain: field[0],
          object: field[1]
        };
      } else {
        result = field;
      }

      return result;
    });
    this.snippets.push({
      data: data,
      width: width,
      height: height
    });
    return this.snippets.length - 1;
  };

  MapData.prototype.put = function (snippet_id, x, y, rotate) {
    if (rotate === void 0) {
      rotate = Direction_1.Direction.RIGHT;
    }

    var snippet = this.snippets[snippet_id];

    for (var xi = 0; xi < snippet.width; xi++) {
      for (var yi = 0; yi < snippet.height; yi++) {
        var _a = __read(this.rotate(xi, yi, snippet.width, snippet.height, rotate), 2),
            rx = _a[0],
            ry = _a[1];

        this.set(x + rx, y + ry, snippet.data[xi + yi * snippet.width]);
      }
    }
  };

  MapData.prototype.rotate = function (x, y, w, h, rotate) {
    switch (rotate) {
      case Direction_1.Direction.LEFT:
        return [w - x - 1, y];

      case Direction_1.Direction.UP:
        return [y, w - x - 1];

      case Direction_1.Direction.RIGHT:
        return [x, y];

      case Direction_1.Direction.DOWN:
        return [h - y - 1, x];
    }
  };

  return MapData;
}();

exports.default = MapData;
;
},{"../assets/TerrainResources":"cAzr","../ts_library/space/Direction":"EbgX"}],"vCFl":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var Wall =
/** @class */
function (_super) {
  __extends(Wall, _super);

  function Wall() {
    return _super.call(this, MapObjectResources_1.MapObjectTypeID.WALL) || this;
  }

  return Wall;
}(MapObject_1.default);

exports.default = Wall;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB"}],"lD3b":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var DestroyObjectTask_1 = __importDefault(require("../tasks/DestroyObjectTask"));

var ChargesComponent =
/** @class */
function (_super) {
  __extends(ChargesComponent, _super);

  function ChargesComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.charges_left = 3;
    return _this;
  }

  ChargesComponent.prototype.update = function (delta_seconds, self, game_state) {
    if (this.charges_left <= 0) return [new DestroyObjectTask_1.default(self.instance_ID)];
    return [];
  };

  return ChargesComponent;
}(MapObjectComponent_1.default);

exports.default = ChargesComponent;
},{"./MapObjectComponent":"SlkT","../tasks/DestroyObjectTask":"HMDK"}],"mQAr":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var IsCollectableComponent_1 = __importDefault(require("../components/IsCollectableComponent"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var ChargesComponent_1 = __importDefault(require("../components/ChargesComponent"));

var Spray =
/** @class */
function (_super) {
  __extends(Spray, _super);

  function Spray() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.SPRAY) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.COLLECTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.UNPASSABLE;

    _this.add(position);

    var is_collectable = new IsCollectableComponent_1.default();

    _this.add(is_collectable);

    var charges = new ChargesComponent_1.default();
    charges.charges_left = 1;

    _this.add(charges);

    var visual = new VisualComponent_1.default();
    visual.image = ImageResources_1.ImageID.OBJECT__SPRAY;
    visual.icon = ImageResources_1.ImageID.OBJECT__SPRAY;

    _this.add(visual);

    return _this;
  }

  return Spray;
}(MapObject_1.default);

exports.default = Spray;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/IsCollectableComponent":"xDlw","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu","../components/ChargesComponent":"lD3b"}],"HNeP":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var IsSprayComponent_1 = __importDefault(require("../components/IsSprayComponent"));

var DesinfectionBlob =
/** @class */
function (_super) {
  __extends(DesinfectionBlob, _super);

  function DesinfectionBlob() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.SPRAY_BLOB) || this;

    var spray = new IsSprayComponent_1.default();

    _this.add(spray);

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.GHOST;

    _this.add(position);

    var visual = new VisualComponent_1.default();
    visual.icon = ImageResources_1.ImageID.OBJECT__SPRAYED;
    visual.image = ImageResources_1.ImageID.OBJECT__SPRAYED;
    visual.priority = -1000;

    _this.add(visual);

    return _this; //const desinfect = new DamageOtherObjectsComponent
  }

  return DesinfectionBlob;
}(MapObject_1.default);

exports.default = DesinfectionBlob;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu","../components/IsSprayComponent":"RWZA"}],"ae3f":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var IsPaperComponent =
/** @class */
function (_super) {
  __extends(IsPaperComponent, _super);

  function IsPaperComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return IsPaperComponent;
}(MapObjectComponent_1.default);

exports.default = IsPaperComponent;
},{"./MapObjectComponent":"SlkT"}],"wqnE":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var IsPaperComponent_1 = __importDefault(require("../components/IsPaperComponent"));

var PaperBlob =
/** @class */
function (_super) {
  __extends(PaperBlob, _super);

  function PaperBlob() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.PAPER_BLOB) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.INTERACTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.INTERACTABLE;

    _this.add(position);

    var visual = new VisualComponent_1.default();
    visual.icon = visual.image = ImageResources_1.ImageID.OBJECT__SINGLE_PAPER;
    visual.priority = -5;

    _this.add(visual);

    var is_paper = new IsPaperComponent_1.default();

    _this.add(is_paper);

    return _this;
  }

  return PaperBlob;
}(MapObject_1.default);

exports.default = PaperBlob;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu","../components/IsPaperComponent":"ae3f"}],"G7rW":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var MapObject_1 = __importDefault(require("../objects/MapObject"));

var PositionComponent_1 = require("./PositionComponent");

var InputMoveTask_1 = __importDefault(require("../tasks/InputMoveTask"));

var fromDirection_1 = require("../../ts_library/conversion/fromDirection");

var MoveObjectTask_1 = require("../tasks/MoveObjectTask");

var InventarComponent_1 = __importDefault(require("./InventarComponent"));

var CreateObjectTask_1 = __importDefault(require("../tasks/CreateObjectTask"));

var DesinfectionBlob_1 = __importDefault(require("../objects/DesinfectionBlob"));

var InputUseSprayTask_1 = __importDefault(require("../tasks/InputUseSprayTask"));

var InputUsePaperTask_1 = __importDefault(require("../tasks/InputUsePaperTask"));

var InputEatTask_copy_1 = __importDefault(require("../tasks/InputEatTask copy"));

var HungerComponent_1 = __importDefault(require("./HungerComponent"));

var PaperBlob_1 = __importDefault(require("../objects/PaperBlob"));

var ChargesComponent_1 = __importDefault(require("./ChargesComponent"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var MovingComponent_1 = __importDefault(require("./MovingComponent"));

var PlayerControlledComponent =
/** @class */
function (_super) {
  __extends(PlayerControlledComponent, _super);

  function PlayerControlledComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.tasks = [];
    return _this;
  } // public move_input: ListenerSocket<Direction> = new ListenerSocket<Direction>();


  PlayerControlledComponent.prototype.update = function (delta_seconds, self) {
    var buffer = this.tasks;
    this.tasks = [];
    return buffer;
  };

  PlayerControlledComponent.prototype.handle = function (game_state, task, self) {
    if (task instanceof InputMoveTask_1.default) return this.handle_input_move(game_state, task, self);
    if (task instanceof InputUseSprayTask_1.default) return this.handle_input_use_spray(game_state, task, self);
    if (task instanceof InputUsePaperTask_1.default) return this.handle_input_use_paper(game_state, task, self);
    if (task instanceof InputEatTask_copy_1.default) return this.handle_input_eat(game_state, task, self);
    return game_state;
  };

  PlayerControlledComponent.prototype.handle_input_move = function (game_state, task, self) {
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return game_state;
    var moving = self.get(MovingComponent_1.default);
    if (moving && moving.progress !== false) return game_state;
    var source = position.position;
    var target = position.position.add(fromDirection_1.direction_to_point(task.direction, 1));
    this.tasks.push(new MoveObjectTask_1.MoveObjectTask(source, target, self.instance_ID));
    return game_state;
  };

  PlayerControlledComponent.prototype.handle_input_use_spray = function (game_state, task, self) {
    // Check if field target is valid
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return game_state;
    var field = game_state.world_map.at(position.position);
    if (!field) return game_state;
    var is_occupied = field.objects.reduce(function (sum, object) {
      if (object.instance_ID === self.instance_ID) return sum;
      return sum + 1;
    }, 0) > 0;
    if (is_occupied) return game_state; // Check if i have spray charges left

    var charges_available = this.use_charge_if_available(self, 1, function (object) {
      return object.type === MapObjectResources_1.MapObjectTypeID.SPRAY;
    });
    if (!charges_available) return game_state; // Do ACTION
    // Create desinfected blob

    this.tasks.push(new CreateObjectTask_1.default(function (game_state) {
      return new DesinfectionBlob_1.default();
    }, position.position, PositionComponent_1.CollisionGroups.INTERACTABLE));
    return game_state;
  };

  PlayerControlledComponent.prototype.handle_input_use_paper = function (game_state, task, self) {
    // Check if field target is valid
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return game_state;
    var field = game_state.world_map.at(position.position);
    if (!field) return game_state;
    var is_occupied = field.objects.reduce(function (sum, object) {
      if (object.instance_ID === self.instance_ID) return sum;
      return sum + 1;
    }, 0) > 0;
    if (is_occupied) return game_state; // Check if i have spray charges left

    var charges_available = this.use_charge_if_available(self, 1, function (object) {
      return object.type === MapObjectResources_1.MapObjectTypeID.PAPER_ROLL;
    });
    if (!charges_available) return game_state; // Do ACTION
    // Create paper blob

    this.tasks.push(new CreateObjectTask_1.default(function (game_state) {
      return new PaperBlob_1.default();
    }, position.position, PositionComponent_1.CollisionGroups.INTERACTABLE));
    return game_state;
  };

  PlayerControlledComponent.prototype.handle_input_eat = function (game_state, task, self) {
    var hunger = self.get(HungerComponent_1.default);
    if (!hunger) return game_state;
    var charges_available = this.use_charge_if_available(self, 1, function (object) {
      return object.type === MapObjectResources_1.MapObjectTypeID.NUDEL;
    });
    if (!charges_available) return game_state; // reduce hunger

    hunger.urge_to_eat = Math.max(0, hunger.urge_to_eat - 50);
    return game_state;
  };

  PlayerControlledComponent.prototype.use_charge_if_available = function (self, requested_charges, item_condition) {
    // Check if i have noodles charges left
    var inventar = self.get(InventarComponent_1.default);
    if (!inventar) return false;
    var charge_object_ids = inventar.items.filter(function (object_id) {
      var object = MapObject_1.default.get(object_id);
      if (!object) return false;
      if (!object.has(ChargesComponent_1.default)) return false;
      if (!item_condition(object)) return false;
      return true;
    }, []);
    var available_charge = charge_object_ids.reduce(function (sum, object_id) {
      var object = MapObject_1.default.get(object_id);
      var charge = object.get(ChargesComponent_1.default);
      return sum + charge.charges_left;
    }, 0);
    if (available_charge < requested_charges) return false;
    charge_object_ids.reduce(function (remaining_request, object_id) {
      if (remaining_request <= 0) return 0;
      var object = MapObject_1.default.get(object_id);
      var charge = object.get(ChargesComponent_1.default);
      var lost_charges = Math.min(charge.charges_left, remaining_request);
      charge.charges_left -= lost_charges;
      return remaining_request - lost_charges;
    }, requested_charges);
    return true;
  };

  return PlayerControlledComponent;
}(MapObjectComponent_1.default);

exports.default = PlayerControlledComponent;
},{"./MapObjectComponent":"SlkT","../objects/MapObject":"BVhu","./PositionComponent":"SUj7","../tasks/InputMoveTask":"Sd28","../../ts_library/conversion/fromDirection":"R0cs","../tasks/MoveObjectTask":"Em0L","./InventarComponent":"hEXs","../tasks/CreateObjectTask":"ODNs","../objects/DesinfectionBlob":"HNeP","../tasks/InputUseSprayTask":"nCYO","../tasks/InputUsePaperTask":"LlP9","../tasks/InputEatTask copy":"tAPE","./HungerComponent":"psSw","../objects/PaperBlob":"wqnE","./ChargesComponent":"lD3b","../../assets/MapObjectResources":"BWOB","./MovingComponent":"XFiS"}],"Ot7P":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task_1 = require("./Task");

var SetCameraPositionTask =
/** @class */
function (_super) {
  __extends(SetCameraPositionTask, _super);

  function SetCameraPositionTask(new_position) {
    var _this = _super.call(this) || this;

    _this.new_position = new_position;
    return _this;
  }

  SetCameraPositionTask.prototype.execute = function (game_state) {
    game_state.camera_position = this.new_position;
    return game_state;
  };

  return SetCameraPositionTask;
}(Task_1.Task);

exports.SetCameraPositionTask = SetCameraPositionTask;
},{"./Task":"mo7A"}],"bIwP":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var SimpleShapes_1 = require("../../ts_library/space/SimpleShapes");

var PositionComponent_1 = require("./PositionComponent");

var SetCameraPositionTask_1 = require("../tasks/SetCameraPositionTask");

var MoveObjectTask_1 = require("../tasks/MoveObjectTask");

var MovingComponent_1 = __importDefault(require("./MovingComponent"));

var FollowWithCameraComponent =
/** @class */
function (_super) {
  __extends(FollowWithCameraComponent, _super);

  function FollowWithCameraComponent() {
    var _this = _super.call(this) || this;

    _this.p = new SimpleShapes_1.Point(0, 0);
    return _this;
  }

  FollowWithCameraComponent.prototype.update = function (delta_seconds, self) {
    var position = self.get(PositionComponent_1.PositionComponent);
    var moving = self.get(MovingComponent_1.default);
    if (!position) return [];

    if (moving && moving.progress !== false) {
      var diff = position.position.sub(moving.previous_position);
      var point = moving.previous_position.add(diff.mul(moving.progress));
      if (position.position.equals(point)) return [];
      return [new SetCameraPositionTask_1.SetCameraPositionTask(this.p = point)];
    } else {
      if (position.position.equals(this.p)) return [];
      return [new SetCameraPositionTask_1.SetCameraPositionTask(this.p = position.position)];
    }
  };

  FollowWithCameraComponent.prototype.handle = function (game_state, task, self) {
    if (task instanceof MoveObjectTask_1.MoveObjectTask && self.instance_ID === task.object_id) {
      var position = self.get(PositionComponent_1.PositionComponent);
      var moving = self.get(MovingComponent_1.default);

      if (position) {
        if (moving && moving.progress !== false) {
          var diff = position.position.sub(moving.previous_position);
          var point = moving.previous_position.add(diff.mul(moving.progress));
          this.p = game_state.camera_position = point;
        } else {
          this.p = game_state.camera_position = task.target;
        }
      }
    }

    return game_state;
  };

  return FollowWithCameraComponent;
}(MapObjectComponent_1.default);

exports.default = FollowWithCameraComponent;
},{"./MapObjectComponent":"SlkT","../../ts_library/space/SimpleShapes":"fgAD","./PositionComponent":"SUj7","../tasks/SetCameraPositionTask":"Ot7P","../tasks/MoveObjectTask":"Em0L","./MovingComponent":"XFiS"}],"k5hM":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var InventarComponent_1 = __importDefault(require("../components/InventarComponent"));

var HungerComponent_1 = __importDefault(require("../components/HungerComponent"));

var PlayerControlled_1 = __importDefault(require("../components/PlayerControlled"));

var PositionComponent_1 = require("../components/PositionComponent");

var FollowWithCameraComponent_1 = __importDefault(require("../components/FollowWithCameraComponent"));

var HitPointsComponent_1 = __importDefault(require("../components/HitPointsComponent"));

var IsHumanComponent_1 = __importDefault(require("../components/IsHumanComponent"));

var MovingComponent_1 = __importDefault(require("../components/MovingComponent"));

var Agent =
/** @class */
function (_super) {
  __extends(Agent, _super);

  function Agent() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.PLAYER) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.MOVEABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.MOVEABLE;
    var moving = new MovingComponent_1.default();
    moving.time_needed_to_move = 0.125;

    _this.add(moving);

    _this.add(new IsHumanComponent_1.default());

    _this.add(new InventarComponent_1.default());

    _this.add(new HungerComponent_1.default(_this));

    var hitpoints = new HitPointsComponent_1.default();
    hitpoints.current = hitpoints.max = 10;

    _this.add(hitpoints);

    _this.add(new PlayerControlled_1.default());

    _this.add(position);

    _this.add(new FollowWithCameraComponent_1.default());

    return _this;
  }

  return Agent;
}(MapObject_1.default);

exports.default = Agent;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/InventarComponent":"hEXs","../components/HungerComponent":"psSw","../components/PlayerControlled":"G7rW","../components/PositionComponent":"SUj7","../components/FollowWithCameraComponent":"bIwP","../components/HitPointsComponent":"mUmB","../components/IsHumanComponent":"LKDj","../components/MovingComponent":"XFiS"}],"TITj":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var ChargesComponent_1 = __importDefault(require("../components/ChargesComponent"));

var IsPaperComponent_1 = __importDefault(require("../components/IsPaperComponent"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var IsCollectableComponent_1 = __importDefault(require("../components/IsCollectableComponent"));

var Paperroll =
/** @class */
function (_super) {
  __extends(Paperroll, _super);

  function Paperroll() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.PAPER_ROLL) || this;

    var paper = new IsPaperComponent_1.default();

    _this.add(paper);

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.COLLECTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.GHOST;

    _this.add(position);

    var visual = new VisualComponent_1.default();
    visual.image = visual.icon = ImageResources_1.ImageID.OBJECT__PAPER_ROLL;

    _this.add(visual);

    var charges = new ChargesComponent_1.default();
    charges.charges_left = 3;

    _this.add(charges);

    var is_collectable = new IsCollectableComponent_1.default();

    _this.add(is_collectable);

    return _this;
  }

  return Paperroll;
}(MapObject_1.default);

exports.default = Paperroll;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/ChargesComponent":"lD3b","../components/IsPaperComponent":"ae3f","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu","../components/IsCollectableComponent":"xDlw"}],"F26R":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var ChargesComponent_1 = __importDefault(require("../components/ChargesComponent"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var IsCollectableComponent_1 = __importDefault(require("../components/IsCollectableComponent"));

var Nudel =
/** @class */
function (_super) {
  __extends(Nudel, _super);

  function Nudel() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.NUDEL) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.COLLECTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.GHOST;

    _this.add(position);

    var visual = new VisualComponent_1.default();
    visual.image = visual.icon = ImageResources_1.ImageID.OBJECT__NUDEL4;

    _this.add(visual);

    var charges = new ChargesComponent_1.default();
    charges.charges_left = 1;

    _this.add(charges);

    var is_collectable = new IsCollectableComponent_1.default();

    _this.add(is_collectable);

    return _this;
  }

  return Nudel;
}(MapObject_1.default);

exports.default = Nudel;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/ChargesComponent":"lD3b","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu","../components/IsCollectableComponent":"xDlw"}],"KWBa":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObjectComponent_1 = __importDefault(require("./MapObjectComponent"));

var Spray_1 = __importDefault(require("../objects/Spray"));

var CreateObjectTask_1 = __importDefault(require("../tasks/CreateObjectTask"));

var PositionComponent_1 = require("./PositionComponent");

var SpawnItemsComponent =
/** @class */
function (_super) {
  __extends(SpawnItemsComponent, _super);

  function SpawnItemsComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.type = function () {
      return new Spray_1.default();
    };

    _this.interval_in_seconds = 10;
    _this.current_timer = 0;
    return _this;
  }

  SpawnItemsComponent.prototype.update = function (delta_seconds, self, game_state) {
    if ((this.current_timer -= delta_seconds) > 0) return [];
    this.current_timer += this.interval_in_seconds;
    var position = self.get(PositionComponent_1.PositionComponent);
    if (!position) return [];
    return [new CreateObjectTask_1.default(this.type, position.position, PositionComponent_1.CollisionGroups.COLLECTABLE)];
  };

  return SpawnItemsComponent;
}(MapObjectComponent_1.default);

exports.default = SpawnItemsComponent;
},{"./MapObjectComponent":"SlkT","../objects/Spray":"mQAr","../tasks/CreateObjectTask":"ODNs","./PositionComponent":"SUj7"}],"rfDv":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var SpawnItemsComponent_1 = __importDefault(require("../components/SpawnItemsComponent"));

var Spray_1 = __importDefault(require("./Spray"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var ClinicalPalette =
/** @class */
function (_super) {
  __extends(ClinicalPalette, _super);

  function ClinicalPalette() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.CLINICAL_PALLETTE) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.INTERACTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.UNPASSABLE;

    _this.add(position);

    var spawn_items = new SpawnItemsComponent_1.default();

    spawn_items.type = function () {
      return new Spray_1.default();
    };

    spawn_items.interval_in_seconds = 2;

    _this.add(spawn_items);

    var visual = new VisualComponent_1.default();
    visual.image = ImageResources_1.ImageID.TERRAIN__INDOOR_EMPTY_CLINICAL_PALLETTE;
    visual.priority = -200;

    _this.add(visual);

    return _this;
  }

  return ClinicalPalette;
}(MapObject_1.default);

exports.default = ClinicalPalette;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/SpawnItemsComponent":"KWBa","./Spray":"mQAr","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu"}],"gtRv":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var SpawnItemsComponent_1 = __importDefault(require("../components/SpawnItemsComponent"));

var Paperroll_1 = __importDefault(require("./Paperroll"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var Toilet =
/** @class */
function (_super) {
  __extends(Toilet, _super);

  function Toilet() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.TOILET) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.INTERACTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.UNPASSABLE;

    _this.add(position);

    var spawn_items = new SpawnItemsComponent_1.default();

    spawn_items.type = function () {
      return new Paperroll_1.default();
    };

    spawn_items.interval_in_seconds = 24;

    _this.add(spawn_items);

    var visual = new VisualComponent_1.default();
    visual.image = ImageResources_1.ImageID.TERRAIN__INDOOR_TOILET;

    _this.add(visual);

    return _this;
  }

  return Toilet;
}(MapObject_1.default);

exports.default = Toilet;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/SpawnItemsComponent":"KWBa","./Paperroll":"TITj","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu"}],"BRzP":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapObject_1 = __importDefault(require("./MapObject"));

var MapObjectResources_1 = require("../../assets/MapObjectResources");

var PositionComponent_1 = require("../components/PositionComponent");

var SpawnItemsComponent_1 = __importDefault(require("../components/SpawnItemsComponent"));

var Nudel_1 = __importDefault(require("./Nudel"));

var VisualComponent_1 = __importDefault(require("../components/VisualComponent"));

var ImageResources_1 = require("../../assets/ImageResources");

var Dish =
/** @class */
function (_super) {
  __extends(Dish, _super);

  function Dish() {
    var _this = _super.call(this, MapObjectResources_1.MapObjectTypeID.DISH) || this;

    var position = new PositionComponent_1.PositionComponent();
    position.collision_group = PositionComponent_1.CollisionGroups.INTERACTABLE;
    position.collision_mask = PositionComponent_1.CollisionGroups.UNPASSABLE;

    _this.add(position);

    var spawn_items = new SpawnItemsComponent_1.default();

    spawn_items.type = function () {
      return new Nudel_1.default();
    };

    spawn_items.interval_in_seconds = 24;

    _this.add(spawn_items);

    var visual = new VisualComponent_1.default();
    visual.image = ImageResources_1.ImageID.TERRAIN__INDOOR_TABLE;

    _this.add(visual);

    return _this;
  }

  return Dish;
}(MapObject_1.default);

exports.default = Dish;
},{"./MapObject":"BVhu","../../assets/MapObjectResources":"BWOB","../components/PositionComponent":"SUj7","../components/SpawnItemsComponent":"KWBa","./Nudel":"F26R","../components/VisualComponent":"ZpDG","../../assets/ImageResources":"n9mu"}],"H7zZ":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapData_1 = __importDefault(require("./MapData"));

var TerrainResources_1 = require("../assets/TerrainResources");

var Wall_1 = __importDefault(require("../logic/objects/Wall"));

var Spray_1 = __importDefault(require("../logic/objects/Spray"));

var Agent_1 = __importDefault(require("../logic/objects/Agent"));

var Virus_1 = __importDefault(require("../logic/objects/Virus"));

var Paperroll_1 = __importDefault(require("../logic/objects/Paperroll"));

var Nudel_1 = __importDefault(require("../logic/objects/Nudel"));

var ClinicalPallette_1 = __importDefault(require("../logic/objects/ClinicalPallette"));

var Toilet_1 = __importDefault(require("../logic/objects/Toilet"));

var Dish_1 = __importDefault(require("../logic/objects/Dish"));

function load_mapdata_from_image(image) {
  var canvas = new OffscreenCanvas(image.width, image.height);
  var ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Unable to create Context');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, 0, 0, image.width, image.height);
  var imgdata = ctx.getImageData(0, 0, image.width, image.height);
  var imgdata_as_32bit = new Uint32Array(imgdata.data.buffer);
  var mapdata = new MapData_1.default(image.width, image.height);
  imgdata_as_32bit.forEach(function (color, index) {
    var x = index % imgdata.width;
    var y = Math.trunc(index / imgdata.width);
    mapdata.set(x, y, color_to_mapfielddata(color));
  });
  return mapdata;
}

exports.load_mapdata_from_image = load_mapdata_from_image;

function load_mapdata_from_image_array(width, height, data) {
  var mapdata = new MapData_1.default(width, height);
  data.forEach(function (color, index) {
    var x = index % width;
    var y = Math.trunc(index / width);
    mapdata.set(x, y, color_to_mapfielddata(color));
  });
  return mapdata;
}

exports.load_mapdata_from_image_array = load_mapdata_from_image_array;

function color_to_mapfielddata(color) {
  switch (color) {
    case Colors.BLACK:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Wall_1.default
      };

    case Colors.DARK_GRAY:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP
      };

    case Colors.GRAY:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: ClinicalPallette_1.default
      };

    case Colors.WHITE:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Spray_1.default
      };

    case Colors.CYAN:
      return {
        terrain: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS,
        object: Agent_1.default
      };

    case Colors.DARK_CYAN:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Agent_1.default
      };

    case Colors.RED:
      return {
        terrain: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS,
        object: Virus_1.default
      };

    case Colors.DARK_RED:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Virus_1.default
      };

    case Colors.YELLOW:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Paperroll_1.default
      };

    case Colors.DARK_YELLOW:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Toilet_1.default
      };

    case Colors.BLUE:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Nudel_1.default
      };

    case Colors.DARK_BLUE:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Dish_1.default
      };

    case Colors.DARK_MAGENTA:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: ClinicalPallette_1.default
      };

    case Colors.MAGENTA:
      return {
        terrain: TerrainResources_1.TerrainTypeID.INDOOR_SHOP,
        object: Spray_1.default
      };

    default:
    case Colors.DARK_GREEN:
    case Colors.GREEN:
      return {
        terrain: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS
      };
  }
}

exports.color_to_mapfielddata = color_to_mapfielddata;
var Colors;

(function (Colors) {
  Colors[Colors["RED"] = 4278190335] = "RED";
  Colors[Colors["GREEN"] = 4278255360] = "GREEN";
  Colors[Colors["YELLOW"] = 4278255615] = "YELLOW";
  Colors[Colors["BLUE"] = 4294901760] = "BLUE";
  Colors[Colors["MAGENTA"] = 4294902015] = "MAGENTA";
  Colors[Colors["CYAN"] = 4294967040] = "CYAN";
  Colors[Colors["BLACK"] = 4278190080] = "BLACK";
  Colors[Colors["GRAY"] = 4294967295] = "GRAY";
  Colors[Colors["WHITE"] = 4287137928] = "WHITE";
  Colors[Colors["DARK_GRAY"] = 4280229663] = "DARK_GRAY";
  Colors[Colors["DARK_RED"] = 4278190111] = "DARK_RED";
  Colors[Colors["DARK_GREEN"] = 4278198016] = "DARK_GREEN";
  Colors[Colors["DARK_YELLOW"] = 4278198047] = "DARK_YELLOW";
  Colors[Colors["DARK_BLUE"] = 4280221696] = "DARK_BLUE";
  Colors[Colors["DARK_MAGENTA"] = 4280221727] = "DARK_MAGENTA";
  Colors[Colors["DARK_CYAN"] = 4280229632] = "DARK_CYAN";
})(Colors || (Colors = {}));
},{"./MapData":"KmiH","../assets/TerrainResources":"cAzr","../logic/objects/Wall":"vCFl","../logic/objects/Spray":"mQAr","../logic/objects/Agent":"k5hM","../logic/objects/Virus":"PaVE","../logic/objects/Paperroll":"TITj","../logic/objects/Nudel":"F26R","../logic/objects/ClinicalPallette":"rfDv","../logic/objects/Toilet":"gtRv","../logic/objects/Dish":"BRzP"}],"exJH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var map1_1 = require("../assets/images/maps/map1");

var map2_1 = require("../assets/images/maps/map2");

var map3_1 = require("../assets/images/maps/map3");

var map4_1 = require("../assets/images/maps/map4");

var map5_1 = require("../assets/images/maps/map5");

var map6_1 = require("../assets/images/maps/map6");

var map7_1 = require("../assets/images/maps/map7");

var map8_1 = require("../assets/images/maps/map8");

var map9_1 = require("../assets/images/maps/map9");

var ImageResources_1 = require("../assets/ImageResources");

var MapDataLoader_1 = require("../loading/MapDataLoader");

var GameLevels =
/** @class */
function () {
  function GameLevels() {
    this.current_level = 0;
    this.levels = [];
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL1,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map1_1.map1.width, map1_1.map1.height, map1_1.map1.data),
      start_day_time: 12
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL2,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map2_1.map2.width, map2_1.map2.height, map2_1.map2.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL3,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map3_1.map3.width, map3_1.map3.height, map3_1.map3.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL4,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map4_1.map4.width, map4_1.map4.height, map4_1.map4.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL5,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map5_1.map5.width, map5_1.map5.height, map5_1.map5.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL6,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map6_1.map6.width, map6_1.map6.height, map6_1.map6.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL7,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map7_1.map7.width, map7_1.map7.height, map7_1.map7.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL8,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map8_1.map8.width, map8_1.map8.height, map8_1.map8.data),
      start_day_time: 6
    });
    this.add_level({
      introuction_image: ImageResources_1.ImageID.TUTORIAL__LEVEL9,
      map_data: MapDataLoader_1.load_mapdata_from_image_array(map9_1.map9.width, map9_1.map9.height, map9_1.map9.data),
      start_day_time: 6
    });
  }

  GameLevels.prototype.add_level = function (level_data) {
    this.levels.push(level_data);
  };

  GameLevels.prototype.current = function () {
    return this.levels[this.current_level];
  };

  GameLevels.prototype.next = function () {
    this.current_level++;
    if (this.current_level >= this.levels.length) return false;
    return this.current();
  };

  GameLevels.prototype.select = function (index) {
    this.current_level = index;
  };

  return GameLevels;
}();

exports.default = GameLevels;
},{"../assets/images/maps/map1":"qQyX","../assets/images/maps/map2":"Lc89","../assets/images/maps/map3":"cxU9","../assets/images/maps/map4":"O26Z","../assets/images/maps/map5":"hvwC","../assets/images/maps/map6":"VeRh","../assets/images/maps/map7":"a8wb","../assets/images/maps/map8":"Eibq","../assets/images/maps/map9":"vVTn","../assets/ImageResources":"n9mu","../loading/MapDataLoader":"H7zZ"}],"NhyJ":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapData_1 = __importDefault(require("../../../loading/MapData"));

var WorldMap_1 = __importDefault(require("../WorldMap"));

var TerrainResources_1 = require("../../../assets/TerrainResources");

var SimpleShapes_1 = require("../../../ts_library/space/SimpleShapes");

var CreateMap =
/** @class */
function () {
  function CreateMap() {
    var _this = this;

    this.field_generator = function (map, x, y) {
      var field_data = _this.map_data.at(x, y);

      var possible_terrain = [TerrainResources_1.TerrainTypeID.INDOOR_SHOP, TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS];
      var terrain = {
        type: field_data.terrain,
        variation_key: 0
      };
      var objects = [];

      if (field_data.object) {
        objects.push(new field_data.object());
      }

      var field = {
        location: new SimpleShapes_1.Point(x, y),
        objects: objects,
        terrain: terrain
      };
      return field;
    };

    this.map_data = new MapData_1.default(5, 5);
  }

  CreateMap.prototype.build = function (map_data) {
    if (map_data) this.map_data = map_data;
    var field_generator = this.field_generator;
    var map = new WorldMap_1.default(this.map_data.width, this.map_data.height, field_generator);
    return map;
  };

  return CreateMap;
}();

exports.default = CreateMap;
},{"../../../loading/MapData":"KmiH","../WorldMap":"vY3p","../../../assets/TerrainResources":"cAzr","../../../ts_library/space/SimpleShapes":"fgAD"}],"bOXF":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var System_1 = __importDefault(require("./System"));

var LoadNextLevelSystemEvent_1 = __importDefault(require("./events/LoadNextLevelSystemEvent"));

var GameLevels_1 = __importDefault(require("../../main/GameLevels"));

var FollowWithCameraComponent_1 = __importDefault(require("../components/FollowWithCameraComponent"));

var CreateMap_1 = __importDefault(require("../map/helper/CreateMap"));

var RestartLevelSystemEvent_1 = __importDefault(require("./events/RestartLevelSystemEvent"));

var LevelLoaderSystem =
/** @class */
function (_super) {
  __extends(LevelLoaderSystem, _super);

  function LevelLoaderSystem() {
    var _this = _super.call(this) || this;

    _this.level_handler = new GameLevels_1.default();
    _this.creator_map = new CreateMap_1.default();
    _this.is_loading_level = false;
    return _this;
  }

  LevelLoaderSystem.prototype.update = function (delta_seconds, game_state) {
    if (!this.is_loading_level) return game_state;
    this.is_loading_level = false;
    return this.load_level(game_state);
  };

  LevelLoaderSystem.prototype.load_level = function (game_state) {
    var world_map = this.creator_map.build(this.level_handler.current().map_data);
    var selected_object = world_map.map_fields_in_rect(world_map.get_map_boundries(), function (field) {
      return field.objects;
    }).flatMap(function (objects) {
      return objects.filter(function (object) {
        return object.get(FollowWithCameraComponent_1.default);
      });
    }).reduce(function (selected, next) {
      return selected || next;
    }, null);
    if (selected_object === null) throw new Error();
    var selected = selected_object.instance_ID;
    return Object.assign(game_state, {
      time_of_day: this.level_handler.current().start_day_time,
      world_map: world_map,
      selected: selected
    });
  };

  LevelLoaderSystem.prototype.handle = function (event) {
    if (event instanceof LoadNextLevelSystemEvent_1.default) {
      this.level_handler.next();
      this.is_loading_level = true;
    } else if (event instanceof RestartLevelSystemEvent_1.default) {
      this.is_loading_level = true;
    }
  };

  return LevelLoaderSystem;
}(System_1.default);

exports.default = LevelLoaderSystem;
},{"./System":"c0W6","./events/LoadNextLevelSystemEvent":"xMk3","../../main/GameLevels":"exJH","../components/FollowWithCameraComponent":"bIwP","../map/helper/CreateMap":"NhyJ","./events/RestartLevelSystemEvent":"qXK9"}],"jKSw":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ImageManager_1 = __importDefault(require("./manager/ImageManager"));

var FpsCounter_1 = __importDefault(require("./ts_library/utility/FpsCounter"));

var Input_1 = require("./logic/user_input/Input");

var System_1 = __importDefault(require("./logic/system/System"));

var GameState_1 = require("./main/GameState");

var GameVisualizer_1 = __importDefault(require("./main/GameVisualizer"));

var SimpleShapes_1 = require("./ts_library/space/SimpleShapes");

var GameMode_1 = require("./main/GameMode");

var UpdateMapSystem_1 = __importDefault(require("./logic/system/UpdateMapSystem"));

var TaskHandleSystem_1 = __importDefault(require("./logic/system/TaskHandleSystem"));

var InputHandlingSystem_1 = __importDefault(require("./logic/system/InputHandlingSystem"));

var ImageResources_1 = require("./assets/ImageResources");

var TimeOfDaySystem_1 = __importDefault(require("./logic/system/TimeOfDaySystem"));

var CalculateInformationSystem_1 = __importDefault(require("./logic/system/CalculateInformationSystem"));

var WinOrLooseSystem_1 = __importDefault(require("./logic/system/WinOrLooseSystem"));

var WorldMap_1 = __importDefault(require("./logic/map/WorldMap"));

var TerrainResources_1 = require("./assets/TerrainResources");

var RestartLevelSystemEvent_1 = __importDefault(require("./logic/system/events/RestartLevelSystemEvent"));

var LevelLoaderSystem_1 = __importDefault(require("./logic/system/LevelLoaderSystem"));

var Game =
/** @class */
function () {
  function Game(element) {
    var _this = this; // Various Helpers


    this.fps_counter = new FpsCounter_1.default(60, 60); //

    this.systems = [];
    this.context = this.setup_dom_context(element);
    this.input_delegator = new Input_1.InputDelegator(element); //
    // add visual representives        

    this.images = this.construct_image_manager();
    this.images.on_progress_listener.add(function (_a) {
      var _b = __read(_a, 2),
          progress = _b[0],
          image = _b[1];

      var height = Math.min(image.height, _this.context.canvas.height / 2);
      var width = image.width / image.height * height;

      _this.context.drawImage(image, progress * _this.context.canvas.width - width, _this.context.canvas.height / 2 - height / 2, width, height);
    });
    this.game_state = {
      modus: GameMode_1.GameMode.INITIAL,
      post_game_stats: {
        won_or_lost: GameState_1.GameResult.TIE
      },
      current_level: 0,
      day: 0,
      time_of_day: 6,
      world_map: new WorldMap_1.default(5, 5, function (map, x, y) {
        return {
          location: new SimpleShapes_1.Point(x, y),
          objects: [],
          terrain: {
            type: TerrainResources_1.TerrainTypeID.OUTDOOR_GRAS,
            variation_key: 0
          }
        };
      }),
      camera_position: new SimpleShapes_1.Point(3, 3),
      selected: null,
      tasks: [],
      calculated: {
        remaining_virusses: 0,
        remaining_humans: 0
      }
    }; // Visualizer

    this.visualizer = new GameVisualizer_1.default(this.context, this.images);
    this.systems = [new LevelLoaderSystem_1.default(), new CalculateInformationSystem_1.default(), new WinOrLooseSystem_1.default(), new TimeOfDaySystem_1.default(), new UpdateMapSystem_1.default(), new TaskHandleSystem_1.default(), new InputHandlingSystem_1.default(this.input_delegator)];
    System_1.default.events.add(function (event) {
      _this.systems.forEach(function (system) {
        system.handle(event);
      });
    });
  }

  Game.prototype.setup_dom_context = function (element) {
    // Link with dom
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    element.innerHTML = '';
    element.appendChild(canvas);
    var context = canvas.getContext('2d');
    if (!context) throw new Error('Could not create canvas context');
    return this.context = context;
  };

  Game.prototype.construct_image_manager = function () {
    return new ImageManager_1.default(ImageResources_1.image_resources);
  };

  Game.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      var last_update, _update;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.images.wait_until_loaded()];

          case 1:
            _a.sent(); // this.levels = map_images.map(load_mapdata_from_image);


            System_1.default.events.trigger_event(new RestartLevelSystemEvent_1.default());
            this.game_state.modus = GameMode_1.GameMode.PLAYING;
            last_update = performance.now();

            _update = function update() {
              var now = performance.now();
              var delta_seconds = Math.min(0.013, (now - last_update) / 1000);

              _this.fps_counter.update();

              _this.update(delta_seconds);

              _this.draw(delta_seconds);

              requestAnimationFrame(_update);
              last_update = now;
            };

            _update();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Game.prototype.update = function (delta_seconds) {
    var _this = this;

    this.game_state = this.systems.reduce(function (game_state, system) {
      return system.update(delta_seconds, _this.game_state);
    }, this.game_state);
  };

  Game.prototype.draw = function (delta_seconds) {
    this.context.clearRect(0, 0, 800, 600);
    this.visualizer.display(delta_seconds, this.game_state);
  };

  return Game;
}();

exports.default = Game;
},{"./manager/ImageManager":"Am7D","./ts_library/utility/FpsCounter":"SvKx","./logic/user_input/Input":"kRKL","./logic/system/System":"c0W6","./main/GameState":"kbIU","./main/GameVisualizer":"fhts","./ts_library/space/SimpleShapes":"fgAD","./main/GameMode":"Xj3t","./logic/system/UpdateMapSystem":"igT0","./logic/system/TaskHandleSystem":"tLR9","./logic/system/InputHandlingSystem":"l7X5","./assets/ImageResources":"n9mu","./logic/system/TimeOfDaySystem":"b5KT","./logic/system/CalculateInformationSystem":"mW26","./logic/system/WinOrLooseSystem":"KKVU","./logic/map/WorldMap":"vY3p","./assets/TerrainResources":"cAzr","./logic/system/events/RestartLevelSystemEvent":"qXK9","./logic/system/LevelLoaderSystem":"bOXF"}],"QCba":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Game_1 = __importDefault(require("./Game"));

var element = document.getElementsByClassName('screen__app').item(0);
if (!(element instanceof HTMLElement)) throw new Error('No');
new Game_1.default(element).start();
},{"./Game":"jKSw"}]},{},["QCba"], null)
//# sourceMappingURL=src.f014e8e4.js.map