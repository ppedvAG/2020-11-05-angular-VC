## M01 | NG GETTING STARTED

- [x] intro
- [x] project structure
- [x] ecosystem
- [x] ng cli
- [x] components, selectors
- [x] class-props [props.component.html](theory-app/src/app/demos-mdl/props/props.component.html)

commit

## M008 | NG MODULES

- [x] ng modules
- [x] js/ts modules
- [x] node modules
- [x] [demos mdl](theory-app/src/app/demos-mdl/demos-mdl.module.ts)

commit

## M009 | COMPONENTS INTRO

- [x] component template
- [x] component selector
- [x] imports of components
- [x] [demo time](theory-app/src/app/demos-mdl/time/time.component.ts)
- [x] inputs [demo card](theory-app/src/app/demos-mdl/card/card.component.ts)
- [x] [Ü rating](theory-app/src/app/photos-mdl/rating/rating.component.ts)

<!-- LAB:
in photos-mdl eine komponente rating
mit zwei Props Input-starsNumber & starsString

starsString = '*'.repeat(starsNumber);

photos-mdl hat auch eine Overview-Komponente
rating-Komponente wird über Overview gerendert
 -->

 [commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/156e41d15678508b4fa39e8ae2bce09334365486)

## M010 | NG & CSS

- [x] :host
- [x] style-object [card.component.html](theory-app/src/app/demos-mdl/card/card.component.html)
- [x] class-object [events.component.html](theory-app/src/app/demos-mdl/events/events.component.html)
- [x] ngStyle
- [x] ngClass [furniture.component.html](theory-app/src/app/demos-mdl/furniture/furniture.component.html)
- [x] className

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/2daa149dcee8c592eb6adf66c74582f6e308c542)

## M011 | DIRECTIVES

- [x] directive, directive types
- [x] ngFor, ngIf, ngSwitch
- [x] ng-template [roman-number.component.html](theory-app/src/app/demos-mdl/roman-number/roman-number.component.html)
- [x] [Ü photos](theory-app/src/app/photos-mdl/photo-album/photo-album.component.ts)

<!-- 
LAB
15 Bilder holen
in ein Array diese 15 Bilder packen
Array durchiterieren und dabei soll die 
Komponente Photo wiederholt werden -->

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/52ae71708d3f288786f17eed0a00d9b47e03036e)

## M012 | COMPONENTS & LIFECYCLE

- [x] templates & 'inline-template'
- [x] 'inline-styles'
- [x] class fields / props & template variables
- [x] components lifecycle & lifecycle hooks
- [x] [pipes](theory-app/src/app/demos-mdl/pipes/pipes.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/c72f79939d97399e5086e62915fb9439e72dacf3)

## M013 | EVENTS

- [x] event binding über runde Klammern
- [x] event object, event.target, event types
- [x] [demo events](theory-app/src/app/demos-mdl/events/events.component.ts)
- [x] [demo outputs](theory-app/src/app/demos-mdl/outputs/outputs.component.ts)

commit

## M014 | FORMS

- [x] FormsModule
- [x] ngModel
- [x] ngForm
- [x] two way data binding [(ngModel)]
- [x] [demo ngform](theory-app/src/app/demos-mdl/ngform/ngform.component.ts)
- [x] [Ü login form](theory-app/src/app/photos-mdl/login-form/login-form.component.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/3bf09841bc636d5cb81fe32bf00b3b0cb16e6309)

## M015 | ROUTING

- [x] RoutingModule & RouterModule [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] Routes & Route [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] Paths, Endpoints, Redirections [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] router-outlet & routerLink [app.component.html](theory-app/src/app/app.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/fb24445d2a20e04ad257bf0040703f34fa5d435a)

## M016 | SERVICES

- [x] dependency injection
- [x] service & @Injectable()
- [x] HttpClienModule & HttpClient
- [x] rxjs & observables
- [x] [photos.service.ts](theory-app/src/app/photos-mdl/services/photos.service.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/9a7f10d8c107b5481f385f80592ec9ec6b049db0)

## M017 | MATERIAL

- [x] [material.angular.io](https://material.angular.io/)
- [x] [mat-slider](theory-app/src/app/demos-mdl/material/material.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/d2ffba0ac8dc6272901684ed61d7684b537d9895)
