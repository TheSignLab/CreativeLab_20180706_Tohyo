import { Component } from "@angular/core";
import { METHODS } from "http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // TODO : DATOS PERSONALES, INSTRUCCIONES, 2 ipnput file opcionales
  title = "app";
  currentYear = "2018";
  viewState = "welcome";
  checkError = "";
  titles = ["ESPECIALISTA", "MAGISTER", "DOCTOR"];
  idTypes = ["c.c.", "c.e."];
  areas = [
    "DERECHO ADUANERO",
    "DERECHO CAMBIARIO",
    "DERECHO TRIBUTARIO",
    "DERECHO COMERCIAL",
    "DERECHO LABORAL",
    "DERECHO AMBIENTAL",
    "CONTRATACION ADMINISTRATIVA",
    "DERECHO PENAL",
    "DERECHO DE FAMILIA",
    "DERECHO DE MINAS Y ENERGETICO",
    "DERECHO DE LAS COMUNICACIONES",
    "DERECHO INTERNACIONAL",
    "DERECHO ADMINISTRATIVO",
    "OTRO"
  ];
  isAreaOther = false;
  info = {
    name: "",
    email: "",
    id: {
      number: "",
      type: ""
    },
    professionalCard: "",
    cellphone: "",
    city: "",
    address: "",
    phone: ""
  };
  professional = {
    title: "Titulo Obtenido en el Postgrado",
    undegraduated: {
      institution: "",
      year: ""
    },
    graduated: {
      institution: "",
      year: ""
    },
    area: {
      type: "",
      main: "",
      other: ""
    }
  };
  errors = {
    info: {
      name: "",
      email: "",
      id: {
        number: "",
        type: ""
      },
      professionalCard: "",
      cellphone: "",
      city: "",
      address: "",
      phone: ""
    },
    professional: {
      title: "",
      undegraduated: {
        institution: "",
        year: ""
      },
      graduated: {
        institution: "",
        year: ""
      },
      area: {
        type: "",
        main: "",
        other: ""
      }
    }
  };
  constructor() {
    this.viewState = "welcome";
  }

  ngOnInit() {}

  goTo(view) {
    if (this.viewState == "welcome" || view == "welcome") {
      this.viewState = view;
      this.computedArea();
      window.scrollTo(0, 0);
    } else {
      let valid = this.checkView();
      if (valid.isOk) {
        this.viewState = view;
        this.computedArea();
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
        window.console.log(valid);
      }
    }
  }

  checkView() {
    var _obj = {
      isOk: true
    };

    if (this.viewState == "info-personal") {
      if (!this.info.name) {
        this.errors.info.name = "Ingresa un nombre valido";
        _obj.isOk = false;
      }
      if (!this.validateEmail(this.info.email)) {
        this.errors.info.email = "Ingresa un email valido";
        _obj.isOk = false;
      }
      if (!this.info.id.number) {
        this.errors.info.id.number =
          "Ingresa un numero de documento de id valido";
        _obj.isOk = false;
      }
      if (!this.info.id.type) {
        this.errors.info.id.type =
          "Selecciona un tipo de documento de identidad : C.C O C.E";
        _obj.isOk = false;
      }
      if (!this.info.professionalCard) {
        this.errors.info.professionalCard =
          "Ingresa una tarjeta profesional valida";
        _obj.isOk = false;
      }
      if (!this.info.cellphone) {
        this.errors.info.cellphone = "Ingresa un numero de telefono valido";
        _obj.isOk = false;
      }
      if (!this.info.city) {
        this.errors.info.city = "Ingresa una ciudad valida";
        _obj.isOk = false;
      }
    }
    if (this.viewState == "info-professional") {
      if (!this.professional.undegraduated.institution) {
        this.errors.professional.undegraduated.institution =
          "Ingresa una universidad valida";
        _obj.isOk = false;
      }
      if (!this.professional.undegraduated.year) {
        this.errors.professional.undegraduated.year = "Ingresa una año valido";
        _obj.isOk = false;
      }
      if (!this.professional.graduated.institution) {
        this.errors.professional.graduated.institution =
          "Ingresa una universidad valida";
        _obj.isOk = false;
      }
      if (!this.professional.graduated.year) {
        this.errors.professional.graduated.year = "Ingresa una año valido";
        _obj.isOk = false;
      }
      if (!this.professional.area.main) {
        this.errors.professional.area.main =
          "Ingresa un area del derecho valido";
        _obj.isOk = false;
      }
      if (!this.professional.title) {
        this.errors.professional.title =
          "Ingresa un titulo de postgrado valido";
        _obj.isOk = false;
      }
    }
    _obj.isOk = true;
    return _obj;
  }

  onChange() {
    if (this.professional.area.type == "OTRO") {
      this.isAreaOther = true;
    } else {
      this.isAreaOther = false;
    }
  }
  computedArea() {
    if (this.professional.area.type == "OTRO") {
      this.professional.area.main = this.professional.area.other;
    } else {
      this.professional.area.main = this.professional.area.type;
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
