/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import classes from "../style";
import useLoop from "../../../../Util/LocalStorage/useLoop";

const LoopButton = ({ cssClass }: { cssClass: Interpolation<Theme> }) => {
  const { isLoop, switchLoop } = useLoop();

  return (
    <button css={[classes.selectButton(isLoop), cssClass]} onClick={switchLoop}>
      <svg>
        <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" />
      </svg>
    </button>
  );
};

export default LoopButton;
