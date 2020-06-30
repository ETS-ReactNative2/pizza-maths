import React, { createContext, useState } from "react";

const UpperLevelContext = createContext();

const UpperLevelProvider = ({ children }) => {
  const [comparisonDiv, setComparisonDiv] = useState(false);
  const [comparisonClass, setComparisonClass] = useState(
    "single-view-comparison"
  );
  const [splitView, setSplitView] = useState("single-view");
  const [metricUnits, setMetricUnits] = useState(false);
  const handleAddComparison = (event) => {
    setComparisonDiv(true);
    setComparisonClass("side-by-side-comparison");
    setSplitView("split-view");
  };
  const handleRemoveComparison = (event) => {
    setComparisonDiv(false);
    setComparisonClass("single-view-comparison");
    setSplitView("single-view");
  };
  const handleMetricConversion = () => setMetricUnits(true);
  const handleImperialConversion = () => setMetricUnits(false);
  return (
    <UpperLevelContext.Provider
      value={{
        comparisonDiv,
        setComparisonDiv,
        comparisonClass,
        setComparisonClass,
        splitView,
        setSplitView,
        metricUnits,
        setMetricUnits,
        handleAddComparison,
        handleRemoveComparison,
        handleMetricConversion,
        handleImperialConversion,
      }}
    >
      {children}
    </UpperLevelContext.Provider>
  );
};

export { UpperLevelProvider, UpperLevelContext };
