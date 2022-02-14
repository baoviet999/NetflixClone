import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from "@material-ui/core";
import React from "react";
import RegisterConainer from "../../feartures/auth/components/RegisterContainer";

Register.propTypes = {};

function Register(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(prev => !prev);
    };
    return (
        <div>
            <Typography onClick={handleClickOpen}>
                Sign In
            </Typography>
            <Dialog
                open={open}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <RegisterConainer />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickOpen} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Register;
