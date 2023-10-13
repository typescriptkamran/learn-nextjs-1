"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button3_module_css_1 = __importDefault(require("./Button3.module.css"));
const Button = () => {
    return (<div className="container">
      <button className={Button3_module_css_1.default.composedButton}>Composed</button>
      <p className="textContainer"> css applied from Component-Level Composed class </p>
    </div>);
};
exports.default = Button;
