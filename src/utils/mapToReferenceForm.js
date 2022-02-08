const mapToReferenceForm = (form) => {
  return {
    personal: {
      first_name: form.firstName,
      last_name: form.lastName,
      current_Address: form.address,
    },
    employer: [
      {
        name: form.employerName,
        start_date: form.startDate,
        end_date: form.endDate,
      },
    ],
  };
};

export default mapToReferenceForm;
