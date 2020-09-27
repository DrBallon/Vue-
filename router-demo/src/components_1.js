export const A = {
  template: `<router-link tag="div" class="a block" to="/b">点击切换至b</router-link>`,
};
export const B = {
  template: `  
                <div>
                  <router-link tag="div" class="b block" to="/c">点击切换到C</router-link>
                  <router-view></router-view>
                </div>
              `,
};
export const B1 = {
  template: `<router-link tag="div" class="b1 block" to="/b/b2">子路由b1，点击切换</router-link>`,
};
export const B2 = {
  template: `
              <div>
                <router-link tag="div" class="b2 block c-left-bottom" to="/b/b1">子路由b2，点击切换</router-link>
                <router-view></router-view>
              </div>
              `,
};
export const B21 = {
  template: `<router-link tag="div" class="b21 block c-right-bottom" to="/b/b2/b22">三级路由b21，点击切换</router-link>`,
};
export const B22 = {
  template: `<router-link tag="div" class="b22 block c-right-bottom" to="/b/b2/b21">三级路由b22，点击切换</router-link>`,
};
export const C = {
  template: `
              <div>
                <router-link tag="div" class="c-left-top block" to="/a">点击切换至a</router-link>
                <router-view></router-view>
                <router-view name="c1"></router-view>
                <router-view name="c2"></router-view>
              </div>
              `,
};
export const C1 = {
  template: `<router-link tag="div" class="block c-right-top right1" to="/c/c2">点击切换视图组件</router-link>`,
};
export const C2 = {
  template: `<router-link tag="div" class="block c-right-top right2" to="/c/c1">点击切换视图组件</router-link>`,
};
export const Left1 = {
  template: `<div class="block c-left-bottom c1">c1</div>`,
};
export const Right1 = {
  template: `<div class="block c-right-bottom c2">c2</div>`,
};
export const Left2 = {
  template: `<div class="block c-left-bottom c3">c3</div>`,
};
export const Right2 = {
  template: `<div class="block c-right-bottom c4">c4</div>`,
};
export const NotFound = {
  template: `<div class="block not-found">NotFound</div>`,
};
