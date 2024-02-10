import { defineStore } from "pinia";

export const useStore = defineStore("userData", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      email: null || localStorage.getItem("email"),
      userType: null || localStorage.getItem("userType"),
      companyName: null,
      location: null,
      yearsOfExperience: null,
      rank: null,
      specializedType: null,
      pastProjects: [],
      loggedIn: false,
    };
  },
  getters: {
    getData() {
      return {
        state: {
          email: this.email,
          type: this.type,
          companyName: this.companyName,
          location: this.location,
          yearsOfExperience: this.yearsOfExperience,
          rank: this.rank,
          specializedType: this.specializedType,
          pastProjects: this.pastProjects,
          loggedIn: this.loggedIn,
        },
      };
    },
    getType() {
      return this.userType;
    },
    getLoggedIn() {
      if (localStorage.getItem("email") != null) {
        return (this.loggedIn = true);
      }
    },
  },
  actions: {
    setData(data) {
      this.email = data.email;
      this.userType = data.userType;
      this.loggedIn = true;
      localStorage.setItem("email", data.email);
      localStorage.setItem("userType", data.userType);
    },
    setContractorForm(data) {
      this.email = data.email;
      this.userType = data.userType;
      this.companyName = data.companyName;
      this.location = data.location;
      this.yearsOfExperience = data.yearsOfExperience;
      this.rank = data.rank;
      this.specializedType = data.specializedType;
      this.pastProjects = data.pastProjects;
      if (this.email != null) {
        this.loggedIn = true;
      }
    },
    setLoggedIn(data) {
      this.loggedIn = data;
    },
    logout() {
      this.loggedIn = false;
      this.email = null;
      this.userType = null;
      this.companyName = null;
      this.location = null;
      this.yearsOfExperience = null;
      this.rank = null;
      this.specializedType = null;
      this.pastProjects = [];
      localStorage.removeItem("email");
      localStorage.removeItem("userType");
    },
  },
});
