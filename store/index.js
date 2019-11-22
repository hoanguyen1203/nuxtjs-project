import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      projects: [],
      tasks: []
    }),
    mutations: {
      addProject (state, project) {
        state.projects.push(project)
      },
      saveProjects (state, projects) {
        state.projects = projects
      },
      addTask (state, task) {
        state.tasks.push(task)
      },
      saveTasks (state, tasks) {
        state.tasks = tasks
      }
    },
    actions: {
      addProject ({ commit }, project) {
        commit('addProject', project)
      },
      saveProjects ({ commit }, projects) {
        commit('saveProjects', projects)
      },
      addTask ({ commit }, task) {
        commit('addTask', task)
      },
      saveTasks ({ commit }, tasks) {
        commit('saveTasks', tasks)
      }
    }
  })
}

export default createStore
