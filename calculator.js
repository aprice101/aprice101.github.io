const elements = {
    "H": 1.008,
    "He": 4.0026022,
    "Li": 6.94,
    "Be": 9.01218315,
    "B": 10.81,
    "C": 12.011,
    "N": 14.007,
    "O": 15.999,
    "F": 18.99840316,
    "Ne": 20.17976,
    "Na": 22.98976928,
    "Mg": 24.305,
    "Al": 26.98153857,
    "Si": 28.085,
    "P": 30.973762,
    "S": 32.06,
    "Cl": 35.45,
    "Ar": 39.9481,
    "K": 39.09831,
    "Ca": 40.0784,
    "Sc": 44.9559085,
    "Ti": 47.8671,
    "V": 50.94151,
    "Cr": 51.99616,
    "Mn": 54.9380443,
    "Fe": 55.8452,
    "Co": 58.9331944,
    "Ni": 58.69344,
    "Cu": 63.5463,
    "Zn": 65.382,
    "Ga": 69.7231,
    "Ge": 72.6308,
    "As": 74.9215956,
    "Se": 78.9718,
    "Br": 79.904,
    "Kr": 83.7982,
    "Rb": 85.46783,
    "Sr": 87.621,
    "Y": 88.905842,
    "Zr": 91.2242,
    "Nb": 92.906372,
    "Mo": 95.951,
    "Tc": 98,
    "Ru": 101.072,
    "Rh": 102.905502,
    "Pd": 106.421,
    "Ag": 107.86822,
    "Cd": 112.4144,
    "In": 114.8181,
    "Sn": 118.7107,
    "Sb": 121.7601,
    "Te": 127.603,
    "I": 126.904473,
    "Xe": 131.2936,
    "Cs": 132.905452,
    "Ba": 137.3277,
    "La": 138.905477,
    "Ce": 140.1161,
    "Pr": 140.907662,
    "Nd": 144.2423,
    "Pm": 145,
    "Sm": 150.362,
    "Eu": 151.9641,
    "Gd": 157.253,
    "Tb": 158.925352,
    "Dy": 162.5001,
    "Ho": 164.930332,
    "Er": 167.2593,
    "Tm": 168.934222,
    "Yb": 173.0451,
    "Lu": 174.96681,
    "Hf": 178.492,
    "Ta": 180.947882,
    "W": 183.841,
    "Re": 186.2071,
    "Os": 190.233,
    "Ir": 192.2173,
    "Pt": 195.0849,
    "Au": 196.9665695,
    "Hg": 200.5923,
    "Tl": 204.38,
    "Pb": 207.21,
    "Bi": 208.980401,
    "Po": 209,
    "At": 210,
    "Rn": 222,
    "Fr": 223,
    "Ra": 226,
    "Ac": 227,
    "Th": 232.03774,
    "Pa": 231.035882,
    "U": 238.028913,
    "Np": 237,
    "Pu": 244,
    "Am": 243,
    "Cm": 247,
    "Bk": 247,
    "Cf": 251,
    "Es": 252,
    "Fm": 257,
    "Md": 258,
    "No": 259,
    "Lr": 266,
    "Rf": 267,
    "Db": 268,
    "Sg": 269,
    "Bh": 270,
    "Hs": 269,
    "Mt": 278,
    "Ds": 281,
    "Rg": 282,
    "Cn": 285,
    "Nh": 286,
    "Fl": 289,
    "Mc": 289,
    "Lv": 293,
    "Ts": 294,
    "Og": 294
  }


function check_string(formula){
    //regex goes here to check it is of the type that can be checked against element list e.g. one or more Letters
        let check_array = [];
        if (formula.match(/[A-Z][a-z]?\d*(\s[A-Z][a-z]?\d*)*/) !== null){
            check_array = formula.match(/[A-Z][a-z]?\d*(\s[A-Z][a-z]?\d*)*/)
        }else{
            return false;
        };
        if (check_array[0] === formula){
            return true;
        }
        return false;
    }

function makeElementArray(formula){
    let length = formula.length;
    let elementArray = [];
    let currentEl = '';
    let currentDigit = '';
    for (let i = 0; i < length; i++){
        if (/[A-Z]/.test(formula[i])){
            currentEl += formula[i];
        }else if(/[a-z]/.test(formula[i])){
            currentEl += formula[i];
        }else if (/\d/.test(formula[i])){
            currentDigit += formula[i];
        }else if (/\s/.test(formula[i])){

            elementArray.push([currentEl, currentDigit]);
            currentEl = '';
            currentDigit = '';
        }


    }
        elementArray.push([currentEl, currentDigit]);
        console.log(elementArray);
        return elementArray;
}


function calculator(input){
    const warning = 'Please input valid chemical formula: e.g. C20 H30 O3 Mg';
    if (check_string(input) === false){
        return warning;
    }
    let elArray = makeElementArray(input);

    let weight = 0;
    for (let i = 0; i < elArray.length; i++){
        if (elArray[i][1]==''){
            elArray[i][1]='1';
        }
        if(elements.hasOwnProperty(elArray[i][0])){
            weight += elements[elArray[i][0]] * elArray[i][1];
        }else{
            return warning;
        }
    }
    return Math.round(weight * 100000)/100000;
}