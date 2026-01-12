import type { Patient } from "../types";

type PatientDetailProps = {
    patient: Patient;
}

export default function PatientDetails({patient} : PatientDetailProps) {
  return (
    <div>
        <h2>{patient.name}</h2>
    </div>
  )
}
