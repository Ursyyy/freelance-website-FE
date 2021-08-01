<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand cursor-pointer" @click="logoClick">HuntFreelancer</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul v-if="isUserLogined" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link cursor-pointer">Проекты</a></li>
          <li class="nav-item"><a class="nav-link cursor-pointer">Заказчики</a></li>
          <li class="nav-item"><a class="nav-link cursor-pointer">Кабинет</a></li>
        </ul>
        <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
                @click="authClick"
                class="nav-link active cursor-pointer"
                aria-current="page"
                >
              Авторизоваться
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { isObjectEmpty } from "../utils";

const NavBar = {
    data: () => ({
        isUserLogined: true
    }),
    computed: {
        ...mapGetters([
            "getUser"
        ]),
    },
    mounted() {
        // this.checkUser();
    },
    methods: {
        checkUser() {
            const token = localStorage.getItem("AUTH_TOKEN");
            this.isUserLogined = token !== null && !isObjectEmpty(this.getUser);
        },
        authClick() {
            this.$router.push('/auth');
        },
        logoClick() {
            this.$router.push(this.isUserLogined ? '/user/5' : '/')
        }
    },
};

export default NavBar;
</script>

<style></style>
