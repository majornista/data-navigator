(() => {
    'use strict';
    const e = {
            ArrowLeft: 'left',
            ArrowRight: 'right',
            ArrowUp: 'up',
            ArrowDown: 'down',
            Period: 'forward',
            Comma: 'backward',
            Escape: 'parent',
            Enter: 'child'
        },
        t = {
            down: { keyCode: 'ArrowDown', direction: 1 },
            left: { keyCode: 'ArrowLeft', direction: -1 },
            right: { keyCode: 'ArrowRight', direction: 1 },
            up: { keyCode: 'ArrowUp', direction: -1 },
            backward: { keyCode: 'Comma', direction: -1 },
            child: { keyCode: 'Enter', direction: 1 },
            parent: { keyCode: 'Backspace', direction: -1 },
            forward: { keyCode: 'Period', direction: 1 },
            exit: { keyCode: 'Escape', direction: 1 }
        },
        o = (e, t) => {
            const o = Object.keys(e);
            let n = '';
            return (
                o.forEach(o => {
                    n += `${t.omitKeyNames ? '' : o + ': '}${e[o]}. `;
                }),
                (n += t.semanticLabel || 'Data point.'),
                n
            );
        },
        n = { category: 'abc', group: 'xyz', series: 'ijk', level: '012' };
    let i = {};
    const d = { omitKeyNames: !1 },
        s = document.querySelectorAll('rect'),
        r = e => {
            if (e) {
                const t = e.id.substring(4);
                return {
                    x: t,
                    d: {
                        category: t.substring(0, 1),
                        group: t.substring(1, 2),
                        series: t.substring(2, 3),
                        level: t.substring(3, 4),
                        id: e.id
                    }
                };
            }
        };
    s.forEach(e => {
        if (e.id.includes('ref-')) {
            const t = r(e),
                s = t.x,
                a = t.d,
                l = e => document.getElementById(`ref-${e}`),
                c = (e, t) => {
                    const o = n[e].indexOf(a[e]);
                    let i = '';
                    if (o + t > -1 && o + t < 3) {
                        const d = n[e].substring(o + t, o + t + 1);
                        i = s.replace(a[e], d);
                    }
                    return l(i) ? i : '';
                },
                u = c('series', -1),
                g = c('series', 1),
                y = c('category', -1),
                p = c('category', 1),
                h = c('group', -1),
                b = c('group', 1),
                m = 'byj1' === s || 'byj2' === s ? c('level', -1) : '',
                f = 'byj1' === s || 'byj0' === s ? c('level', 1) : '',
                k = [];
            u && k.push({ direction: -1, dimension: 'series', id: u, d: { ...r(l(u)).d } }),
                g && k.push({ direction: 1, dimension: 'series', id: g, d: { ...r(l(g)).d } }),
                y && k.push({ direction: -1, dimension: 'category', id: y, d: { ...r(l(y)).d } }),
                p && k.push({ direction: 1, dimension: 'category', id: p, d: { ...r(l(p)).d } }),
                h && k.push({ direction: 1, dimension: 'group', id: h, d: { ...r(l(h)).d } }),
                b && k.push({ direction: -1, dimension: 'group', id: b, d: { ...r(l(b)).d } }),
                m && k.push({ direction: -1, dimension: 'level', id: m, d: { ...r(l(m)).d } }),
                f && k.push({ direction: 1, dimension: 'level', id: f, d: { ...r(l(f)).d } }),
                (i[s] = {
                    d: a,
                    x: +e.getAttribute('x') - 2,
                    y: +e.getAttribute('y') - 2,
                    width: +e.getAttribute('width'),
                    height: +e.getAttribute('height'),
                    ref: 'ref-' + s,
                    id: s,
                    cssClass: 'dn-test-class',
                    edges: k,
                    description: o(a, d)
                });
        }
    });
    const a = (o => {
        let n = {},
            i = null,
            d = null,
            s = null,
            r = null,
            a = e,
            l = t,
            c = null;
        const u = e => {
                const t = a[e.code];
                t &&
                    (console.log('direction', t),
                    console.log('keycode', e.code),
                    console.log('keyBindings', a),
                    e.preventDefault(),
                    n.move(t));
            },
            g = e => {
                console.log('focus', e);
            },
            y = e => {
                const t = document.getElementById(e);
                t && (t.removeEventListener('keydown', u), t.removeEventListener('focus', g), t.remove());
            },
            p = (e, t) => {
                (e => {
                    const t = document.createElement('figure');
                    t.setAttribute('role', 'figure'), (t.id = e), t.classList.add('dn-node');
                    const n = o.data.nodes[e];
                    n.cssClass && t.classList.add(n.cssClass),
                        (t.style.width = parseFloat(n.width || '0') + 'px'),
                        (t.style.height = parseFloat(n.height || '0') + 'px'),
                        (t.style.left = parseFloat(n.x || '0') + 'px'),
                        (t.style.top = parseFloat(n.y || '0') + 'px'),
                        t.setAttribute('tabindex', '-1'),
                        t.addEventListener('keydown', u),
                        t.addEventListener('focus', g);
                    const i = document.createElement('div');
                    i.setAttribute('role', 'img'),
                        i.classList.add('dn-node-text'),
                        o.showText && (i.innerText = n.description),
                        i.setAttribute('aria-label', n.description),
                        t.appendChild(i),
                        c.appendChild(t);
                })(e),
                    (e => {
                        const t = document.getElementById(e);
                        t && ((d = i), (i = e), console.log('focusing', e, t), t.focus());
                    })(e),
                    y(t);
            };
        return (
            (n.getCurrentFocus = () => i),
            (n.getPreviousFocus = () => d),
            (n.setNavigationKeyBindings = o => {
                console.log('setting key bindings', o),
                    o
                        ? ((a = {}),
                          (l = o),
                          Object.keys(o).forEach(e => {
                              const t = o[e];
                              a[t.key] = e;
                          }))
                        : ((a = e), (l = t));
            }),
            (n.build = () => {
                if ((console.log('building', o), o.data)) {
                    if (((s = o.entryPoint ? o.entryPoint : Object.keys(o.data.nodes)[0]), o.id)) {
                        console.log('building navigator!', o),
                            (c = document.createElement('div')),
                            (c.id = 'dn-root-' + o.id),
                            c.classList.add('dn-root'),
                            (c.style.width = o.width || '100%'),
                            (c.style.height = o.height);
                        const e = document.createElement('button');
                        return (
                            (e.id = 'dn-entry-button-' + o.id),
                            e.classList.add('dn-entry-button'),
                            (e.innerText = 'Enter navigation area'),
                            e.addEventListener('click', n.enter),
                            c.appendChild(e),
                            (r = document.createElement('p')),
                            (r.id = 'dn-exit-' + o.id),
                            r.classList.add('dn-exit-position'),
                            (r.innerText = 'End of data structure.'),
                            (r.style.position = 'absolute'),
                            (r.style.bottom = '-20px'),
                            (r.style.display = 'none'),
                            r.addEventListener('focus', () => {
                                console.log('deleting all things!'),
                                    (r.style.display = 'block'),
                                    (d = i),
                                    (i = null),
                                    y(i);
                            }),
                            r.addEventListener('blur', () => {
                                r.style.display = 'none';
                            }),
                            c.appendChild(r),
                            n.setNavigationKeyBindings(o.navigation),
                            c
                        );
                    }
                    console.error('No id found: options.id must be specified for dataNavigator.build');
                } else
                    console.error(
                        'No data found, cannot enter: options.data must contain a valid hash object of data for dn.build'
                    );
            }),
            (n.move = e => {
                if (i) {
                    const t = o.data.nodes[i];
                    if (t.edges) {
                        let n = null,
                            s = 0;
                        const r = l[e],
                            a = r.types || e,
                            c = (e, o) => {
                                const n = 'string' == typeof o.target ? o.target : o.target(t, i, d),
                                    s = 'string' == typeof o.source ? o.source : o.source(t, i, d),
                                    a = s === i ? 1 : n === i ? -1 : 0,
                                    l = 1 === a ? n : -1 === a ? s : null;
                                return l && e === o.type && a === r.direction ? l : null;
                            };
                        for (s = 0; s < t.edges.length; s++) {
                            const e = o.data.edges[t.edges[s]];
                            if (
                                (Array.isArray(a)
                                    ? a.forEach(t => {
                                          n || (n = c(t, e));
                                      })
                                    : (n = c(a, e)),
                                n)
                            )
                                break;
                        }
                        n && (console.log('we found a target?'), p(n, i));
                    }
                }
            }),
            (n.moveTo = e => {
                const t = document.getElementById(e);
                t ? ((d = i), (i = e), t.focus()) : p(e, i);
            }),
            (n.enter = () => {
                n.moveTo(s);
            }),
            (n.exit = () => {
                console.log('exit has been called'), r.focus();
            }),
            (n.hooks = {}),
            (n.hooks.navigation = () => {}),
            (n.hooks.focus = () => {}),
            (n.hooks.selection = () => {}),
            (n.hooks.keydown = () => {}),
            (n.hooks.pointerClick = () => {}),
            n
        );
    })({
        data: i,
        id: 'data-navigator-schema',
        firstNode: 'byj1',
        rendering: 'on-demand',
        manualEventHandling: !1,
        root: { cssClass: '', width: '100%', height: 0 },
        navigation: {
            leftRight: { key: 'series', rebindKeycodes: { left: 'KeyA', right: 'KeyD' } },
            upDown: { key: 'category', rebindKeycodes: { up: 'KeyW', down: 'KeyS' } },
            backwardForward: { key: 'group', rebindKeycodes: { forward: 'KeyE', backward: 'KeyQ' } },
            parentChild: { key: 'level' }
        },
        hooks: {
            navigation: e => {
                console.log('navigating', e);
            },
            focus: e => {
                console.log('focus', e);
            },
            selection: e => {
                console.log('selection', e);
            },
            keydown: e => {
                console.log('keydown', e);
            },
            pointerClick: e => {
                console.log('clicked', e);
            }
        }
    });
    document.getElementById('root').appendChild(a.build());
    const l = new Hammer(document.body, {});
    l.get('pinch').set({ enable: !1 }),
        l.get('rotate').set({ enable: !1 }),
        l.get('pan').set({ enable: !1 }),
        l.get('swipe').set({ direction: Hammer.DIRECTION_ALL, velocity: 0.2 }),
        l.on('press', e => {}),
        l.on('pressup', e => {
            a.enter();
        }),
        l.on('swipe', e => {
            const t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? 'X' : 'Y',
                o = (Math.abs(e['delta' + t]) + 1e-9) / (Math.abs(e['delta' + ('X' === t ? 'Y' : 'X')]) + 1e-9),
                n = e.deltaX < 0,
                i = e.deltaX > 0,
                d = e.deltaY < 0,
                s = e.deltaY > 0,
                r =
                    o > 0.99 && o <= 2
                        ? i && d
                            ? 'forward'
                            : i && s
                            ? 'child'
                            : n && s
                            ? 'backward'
                            : n && d
                            ? 'parent'
                            : null
                        : i && 'X' === t
                        ? 'right'
                        : s && 'Y' === t
                        ? 'down'
                        : n && 'X' === t
                        ? 'left'
                        : d && 'Y' === t
                        ? 'up'
                        : null;
            a.getCurrentFocus() && r && a.move(r);
        });
})();
