'use client'
import Analysis from '@/components/Analysis';
import Summary from '@/components/Summary';
import PrivateRoute from '@/hoc/PrivateRoute';
import React from 'react'

 function Result({params}) {
    const { slug } = React.use(params);
    return (
      <>
        <Summary />
        <Analysis />
      </>
    );
  }
export default PrivateRoute(Result)