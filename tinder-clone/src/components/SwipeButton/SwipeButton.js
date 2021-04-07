import React from 'react'
import './SwipeButton.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButton = () => {
    return (
        <div className="swipeButton">
             <IconButton className="swipe__replay">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe__close">
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe__star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe__favorite">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe__flash">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButton
