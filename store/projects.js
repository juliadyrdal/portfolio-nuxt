import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: {
      all: [],
      webDev: [],
      ux: [],
    },
    // Display all projects by default
    selectedCategory: 'all'
  }),
  actions: {
    // Fetch projects from Content and store in corresponding arrays
    async fetchProjects() {
      this.projects.all = await queryContent('/').sort({ order: 1 }).find()
      this.projects.webDev = await queryContent('projects').where({ type: 'Web development' }).sort({ order: 1 }).find()
      this.projects.ux = await queryContent('projects').where({ type: 'UX' }).sort({ order: 1 }).find()
    },
    // Set category to filter projects
    setCategory(category) {
      this.selectedCategory = category
    }
  },
  getters: {
    // Display projects in the selected category
    displayedProjects(state) {
      return state.projects[state.selectedCategory] || []
    }
  }
})
