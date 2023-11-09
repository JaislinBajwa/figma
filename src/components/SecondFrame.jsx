import React from 'react';

const SecondFrame = () => {
   return (
    
    <div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(142, 214, 212, 0.40)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{width: 16, height: 16, position: 'relative'}}>
        <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: 'rgba(35.70, 178.50, 171.36, 0.50)', borderRadius: 9999, border: '1px #70ADAC solid'}} />
    </div>
    <div style={{color: '#2D2E2F', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Front-end</div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cloudfront</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>API Gateways</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Browser</div>
    </div>
</div>

    );
};

export default SecondFrame;