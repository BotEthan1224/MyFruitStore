import httpInstance from '@/utils/http'
//获取banner轮播图
export function getBannerAPI(params = {}) {
  //首页为1，分类页为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
* @description: 获取所有商品模块
* @param {*}
* @return {*}
*/
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}