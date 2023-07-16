<script>
import FTitle from "./utils/FTitle.vue";
import FButtom from "./utils/FButtom.vue";
import FCancel from "./utils/FCancel.vue";
import FInput from "./utils/FInput.vue";
import FTextArea from "./utils/FTextArea.vue";
import FText from "./utils/FText.vue";
import FDate from "./Info-form/FDate.vue";
import FRecommendations from "./Info-form/FRecommendations.vue";
import FSelectionInput from "./utils/FSelectionInput.vue";

export default {
  components: {
    FTitle,
    FButtom,
    FCancel,
    FInput,
    FTextArea,
    FText,
    FDate,
    FRecommendations,
    FSelectionInput,
  },
  data() {
    return {
      healForm: {
        born: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        bloodGroup: "",
        mother: "",
        phoneMother: "",
        father: "",
        phoneFather: "",
        address: "",
        homePhone: "",
        officePhone: "",
        emergencyPerson: "",
        emergencyHomePhone: "",
        emergencyOfficePhone: "",
        pediatrician: "",
        clinicPhone: "",
        pediatricianPhone: "",
        medicalInformation: "",
        allergies: "",
        vaccines: "",
        senses: "",
        medicine: "",
        areas: "",
        importInfo: "",
      },
    };
  },
};
</script>
<template>
  <form class="py-8">
    <div class="bg-white">
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Formulario de Kinder" />
        <div class="mx-auto">
          <div class="mx-auto xl:mx-0">
            <div class="rounded relative mt-8 h-80">
              <img
                src="https://www.javeriana.edu.co/pesquisa/wp-content/uploads/2021/11/vacunas-covid-ninos-colombia.jpg"
                alt=""
                class="w-full h-full object-cover rounded absolute shadow"
              />
              <div
                class="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"
              ></div>
            </div>
            <div class="py-12 grid md:grid-cols-2 grid-cols-1 gap-4">
              <div class="flex flex-col mb-6 px-4">
                <label for="Name" class="pb-2 text-sm font-bold text-gray-800"
                  >Nombre del Alumno</label
                >
                <div class="border border-gray-300 shadow-sm rounded flex">
                  <div
                    class="focus:outline-none px-4 py-3 flex items-center border-r border-gray-300 text-xl"
                  >
                    <i class="fa fa-user"></i>
                  </div>
                  <p
                    id="name"
                    name="name"
                    class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600"
                  >
                    Nombre del Alumno
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-6 px-4">
                <label
                  for="Section"
                  class="pb-2 text-sm font-bold text-gray-800"
                  >Sección</label
                >
                <div class="border border-gray-300 shadow-sm rounded flex">
                  <div
                    class="focus:outline-none px-4 py-3 flex items-center border-r border-gray-300 text-xl"
                  >
                    <i class="fa fa-clipboard-list"></i>
                  </div>
                  <p
                    id="section"
                    name="section"
                    class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600"
                  >
                    Sección
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-6 px-4">
                <label for="Grade" class="pb-2 text-sm font-bold text-gray-800"
                  >Grado</label
                >
                <div class="border border-gray-300 shadow-sm rounded flex">
                  <div
                    class="focus:outline-none px-4 py-3 flex items-center border-r border-gray-300 text-xl"
                  >
                    <i class="fa fa-school"></i>
                  </div>
                  <p
                    id="grade"
                    name="grade"
                    class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600"
                  >
                    Grado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Información del Alumno" />
        <div class="pt-4">
          <div class="container">
            <div class="my-6 grid md:grid-cols-2 grid-cols-1 gap-4">
              <FInput
                label="Fecha de Nacimiento"
                for="born"
                type="date"
                id="born"
                name="born"
                :value="healForm.born"
                @update:value="healForm.born = $event"
                required
              />
              <FInput
                label="Edad"
                for="age"
                type="number"
                id="age"
                name="age"
                placeholder="Edad"
                @update:value="healForm.age = $event"
                required
              />
              <FInput
                label="Sexo"
                for="gender"
                type="text"
                id="gender"
                name="gender"
                placeholder="Género"
                @update:value="healForm.gender = $event"
                required
              />
              <FInput
                label="Peso"
                for="weight"
                type="text"
                id="weight"
                name="weight"
                placeholder="Peso"
                @update:value="healForm.weight = $event"
                required
              />
              <FInput
                label="Estatura"
                for="height"
                type="text"
                id="height"
                name="height"
                placeholder="Estatura"
                @update:value="healForm.height = $event"
                required
              />
              <FInput
                label="Grupo Sanguíneo"
                for="bloodGroup"
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                placeholder="Grupo Sanguíneo"
                @update:value="healForm.bloodGroup = $event"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Información Familiar" />
        <div class="pt-4">
          <div class="container">
            <div class="my-6 grid md:grid-cols-2 grid-cols-1 gap-4">
              <FInput
                label="Nombre de la Madre"
                for="mother"
                type="text"
                id="mother"
                name="mother"
                placeholder="Nombre de la Madre"
                @update:value="healForm.mother = $event"
                required
              />
              <FInput
                label="Celular de la Madre"
                for="phoneMother"
                type="phone"
                id="phoneMother"
                name="phoneMother"
                placeholder="Celular de la Madre"
                @update:value="healForm.phoneMother = $event"
                required
              />
              <FInput
                label="Nombre del Padre"
                for="father"
                type="text"
                id="father"
                name="father"
                placeholder="Nombre del Padre"
                @update:value="healForm.father = $event"
                required
              />
              <FInput
                label="Celular del Padre"
                for="phoneFather"
                type="phone"
                id="phoneFather"
                name="phoneFather"
                placeholder="Celular del Padre"
                @update:value="healForm.phoneFather = $event"
                required
              />
              <div class="grid grid-cols-1">
                <FInput
                  label="Dirección"
                  for="address"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Dirección"
                  @update:value="healForm.address = $event"
                  required
                />
              </div>
              <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <FInput
                  label="Teléfono de Casa"
                  for="homePhone"
                  type="phone"
                  id="homePhone"
                  name="homePhone"
                  placeholder="Teléfono de Casa"
                  @update:value="healForm.homePhone = $event"
                  required
                />
                <FInput
                  label="Teléfono de Oficina"
                  for="officePhone"
                  type="phone"
                  id="officePhone"
                  name="officePhone"
                  placeholder="Teléfono de Oficina"
                  @update:value="healForm.officePhone = $event"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Contactos de Emergencia" />
        <div class="pt-4">
          <div class="container">
            <div class="my-6 grid md:grid-cols-2 grid-cols-1 gap-4">
              <FInput
                label="Contacto en caso de emergencia"
                for="emergencyPerson"
                type="text"
                id="emergencyPerson"
                name="emergencyPerson"
                placeholder="Contacto de emergencia"
                @update:value="healForm.emergencyPerson = $event"
                required
              />
              <FInput
                label="Teléfono de Casa"
                for="emergencyHomePhone"
                type="phone"
                id="emergencyHomePhone"
                name="emergencyHomePhone"
                placeholder="Teléfono de Casa"
                @update:value="healForm.emergencyHomePhone = $event"
                required
              />
              <FInput
                label="Teléfono de Oficina"
                for="emergencyOfficePhone"
                type="phone"
                id="emergencyOfficePhone"
                name="emergencyOfficePhone"
                placeholder="Teléfono de Oficina"
                @update:value="healForm.emergencyOfficePhone = $event"
                required
              />
              <FInput
                label="Nombre del Pediatra"
                for="pediatrician"
                type="text"
                id="pediatrician"
                name="pediatrician"
                placeholder="Nombre del Pediatra"
                @update:value="healForm.pediatrician = $event"
                required
              />
              <FInput
                label="Teléfono del Consultorio"
                for="clinicPhone"
                type="phone"
                id="clinicPhone"
                name="clinicPhone"
                placeholder="Teléfono del Consultorio"
                @update:value="healForm.clinicPhone = $event"
                required
              />
              <FInput
                label="Celular"
                for="pediatricianPhone"
                type="phone"
                id="pediatricianPhone"
                name="pediatricianPhone"
                placeholder="Celular del Pediatra"
                @update:value="healForm.pediatricianPhone = $event"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Antecedentes Médico-Quirúrgicos" />
        <div class="pt-4">
          <div class="container">
            <div class="my-6 grid md:grid-cols-2 grid-cols-1 gap-4">
              <FTextArea
                label="¿Ha tenido alguna enfermedad o cirugía importante en el último año?"
                for="medicalInformation"
                id="medicalInformation"
                name="medicalInformation"
                @update:value="healForm.medicalInformation = $event"
                placeholder="¿Cuáles?"
              />
              <FTextArea
                label="¿Ha tenido alguna alergia alimentaria o medicamentosa en el último año?"
                for="allergies"
                id="allergies"
                name="allergies"
                @update:value="healForm.allergies = $event"
                placeholder="¿Cuáles?"
              />
              <FSelectionInput
                label="¿Se encuentra al corriente de sus vacunas?"
                description="Fecha de su última vacuna de tétanos:"
                for="vaccines"
                type="date"
                id="vaccines"
                name="vaccines"
                @update:value="healForm.vaccines = $event"
                required
              />
              <FSelectionInput
                label="¿Presenta algún problema con alguno de sus sentidos?"
                description="Por favor, especifique si tiene algún problema:"
                for="senses"
                type="text"
                id="senses"
                name="senses"
                placeholder="vista, oído, olfato o gusto"
                @update:value="healForm.senses = $event"
                required
              />
              <FSelectionInput
                label="¿Está tomando algún medicamento de forma permanente?"
                for="medicine"
                type="text"
                id="medicine"
                name="medicine"
                placeholder="¿Qué medicamento está tomando?"
                @update:value="healForm.medicine = $event"
                required
              />
              <FSelectionInput
                label="¿Han sido valoradas estas áreas?"
                for="areas"
                id="areas"
                name="areas"
                placeholder="Adjunta alguna observación"
                @update:value="healForm.areas = $event"
                required
              />
              <FText
                label="Alguna observación importante"
                for="importInfo"
                type="text"
                id="importInfo"
                name="importInfo"
                placeholder="Adjunta alguna observación"
                @update:value="healForm.importInfo = $event"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Recomendaciones" />
        <div class="mx-auto px-4 space-y-2 py-4">
          <FRecommendations
            :order="1"
            text="Le sugerimos enviar a sus hijos habiendo tomado su primer alimento (desayuno)."
          />
          <FRecommendations
            :order="2"
            text="Favor de informar inmediatamente a la dirección de su sección o la
          enfermería del Colegio si llegara a existir en sus hijos algún caso
          que sea infecto-contagioso. En caso de presentarse este tipo de
          situaciones, les solicitamos no enviar a los niños al Colegio."
          />
          <FRecommendations
            :order="3"
            text="Es importante notificar cambios de teléfono o domicilio durante el
          año, para tener contacto con los familiares en todo momento."
          />
        </div>
      </div>
      <div class="container mx-auto bg-white rounded">
        <FTitle title="Notas" />
        <div class="mx-auto px-4 space-y-2 py-4">
          <FRecommendations
            :order="1"
            text="El servicio de enfermería del colegio está capacitado y autorizado para atender exclusivamente las contingencias que se presenten en el alumno durante las horas de clase."
          />
          <FRecommendations
            :order="2"
            text="Como servicio adicional a los prestados por nuestro colegio, contamos con un seguro de gastos médicos para accidentes escolares de sus hijos. La cobertura de reembolso tiene un deducible por evento."
          />
          <FRecommendations
            :order="3"
            text="Cabe mencionar que dicho seguro se excluye cuando el accidente es ocasionado por riñas entre alumnos o cuando no se da aviso inmediato a la enfermería del colegio."
          />
        </div>
      </div>
      <div class="container mx-auto">
        <div class="my-6">
          <FDate />
        </div>
      </div>
      <div class="container mx-auto w-11/12 xl:w-full px-4">
        <div class="w-full py-4 sm:px-0 bg-white flex justify-end">
          <FCancel />
          <FButtom />
        </div>
      </div>
    </div>
  </form>
</template>
