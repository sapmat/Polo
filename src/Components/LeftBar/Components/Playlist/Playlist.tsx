/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../Model/Playlist/playlist";
import classes from "./style";
import ItemImage from "../../../Util/ItemImage/ItemImage";
import { useNavigate } from "react-router";
import usePlaylist from "../../../../Util/LocalStorage/usePlaylist";
import useSong from "../../../../Util/LocalStorage/useSong";
import { setPlaying, togglePlaying } from "../../../../Store/songSlice";
import { useDispatch, useSelector } from "react-redux";
import PlayButton from "../../../Util/Buttons/PlayButton/PlayButton";
import { theme } from "../../../../theme";

const SidePlaylist = ({
  playlist,
  open,
}: {
  playlist: Playlist;
  open: boolean;
}) => {
  const dispatch = useDispatch();
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );

  const navigate = useNavigate();

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const togglePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      dispatch(togglePlaying());
    } else {
      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const checkPlaying = (): boolean => {
    return currentPlaylist.id === playlist.id && isPlaying;
  };

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <div css={classes.imageContainer}>
        <ItemImage item={playlist} cssClass={classes.image} />
        <div id={"play-button"} css={classes.imagePlay}>
          <PlayButton
            cssClass={classes.playButton}
            isPlaying={checkPlaying()}
            togglePlay={togglePlay}
          />
        </div>
      </div>
      <div css={classes.sidePlaylistContent(open)}>
        <p>{playlist.name}</p>
        <div css={classes.detailsBottom}>
          <div
            css={classes.pin(playlist.isPinned)}
          >
            <PushPinIcon sx={{ color: theme.colors["default"].main.main }} />
          </div>
          <p css={classes.createdBy}>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
