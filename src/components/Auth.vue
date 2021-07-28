<template>
    <div class="min-h-screen bg-gray-100 flex flex-col sm:py-5 h-90">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 class="font-bold text-center text-2xl mb-5">{{headText}}</h1>  
            <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7 auth-form">
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Имя пользователя или email</label>
                    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full form-input" />
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Пароль</label>
                    <input type="text" class="border border-red rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full form-input" />
                    <div v-if="!isLogin">
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">Подтвердите пароль</label>
                        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full form-input" />
                    </div>
                    <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span class="inline-block mr-2">{{authText}}</span>
                    </button>
                </div>
                <div class="py-1">
                    <div class="grid grid-cols-1 gap-1">
                        <div class="text-center sm:text-left whitespace-nowrap">
                            <button 
                                class="transition duration-200 mx-auto px-2 py-1.5 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                                @click="changeAuth"
                                >
                                <span class="inline-block ml-1">{{anotherText}}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const AuthForm = {
    data: () => ({
        isLogin: true,
        username: "",
        password: ""
    }),
    computed: {
        authText() {
            return !this.isLogin ? 'Зарегистрироваться' : 'Ввойти'
        },

        anotherText() {
            return this.isLogin ? 'Зарегистрироваться' : 'Ввойти'
        },
        headText() {
            return this.isLogin ? 'Вход в систему' : 'Регистрация'
        },
    },
    methods: {
        changeAuth() {
            this.isLogin = !this.isLogin;
        },
    },
}

export default AuthForm;
</script>

<style lang="css">
.form-input:focus-visible {
    border-color: #0d6efd !important;
    border-radius: .5rem;
    outline: none !important;
}

.auth-form {
    transition: all 1s ease-out;
}

</style>