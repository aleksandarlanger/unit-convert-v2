//  ................. OBJECTS FOR UNITS .................

const mm = {
  toMm: 1,
  toCm: 0.1,
  toM: 0.001,
  toKm: 0.000001,
  toIn: 0.0393701,
  toFoot: 0.00328084,
  toMile: 0.000000621,
};

const cm = {
  toMm: 10,
  toCm: 1,
  toM: 0.01,
  toKm: 0.00001,
  toIn: 0.3937,
  toFoot: 0.0328084,
  toMile: 0.000006215,
};

const m = {
  toMm: 1000,
  tocM: 100,
  toM: 1,
  toKm: 0.001,
  toIn: 39.3701,
  toFoot: 3.28,
  toMile: 0.000621371,
};

const km = {
  toMm: 1000000,
  tocM: 100000,
  toM: 1000,
  toKm: 1,
  toIn: 39370,
  toFoot: 3280.84,
  toMile: 0.62137119,
};

const inch = {
  toMm: 25.4,
  tocM: 2.54,
  toM: 0.0254,
  toKm: 0.0000254,
  toIn: 1,
  toFoot: 0.0833333,
  toMile: 0.000015783,
};

const foot = {
  toMm: 304.8,
  tocM: 30.48,
  toM: 0.3048,
  toKm: 0.0003048,
  toIn: 12,
  toFoot: 1,
  toMile: 0.000189394,
};

const mile = {
  toMm: 1609344,
  tocM: 160934,
  toM: 1609.34,
  toKm: 1.60934,
  toIn: 63360,
  toFoot: 5280,
  toMile: 1,
};

// .................. SELECTORS .............................

const convertBtn = document.querySelector("#converter");
const output = document.querySelector("#output");
// ................. UNIT SELECTORS - LENGHT .................

let option1 = document.querySelector("#main_select");
let option2 = document.querySelector("#secondary_select");

//  ................. CLASSES.................

class Units {
  constructor(what, to) {
    this.what = what;
    this.to = to;
  }

  convertMultiply = () => {
    return this.what * this.to;
  };
  convertDivide = () => {
    return this.what / this.to;
  };
}

//     ................... CALCULATIONS ....................

//    ///////////////////////////////////////////////////////////////////////

//  ................... METRIC TO IMPERIAL  ...............

