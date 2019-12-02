(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '+wPt': function(e, l, o) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }), o('ZYCi');
      var t = o('ey9i'),
        d = (o('84zG'), { title: t.extract('About') });
      (l.ɵ0 = d),
        (l.AboutRoutingModule = (function() {
          return function() {};
        })());
    },
    '84zG': function(e, l, o) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }), o('CcnG');
      var t = o('AytR');
      l.AboutComponent = (function() {
        function e() {
          this.version = t.environment.version;
        }
        return (e.prototype.ngOnInit = function() {}), e;
      })();
    },
    '8qly': function(e, l, o) {
      'use strict';
      l.styles = [
        '.container[_ngcontent-%COMP%]{text-align:center;padding:1rem}.mat-icon[_ngcontent-%COMP%]{vertical-align:middle}'
      ];
    },
    FQ1g: function(e, l, o) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.AboutModule = (function() {
          return function() {};
        })());
    },
    OlGY: function(e, l, o) {
      'use strict';
      var t = o('CcnG'),
        d = o('FQ1g'),
        a = o('t68o'),
        n = o('zbXB'),
        u = o('NcP4'),
        M = o('xYTU'),
        r = o('pMnS'),
        i = o('sb8r'),
        p = o('Ip0R'),
        m = o('OzfB'),
        c = o('eDkP'),
        T = o('Fzqc'),
        _ = o('4tE/'),
        A = o('M2Lx'),
        s = o('Wf4p'),
        C = o('o3x0'),
        O = o('jQLj'),
        R = o('mVsa'),
        S = o('dWZg'),
        E = o('uGex'),
        g = o('v9Dh'),
        L = o('ZYjt'),
        v = o('4epT'),
        y = o('OkvK'),
        D = o('wmQ5'),
        P = o('lLAP'),
        I = o('OBdK'),
        b = o('A7o+'),
        F = o('21Lb'),
        N = o('hUWP'),
        f = o('3pJQ'),
        k = o('V9q+'),
        G = o('4c35'),
        Y = o('qAlS'),
        h = o('6Wmm'),
        x = o('UodH'),
        B = o('u7R8'),
        V = o('FVSy'),
        w = o('de3e'),
        H = o('/dO6'),
        U = o('LC5p'),
        j = o('YhbO'),
        q = o('jlZm'),
        z = o('seP3'),
        K = o('r43C'),
        Z = o('SMsm'),
        Q = o('/VYK'),
        W = o('b716'),
        J = o('0/Q6'),
        X = o('Z+uX'),
        $ = o('Blfk'),
        ee = o('9It4'),
        le = o('Nsh5'),
        oe = o('kWGw'),
        te = o('w+lc'),
        de = o('vARd'),
        ae = o('Lwpp'),
        ne = o('y4qS'),
        ue = o('BHnd'),
        Me = o('La40'),
        re = o('8mMr'),
        ie = o('J12g'),
        pe = o('vvyD'),
        me = o('ZYCi'),
        ce = o('+wPt'),
        Te = o('YSh2'),
        _e = o('84zG');
      l.AboutModuleNgFactory = t.ɵcmf(d.AboutModule, [], function(e) {
        return t.ɵmod([
          t.ɵmpd(512, t.ComponentFactoryResolver, t.ɵCodegenComponentFactoryResolver, [
            [
              8,
              [
                a.MatDialogContainerNgFactory,
                n.MatDatepickerContentNgFactory,
                n.MatCalendarHeaderNgFactory,
                u.TooltipComponentNgFactory,
                M.MatSnackBarContainerNgFactory,
                M.SimpleSnackBarNgFactory,
                r.ɵangular_packages_router_router_lNgFactory,
                i.AboutComponentNgFactory
              ]
            ],
            [3, t.ComponentFactoryResolver],
            t.NgModuleRef
          ]),
          t.ɵmpd(4608, p.NgLocalization, p.NgLocaleLocalization, [
            t.LOCALE_ID,
            [2, p.ɵangular_packages_common_common_a]
          ]),
          t.ɵmpd(
            5120,
            t.APP_BOOTSTRAP_LISTENER,
            function(e, l) {
              return [m.removeStyles(e, l)];
            },
            [p.DOCUMENT, t.PLATFORM_ID]
          ),
          t.ɵmpd(4608, c.Overlay, c.Overlay, [
            c.ScrollStrategyOptions,
            c.OverlayContainer,
            t.ComponentFactoryResolver,
            c.OverlayPositionBuilder,
            c.OverlayKeyboardDispatcher,
            t.Injector,
            t.NgZone,
            p.DOCUMENT,
            T.Directionality,
            [2, p.Location]
          ]),
          t.ɵmpd(5120, c.ɵc, c.ɵd, [c.Overlay]),
          t.ɵmpd(5120, _.MAT_AUTOCOMPLETE_SCROLL_STRATEGY, _.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, [c.Overlay]),
          t.ɵmpd(4608, A.MutationObserverFactory, A.MutationObserverFactory, []),
          t.ɵmpd(4608, s.ErrorStateMatcher, s.ErrorStateMatcher, []),
          t.ɵmpd(5120, C.MAT_DIALOG_SCROLL_STRATEGY, C.MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, [c.Overlay]),
          t.ɵmpd(135680, C.MatDialog, C.MatDialog, [
            c.Overlay,
            t.Injector,
            [2, p.Location],
            [2, C.MAT_DIALOG_DEFAULT_OPTIONS],
            C.MAT_DIALOG_SCROLL_STRATEGY,
            [3, C.MatDialog],
            c.OverlayContainer
          ]),
          t.ɵmpd(4608, O.MatDatepickerIntl, O.MatDatepickerIntl, []),
          t.ɵmpd(5120, O.MAT_DATEPICKER_SCROLL_STRATEGY, O.MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, [c.Overlay]),
          t.ɵmpd(5120, R.MAT_MENU_SCROLL_STRATEGY, R.ɵb22, [c.Overlay]),
          t.ɵmpd(4608, s.DateAdapter, s.NativeDateAdapter, [[2, s.MAT_DATE_LOCALE], S.Platform]),
          t.ɵmpd(5120, E.MAT_SELECT_SCROLL_STRATEGY, E.MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, [c.Overlay]),
          t.ɵmpd(5120, g.MAT_TOOLTIP_SCROLL_STRATEGY, g.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [c.Overlay]),
          t.ɵmpd(4608, L.HAMMER_GESTURE_CONFIG, s.GestureConfig, [
            [2, s.MAT_HAMMER_OPTIONS],
            [2, s.MatCommonModule]
          ]),
          t.ɵmpd(5120, v.MatPaginatorIntl, v.MAT_PAGINATOR_INTL_PROVIDER_FACTORY, [[3, v.MatPaginatorIntl]]),
          t.ɵmpd(5120, y.MatSortHeaderIntl, y.MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, [[3, y.MatSortHeaderIntl]]),
          t.ɵmpd(5120, D.MatStepperIntl, D.MAT_STEPPER_INTL_PROVIDER_FACTORY, [[3, D.MatStepperIntl]]),
          t.ɵmpd(135680, P.FocusMonitor, P.FocusMonitor, [t.NgZone, S.Platform]),
          t.ɵmpd(4608, I.CdkTreeNodeDef, I.CdkTreeNodeDef, [t.TemplateRef]),
          t.ɵmpd(1073742336, p.CommonModule, p.CommonModule, []),
          t.ɵmpd(1073742336, b.TranslateModule, b.TranslateModule, []),
          t.ɵmpd(1073742336, m.CoreModule, m.CoreModule, []),
          t.ɵmpd(1073742336, T.BidiModule, T.BidiModule, []),
          t.ɵmpd(1073742336, F.FlexModule, F.FlexModule, []),
          t.ɵmpd(1073742336, N.ExtendedModule, N.ExtendedModule, []),
          t.ɵmpd(1073742336, f.GridModule, f.GridModule, []),
          t.ɵmpd(1073742336, k.FlexLayoutModule, k.FlexLayoutModule, [[2, m.SERVER_TOKEN], t.PLATFORM_ID]),
          t.ɵmpd(1073742336, s.MatCommonModule, s.MatCommonModule, [
            [2, s.MATERIAL_SANITY_CHECKS],
            [2, L.HAMMER_LOADER]
          ]),
          t.ɵmpd(1073742336, S.PlatformModule, S.PlatformModule, []),
          t.ɵmpd(1073742336, s.MatRippleModule, s.MatRippleModule, []),
          t.ɵmpd(1073742336, s.MatPseudoCheckboxModule, s.MatPseudoCheckboxModule, []),
          t.ɵmpd(1073742336, s.MatOptionModule, s.MatOptionModule, []),
          t.ɵmpd(1073742336, G.PortalModule, G.PortalModule, []),
          t.ɵmpd(1073742336, Y.ScrollingModule, Y.ScrollingModule, []),
          t.ɵmpd(1073742336, c.OverlayModule, c.OverlayModule, []),
          t.ɵmpd(1073742336, _.MatAutocompleteModule, _.MatAutocompleteModule, []),
          t.ɵmpd(1073742336, A.ObserversModule, A.ObserversModule, []),
          t.ɵmpd(1073742336, P.A11yModule, P.A11yModule, []),
          t.ɵmpd(1073742336, h.MatBadgeModule, h.MatBadgeModule, []),
          t.ɵmpd(1073742336, x.MatButtonModule, x.MatButtonModule, []),
          t.ɵmpd(1073742336, B.MatButtonToggleModule, B.MatButtonToggleModule, []),
          t.ɵmpd(1073742336, V.MatCardModule, V.MatCardModule, []),
          t.ɵmpd(1073742336, w._MatCheckboxRequiredValidatorModule, w._MatCheckboxRequiredValidatorModule, []),
          t.ɵmpd(1073742336, w.MatCheckboxModule, w.MatCheckboxModule, []),
          t.ɵmpd(1073742336, H.MatChipsModule, H.MatChipsModule, []),
          t.ɵmpd(1073742336, C.MatDialogModule, C.MatDialogModule, []),
          t.ɵmpd(1073742336, O.MatDatepickerModule, O.MatDatepickerModule, []),
          t.ɵmpd(1073742336, U.MatDividerModule, U.MatDividerModule, []),
          t.ɵmpd(1073742336, j.CdkAccordionModule, j.CdkAccordionModule, []),
          t.ɵmpd(1073742336, q.MatExpansionModule, q.MatExpansionModule, []),
          t.ɵmpd(1073742336, z.MatFormFieldModule, z.MatFormFieldModule, []),
          t.ɵmpd(1073742336, s.MatLineModule, s.MatLineModule, []),
          t.ɵmpd(1073742336, K.MatGridListModule, K.MatGridListModule, []),
          t.ɵmpd(1073742336, Z.MatIconModule, Z.MatIconModule, []),
          t.ɵmpd(1073742336, Q.TextFieldModule, Q.TextFieldModule, []),
          t.ɵmpd(1073742336, W.MatInputModule, W.MatInputModule, []),
          t.ɵmpd(1073742336, J.MatListModule, J.MatListModule, []),
          t.ɵmpd(1073742336, R._MatMenuDirectivesModule, R._MatMenuDirectivesModule, []),
          t.ɵmpd(1073742336, R.MatMenuModule, R.MatMenuModule, []),
          t.ɵmpd(1073742336, s.NativeDateModule, s.NativeDateModule, []),
          t.ɵmpd(1073742336, s.MatNativeDateModule, s.MatNativeDateModule, []),
          t.ɵmpd(1073742336, E.MatSelectModule, E.MatSelectModule, []),
          t.ɵmpd(1073742336, g.MatTooltipModule, g.MatTooltipModule, []),
          t.ɵmpd(1073742336, v.MatPaginatorModule, v.MatPaginatorModule, []),
          t.ɵmpd(1073742336, X.MatProgressBarModule, X.MatProgressBarModule, []),
          t.ɵmpd(1073742336, $.MatProgressSpinnerModule, $.MatProgressSpinnerModule, []),
          t.ɵmpd(1073742336, ee.MatRadioModule, ee.MatRadioModule, []),
          t.ɵmpd(1073742336, le.MatSidenavModule, le.MatSidenavModule, []),
          t.ɵmpd(1073742336, oe._MatSlideToggleRequiredValidatorModule, oe._MatSlideToggleRequiredValidatorModule, []),
          t.ɵmpd(1073742336, oe.MatSlideToggleModule, oe.MatSlideToggleModule, []),
          t.ɵmpd(1073742336, te.MatSliderModule, te.MatSliderModule, []),
          t.ɵmpd(1073742336, de.MatSnackBarModule, de.MatSnackBarModule, []),
          t.ɵmpd(1073742336, y.MatSortModule, y.MatSortModule, []),
          t.ɵmpd(1073742336, ae.CdkStepperModule, ae.CdkStepperModule, []),
          t.ɵmpd(1073742336, D.MatStepperModule, D.MatStepperModule, []),
          t.ɵmpd(1073742336, ne.CdkTableModule, ne.CdkTableModule, []),
          t.ɵmpd(1073742336, ue.MatTableModule, ue.MatTableModule, []),
          t.ɵmpd(1073742336, Me.MatTabsModule, Me.MatTabsModule, []),
          t.ɵmpd(1073742336, re.MatToolbarModule, re.MatToolbarModule, []),
          t.ɵmpd(1073742336, I.CdkTreeModule, I.CdkTreeModule, []),
          t.ɵmpd(1073742336, ie.MatTreeModule, ie.MatTreeModule, []),
          t.ɵmpd(1073742336, pe.MaterialModule, pe.MaterialModule, []),
          t.ɵmpd(1073742336, me.RouterModule, me.RouterModule, [
            [2, me.ɵangular_packages_router_router_a],
            [2, me.Router]
          ]),
          t.ɵmpd(1073742336, ce.AboutRoutingModule, ce.AboutRoutingModule, []),
          t.ɵmpd(1073742336, d.AboutModule, d.AboutModule, []),
          t.ɵmpd(256, H.MAT_CHIPS_DEFAULT_OPTIONS, { separatorKeyCodes: [Te.ENTER] }, []),
          t.ɵmpd(256, s.MAT_DATE_FORMATS, s.MAT_NATIVE_DATE_FORMATS, []),
          t.ɵmpd(
            1024,
            me.ROUTES,
            function() {
              return [[{ path: '', component: _e.AboutComponent, data: ce.ɵ0 }]];
            },
            []
          )
        ]);
      });
    },
    sb8r: function(e, l, o) {
      'use strict';
      var t = o('8qly'),
        d = o('CcnG'),
        a = o('lzlj'),
        n = o('FVSy'),
        u = o('wFw1'),
        M = o('A7o+'),
        r = o('Mr+X'),
        i = o('SMsm'),
        p = o('84zG'),
        m = d.ɵcrt({ encapsulation: 0, styles: [t.styles], data: {} });
      function c(e) {
        return d.ɵvid(
          0,
          [
            (e()(), d.ɵeld(0, 0, null, null, 25, 'div', [['class', 'container']], null, null, null, null, null)),
            (e()(), d.ɵted(-1, null, ['\n  '])),
            (e()(),
            d.ɵeld(
              2,
              0,
              null,
              null,
              22,
              'mat-card',
              [['class', 'mat-card']],
              [[2, '_mat-animation-noopable', null]],
              null,
              null,
              a.View_MatCard_0,
              a.RenderType_MatCard
            )),
            d.ɵdid(3, 49152, null, 0, n.MatCard, [[2, u.ANIMATION_MODULE_TYPE]], null, null),
            (e()(), d.ɵted(-1, 0, ['\n    '])),
            (e()(), d.ɵeld(5, 0, null, 0, 6, 'h1', [], null, null, null, null, null)),
            (e()(), d.ɵted(-1, null, ['\n      '])),
            (e()(),
            d.ɵeld(
              7,
              0,
              null,
              null,
              3,
              'mat-card-title',
              [
                ['class', 'mat-card-title'],
                ['translate', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            d.ɵdid(
              8,
              8536064,
              null,
              0,
              M.TranslateDirective,
              [M.TranslateService, d.ElementRef, d.ChangeDetectorRef],
              { translate: [0, 'translate'] },
              null
            ),
            d.ɵdid(9, 16384, null, 0, n.MatCardTitle, [], null, null),
            (e()(), d.ɵted(-1, null, ['APP_NAME'])),
            (e()(), d.ɵted(-1, null, ['\n    '])),
            (e()(), d.ɵted(-1, 0, ['\n    '])),
            (e()(),
            d.ɵeld(
              13,
              0,
              null,
              0,
              10,
              'mat-card-content',
              [['class', 'mat-card-content']],
              null,
              null,
              null,
              null,
              null
            )),
            d.ɵdid(14, 16384, null, 0, n.MatCardContent, [], null, null),
            (e()(), d.ɵted(-1, null, ['\n      '])),
            (e()(),
            d.ɵeld(
              16,
              0,
              null,
              null,
              2,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['role', 'img']
              ],
              [
                [2, 'mat-icon-inline', null],
                [2, 'mat-icon-no-color', null]
              ],
              null,
              null,
              r.View_MatIcon_0,
              r.RenderType_MatIcon
            )),
            d.ɵdid(
              17,
              9158656,
              null,
              0,
              i.MatIcon,
              [d.ElementRef, i.MatIconRegistry, [8, null], [2, i.MAT_ICON_LOCATION], [2, d.ErrorHandler]],
              null,
              null
            ),
            (e()(), d.ɵted(-1, 0, ['code'])),
            (e()(), d.ɵted(-1, null, ['\n      '])),
            (e()(), d.ɵeld(20, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            d.ɵdid(
              21,
              8536064,
              null,
              0,
              M.TranslateDirective,
              [M.TranslateService, d.ElementRef, d.ChangeDetectorRef],
              { translate: [0, 'translate'] },
              null
            ),
            (e()(), d.ɵted(-1, null, ['Version'])),
            (e()(), d.ɵted(23, null, [' ', '\n    '])),
            (e()(), d.ɵted(-1, 0, ['\n  '])),
            (e()(), d.ɵted(-1, null, ['\n'])),
            (e()(), d.ɵted(-1, null, ['\n']))
          ],
          function(e, l) {
            e(l, 8, 0, ''), e(l, 17, 0), e(l, 21, 0, '');
          },
          function(e, l) {
            var o = l.component;
            e(l, 2, 0, 'NoopAnimations' === d.ɵnov(l, 3)._animationMode),
              e(
                l,
                16,
                0,
                d.ɵnov(l, 17).inline,
                'primary' !== d.ɵnov(l, 17).color && 'accent' !== d.ɵnov(l, 17).color && 'warn' !== d.ɵnov(l, 17).color
              ),
              e(l, 23, 0, o.version);
          }
        );
      }
      function T(e) {
        return d.ɵvid(
          0,
          [
            (e()(), d.ɵeld(0, 0, null, null, 1, 'app-about', [], null, null, null, c, m)),
            d.ɵdid(1, 114688, null, 0, p.AboutComponent, [], null, null)
          ],
          function(e, l) {
            e(l, 1, 0);
          },
          null
        );
      }
      (l.RenderType_AboutComponent = m),
        (l.View_AboutComponent_0 = c),
        (l.View_AboutComponent_Host_0 = T),
        (l.AboutComponentNgFactory = d.ɵccf('app-about', p.AboutComponent, T, {}, {}, []));
    }
  }
]);
