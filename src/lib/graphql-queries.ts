import { gql } from "../__generated__";

export const KEANU_IMAGE = gql(`
  query GetKeanuImage($width: Int!, $height: Int, $y: Boolean, $g: Boolean) {
    keanuImage(width: $width, height: $height, y: $y, g: $g)
  }
`);
