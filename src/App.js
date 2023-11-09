import React from 'react';
import SecondFrame from "./components/SecondFrame";
import ApiGateway from './components/ApiGateway';
import CloudFront from './components/CloudFront';
import Browser from './components/Brwoser';
import Middleware from './components/Middleware';
import StepFunction from './components/StepFunction';
import AWSSQS from './components/AWSSQS';
import SNS from './components/SNS';
import Lambda from './components/Lambda';
import CloudSearch from './components/CloudSearch';
import ECSInfra from './components/ECSInfra';
import ECSMicro from './components/ECSMicro';
import Backend from './components/Backend';
import RedisCache from './components/Rediscache';
import RDSCluster from './components/RDSCluster';
import AWSSES from './components/AWSSES';
import Newtorklayer from './components/Networklayer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '200%', height: '100%', background: '#002244' }} />
      <SecondFrame />
      {/* Flex container for ApiGateway, CloudFront, and Browser in one row */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ApiGateway />
        <CloudFront />
        <Browser />
        
      </div>
      <Middleware/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <StepFunction/>
      <AWSSQS/>
      <SNS/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Lambda/>
      <CloudSearch/>
      <ECSInfra/>
      </div>
      
      <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
      <ECSMicro />
      <Backend/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RedisCache/>
        <RDSCluster/>
        <AWSSES/>
      </div>
      <Newtorklayer/>
      </div>
    </div>
    
  );
};

export default App;
