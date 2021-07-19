import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './input-option';
import './feed.css';

function feed() {
  return (
    <div className="feed">
      <div className="feed__input__container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputoptions">
          <InputOption Icon={ImageIcon} color="#70B5f9" title="Photo" />
          <InputOption Icon={SubscriptionIcon} color="#E7A33E" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
          <InputOption
            Icon={CalendarIcon}
            color="#7FC15E"
            title="Write Article"
          />
        </div>
      </div>
    </div>
  );
}

export default feed;
