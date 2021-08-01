<template>
  <div>
    <header class="py-5">
      <div class="container px-lg-5">
        <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div class="m-4 m-lg-5">
            <h1 class="display-5 fw-bold">Ищете талантливого специалиста?</h1>
            <div class="mt-5">
              <a
                class="btn btn-primary btn-lg mx-2"
                @click="bntClick"
                >
                Найти фрилансера
                </a>
                <a
                class="btn btn-primary btn-lg mx-2"
                @click="bntClick"
                >
                Найти сотрудника
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Page Content-->
    <section class="pt-4">
      <div class="container px-lg-5">
        <!-- Page Features-->
        <div class="row gx-lg-5">
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-collection"></i>
                </div>
                <h2 class="fs-4 fw-bold">Проверенные специалисты</h2>
                <p class="mb-0">
                 Отзывы работодателей о выполненных проектах, проверенные личные данные фрилансеров и проактивные алгоритмы для борьбы с мошенниками.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-cloud-download"></i>
                </div>
                <h2 class="fs-4 fw-bold">Мощная платформа</h2>
                <p class="mb-0">
                  Сотни тысяч пользователей, гибкая система публикации проектов и вакансий, моментальные уведомления и мощная система поиска.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-card-heading"></i>
                </div>
                <h2 class="fs-4 fw-bold">Безопасная работа</h2>
                <p class="mb-0">
                  Резервирование средств — ваша уверенность в успешном завершении фриланс-проекта. Если работа не будет выполнена, мы вернем вам оплату.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-bootstrap"></i>
                </div>
                <h2 class="fs-4 fw-bold">Добавьте свой проект</h2>
                <p class="mb-0">
                  Опишите задачу и желаемый результат и мы моментально оповестим всех фрилансеров с подходящими навыками, используя все доступные каналы.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-code"></i>
                </div>
                <h2 class="fs-4 fw-bold">Сравните предложения</h2>
                <p class="mb-0">
                  Выберите наилучшее предложение по цене, срокам, отзывам и портфолио. Обсудите важные моменты в удобной рабочей области проекта.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n4
                  "
                >
                  <i class="bi bi-patch-check"></i>
                </div>
                <h2 class="fs-4 fw-bold">Начните сотрудничать</h2>
                <p class="mb-0">
                  Фрилансер начнет работу над проектом. Оплата за работу будет перечислена только после того, как вы подтвердите успешное выполнение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="py-2 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; HuntFreelancer 2021
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { SET_USER } from "../store/types";

const WelcomePage = {
    computed: {
        ...mapGetters(["getUser"]),
    },
    mounted() {
    },
    methods: {
        ...mapMutations({
            setUser: SET_USER,
        }),
        bntClick() {
            this.setUser({
                username: "Ursyyy",
                name: "Alex",
            });
            console.log(this.getUser);
        },
    },
};

export default WelcomePage;
</script>
