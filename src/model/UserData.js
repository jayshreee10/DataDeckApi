import mongoose from "mongoose";

const UserDataSchema = new mongoose.Schema(
  {
    CompanyName: { type: String, required: true, index: true },
    CompanyType: { type: String, required: true },
    Alias: { type: String, required: true },
    CompanyID: { type: String, required: true, unique: true, index: true },
    CompanySize: { type: String, required: true },
    IncorporationNo: { type: String, required: true, unique: true },
    IncorporationCertificate: { type: String, required: true },
    IncorporationDate: { type: Date, required: true },
    PANDetails: { type: String, required: true, unique: true },
    TaxCertificationDetails: { type: String, required: true },
    Country: { type: String, required: true },
    State: { type: String, required: true },
    City: { type: String, required: true },
    Pincode: { type: String, required: true },
    RegisteredOfficeAddress: { type: String, required: true },
    Address: { type: String, required: true },
    WhatsAppNumber: { type: String, required: true, unique: true },
    MobileNumber: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const UserDataModel = mongoose.model("User", UserDataSchema);

export default UserDataModel;
