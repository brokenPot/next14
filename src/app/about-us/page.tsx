import React from 'react';
import Avatar from "@/app/about-us/components/avatar";
import Navigation from "@/app/about-us/components/Navigation";

function Page() {
    return (
        <div>
        <Navigation/>
        <div>
            Its us!
            <Avatar/>
        </div>
        </div>

    );
}

export default Page;