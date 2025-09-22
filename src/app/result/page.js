'use client'
import Analysis from '@/components/Analysis';
import Summary from '@/components/Summary';
import PrivateRoute from '@/hoc/PrivateRoute';
import React from 'react'

 function Result() {
    return (
      <>
        <Summary />
        <Analysis />
      </>
    );
  }
export default PrivateRoute(Result)