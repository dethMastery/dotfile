(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[472],{6990:function(e,i,n){"use strict";n.r(i),n.d(i,{Episode:function(){return Ie},MUSIC_PLUS_TALK_TRIGGER_ID:function(){return De},default:function(){return Ae},parseReleaseDate:function(){return Le}});var t=n(27378),a=n.n(t),l=n(75260),d=n(85002),s=n(35181),r=n(66917),o=n.n(r),c=n(46471),u=n(25773),m=n(79378),v=n(9807),k=n(90228),p=n(35638),g=n(49474),f=n(29874);const S=({uri:e,segmentCount:i})=>{const n=(0,f.G)(),l=(0,t.useCallback)((async(i,t)=>{const a=Math.ceil(i/2);try{return function(e,i,n){return e.reduce(((e,t,a)=>((a>0||i>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===t.type?e.push(function(e,i,n){return{type:"MUSIC",index:i,uri:n.uri,episodeUri:e,start:n.start,stop:n.stop,duration:n.duration,name:n.track.name,artists:n.track.artists,album:n.track.album,playable:n.track.playable}}(n,a,t)):"TALK"===t.type&&e.push(function(e,i,n){return{type:"TALK",index:i,uri:e,title:n.title,subtitle:n.subtitle,start:n.start,stop:n.stop,duration:n.duration,showUri:n.show.uri,showName:n.show.name}}(n,a,t)),e)),[])}(await n.getSegments(e,a,t),a,e)}catch(e){return[]}}),[n,e]),d=(0,t.useCallback)((i=>{switch(i.type){case"SPACER":return a().createElement("div",{key:i.id,className:k.Z.spacerRow});case"MUSIC":return a().createElement(m.Z,(0,u.Z)({key:`${e}-${i.index}`},i));case"TALK":return a().createElement(g.t,(0,u.Z)({key:`${e}-${i.index}`},i));default:return(0,p.U)(i)}}),[e]),r=s.ag.get("music_and_talk.in_this_episode");return a().createElement("div",null,a().createElement(v.Dy,{as:"h2",variant:v.$e.canon,color:"var(--spice-text)",className:k.Z.header},r),a().createElement(m.Pv,{ariaLabel:r,hasHeaderRow:!0,rowPlaceholder:m.hU,columns:[m.QD.TITLE,m.QD.ALBUM_OR_SHOW,m.QD.DURATION],renderRow:d,fetchTracks:l,resolveUri:e=>"MUSIC"===e.type?e.uri:"",limit:50,nrTracks:2*i-1,testID:"music-and-talk-tracklist"}))};var y=n(54798),N=n(36726),h=n(34834),E="AKdhthcjJZPwxADqRJvG",F="XiPO8L0dQHNBIMSxcTnV",b="YCv_vZlWahMO5gU0x0XR",w="_VqNsx9_06k_c_khs0d6",D=n(42294),I=n(88319),A=n(60042),L=n.n(A),M=n(32311),P=n(76654),R=n(842),C="YnZQpT3GBBTIbykxjqhf",U="_MqHFIpwUdKRh1Xk0oyK",T=n(75533),x=n(35896),_=n(21311),B=n(58393),Z=n(40939),$=n(32049),O=n(35511),V=n(33482),q=n(48936);const z=e=>{const i=o().from(e);return`/show/${o().hexToId((null==i?void 0:i.id)||"")}`},G=({uri:e,backgroundColor:i,backgroundImages:n,size:l,data:d,playButtonWrapper:s=null,contextMenuWrapper:r=q.j,onPlayClick:o,isPlaying:c,isLocked:u=!1,isPlayDisabled:m=!1,playButtonRef:k,actionBarHeader:p,actionBarButtons:g})=>{const f=(0,t.useRef)(null),{imageUrl:S}=(0,M.f)(n,f),{title:y="",subtitle:N="",subtitleLinkURI:h,type:E,displayType:F,images:b}=d;return a().createElement(a().Fragment,null,a().createElement("div",{"data-testid":"container",ref:f,style:{backgroundColor:i},className:L()(R.Z.container,C,R.Z.overlay,{[R.Z.withBackgroundImage]:S,[R.Z.smallHeader]:l===V.f.SMALL,[U]:l===V.f.SMALL})},a().createElement(B.Du,null,a().createElement(O.JM,{size:O.qE.sm,onClick:o,isPlaying:c,disabled:m,locked:u}),a().createElement(B.yZ,{text:y})),S&&a().createElement(a().Fragment,null,a().createElement("div",{"data-testid":"background-image",className:L()(R.Z.background,R.Z.gradient),style:{backgroundImage:`url(${S})`}}),a().createElement("div",{className:L()(R.Z.background,R.Z.overlay)})),a().createElement(r,{uri:e,contextUri:e},a().createElement(x.O,{title:y,className:R.Z.image,size:l===V.f.SMALL?_.m$.SIZE_56:_.m$.SIZE_200,type:E,images:b,shape:x.K.ROUNDED_CORNERS})),a().createElement(T.sP,null,l!==V.f.SMALL&&a().createElement(v.Dy.p,{variant:v.$e.minuetBold},F),a().createElement(r,{uri:e,contextUri:e},a().createElement(T.xd,{size:l===V.f.SMALL?$.Jj.SMALL:$.Jj.LARGE},y)),a().createElement(T.dy,{small:l===V.f.SMALL,large:l===V.f.LARGE},h&&a().createElement(r,{uri:h,contextUri:e},a().createElement(P.rU,{to:z(h)},N))))),a().createElement(Z.o,{backgroundColor:i,size:l===V.f.SMALL?Z.m.SMALL:Z.m.LARGE,playButton:l===V.f.MOBILE?null:a().createElement("div",{className:R.Z.stickyPlayButton,ref:k},s?s(a().createElement(O.JM,{size:O.qE.lg,onClick:o,isPlaying:c,disabled:m,locked:u})):a().createElement(O.JM,{size:O.qE.lg,onClick:o,isPlaying:c,disabled:m,locked:u})),header:p,secondaryActionButtons:g}))};var W=n(64619),H=n(53645),K=n(404),J=n(28234),Q=n(88886),j=n(18237),Y=n(5312),X=n(39536),ee=n(12275),ie=n(13564),ne=n(21723),te=n(2835),ae=n(47574),le=n(54220),de=n(8360),se=n(23),re=n(1721),oe=n(81971),ce=n(79974);const ue=e=>(0,oe.a)(ce.getEpisode,e);var me=n(54665),ve="DNw4btAKwn7P3BCjhs88",ke="EWBcHJ5Al2s19WcIruGW",pe="V_dC3_F2nIA8Dw8La3Tl";var ge=({title:e,episodes:i,className:n})=>a().createElement("div",{className:L()(ve,n)},a().createElement(v.Dy,{as:"h2",variant:v.Dy.canon,className:ke},e),a().createElement("div",{className:pe},i.map((e=>a().createElement(me.B,{key:e.id,entity:e}))))),fe=n(91300);const Se=({uri:e,limit:i})=>{var n;const{data:l}=(d={uri:e,limit:i},(0,oe.a)(fe.getRecommendedEpisodes,d));var d;const r=(0,t.useMemo)((()=>{var e;return((null==l||null===(e=l.episode)||void 0===e?void 0:e.recommendedEpisodes.items)||[]).map((e=>{var i,n,t,a,l,d,s;return{id:e.episode.id,uri:e.episode.uri,name:e.episode.name,description:null!==(i=e.episode.description)&&void 0!==i?i:"",explicit:(null===(n=e.episode.contentRating)||void 0===n?void 0:n.label)===K.KS.Explicit,release_date:Le(null===(t=e.episode.releaseDate)||void 0===t?void 0:t.isoString),duration_ms:e.episode.duration.totalMilliseconds,images:null!==(a=null===(l=e.episode.coverArt)||void 0===l?void 0:l.sources)&&void 0!==a?a:[],show:{images:null!==(d=null===(s=e.episode.podcast.coverArt)||void 0===s?void 0:s.sources)&&void 0!==d?d:[]}}}))}),[null==l||null===(n=l.episode)||void 0===n?void 0:n.recommendedEpisodes.items]);return(null==r?void 0:r.length)>0?a().createElement(ge,{title:s.ag.get("mwp.entity.might.like"),episodes:r}):null};var ye=n(18291),Ne=n(64954),he=n(21195),Ee=n(95962),Fe=n(77233),be=n(43011);const we=({children:e,uri:i,contextUri:n})=>a().createElement(ee._,{menu:a().createElement(j.k,{uri:i,contextUri:n})},e),De="activation-trigger-mme",Ie=e=>{var i,n,r,u,m,k,p,g,f,A,L,M,P,R,C;const{uri:U}=e,T=(0,d.TH)(),x=(0,he.g)(),_=(0,I.o)(),B=(0,ae.W6)(y.Cz),{data:Z}=ue({uri:U}),$=null==Z?void 0:Z.episode,[O,q]=(0,t.useState)((null==$?void 0:$.playedState.state)===K.sY.Completed),z=(0,ae.W6)(y.Be),ee=null==Z||null===(i=Z.episode)||void 0===i||null===(n=i.segments)||void 0===n||null===(r=n.segments)||void 0===r?void 0:r.totalCount,oe=void 0!==ee&&ee>0&&z,ce=(0,re.g)(),{triggerPlay:me,togglePlay:ve,isPlaying:ke,isActive:pe}=(0,se.n)({uri:U},{featureIdentifier:"episode"}),ge=(0,ye.Y)((e=>{var i;return null!==(i=(0,Ee.k)(e))&&void 0!==i?i:void 0})),fe=(0,ye.Y)((e=>{var i;return null!==(i=null==e?void 0:e.isPaused)&&void 0!==i?i:void 0})),Ie=null==$||null===(u=$.podcast)||void 0===u?void 0:u.uri,Ae=null==$?void 0:$.type,Me={displayType:Ae===K.Wf.Episode?s.ag.get("type.showEpisode"):s.ag.get("type.podcastEpisode"),title:(null==$?void 0:$.name)||"",subtitle:null==$||null===(m=$.podcast)||void 0===m?void 0:m.name,subtitleLinkURI:null==$||null===(k=$.podcast)||void 0===k?void 0:k.uri,images:(null==$||null===(p=$.coverArt)||void 0===p?void 0:p.sources)||[],type:W.p.EPISODE},Pe=null==$||null===(g=$.coverArt)||void 0===g||null===(f=g.sources)||void 0===f||null===(A=f[0])||void 0===A?void 0:A.url,Re=(0,X.Z)(Pe||null),Ce=(0,l.v9)((e=>{var i;return null===(i=e.platform)||void 0===i?void 0:i.isBrowser})),Ue=!(null!=$&&$.playability.playable)&&(null==$?void 0:$.playability.reason)===K.Ku.PaymentRequired,Te=(0,Fe.s)($,null==$?void 0:$.podcast),xe=(0,t.useCallback)(((e,i=!0)=>{if(Ue||!$)return;let n="play";!ke||0!==e&&i||(n="pause"),_({intent:n,targetUri:U,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),Ae===K.Wf.Episode&&Ce?c.y.set((()=>({triggerId:De,triggerAction:null}))):pe&&!i?ce?fe?x.resume():x.pause():ve():ce?Te({seekTo:e}):me({seekTo:e})}),[Ue,$,ke,_,U,Ae,Ce,pe,ce,fe,x,ve,Te,me]),_e=(0,t.useCallback)((()=>{_({intent:"expand-description",type:"click"})}),[_]),Be=(0,t.useCallback)((e=>{const i=a().createElement(de.l,{enabled:Ue},e);return Ce?a().createElement(J.c,{id:De,targetURI:o().from(U)},i):i}),[Ue,Ce,U]),Ze=(null==$?void 0:$.description)||B&&(null==$?void 0:$.htmlDescription),$e=!Ue&&!(null!=$&&$.playability.playable);(0,t.useEffect)((()=>{if($){const e=new URLSearchParams(T.search);if(e.has("t")){const i=e.get("t")||"0",n=1e3*parseInt(i,10);n<=$.duration.totalMilliseconds&&xe(n)}}}),[$]);const Oe=null===(L=o().from(null==$?void 0:$.podcast.uri))||void 0===L?void 0:L.toURLPath(!0);return $?a().createElement("section",{"data-testid":"episode",className:E},a().createElement(be.$,null,s.ag.get("podcasts.episode.seo.title",{name:$.name,show:null!==(M=null==$||null===(P=$.podcast)||void 0===P?void 0:P.name)&&void 0!==M?M:""})),a().createElement(G,{uri:$.uri,backgroundColor:Re,size:V.f.LARGE,data:Me,onPlayClick:()=>{var e;xe(null!==(e=null==$?void 0:$.playedState.playPositionMilliseconds)&&void 0!==e?e:0,!1)},isPlaying:ke,isPlayDisabled:$e,isLocked:Ue,playButtonWrapper:Be,contextMenuWrapper:we,actionBarHeader:a().createElement(D.E,{size:D.$.LARGE,fullyPlayed:O,durationMs:$.duration.totalMilliseconds,releaseDate:Le(null===(R=$.releaseDate)||void 0===R?void 0:R.isoString),resumePositionMs:null!==(C=null==$?void 0:$.playedState.playPositionMilliseconds)&&void 0!==C?C:0,isPlaying:ke,position:pe&&ge||void 0}),actionBarButtons:a().createElement(a().Fragment,null,!Ue&&a().createElement(h.p,{uri:$.uri,showUri:Ie}),a().createElement(ne.w,{uri:$.uri,size:te.q.md}),a().createElement(Q.y,{menu:a().createElement(j.k,{uri:U,sharingInfo:$.sharingInfo,showUri:Ie,contextUri:U,isPlayed:O,onMarkAsPlayed:q})},a().createElement(Y.z,null)))}),a().createElement("div",{className:"contentSpacing"},Ze&&a().createElement(a().Fragment,null,a().createElement(v.Dy,{as:"h2",variant:v.$e.canon,color:"var(--spice-text)",className:b},s.ag.get("episode.description-title")),a().createElement(H.o,{className:F,onTimeStampClick:xe,maxLines:4,onExpanded:_e,content:($.description||"").trim(),htmlContent:B&&$.htmlDescription?$.htmlDescription:void 0,LinkComponent:le.Z,enableTimestamps:$.playability.playable})),oe&&a().createElement(S,{segmentCount:ee||0,uri:U}),Oe&&a().createElement(Ne.z,{version:"outlined",linkTo:Oe,className:w},s.ag.get("episode.see_all_episodes")),a().createElement(ie.N,e),a().createElement(Se,{uri:U,limit:6}))):a().createElement(N.h,{errorMessage:s.ag.get("error.not_found.title.podcast")})};var Ae=a().memo((()=>{const{episodeId:e}=(0,d.UO)(),i=o().episodeURI(e).toURI();return a().createElement(t.Suspense,{fallback:null},a().createElement(Ie,{uri:i,key:i}))}));function Le(e){return(null==e?void 0:e.replace(/T.*/,""))||""}},79974:function(e){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getEpisode"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"htmlDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"audio"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fileId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externallyHosted"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"audioPreview"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"playability"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reason"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"playedState"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playPositionMilliseconds"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"releaseDate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"podcast"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"trailer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"showTypes"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"segments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"segments"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:994}};i.loc.source={body:"query getEpisode($uri: ID!) {\n  episode(uri: $uri) {\n    id\n    uri\n    name\n    htmlDescription\n    description\n    duration {\n      totalMilliseconds\n    }\n    audio {\n      items {\n        url\n        format\n        fileId\n        externallyHosted\n      }\n    }\n    audioPreview {\n      url\n      format\n    }\n    playability {\n      playable\n      reason\n    }\n    playedState {\n      playPositionMilliseconds\n      state\n    }\n    releaseDate {\n      isoString\n    }\n    coverArt {\n      sources {\n        url\n        width\n        height\n      }\n    }\n    type\n    podcast {\n      uri\n      name\n      # The coverart is not shown on the page but it is needed for accountless playback\n      coverArt {\n        sources {\n          url\n          width\n          height\n        }\n      }\n      trailer {\n        uri\n      }\n      showTypes\n    }\n    sharingInfo {\n      shareUrl\n      shareId\n    }\n    segments {\n      segments(offset: 0, limit: 20) {\n        totalCount\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,i)})),e.definitions&&e.definitions.forEach((function(e){n(e,i)}))}var t={};function a(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}i.definitions.forEach((function(e){if(e.name){var i=new Set;n(e,i),t[e.name.value]=i}})),e.exports=i,e.exports.getEpisode=function(e,i){var n={kind:e.kind,definitions:[a(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var l=t[i]||new Set,d=new Set,s=new Set;for(l.forEach((function(e){s.add(e)}));s.size>0;){var r=s;s=new Set,r.forEach((function(e){d.has(e)||(d.add(e),(t[e]||new Set).forEach((function(e){s.add(e)})))}))}return d.forEach((function(i){var t=a(e,i);t&&n.definitions.push(t)})),n}(i,"getEpisode")},91300:function(e){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRecommendedEpisodes"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recommendedEpisodes"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"releaseDate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"podcast"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:724}};i.loc.source={body:"query getRecommendedEpisodes($uri: ID!, $limit: Int) {\n  episode(uri: $uri) {\n    recommendedEpisodes(limit: $limit) {\n      items {\n        episode {\n          id\n          uri\n          name\n          description\n          releaseDate {\n            isoString\n          }\n          duration {\n            totalMilliseconds\n          }\n          contentRating {\n            label\n          }\n          coverArt {\n            sources {\n              url\n              width\n              height\n            }\n          }\n          podcast {\n            coverArt {\n              sources {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,i)})),e.definitions&&e.definitions.forEach((function(e){n(e,i)}))}var t={};function a(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}i.definitions.forEach((function(e){if(e.name){var i=new Set;n(e,i),t[e.name.value]=i}})),e.exports=i,e.exports.getRecommendedEpisodes=function(e,i){var n={kind:e.kind,definitions:[a(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var l=t[i]||new Set,d=new Set,s=new Set;for(l.forEach((function(e){s.add(e)}));s.size>0;){var r=s;s=new Set,r.forEach((function(e){d.has(e)||(d.add(e),(t[e]||new Set).forEach((function(e){s.add(e)})))}))}return d.forEach((function(i){var t=a(e,i);t&&n.definitions.push(t)})),n}(i,"getRecommendedEpisodes")}}]);
//# sourceMappingURL=xpui-routes-episode.js.map