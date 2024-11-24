import BootstrapDataTable from "./bootstrap/BootstrapDataTable.vue";
import VanillaDataTable from "./vanilla/VanillaDataTable.vue";
import VuetifyDataTable from "./vuetify/VuetifyDataTable.vue";

const renderers: any = {
  vanilla: VanillaDataTable,
  vuetify: VuetifyDataTable,
  bootstrap: BootstrapDataTable,
};

/**
 * Returns the render for a specific UI framework.
 * @param {string} frameworkName - The name of the framework (e.g., 'vanilla', 'vuetify', 'bootstrap').
 * @returns {object} The configuration object for the framework.
 */
export function getRender(frameworkName: string): object {
  if (!renderers[frameworkName]) {
    throw new Error(`Framework "${frameworkName}" is not supported.`);
  }
  return renderers[frameworkName];
}
