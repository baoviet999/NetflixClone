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
                success: "🎉",
                error: "✖️",
                warning: "⚠️",
                info: "ℹ️",
            }}
            TransitionComponent={Slide}
            maxSnack={3}
        >
            {props.children}
        </SnackbarProvider>
    );
}

export default Snackbar;