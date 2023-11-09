import React from 'react';

const Middleware = () => {
   return (
    <div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(253, 229, 181, 0.50)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{width: 16, height: 16, position: 'relative'}}>
        <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: 'rgba(254, 190.50, 63.50, 0.60)', border: '1px #D9B773 solid'}}></div>
    </div>
    <div style={{color: '#2D2E2F', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Middleware</div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Step Function</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>AWS SQS</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SNS</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Lambda</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cloud Search</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ECS-Fargate-Infra</div>
    </div>
    <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{color: '#4F5259', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ECS-Microservices</div>
    </div>
</div>
 );
};

export default Middleware;