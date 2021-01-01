import { swiss as theme } from "@theme-ui/presets";

export default {
  ...theme,
  styles: {
    ...theme.styles
  },
  breakPoints: ["768px", "960px", "1200px"],
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      border: "1px solid #d8dee2",
      boxShadow: "0 22px 23px -19px rgba(0,0,0,.2)",
      "&:hover": {
        boxShadow: "0 1px 32px -8px rgba(0,0,0,.2)",
        background: "#fafbfc"
      }
    }
  },
  buttons: {
    primary: {
      fontFamily: "system-ui",
      cursor: "pointer",
      fontWeight: "500"
    }
  },
  text: {
    default: {
      fontSize: 0
    },
    smallHeading: {
      fontSize: 0,
      fontWeight: 600
    },
    smallerHeading: {
      fontSize: 0,
      fontWeight: 500
    }
  }
};
