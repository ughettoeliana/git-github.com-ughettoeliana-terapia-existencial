<script setup>
import { ref } from "vue";
import '../css/styles.css'

const homeLoading = ref(false);
</script>
<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <div class="mx-20 p-20" content="''"></div>
      <div>
        <h1 class="text-5xl pt-5 font-bold text-greyText">
          Terapia <span class="text-primary"> Humanística</span>
        </h1>
      </div>
      <div class="text-greyText text-center p-4">
        <p>Un abordaje existencial personalizado</p>
        <p>de manera individual</p>
      </div>
      <div class="flex justify-center items-center text-sm">
        <router-link
          to="/servicios"
          class="text-white bg-primary rounded-lg p-2"
          >Agendar una consulta</router-link
        >
        <p class="px-2">Primera sesión gratis</p>
      </div>
      <div>
        <img
          src="../../public/bg-manos.jpg"
          alt="fondo de unas manos"
          class="max-w-md bg-contain"
        />
      </div>
    </div>
  </div>
  <br />

  <!-- Primera parte de la main info -->
  <div class="">
    <div class="text-center text-4xl p-4">
      <h2 class="text-greyText">
        Un abordaje logoterapéutico
        <span class="text-primary"><br />para tu salud mental</span>
      </h2>
    </div>
    <div class="flex justify-evenly items-center my-20">
      <div class="">
        <div class="max-w-md">
          <img
            src="/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
      <div class="max-w-md flex flex-col">
        <h3 class="text-2xl font-semibold py-4">
          ¿Qué es el Análisis Existencial?
        </h3>
        <p class="text-greyText">
          El Análisis Existencial es una forma de psicología existencial que
          <strong
            >se centra en ayudar a las personas a encontrar sentido y propósito
            en sus vidas.</strong
          >
          Desarrollada por el renombrado psiquiatra Viktor Frankl, la
          logoterapia y el análisis existencial enfatizan la importancia de
          descubrir un significado personal como fuerza impulsora para el
          bienestar psicológico.
        </p>
      </div>
    </div>
    <div class="flex justify-evenly items-center my-20">
      <div class="max-w-md flex flex-col">
        <h3 class="text-2xl font-semibold py-4">
          Aplicaciones clínicas del análisis existencial
        </h3>
        <p class="text-greyText">
          La logoterapia es una forma de psicología existencial que se centra en
          ayudar a las personas a encontrar sentido y propósito en sus vidas.
          Desarrollada por el renombrado psiquiatra Viktor Frankl, la
          logoterapia enfatiza la importancia de descubrir un significado
          personal como fuerza impulsora para el bienestar psicológico.
        </p>
      </div>
      <div class="half">
        <div class="img-container">
          <img
            src="/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-evenly items-center my-16">
      <div class="half">
        <div class="img-container">
          <img
            src="/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
      <div class="max-w-md flex flex-col">
        <h3 class="text-2xl font-semibold py-4">
          Fundamentos filosóficos del análisis existencial
        </h3>
        <p class="text-greyText">
          La logoterapia es una forma de psicología existencial que se centra en
          ayudar a las personas a encontrar sentido y propósito en sus vidas.
          Desarrollada por el renombrado psiquiatra Viktor Frankl, la
          logoterapia enfatiza la importancia de descubrir un significado
          personal como fuerza impulsora para el bienestar psicológico.
        </p>
      </div>
    </div>
    <!-- Segunda parte de la info -->
    <div class="text-center text-4xl p-4">
      <h2 class="text-greyText">
        Un abordaje personalizado
        <span class="text-primary"><br />de manera individual </span>
      </h2>
    </div>
    <div class="flex justify-evenly items-center my-16">
      <div
        class="flex-grow-1 bg-lightBlue items-stretch rounded-lg max-w-xs m-8 p-8"
      >
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="text-greyText">
          La curiosa paradoja es que cuando me acepto tal como soy, entonces
          puedo cambiar
        </p>
      </div>
      <div
        class="flex-grow-1 bg-lightBlue items-stretch rounded-lg max-w-xs m-8 p-8"
      >
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="text-greyText">
          No se trata de sacar el sentimiento de la mente, ni de esconderlo en
          ella, sino de experimentarlo con aceptación
        </p>
      </div>
      <div class="flex-grow-1 bg-lightBlue rounded-lg max-w-xs m-8 p-8">
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="text-greyText">
          Me siento más feliz simplemente por ser yo mismo y dejar que los otros
          sean ellos mismos.
        </p>
      </div>
    </div>

    <div
      class="flex items-center justify-center max-w-xl text-center p-4 m-auto"
    >
      <div>
        <p class="text-greyText text-2xl">
          Una persona, al descubrir que es amada por ser como es, no por lo que
          pretende ser, sentirá que merece respeto y amor.
        </p>
      </div>
    </div>

    <div
      class="flex justify-around items-center border-solid border border-blueBorder bg-lighterBlue p-4 rounded-lg m-3 my-10"
    >
      <div class="">
        <div class="max-w-lg">
          <p class="text-darkBlue text-3xl italic">
            "El estado de felicidad se alcanza cuando descubrimos para qué
            existimos"
          </p>
          <p class="text-greyText">David Daniel del Valle</p>
        </div>
      </div>
      <div class="text-center bg-lightBlue py-4 px-20 rounded-lg">
        <div class="py-4">
          <img
            src="/profile-img.jpeg"
            class="max-w-xs max-h-80"
            alt="foto de perfil del Licenciado David Daniel del Valle"
          />
        </div>
        <p class="text-darkBlue">Lic. David Daniel del Valle</p>
        <p class="text-greyText">Consultor Psicológico</p>
      </div>
    </div>

    <!-- Seccion de contacto -->
    <div>
      <div class="text-4xl my-16">
        <h2 class="text-center text-greyText font-medium">
          Contáctanos y recibí
          <span class="text-primary text-center"
            ><br />tu primer consulta gratis</span
          >
        </h2>
      </div>

      <div class="container ml-auto mr-auto flex items-center justify-center">
        <div class="w-full md:w-1/2">
          <!-- Formulario -->
          <form class="bg-white px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <div class="grid grid-flow-row sm:grid-flow-col gap-3">
                <div class="sm:col-span-4 justify-center">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nya"
                  >
                    Nombres y Apellidos
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nya"
                    type="text"
                    placeholder="Carlos Torres"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ingresá tu email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="mensaje"
              >
                Mensaje
              </label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mensaje"
                rows="5"
                placeholder="El mensaje"
                required
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-primary hover:bg-darkBlue text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <i
                  class="fa-regular fa-paper-plane pe-2 pr-2"
                  style="color: #ffffff"
                ></i>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
