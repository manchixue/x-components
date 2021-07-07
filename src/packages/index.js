import Button from './button.vue';
import Icon from './icon.vue';

const components = [
	Button,
	Icon
];

const install = (Vue) => {
	components.forEach(comp => {
		Vue.component(comp.name, comp);
	})
}

if (typeof window.Vue !== 'undefined') { // 全局通过script方式引入组件库 默认调用install方法
	install(Vue);
}

export default {
	install
}
