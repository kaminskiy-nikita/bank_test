import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Loading({isLoading}) {
    return (
        <ClipLoader color="red" loading={isLoading} cssOverride={{ position: 'absolute', margin: 'auto', left: 0, right: 0, top: 0, bottom: 0 }} />
    );
}

export default Loading;
