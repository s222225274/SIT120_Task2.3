export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},

data() {
return {
products: [
{ id: 1, name: 'Handmade Pottery', price: 20 },
{ id: 2, name: 'Knit Scarf', price: 15 },
{ id: 3, name: 'Wooden Keychain', price: 5 },
],
cart: [],
};
},
computed: {
cartTotal() {
return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
},
},
methods: {
addToCart(product) {
const cartItem = this.cart.find(item => item.product.id === product.id);
if (cartItem) {
cartItem.quantity++;
} else {
this.cart.push({ product: product, quantity: 1 });
}
},
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'HomeView';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'product-card'?: boolean; } &
{ 'cart'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).ul; ({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["h1"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h1;
const __VLS_6 = __VLS_5({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
(__VLS_7.slots!).default;
}
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products)!)) {
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{ ...{}, key: ((product.id)), class: ("product-card"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_14 = __VLS_13({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
(product.name);
(__VLS_15.slots!).default;
}
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_18 = __VLS_17({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
(product.price);
(__VLS_19.slots!).default;
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_22 = __VLS_21({ ...{ ...{ onClick: {} as any, }, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24 = { 'click': __VLS_pickEvent(__VLS_23.emit!, 'click' as const, __VLS_componentProps(__VLS_21, __VLS_22).onClick) };
__VLS_24 = {
click: $event => {
__VLS_ctx.addToCart(product);
}
};
(__VLS_23.slots!).default;
}
(__VLS_11.slots!).default;
}
// @ts-ignore
[products, addToCart,];
}
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_27 = __VLS_26({ ...{ ...{}, class: ("cart"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, {});
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_31 = __VLS_30({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
(__VLS_32.slots!).default;
}
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["ul"];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, {});
({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).ul;
const __VLS_35 = __VLS_34({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.cart)!)) {
{
const __VLS_37 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, {});
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_39 = __VLS_38({ ...{ ...{}, key: ((item.product.id)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
(item.product.name);
(item.quantity);
(__VLS_40.slots!).default;
}
// @ts-ignore
[cart,];
}
(__VLS_36.slots!).default;
}
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_43 = __VLS_42({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
(__VLS_ctx.cartTotal);
(__VLS_44.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["product-card"];
__VLS_styleScopedClasses["cart"];
}
var __VLS_slots!: {};
// @ts-ignore
[cartTotal,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_publicComponent;
})();