mmToInch = () => {
  const unitconversion = new Units(userinput.value, mm.toIn);
  output.value = unitconversion.convertMultiply().toFixed(3);
};
mmToFoot = () => {
  const unitconversion = new Units(userinput.value, mm.toFoot);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

mmToMile = () => {
  const unitconversion = new Units(userinput.value, mm.toMile);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

cmToInch = () => {
  const unitconversion = new Units(userinput.value, cm.toIn);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

cmToFoot = () => {
  const unitconversion = new Units(userinput.value, cm.toFoot);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

cmToMile = () => {
  const unitconversion = new Units(userinput.value, cm.toMile);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

mToInch = () => {
  const unitconversion = new Units(userinput.value, m.toIn);
  output.value = unitconversion.convertMultiply().toFixed(3);
};
mToFoot = () => {
  const unitconversion = new Units(userinput.value, m.toFoot);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

mToMile = () => {
  const unitconversion = new Units(userinput.value, m.toMile);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

kmToInch = () => {
  const unitconversion = new Units(userinput.value, km.toIn);
  output.value = unitconversion.convertMultiply().toFixed(3);
};
kmToFoot = () => {
  const unitconversion = new Units(userinput.value, km.toFoot);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

kmToMile = () => {
  const unitconversion = new Units(userinput.value, km.toMile);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

//  ................... METRIC TO METRIC  ...............

mmToCm = () => {
  const unitconversion = new Units(userinput.value, mm.toCm);
  output.value = unitconversion.convertMultiply();
};

cmTokm = () => {
  const unitconversion = new Units(userinput.value, cm.toKm);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

mmToM = () => {
  const unitconversion = new Units(userinput.value, mm.toM);
  output.value = unitconversion.convertMultiply().toFixed(3);
};

cmToMm = () => {
  const unitconversion = new Units(userinput.value, cm.toMm);
  output.value = unitconversion.convertMultiply();
};

cmToM = () => {
  const unitconversion = new Units(userinput.value, cm.toM);
  output.value = unitconversion.convertMultiply();
};

mToMm = () => {
  const unitconversion = new Units(userinput.value, m.toMm);
  output.value = unitconversion.convertMultiply();
};

mToKm = () => {
  const unitconversion = new Units(userinput.value, m.toKm);
  output.value = unitconversion.convertMultiply();
};

mToCm = () => {
  const unitconversion = new Units(userinput.value, m.tocM);
  output.value = unitconversion.convertMultiply();
};

kmToMm = () => {
  const unitconversion = new Units(userinput.value, km.toMm);
  output.value = unitconversion.convertMultiply();
};

kmToCm = () => {
  const unitconversion = new Units(userinput.value, km.tocM);
  output.value = unitconversion.convertMultiply();
};

kmToM = () => {
  const unitconversion = new Units(userinput.value, km.toM);
  output.value = unitconversion.convertMultiply();
};

//  ................... IMPERIAL TO METRIC  ...............

inchToMm = () => {
  const unitconversion = new Units(userinput.value, mm.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

inchToCm = () => {
  const unitconversion = new Units(userinput.value, cm.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

inchToM = () => {
  const unitconversion = new Units(userinput.value, m.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

inchToKm = () => {
  const unitconversion = new Units(userinput.value, km.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToMm = () => {
  const unitconversion = new Units(userinput.value, mm.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToCm = () => {
  const unitconversion = new Units(userinput.value, cm.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToM = () => {
  const unitconversion = new Units(userinput.value, m.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToKm = () => {
  const unitconversion = new Units(userinput.value, km.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileToCm = () => {
  const unitconversion = new Units(userinput.value, cm.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileToMM = () => {
  const unitconversion = new Units(userinput.value, mm.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileToM = () => {
  const unitconversion = new Units(userinput.value, m.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileTokM = () => {
  const unitconversion = new Units(userinput.value, km.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

//  ................... IMPERIAL TO IMPERIAL  ...............

inchToFoot = () => {
  const unitconversion = new Units(userinput.value, inch.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

inchToMile = () => {
  const unitconversion = new Units(userinput.value, inch.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToInch = () => {
  const unitconversion = new Units(userinput.value, foot.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

footToMile = () => {
  const unitconversion = new Units(userinput.value, foot.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

inchToMile = () => {
  const unitconversion = new Units(userinput.value, inch.toMile);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileToFoot = () => {
  const unitconversion = new Units(userinput.value, mile.toFoot);
  output.value = unitconversion.convertDivide().toFixed(3);
};

mileToInch = () => {
  const unitconversion = new Units(userinput.value, mile.toIn);
  output.value = unitconversion.convertDivide().toFixed(3);
};

//  ................. EXECUTION .................

//  ................... METRIC TO IMPERIAL  ...............

convertBtn.addEventListener("click", () => {
  if (option1.value === "milimeter" && option2.value === "inch") {
    mmToInch();
  } else if (option1.value === "milimeter" && option2.value === "foot") {
    mmToFoot();
  } else if (option1.value === "milimeter" && option2.value === "mile") {
    mmToMile();
  }

  if (option1.value === "centimeter" && option2.value === "inch") {
    cmToInch();
  } else if (option1.value === "centimeter" && option2.value === "foot") {
    cmToFoot();
  } else if (option1.value === "centimeter" && option2.value === "mile") {
    cmToMile();
  }

  if (option1.value === "meter" && option2.value === "inch") {
    mToInch();
  } else if (option1.value === "meter" && option2.value === "foot") {
    mToFoot();
  } else if (option1.value === "meter" && option2.value === "mile") {
    mToMile();
  }

  if (option1.value === "kilometer" && option2.value === "inch") {
    kmToInch();
  } else if (option1.value === "kilometer" && option2.value === "foot") {
    kmToFoot();
  } else if (option1.value === "kilometer" && option2.value === "mile") {
    kmToMile();
  }

  //  ................... IMPERIAL TO METRIC  ...............

  if (option1.value === "inch" && option2.value === "milimeter") {
    inchToMm();
  } else if (option1.value === "inch" && option2.value === "centimeter") {
    inchToCm();
  } else if (option1.value === "inch" && option2.value === "meter") {
    inchToM();
  }

  if (option1.value === "foot" && option2.value === "milimeter") {
    footToMm();
  } else if (option1.value === "foot" && option2.value === "centimeter") {
    footToCm();
  } else if (option1.value === "foot" && option2.value === "meter") {
    footToM();
  }

  if (option1.value === "mile" && option2.value === "milimeter") {
    mileToMM();
  } else if (option1.value === "mile" && option2.value === "centimeter") {
    mileToMM();
  } else if (option1.value === "mile" && option2.value === "meter") {
    mileToM();
  }

  if (option1.value === "inch" && option2.value === "kilometer") {
    inchToKm();
  } else if (option1.value === "foot" && option2.value === "kilometer") {
    footToKm();
  } else if (option1.value === "mile" && option2.value === "kilometer") {
    mileTokM();
  }

  //  ................... METRIC TO METRIC  ...............

  if (option1.value === "milimeter" && option2.value === "centimeter") {
    mmToCm();
  } else if (option1.value === "milimeter" && option2.value === "meter") {
    mmToM();
  } else if (option1.value === "milimeter" && option2.value === "milimeter") {
    output.value = userinput.value;
  }

  if (option1.value === "centimeter" && option2.value === "milimeter") {
    cmToMm();
  } else if (option1.value === "centimeter" && option2.value === "meter") {
    cmToM();
  } else if (option1.value === "centimeter" && option2.value === "kilometer") {
    cmTokm();
  } else if (option1.value === "centimeter" && option2.value === "centimeter") {
    output.value = userinput.value;
  }

  if (option1.value === "meter" && option2.value === "milimeter") {
    mToMm();
  } else if (option1.value === "meter" && option2.value === "centimeter") {
    kmToCm();
  } else if (option1.value === "meter" && option2.value === "kilometer") {
    mToKm();
  } else if (option1.value === "meter" && option2.value === "meter") {
    output.value = userinput.value;
  }

  if (option1.value === "kilometer" && option2.value === "milimeter") {
    kmToMm();
  } else if (option1.value === "kilometer" && option2.value === "centimeter") {
    kmToCm();
  } else if (option1.value === "kilometer" && option2.value === "meter") {
    kmToM();
  } else if (option1.value === "kilometer" && option2.value === "kilometer") {
    output.value = userinput.value;
  }

  //  ................... IMPERIAL TO IMPERIAL  ...............

  if (option1.value === "inch" && option2.value === "foot") {
    inchToFoot();
  } else if (option1.value === "inch" && option2.value === "mile") {
    inchToMile();
  } else if (option1.value === "inch" && option2.value === "inch") {
    output.value = userinput.value;
  }

  if (option1.value === "foot" && option2.value === "inch") {
    footToInch();
  } else if (option1.value === "foot" && option2.value === "mile") {
    footToMile();
  } else if (option1.value === "foot" && option2.value === "foot") {
    output.value = userinput.value;
  }

  if (option1.value === "mile" && option2.value === "foot") {
    mileToFoot();
  } else if (option1.value === "mile" && option2.value === "inch") {
    mileToInch();
  } else if (option1.value === "mile" && option2.value === "mile") {
    output.value = userinput.value;
  }
});
