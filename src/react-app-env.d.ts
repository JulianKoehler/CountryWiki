/// <reference types="react-scripts" />
declare module "styled-components";

// Necessary to use props in styled components
import {} from "styled-components";
import { CSSProp } from "styled-components";
declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
