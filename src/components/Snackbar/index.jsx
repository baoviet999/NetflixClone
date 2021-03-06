import { Slide } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';

Snackbar.propTypes = {
    
};

function Snackbar(props) {
    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            iconVariant={{
                success: "đ",
                error: "âī¸",
                warning: "â ī¸",
                info: "âšī¸",
            }}
            TransitionComponent={Slide}
            maxSnack={3}
        >
            {props.children}
        </SnackbarProvider>
    );
}

export default Snackbar;