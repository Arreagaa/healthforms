<script>
import axios from "axios";
import FHeader from "./Info-form/FHeader.vue";
import FTitle from "./utils/FTitle.vue";
import FButtom from "./utils/FButtom.vue";
import FCancel from "./utils/FCancel.vue";
import FInput from "./utils/FInput.vue";
import FTextArea from "./utils/FTextArea.vue";
import FText from "./utils/FText.vue";
import FDate from "./Info-form/FDate.vue";
import FBannner from "./utils/FBanner.vue";
import FSignature from "./utils/FSignature.vue";
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
    FHeader,
    FSignature,
    FRecommendations,
    FSelectionInput,
    FBannner,
  },
  data() {
    return {
      healFormKinder: {
        studentName: "",
        grade: "",
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
        emergencyPhone: "",
        emergencyPhone1: "",
        doctor: "",
        clinicPhone: "",
        doctorPhone: "",
        medicalInformation: "",
        allergies: "",
        vaccines: "",
        senses: "",
        medicine: "",
        areas: "",
        importInfo: "",
        signature: "",
      },
      formSubmitSuccess: false,
      formSubmitError: false,
    };
  },
  created() {
    this.studentInfo();
  },
  methods: {
    async studentInfo() {
      try {
        const requestBody = {
          q: "MTk2OTpNVGsyT1Rwb2ZIaGxTSDQzVmtWMQ==",
        };
        const response = await axios.post(
          "https://backend.schoolaid.app/med",
          requestBody,
          {
            headers: {
              "x-api-key": "4LbhvqUAA68LlKXUKl5VT80HbPwvultf2EmBN2qy",
            },
          }
        );

        const studentName = response.data.body.studentName;
        const grade = response.data.body.grade;

        this.healFormKinder.studentName = studentName;
        this.healFormKinder.grade = grade;
      } catch (error) {}
    },

    async submitForm() {
      try {
        await this.studentInfo();
        const response = await axios.put(
          "https://backend.schoolaid.app/med",
          this.healFormKinder,
          {
            headers: {
              "x-api-key": "4LbhvqUAA68LlKXUKl5VT80HbPwvultf2EmBN2qy",
            },
          }
        );

        if (response.status === 200) {
          console.log("res:", this.healFormKinder);

          this.formSubmitSuccess = true;
          this.formSubmitError = false;
        } else {
          this.formSubmitSuccess = false;
          this.formSubmitError = true;
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        console.log("res on error:", this.healFormKinder);
        this.formSubmitSuccess = false;
        this.formSubmitError = true;
      }
    },
  },
};
</script>
<template>
  <section>
    <FHeader />
  </section>
  <form class="pb-8" @submit.prevent="submitForm">
    <div class="container mx-auto rounded">
      <FTitle title="Formulario de Kinder" />
      <div class="mx-auto">
        <div class="xl:mx-0">
          <FBannner />
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
                  {{ healFormKinder.studentName }}
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-6 px-4">
              <label for="Section" class="pb-2 text-sm font-bold text-gray-800"
                >Grado y Sección</label
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
                  {{ healFormKinder.grade }}
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
              :value="healFormKinder.born"
              @update:value="healFormKinder.born = $event"
              required
            />
            <FInput
              label="Edad"
              for="age"
              type="number"
              id="age"
              name="age"
              placeholder="Edad"
              @update:value="healFormKinder.age = $event"
              required
            />
            <FInput
              label="Sexo"
              for="gender"
              type="text"
              id="gender"
              name="gender"
              placeholder="Género"
              @update:value="healFormKinder.gender = $event"
              required
            />
            <FInput
              label="Peso"
              for="weight"
              type="text"
              id="weight"
              name="weight"
              placeholder="Peso"
              @update:value="healFormKinder.weight = $event"
              required
            />
            <FInput
              label="Estatura"
              for="height"
              type="text"
              id="height"
              name="height"
              placeholder="Estatura"
              @update:value="healFormKinder.height = $event"
              required
            />
            <FInput
              label="Grupo Sanguíneo"
              for="bloodGroup"
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              placeholder="Grupo Sanguíneo"
              @update:value="healFormKinder.bloodGroup = $event"
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
              @update:value="healFormKinder.mother = $event"
              required
            />
            <FInput
              label="Celular de la Madre"
              for="phoneMother"
              type="phone"
              id="phoneMother"
              name="phoneMother"
              placeholder="Celular de la Madre"
              @update:value="healFormKinder.phoneMother = $event"
              required
            />
            <FInput
              label="Nombre del Padre"
              for="father"
              type="text"
              id="father"
              name="father"
              placeholder="Nombre del Padre"
              @update:value="healFormKinder.father = $event"
              required
            />
            <FInput
              label="Celular del Padre"
              for="phoneFather"
              type="phone"
              id="phoneFather"
              name="phoneFather"
              placeholder="Celular del Padre"
              @update:value="healFormKinder.phoneFather = $event"
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
                @update:value="healFormKinder.address = $event"
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
                @update:value="healFormKinder.homePhone = $event"
                required
              />
              <FInput
                label="Teléfono de Oficina"
                for="officePhone"
                type="phone"
                id="officePhone"
                name="officePhone"
                placeholder="Teléfono de Oficina"
                @update:value="healFormKinder.officePhone = $event"
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
              @update:value="healFormKinder.emergencyPerson = $event"
              required
            />
            <FInput
              label="Teléfono de Casa"
              for="emergencyPhone"
              type="phone"
              id="emergencyPhone"
              name="emergencyPhone"
              placeholder="Teléfono de Casa"
              @update:value="healFormKinder.emergencyPhone = $event"
              required
            />
            <FInput
              label="Teléfono de Oficina"
              for="emergencyPhone1"
              type="phone"
              id="emergencyPhone1"
              name="emergencyPhone1"
              placeholder="Teléfono de Oficina"
              @update:value="healFormKinder.emergencyPhone1 = $event"
              required
            />
            <FInput
              label="Nombre del Pediatra"
              for="doctor"
              type="text"
              id="doctor"
              name="doctor"
              placeholder="Nombre del Pediatra"
              @update:value="healFormKinder.doctor = $event"
              required
            />
            <FInput
              label="Teléfono del Consultorio"
              for="clinicPhone"
              type="phone"
              id="clinicPhone"
              name="clinicPhone"
              placeholder="Teléfono del Consultorio"
              @update:value="healFormKinder.clinicPhone = $event"
              required
            />
            <FInput
              label="Celular"
              for="doctorPhone"
              type="phone"
              id="doctorPhone"
              name="doctorPhone"
              placeholder="Celular del Pediatra"
              @update:value="healFormKinder.doctorPhone = $event"
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
              @update:value="healFormKinder.medicalInformation = $event"
              placeholder="¿Cuáles?"
            />
            <FTextArea
              label="¿Ha tenido alguna alergia alimentaria o medicamentosa en el último año?"
              for="allergies"
              id="allergies"
              name="allergies"
              @update:value="healFormKinder.allergies = $event"
              placeholder="¿Cuáles?"
            />
            <FSelectionInput
              label="¿Se encuentra al corriente de sus vacunas?"
              description="Fecha de su última vacuna de tétanos:"
              for="vaccines"
              type="date"
              id="vaccines"
              name="vaccines"
              @update:value="healFormKinder.vaccines = $event"
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
              @update:value="healFormKinder.senses = $event"
              required
            />
            <FSelectionInput
              label="¿Está tomando algún medicamento de forma permanente?"
              for="medicine"
              type="text"
              id="medicine"
              name="medicine"
              placeholder="¿Qué medicamento está tomando?"
              @update:value="healFormKinder.medicine = $event"
              required
            />
            <FSelectionInput
              label="¿Han sido valoradas estas áreas?"
              for="areas"
              id="areas"
              name="areas"
              placeholder="Adjunta alguna observación"
              @update:value="healFormKinder.areas = $event"
              required
            />
            <FText
              label="Alguna observación importante"
              for="importInfo"
              type="text"
              id="importInfo"
              name="importInfo"
              placeholder="Adjunta alguna observación"
              @update:value="healFormKinder.importInfo = $event"
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
        <FSignature
          label="Firma del encargado"
          :modelValue="healFormKinder.signature"
          @update:modelValue="
            (signature) => (healFormKinder.signature = signature)
          "
          required
        />
      </div>
      <div class="flex items-start">
        <div v-if="formSubmitSuccess" class="alert-success">
          Formulario enviado exitosamente.
        </div>
        <div v-if="formSubmitError" class="alert-danger">
          Error al enviar el formulario. Por favor, inténtalo de nuevo más
          tarde.
        </div>
      </div>
    </div>
    <div class="container mx-auto w-11/12 xl:w-full px-4">
      <div class="w-full py-4 sm:px-0 bg-white flex justify-end">
        <FCancel />
        <FButtom />
      </div>
    </div>
  </form>
</template>
