
import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#1e40af");

  const handleColorChange = (args) => {
    setSelectedColor(args.currentValue.hex);
  };

  return (
    <div className="colorpicker-container">
      <h2>🎨 Pick a Theme Color</h2>
      <p>Choose your favorite color using the color picker below:</p>

      <div className="colorpicker-wrapper">
        <ColorPickerComponent
          id="color-picker"
          mode="Palette"
          showButtons={true}
          modeSwitcher={true}
          inline={true}
          value={selectedColor}
          change={handleColorChange}
        />
        <div
          className="color-preview"
          style={{ backgroundColor: selectedColor }}
        >
          <span>Preview: {selectedColor}</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
