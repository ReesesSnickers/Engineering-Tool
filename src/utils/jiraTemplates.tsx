const handlePreImplementationUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Pre-Implementation*{color}
  # PENDING

  `;
  return value;
};
const handleImplementationUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Implementation*{color}
  # PENDING

  `;
  return value;
};
const handlePostImplementationUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Post-Implementation*{color}
  # PENDING

  `;
  return value;
};
const handleValidationUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Validation*{color}
  # PENDING

  `;
  return value;
};
const handlePreBackoutUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Pre-Backout*{color}
  # PENDING

  `;
  return value;
};
const handleBackoutUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Backout*{color}
  # PENDING

  `;
  return value;
};
const handlePostBackoutUse = (shouldUse: boolean) => {
  let value = ``;
  if (shouldUse)
    value = `{color:#00875a}*Post-Backout*{color}
  # PENDING
  `;
  return value;
};

export class Jira_Validation_And_Implementation_Template {
  template_content: string;
  constructor(
    usePreImplementation: boolean = true,
    useImplementation: boolean = true,
    usePostImplementation: boolean = true,
    useValidation: boolean = true,
    usePreBackout: boolean = true,
    useBackout: boolean = true,
    usePostBackout: boolean = true,
  ) {
    this.template_content = `${handlePreImplementationUse(usePreImplementation)}${handleImplementationUse(useImplementation)}${handlePostImplementationUse(usePostImplementation)}${handleValidationUse(useValidation)}${handlePreBackoutUse(usePreBackout)}${handleBackoutUse(useBackout)}${handlePostBackoutUse(usePostBackout)}`;
  }
}

export class Jira_New_Story_Template {
  template_content: string;
  constructor() {
    this.template_content = `{{BRIEF_DESCRIPTION}}

  {color:#de350b}*Acceptance Criteria:*{color}
   * PENDING
  
  *_Dev Notes:_*
   * PENDING
  
  *Impact Statement:*
   * PENDING`;
  }
}
