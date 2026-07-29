(function(global){
  'use strict';
  const KEY='WealthLandingRetirementOS';
  const PROFILE='RetirementProfile';
  const ROADMAP='WealthLandingSelectedRoadmap';

  function clone(v){ return JSON.parse(JSON.stringify(v)); }
  function read(key){ try{return JSON.parse(localStorage.getItem(key)||'{}');}catch(e){return {};} }
  function merge(target, source){
    if(!source || typeof source!=='object') return target;
    Object.keys(source).forEach(function(k){
      const sv=source[k];
      if(sv && typeof sv==='object' && !Array.isArray(sv)) target[k]=merge(target[k]&&typeof target[k]==='object'?target[k]:{},sv);
      else if(sv!==undefined) target[k]=sv;
    });
    return target;
  }
  function seed(){
    return {version:1,profile:{},vision:{},location:{},healthcare:{},financial:{},estate:{},journey:{},metadata:{updatedAt:null}};
  }
  function migrate(){
    const os=merge(seed(),read(KEY));
    const p=read(PROFILE), r=read(ROADMAP);
    os.profile.identity=merge(os.profile.identity||{},p.identity||{});
    os.profile.finances=merge(os.profile.finances||{},p.finances||{});
    os.profile.income=merge(os.profile.income||{},p.income||{});
    os.vision=merge(os.vision||{},p.goals||{});
    os.journey=merge(os.journey||{},p.journey||{});
    os.location=merge(os.location||{}, {
      pathId:r.selectedLifeId, pathName:r.selectedLifeName,
      overseasBase:r.overseasBase, usCity:r.usCity,
      startAge:r.startAge, medicareAge:r.medicareAge
    });
    if(r.healthcareStrategy) os.healthcare=merge(os.healthcare||{},r.healthcareStrategy);
    if(r.financialStrategy) os.financial=merge(os.financial||{},r.financialStrategy);
    os.metadata.updatedAt=new Date().toISOString();
    localStorage.setItem(KEY,JSON.stringify(os));
    return os;
  }
  function load(){ return migrate(); }
  function update(patch, source){
    const os=merge(load(),clone(patch||{}));
    os.metadata.updatedAt=new Date().toISOString();
    if(source) os.metadata.lastSource=source;
    localStorage.setItem(KEY,JSON.stringify(os));
    return os;
  }
  function syncLegacy(){
    const os=load(), p=read(PROFILE), r=read(ROADMAP);
    p.identity=merge(p.identity||{},os.profile.identity||{});
    p.finances=merge(p.finances||{},os.profile.finances||{});
    p.income=merge(p.income||{},os.profile.income||{});
    p.goals=merge(p.goals||{},os.vision||{});
    p.journey=merge(p.journey||{},os.journey||{});
    localStorage.setItem(PROFILE,JSON.stringify(p));
    r.selectedLifeId=os.location.pathId||r.selectedLifeId;
    r.selectedLifeName=os.location.pathName||r.selectedLifeName;
    r.overseasBase=os.location.overseasBase||r.overseasBase;
    r.usCity=os.location.usCity||r.usCity;
    r.startAge=os.location.startAge||r.startAge;
    r.medicareAge=os.location.medicareAge||r.medicareAge;
    if(Object.keys(os.healthcare||{}).length) r.healthcareStrategy=os.healthcare;
    if(Object.keys(os.financial||{}).length) r.financialStrategy=os.financial;
    r.updatedAt=new Date().toISOString();
    localStorage.setItem(ROADMAP,JSON.stringify(r));
  }
  function value(path, fallback){
    const out=path.split('.').reduce((o,k)=>o&&o[k],load());
    return out===undefined||out===null||out===''?fallback:out;
  }
  global.RetirementOS={load:update?load:load,update:update,value:value,syncLegacy:syncLegacy,keys:{master:KEY,profile:PROFILE,roadmap:ROADMAP}};
})(window);
