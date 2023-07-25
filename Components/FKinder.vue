<script>
import axios from "axios";
import FSelection from "./utils/FSelection.vue";
import FHeader from "./Info-form/FHeader.vue";
import FTitle from "./utils/FTitle.vue";
import FButtom from "./utils/FButtom.vue";
import FCancel from "./utils/FCancel.vue";
import FInput from "./utils/FInput.vue";
import FTextArea from "./utils/FTextArea.vue";
import FText from "./utils/FText.vue";
import FDate from "./Info-form/FDate.vue";
import FBannner from "./utils/FBanner.vue";
import FSelect from "./utils/FSelect.vue";
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
    FSelection,
    FSelect,
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
        curp: "",
        born: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        bloodGroup: "",
        mother: "",
        phoneMother: "",
        phoneMotherOffice: "",
        father: "",
        phoneFather: "",
        phoneFatherOffice: "",
        address: "",
        homePhone: "",
        selection: "",
        additionalAddress: "",
        additionalAddressPhone: "",
        emergencyPerson: "",
        emergencyPhone: "",
        emergencyPhone1: "",
        doctor: "",
        clinicPhone: "",
        doctorsPhone: "",
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
  watch: {
    "healFormKinder.selection": function (newValue) {
      if (newValue === "No") {
        this.healFormKinder.additionalAddress = "No";
        this.healFormKinder.additionalAddressPhone = "No";
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
              <label class="pb-2 text-sm font-bold text-gray-800"
                >Nombre y Apellido del Alumno/a</label
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
              <label class="pb-2 text-sm font-bold text-gray-800"
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
            <div class="flex flex-col mb-6 px-4">
              <label class="pb-2 text-sm font-bold text-gray-800"
                >Clave Única de Registro de Población (CURP)</label
              >
              <div class="border border-gray-300 shadow-sm rounded flex">
                <div
                  class="focus:outline-none px-4 py-3 flex items-center border-r border-gray-300 text-xl"
                >
                  <i class="fa-solid fa-address-card"></i>
                </div>
                <p
                  id="Curp"
                  name="Curp"
                  class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600"
                >
                  CURP
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
              type="date"
              id="born"
              name="born"
              :value="healFormKinder.born"
              @update:value="healFormKinder.born = $event"
              required
            />
            <FInput
              label="Años Cumplidos"
              type="number"
              id="age"
              name="age"
              placeholder="Edad"
              @update:value="healFormKinder.age = $event"
              required
            />
            <FSelect
              name="gender"
              label="Género"
              :value="healFormKinder.gender"
              @update:value="healFormKinder.gender = $event"
              required
            >
              <option disabled selected value="">Seleccionar el Género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </FSelect>
            <FInput
              label="Peso (Kg)"
              type="text"
              id="weight"
              name="weight"
              placeholder="Ej. 18 kilogramos"
              @update:value="healFormKinder.weight = $event"
              required
            />
            <FInput
              label="Estatura"
              type="text"
              id="height"
              name="height"
              placeholder="Ej. 90 cm / 1.10 m."
              @update:value="healFormKinder.height = $event"
              required
            />
            <FInput
              label="Grupo Sanguíneo"
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              placeholder="Ej. O+"
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
              label="Nombre y Apellido de la Madre"
              type="text"
              id="mother"
              name="mother"
              placeholder="Nombre y Apellido de la Madre"
              @update:value="healFormKinder.mother = $event"
              required
            />
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
              <FInput
                label="Celular de la Madre"
                type="phone"
                id="phoneMother"
                name="phoneMother"
                placeholder="Formato 55 0000 0000"
                @update:value="healFormKinder.phoneMother = $event"
                required
              />
              <FInput
                label="Celular de su Oficina"
                type="phone"
                id="phoneMotherOffice"
                name="phoneMotherOffice"
                placeholder="Formato 55 0000 0000"
                @update:value="healFormKinder.phoneMotherOffice = $event"
                required
              />
            </div>
            <FInput
              label="Nombre y Apellido del Padre"
              type="text"
              id="father"
              name="father"
              placeholder="Nombre y Apellido del Padre"
              @update:value="healFormKinder.father = $event"
              required
            />
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
              <FInput
                label="Celular del Padre"
                type="phone"
                id="phoneFather"
                name="phoneFather"
                placeholder="Formato 55 0000 0000"
                @update:value="healFormKinder.phoneFather = $event"
                required
              />
              <FInput
                label="Celular de su Oficina"
                type="phone"
                id="phoneFatherOffice"
                name="phoneFatherOffice"
                placeholder="Formato 55 0000 0000"
                @update:value="healFormKinder.phoneFatherOffice = $event"
                required
              />
            </div>
            <FInput
              label="Dirección"
              type="text"
              id="address"
              name="address"
              placeholder="Dirección"
              @update:value="healFormKinder.address = $event"
              required
            />
            <FInput
              label="Teléfono de Casa"
              type="phone"
              id="homePhone"
              name="homePhone"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.homePhone = $event"
              required
            />
            <FSelection
              label="¿Desea agregar una dirección adicional?"
              name="selection"
              @update:value="healFormKinder.selection = $event"
            />
          </div>
          <div
            v-if="healFormKinder.selection === 'Si'"
            class="grid md:grid-cols-2 grid-cols-1 gap-4"
          >
            <FInput
              label="Dirección Adicional"
              type="text"
              id="additionalAddress"
              name="additionalAddress"
              placeholder="Dirección Adicional"
              @update:value="healFormKinder.additionalAddress = $event"
              required
            />
            <FInput
              label="Teléfono de la Dirección Adicional"
              type="phone"
              id="additionalAddressPhone"
              name="additionalAddressPhone"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.additionalAddressPhone = $event"
              required
            />
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
              type="text"
              id="emergencyPerson"
              name="emergencyPerson"
              placeholder="Contacto de emergencia"
              @update:value="healFormKinder.emergencyPerson = $event"
              required
            />
            <FInput
              label="Teléfono de Casa"
              type="phone"
              id="emergencyPhone"
              name="emergencyPhone"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.emergencyPhone = $event"
              required
            />
            <FInput
              label="Teléfono de Oficina"
              type="phone"
              id="emergencyPhone1"
              name="emergencyPhone1"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.emergencyPhone1 = $event"
              required
            />
            <FInput
              label="Nombre del Pediatra"
              type="text"
              id="doctor"
              name="doctor"
              placeholder="Nombre del Pediatra"
              @update:value="healFormKinder.doctor = $event"
              required
            />
            <FInput
              label="Teléfono del Consultorio"
              type="phone"
              id="clinicPhone"
              name="clinicPhone"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.clinicPhone = $event"
              required
            />
            <FInput
              label="Celular"
              type="phone"
              id="doctorsPhone"
              name="doctorsPhone"
              placeholder="Formato 55 0000 0000"
              @update:value="healFormKinder.doctorsPhone = $event"
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
              id="medicalInformation"
              name="medicalInformation"
              @update:value="healFormKinder.medicalInformation = $event"
              placeholder="¿Cuáles?"
            />
            <FTextArea
              label="¿Ha tenido alguna alergia alimentaria o medicamentosa en el último año?"
              id="allergies"
              name="allergies"
              @update:value="healFormKinder.allergies = $event"
              placeholder="¿Cuáles?"
            />
            <FSelectionInput
              label="¿Se encuentra al corriente de sus vacunas?"
              description="Fecha de su última vacuna de tétanos:"
              type="date"
              id="vaccines"
              name="vaccines"
              @update:value="healFormKinder.vaccines = $event"
              required
            />
            <FSelectionInput
              label="¿Presenta algún problema con alguno de sus sentidos?"
              description="Por favor, especifique si tiene algún problema:"
              type="text"
              id="senses"
              name="senses"
              placeholder="vista, oído, olfato o gusto"
              @update:value="healFormKinder.senses = $event"
              required
            />
            <FSelectionInput
              label="¿Está tomando algún medicamento de forma permanente?"
              type="text"
              id="medicine"
              name="medicine"
              placeholder="¿Qué medicamento está tomando?"
              @update:value="healFormKinder.medicine = $event"
              required
            />
            <FSelectionInput
              label="¿Han sido valorados algunos de los sentidos?"
              id="areas"
              name="areas"
              placeholder="Especifique"
              @update:value="healFormKinder.areas = $event"
              required
            />
            <FText
              label="Alguna observación importante"
              type="text"
              id="importInfo"
              name="importInfo"
              placeholder="Escriba la Observación"
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
          label="Firma Padre/Madre o Tutor"
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
