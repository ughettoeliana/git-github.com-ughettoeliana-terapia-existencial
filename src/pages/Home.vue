<script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseTextarea from "../components/BaseTextarea.vue";

export default {
  name: "Home",
  components: { BaseButton, BaseLabel, BaseInput, BaseTextarea },
  data() {
    return {
      homeLoading: false,
    };
  },
};
</script>
<template>
  <div class="bg-image">
    <div class="banner-section">
      <div class="empty-div"></div>
      <div>
        <h1 class="title grey-text">
          Terapia <span class="blue-text title">Humanistica - Existencial</span>
        </h1>
      </div>
      <div class="grey-text">
        <p>Un abordaje existencial personalizado</p>
        <p>de manera individual</p>
      </div>
      <div class="banner-offer">
        <router-link to="/servicios" class="btn-primary"
          >Agendar una consulta</router-link
        >
        <p class="">Primera sesion gratis</p>
      </div>
    </div>
  </div>
  <br />

  <!-- Primera parte de la main info -->
  <div class="">
    <div class="subtitle-container">
      <h2 class="grey-text">
        Un abordaje logoterapeutico
        <span class="blue-text"><br />para tu salud mental</span>
      </h2>
    </div>
    <div class="info-container">
      <div class="half">
        <div class="img-container">
          <img
            src="../../public/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
      <div class="half alig-center">
        <h3 class="f-1">¿Que es la logoterapia?</h3>
        <p class="grey-text">
          La logoterapia es una forma de psicología existencial que se centra en
          ayudar a las personas a encontrar sentido y propósito en sus vidas.
          Desarrollada por el renombrado psiquiatra Viktor Frankl, la
          logoterapia enfatiza la importancia de descubrir un significado
          personal como fuerza impulsora para el bienestar psicológico.
        </p>
      </div>
    </div>
    <div class="info-container">
      <div class="half alig-center">
        <h3 class="f-1">¿Que es la logoterapia?</h3>
        <p class="grey-text">
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
            src="../../public/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
    </div>
    <div class="info-container">
      <div class="half">
        <div class="img-container">
          <img
            src="../../public/positive-img.jpg"
            class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande"
          />
        </div>
      </div>
      <div class="half alig-center">
        <h3 class="f-1">¿Que es la logoterapia?</h3>
        <p class="grey-text">
          La logoterapia es una forma de psicología existencial que se centra en
          ayudar a las personas a encontrar sentido y propósito en sus vidas.
          Desarrollada por el renombrado psiquiatra Viktor Frankl, la
          logoterapia enfatiza la importancia de descubrir un significado
          personal como fuerza impulsora para el bienestar psicológico.
        </p>
      </div>
    </div>
    <!-- Segunda parte de la info -->
    <div class="subtitle-container">
      <h2 class="grey-text">
        Un abordaje personalizado
        <span class="blue-text"><br />de manera individual </span>
      </h2>
    </div>
    <div class="blue-cards-container">
      <div class="blue-card">
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="grey-text">
          <span class="dark-blue-text">Empathy.</span> We put ourselves in the
          shoes of our customers to understand their needs.
        </p>
      </div>
      <div class="blue-card">
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="grey-text">
          <span class="dark-blue-text">Empathy.</span> We put ourselves in the
          shoes of our customers to understand their needs.
        </p>
      </div>
      <div class="blue-card">
        <i class="fa-solid fa-heart" style="color: #21496b"></i>
        <p class="grey-text">
          <span class="dark-blue-text">Empathy.</span> We put ourselves in the
          shoes of our customers to understand their needs.
        </p>
      </div>
    </div>

    <div class="">
      <div class="profile-card-container">
        <div class="half">
          <div>
            <p class="dark-blue-text blue-frase">
              "El estado de felicidad se alcanza cuando descubrimos para que
              existimos"
            </p>
            <p class="grey-text">David Daniel del Valle</p>
          </div>
        </div>
        <div class="profile-card half">
          <div class="img-container">
            <img
              src="../../public/profile-img.jpeg"
              class="img-fluid profile-img"
            />
          </div>
          <p class="dark-blue-text">David Daniel del Valle</p>
          <p class="grey-text">Director de Terapia Existencial</p>
          <!-- <p class="">
            A non-judgmental and compassionate approach to therapy. To create a
            safe and comfortable environment where you can explore your inner
            world and develop tools for self-improvement.
          </p> -->
        </div>
      </div>
    </div>
    <!-- Seccion de contacto -->
    <!-- <div>
      <div class="d-flex justify-content-center text-center my-4 p-5">
        <h2 class="text-3xl font-bold text-secondary fw-semibold">Contactanos y recibí
          <span class="blue-text"><br>tu primer consulta gratis</span>
        </h2>
      </div>
      <div class="abs-center w-50 mx-auto my-4">
        <form action="#" class="p-3  form">
          <div class="form-group">
            <BaseLabel for="name">Nombre</BaseLabel>
            <BaseInput id="name" name="name" type="text" placeholder="Ingresa tu nombre" :disabled="homeLoading" />
          </div>
          <div class="form-group mt-3">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput id="email" name="email" type="email" placeholder="Ingresa tu email" :disabled="homeLoading" />
          </div>
          <div class="form-group mt-3">
            <BaseLabel for="message">Tu mensaje</BaseLabel>
            <BaseTextarea id="message" placeholder="¿Hay algo que nos quieras contar?" :disabled="homeLoading" />
          </div>

          <BaseButton :loading="homeLoading" class="my-2"><i class="fa-regular fa-paper-plane pe-2"
              style="color: #ffffff;"></i>Enviar</BaseButton>
        </form>
      </div>
    </div> -->
  </div>
</template>
