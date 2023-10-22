<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseTextarea from '../components/BaseTextarea.vue';

export default {
  name: 'Home',
  components: { BaseButton, BaseLabel, BaseInput, BaseTextarea },
  data() {
    return {
      homeLoading: false,
    }
  }
}
</script>
<template>
  <div class="bg-image vh-100">
    <div class="text-center w-50 m-auto">
      <div>
        <h1 class="text-3xl my-5 font-bold text-secondary display-5 fw-semibold">Terapia <span
            class="blue-text">Humanistica - Existencial</span>
        </h1>
      </div>
      <div class="text-secondary m-auto w-75 text-center p-2">
        <p class="lead">Un abordaje existencial personalizado de manera individual</p>
      </div>
      <div class="d-inline-block">
        <BaseButton class="d-inline-block mx-2">Agendar una consulta</BaseButton>
        <p class="d-inline-block fs-6">Primera sesion gratis</p>
      </div>
    </div>
  </div>
  <br>

  <!-- Primera parte de la main info -->
  <div class="container my-3 fw-medium">
    <div class="d-flex justify-content-center text-center my-4 p-5">
      <h2 class="text-3xl font-bold text-secondary fw-semibold">Un abordaje logoterapeutico
        <span class="blue-text"><br>para tu salud mental</span>
      </h2>
    </div>
    <div class="row mx-auto my-5 p-3">
      <div class="col-lg-6 m">
        <div class="mx-auto w-50  border rounded">
          <img src="../../public/positive-img.jpg" class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande">
        </div>
      </div>
      <div class="col-lg-6  my-3 w-50">
        <h3>¿Que es la logoterapia?</h3>
        <p class=" text-secondary">La logoterapia es una forma de psicología existencial que se centra en ayudar a las
          personas a encontrar
          sentido y propósito en sus vidas. Desarrollada por el renombrado psiquiatra Viktor Frankl, la logoterapia
          enfatiza la importancia de descubrir un significado personal como fuerza impulsora para el bienestar
          psicológico.</p>
      </div>
    </div>
    <div class="row mx-auto my-5 p-3">
      <div class="col-lg-6  my-3 w-50">
        <h3>¿Que es la logoterapia?</h3>
        <p class=" text-secondary">La logoterapia es una forma de psicología existencial que se centra en ayudar a las
          personas a encontrar
          sentido y propósito en sus vidas. Desarrollada por el renombrado psiquiatra Viktor Frankl, la logoterapia
          enfatiza la importancia de descubrir un significado personal como fuerza impulsora para el bienestar
          psicológico.</p>
      </div>
      <div class="col-lg-6 m">
        <div class="mx-auto w-50  border rounded">
          <img src="../../public/positive-img.jpg" class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande">
        </div>
      </div>
    </div>
    <div class="row mx-auto my-5 p-3">
      <div class="col-lg-6 m">
        <div class="mx-auto w-50  border rounded">
          <img src="../../public/positive-img.jpg" class="img-fluid"
            alt="una mujer sentada al lado de una flor muy grande">
        </div>
      </div>
      <div class="col-lg-6  my-3 w-50">
        <h3>¿Que es la logoterapia?</h3>
        <p class=" text-secondary">La logoterapia es una forma de psicología existencial que se centra en ayudar a las
          personas a encontrar
          sentido y propósito en sus vidas. Desarrollada por el renombrado psiquiatra Viktor Frankl, la logoterapia
          enfatiza la importancia de descubrir un significado personal como fuerza impulsora para el bienestar
          psicológico.</p>
      </div>
    </div>
    <!-- Segunda parte de la info -->
    <div class="d-flex justify-content-center text-center my-4 p-5">
      <h2 class="text-3xl font-bold text-secondary fw-semibold">Un abordaje personalizado
        <span class="blue-text"><br>de manera individual
        </span>
      </h2>
    </div>
    <div class="row mx-auto my-5 p-3">
      <div class="col-lg-3 mx-auto my-3 p-4 bg-light-blue rounded">
        <i class="fa-solid fa-heart" style="color: #21496b;"></i>
        <p class="text-secondary"><span class="dark-blue-text">Empathy.</span> We put ourselves in the shoes of our
          customers to understand their needs.</p>
      </div>
      <div class="col-lg-3 mx-auto my-3 bg-light-blue p-4 rounded">
        <i class="fa-solid fa-heart" style="color: #21496b;"></i>
        <p class="text-secondary"><span class="dark-blue-text">Empathy.</span> We put ourselves in the shoes of our
          customers to understand their needs.</p>
      </div>
      <div class="col-lg-3  mx-auto my-3 bg-light-blue p-4 rounded">
        <i class="fa-solid fa-heart" style="color: #21496b;"></i>
        <p class="text-secondary"><span class="dark-blue-text">Empathy.</span> We put ourselves in the shoes of our
          customers to understand their needs.</p>
      </div>
    </div>
    <div class="py-2 my-2">
      <p class="text-3xl text-center font-bold text-secondary display-1 fw-semibold">Tu salud mental
        <span class="blue-text">es importante</span>
      </p>
    </div>
    <div>
      <div class="d-flex justify-content-around mx-auto p-4 border-radius w-75"
        style="background-color: #f0f9ff; border: solid 1px #bae6fd;">
        <div class="d-flex align-items-center">
          <div>
            <p class="dark-blue-text fs-2 fst-italic">"El estado de felicidad se alcanza cuando descubrimos para que
              existimos"</p>
            <p class="text-secondary fw-normal">David Daniel del Valle</p>
          </div>
        </div>
        <div class="p-3 mx-auto w-75 bg-light-blue border-radius">
          <div class="w-25 mx-auto my-3">
            <img src="../../public/profile-img.jpg" class="img-fluid">
          </div>
          <p class="dark-blue-text fs-4">David Daniel del Valle</p>
          <p class="bg-light px-2 py-1 text-secondary rounded fw-normal">Director de Terapia Existencial</p>
          <p class="text-secondary fw-normal">A non-judgmental and compassionate approach to therapy. To create a safe and
            comfortable environment where you can explore your inner world and develop tools for self-improvement.</p>
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
