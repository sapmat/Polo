/** @jsxImportSource @emotion/react */
import classes from "../../style";
import { useNavigate } from "react-router";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <div
      css={classes.homeButton}
      onClick={() => {
        navigate("/");
      }}
    >
      <svg>
        <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
      </svg>
    </div>
  );
};

export default HomeButton;
