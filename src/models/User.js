const { Schema, model, models } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Proporciona un nombre de usuario"],
      maxlength: [80, "Nombre solo debe contener 80 caracteres"],
    },
    phone: {
      type: String,
      maxlength: [18, "Telefono solo debe contener 18 caracteres"],
    },
    img: {
      type: String,
    },
    age: {
      type: Number,
      min: [1, "Edad invalida"],
      max: [130, "Edad invalida"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Proporciona el email"],
      maxlength: [120, "Email solo debe contener 120 caracteres"],
    },
    password: {
      type: String,
      required: [true, "Proporciona una contraseña"],
      maxlength: [180, "Contraseña solo debe contener 180 caracteres"],
    },
    curp: {
      type: String,
      minlength: [18, "Curp solo debe contener 18 caracteres"],
      maxlength: [18, "Curp solo debe contener 18 caracteres"],
    },
    priority: { type: Number },
    problem: { type: String },
    promote: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = models.User || model("User", UserSchema);
