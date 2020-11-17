export default {
  /*
   ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
   */
  components: true,

  /*
   ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
   */
  css: ['~/assets/styles.scss'],
  /*
   ** Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: ['~/assets/variables.scss']
  },

  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */

  modules: ['@nuxtjs/style-resources']
}