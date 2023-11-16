'use strict';
(self.webpackChunk_shopby_vanilla_components = self.webpackChunk_shopby_vanilla_components || []).push([
  [831],
  {
    354: (t, e, c) => {
      var o = c(586);
      const a = class extends o.T$ {
        constructor() {
          super(...arguments),
            (this.fetchProducts = (t) => {
              return (
                (e = this),
                null,
                (c = function* () {
                  const e =
                    (yield t) === a.ACTION_TYPE.NEXT
                      ? [
                          {
                            productNo: '12345',
                            productName: '샘플 상품3 next3',
                            thumbnail: 'http://via.placeholder.com/77x106',
                          },
                          {
                            productNo: '67890',
                            productName: '샘플 상품4 next4',
                            thumbnail: 'http://via.placeholder.com/77x106',
                          },
                        ]
                      : [
                          {
                            productNo: '12345',
                            productName: '샘플 상품1 prev1',
                            thumbnail: 'http://via.placeholder.com/77x106',
                          },
                          {
                            productNo: '67890',
                            productName: '샘플 상품2 prev2',
                            thumbnail: 'http://via.placeholder.com/77x106',
                          },
                        ];
                  this.setState({ products: e }, 'PRODUCT_LIST');
                }),
                new Promise((t, o) => {
                  var a = (t) => {
                      try {
                        r(c.next(t));
                      } catch (t) {
                        o(t);
                      }
                    },
                    p = (t) => {
                      try {
                        r(c.throw(t));
                      } catch (t) {
                        o(t);
                      }
                    },
                    r = (e) => (e.done ? t(e.value) : Promise.resolve(e.value).then(a, p));
                  r((c = c.apply(e, null)).next());
                })
              );
            });
        }
        setup() {
          this.setState({
            products: [
              { productNo: '12345', productName: '샘플 상품1', thumbnail: 'http://via.placeholder.com/77x106' },
              { productNo: '67890', productName: '샘플 상품2', thumbnail: 'http://via.placeholder.com/77x106' },
              { productNo: '13579', productName: '샘플 상품3', thumbnail: 'http://via.placeholder.com/77x106' },
            ],
          });
        }
        setEvent() {
          this.handleClickEvent();
        }
        handleClickEvent() {
          const { PREV: t, NEXT: e } = a.ACTION_TYPE,
            c = new Map();
          c.set(t, () => {
            this.fetchProducts(t);
          }),
            c.set(e, () => {
              this.fetchProducts(e);
            }),
            this.addEvent({ eventType: 'click', eventMap: c });
        }
      };
      let p = a;
      (p.ACTION_TYPE = { PREV: 'PREV', NEXT: 'NEXT' }), customElements.define('recent-products', p);
    },
  },
  (t) => {
    t.O(0, [373, 687], () => (354, t((t.s = 354)))), t.O();
  },
]);
