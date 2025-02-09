/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Song } from "../../../../../Model/Song/songs";
import classes from "./style";
import SongPlaylistImage from "../../../../Util/SongPlaylistImage/SongPlaylistImage";
import { PlaylistSong } from "../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TableRow = ({
  index,
  playlistSong,
}: {
  index: number;
  playlistSong: PlaylistSong;
}) => {
  const [song, setSong] = useState<Song>();
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    // TODO API GET SONG
    setSong({
      name: "The Weekend Whip",
      artists: ["The Fold"],
      audioSrc: "/Audio/The Fold - The Weekend Whip (Official Audio).mp3",
      image: "",
      album: "LEGO NINJAGO: For the Spinners",
      duration: "3:30",
    });
  }, []);

  if (!song) return <></>;

  const formatDate = () =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(playlistSong.dateAdded);

  return (
    <div
      css={classes.row}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div css={classes.index}>
        {hovering ? (
          <PlayArrowIcon style={{ color: "white" }} />
        ) : (
          <span>{index + 1}</span>
        )}
      </div>
      <div css={classes.title}>
        <SongPlaylistImage item={song} cssClass={classes.image} />
      </div>
      <div css={classes.album}>{index}</div>
      <div css={classes.dateAdded}>{formatDate()}</div>
      <div css={classes.right}>
        <div css={classes.addToList}></div>
        <div css={classes.duration}>{song.duration}</div>
        <div></div>
      </div>
    </div>
  );
};

export default TableRow;
