import useAuthUser from "../composables/UseAuthUser";

const routes = [
  {
    path: "/service-worker.js",
    name: "service-worker",
    redirect: () => {
      return `${process.env.BASE_URL}/service-worker.js`;
    },
  },

  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("../pages/public/NotFound.vue"),
  // },
  {
    path: "/login",
    redirect: () => {
      return "/";
    },
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   meta: {
  //     hideForAuth: true,
  //   },
  //   component: () => import("../pages/public/AppRegister.vue"),
  // },
  // {
  //   path: "/email-confirmation",
  //   name: "EmailConfirmation",
  //   meta: {
  //     hideForAuth: true,
  //   },
  //   beforeEnter: (to) => {
  //     if (!to.query.email) {
  //       return { name: "login" };
  //     }
  //   },
  //   component: () => import("../pages/public/EmailConfirmation.vue"),
  // },
  {
    path: "/",
    name: "login",
    meta: {
      hideForAuth: true,
    },
    component: () => import("../pages/public/AppLogin.vue"),
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    meta: {
      hideForAuth: true,
    },
    component: () => import("../pages/public/ForgotPassword.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../pages/private/ResetPassword.vue"),
  },

  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useAuthUser();
      await logout();
      return { name: "login" };
    },
  },

  {
    path: "/home",
    name: "home",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/Home.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/Profile.vue"),
  },

  {
    path: "/home-site",
    name: "home-site",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/siteEdit/Home/index.vue"),
  },

  {
    path: "/jobs-site",
    name: "jobs-site",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/siteEdit/Jobs/index.vue"),
  },

  {
    path: "/projects-site",
    name: "projects-site",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/siteEdit/Projects/index.vue"),
  },
];

export default routes;
