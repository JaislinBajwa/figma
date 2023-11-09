import React from 'react';

const Networklayer = () => {
   return (


<div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(142, 138, 229, 0.20)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{width: 16, height: 16, position: 'relative'}}>
        <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: '#8E8AE5', border: '1px #7E7BCC solid'}}></div>
    </div>
    <div style={{color: '#4F5259', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Network Layer</div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>VPC NAT Gateway</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>AWS ALB P1/SCM</div>
    </div>
</div>
 );
};

export default Networklayer;