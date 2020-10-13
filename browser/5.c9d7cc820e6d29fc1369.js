(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4yGZ":function(t,e,i){"use strict";i.r(e),i.d(e,"CrisisCenterModule",(function(){return I}));var r=i("3Pt+"),n=i("ofXK"),s=i("tyNb"),c=i("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-crisis-center-home"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Nb(0,"p"),c.jc(1,"Welcome to the Crisis Center"),c.Mb())},styles:[""]}),t})();var a=i("eIep"),d=i("tk/3"),l=i("LRne"),b=i("vkgz"),p=i("JIr8"),h=i("lJxs"),u=i("OdHV");let g=(()=>{class t{constructor(t,e){this.http=t,this.messageService=e,this.crisesUrl="api/crises",this.httpOptions={headers:new d.d({"Content-Type":"application/json"})}}getCrises(){return this.http.get(this.crisesUrl).pipe(Object(b.a)(t=>this.log("fetched crises")),Object(p.a)(this.handleError("getCrises",[])))}getCrisisNo404(t){return this.http.get(`${this.crisesUrl}/?id=${t}`).pipe(Object(h.a)(t=>t[0]),Object(b.a)(e=>{this.log(`${e?"fetched":"did not find"} crisis id=${t}`)}),Object(p.a)(this.handleError("getCrisis id="+t)))}getCrisis(t){return this.http.get(`${this.crisesUrl}/${t}`).pipe(Object(b.a)(e=>this.log("fetched crisis id="+t)),Object(p.a)(this.handleError("getCrisis id="+t)))}searchCrises(t){return t.trim()?this.http.get(`${this.crisesUrl}/?name=${t}`).pipe(Object(b.a)(e=>this.log(e.length?`found crises matching "${t}"`:`no crises matching "${t}"`)),Object(p.a)(this.handleError("searchCrises",[]))):Object(l.a)([])}addCrisis(t){return this.http.post(this.crisesUrl,t,this.httpOptions).pipe(Object(b.a)(t=>this.log("added crisis w/ id="+t.id)),Object(p.a)(this.handleError("addCrisis")))}deleteCrisis(t){const e="number"==typeof t?t:t.id;return this.http.delete(`${this.crisesUrl}/${e}`,this.httpOptions).pipe(Object(b.a)(t=>this.log("deleted crisis id="+e)),Object(p.a)(this.handleError("deleteCrisis")))}updateCrisis(t){return this.http.put(this.crisesUrl,t,this.httpOptions).pipe(Object(b.a)(e=>this.log("updated Crisis id="+t.id)),Object(p.a)(this.handleError("updateCrisis")))}handleError(t="operation",e){return i=>(console.error(i),this.log(`${t} failed: ${i.message}`),Object(l.a)(e))}log(t){this.messageService.add("CrisisService: "+t)}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(d.b),c.Rb(u.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=function(t){return["/crisis-center",t]};function m(t,e){if(1&t){const t=c.Ob();c.Nb(0,"li"),c.Nb(1,"a",3),c.Nb(2,"span",4),c.jc(3),c.Mb(),c.jc(4),c.Mb(),c.Nb(5,"button",5),c.Ub("click",(function(){c.fc(t);const i=e.$implicit;return c.Wb().delete(i)})),c.jc(6,"x"),c.Mb(),c.Mb()}if(2&t){const t=e.$implicit,i=c.Wb();c.Cb("selected",t.id===i.selectedId),c.Ab(1),c.Zb("routerLink",c.cc(5,f,t.id)),c.Ab(2),c.kc(t.id),c.Ab(1),c.lc(" ",t.name," ")}}let C=(()=>{class t{constructor(t,e){this.crisisService=t,this.route=e}ngOnInit(){this.getCrises()}getCrises(){this.crises$=this.route.paramMap.pipe(Object(a.a)(t=>(this.selectedId=+t.get("id"),this.crisisService.getCrises())))}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(g),c.Kb(s.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-crisis-list"]],decls:7,vars:3,consts:[[1,"crises"],[3,"selected",4,"ngFor","ngForOf"],["routerLink","/sidekicks"],[3,"routerLink"],[1,"badge"],["title","delete crisis",1,"delete",3,"click"]],template:function(t,e){1&t&&(c.Nb(0,"ul",0),c.ic(1,m,7,7,"li",1),c.Xb(2,"async"),c.Mb(),c.Lb(3,"router-outlet"),c.Nb(4,"p"),c.Nb(5,"button",2),c.jc(6,"Go to sidekicks"),c.Mb(),c.Mb()),2&t&&(c.Ab(1),c.Zb("ngForOf",c.Yb(2,1,e.crises$)))},directives:[n.i,s.g,s.c,s.e],pipes:[n.b],styles:[".crises[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:24em}.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.crises[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.crises[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;text-decoration:none;position:relative;display:block}.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#607d8b}.crises[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;min-width:16px;text-align:right;margin-right:.8em;border-radius:4px 0 0 4px}button[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand;font-family:Arial}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button.delete[_ngcontent-%COMP%]{position:relative;left:340px;top:-32px;background-color:grey!important;color:#fff}"]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-crisis-center"]],decls:3,vars:0,template:function(t,e){1&t&&(c.Nb(0,"h2"),c.jc(1,"CRISIS CENTER"),c.Mb(),c.Lb(2,"router-outlet"))},directives:[s.g],styles:[""]}),t})(),v=(()=>{class t{confirm(t){const e=window.confirm(t||"Is it OK?");return Object(l.a)(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function M(t,e){if(1&t){const t=c.Ob();c.Nb(0,"div"),c.Nb(1,"h3"),c.jc(2),c.Mb(),c.Nb(3,"div"),c.Nb(4,"span"),c.jc(5,"Id: "),c.Mb(),c.jc(6),c.Mb(),c.Nb(7,"div"),c.Nb(8,"label"),c.jc(9,"Name: "),c.Nb(10,"input",1),c.Ub("ngModelChange",(function(e){return c.fc(t),c.Wb().editName=e})),c.Mb(),c.Mb(),c.Mb(),c.Nb(11,"button",2),c.Ub("click",(function(){return c.fc(t),c.Wb().save()})),c.jc(12,"Save"),c.Mb(),c.Nb(13,"button",2),c.Ub("click",(function(){return c.fc(t),c.Wb().cancel()})),c.jc(14,"Cancel"),c.Mb(),c.Mb()}if(2&t){const t=c.Wb();c.Ab(2),c.lc('"',t.editName,'"'),c.Ab(4),c.kc(t.crisis.id),c.Ab(4),c.Zb("ngModel",t.editName)}}let j=(()=>{class t{constructor(t,e,i){this.route=t,this.router=e,this.dialogService=i}ngOnInit(){this.getCrisis()}cancel(){this.goToCrises()}save(){this.crisis.name=this.editName,this.goToCrises()}canDeactivate(){return!this.crisis||this.crisis.name===this.editName||this.dialogService.confirm("Discard changes?")}getCrisis(){this.route.data.subscribe(t=>{this.editName=t.crisis.name,this.crisis=t.crisis})}goToCrises(){this.router.navigate(["../",{id:this.crisis?this.crisis.id:null}],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(s.a),c.Kb(s.b),c.Kb(v))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-crisis-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],["placeholder","name",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,e){1&t&&c.ic(0,M,15,3,"div",0),2&t&&c.Zb("ngIf",e.crisis)},directives:[n.j,r.a,r.c,r.d],styles:["label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]}),t})(),k=(()=>{class t{canDeactivate(t){return!t.canDeactivate||t.canDeactivate()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=i("EY2u"),N=i("IzEk"),w=i("5+tZ");const P=[{path:"",component:O,children:[{path:"",component:C,children:[{path:":id",component:j,canDeactivate:[k],resolve:{crisis:(()=>{class t{constructor(t,e){this.cs=t,this.router=e}resolve(t,e){const i=+t.paramMap.get("id");return this.cs.getCrisis(i).pipe(Object(N.a)(1),Object(w.a)(t=>t?Object(l.a)(t):(this.router.navigate(["/crisis-center"]),y.a)))}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(g),c.Rb(s.b))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}},{path:"",component:o}]}]}];let _=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(P)],s.f]}),t})(),I=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[n.c,r.b,_]]}),t})()}}]);