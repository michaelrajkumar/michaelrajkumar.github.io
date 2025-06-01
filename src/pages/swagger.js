import React from 'react';
import { RedocStandalone } from 'redoc';

export default function RedocSwagger() {
  return (
    <div>
      <a href='/' className='back-button'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUtJREFUaEPV2TESwiAUhOFN55Vs9VDaqZ1ez8YrWFhbG2ZkJhMTIGGf7LOxkvwfJDMBO9h+zgA2AI5Wl+msBu7HDfGn7/g3K4QVYBgf58gEYQGYijdDsAGp+IC4A9gCeLNuXSagJH4P4MWKD+OwAE3iWYBm8QxA0/haQPP4GoBE/FqATPwagFT8UoBc/BKAZHwpQDa+BCAdnwPIx6cALuLnAG7ipwCu4seAXDzzNZ42VtwPuIyPK+A2PgIO/dnNlbamfx4o3kJuEcM9sUvEeFOfQzwA7AA8/3ynzF5u6lTCFWLuWMUNInUu5AKRO9iSR+QA4eGRRpQApBGlAFnEEoAkYilADrEGIIVYC5BB1AAkELWA5ggGoCmCBWiGYAICIre/lv6bNW46Uu9OAXhhbobYK5BC0ONzh7u1EzVcCZN4a0B8JobftZPy8/sPYEt6K2EmrSUAAAAASUVORK5CYII=' width={20} height={15} />Back</a>
      <RedocStandalone
        specUrl="/openapi.yml"
        options={{ scrollYOffset: 50 }}
      />
    </div>
  );
}
