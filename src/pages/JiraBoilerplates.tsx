import {
  Jira_New_Story_Template,
  Jira_Validation_And_Implementation_Template,
} from '../utils/jiraTemplates';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '../components/form/Checkbox';
import { useState } from 'react';

interface validationImplementationStateTypes {
  preimplementation: boolean;
  implementation: boolean;
  postimplementation: boolean;
  validation: boolean;
  prebackout: boolean;
  backout: boolean;
  postbackout: boolean;
}

const JiraBoilerplates = () => {
  const [validationImplementationState, setValidationImplementationState] =
    useState<validationImplementationStateTypes>({
      preimplementation: true,
      implementation: true,
      postimplementation: true,
      validation: true,
      prebackout: true,
      backout: true,
      postbackout: true,
    });

  const {
    preimplementation,
    implementation,
    postimplementation,
    validation,
    prebackout,
    backout,
    postbackout,
  } = validationImplementationState;

  const noValidationImplementationOptionsSelected =
    !preimplementation &&
    !implementation &&
    !postimplementation &&
    !validation &&
    !prebackout &&
    !backout &&
    !postbackout;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '9px',
        }}
      >
        <button
          style={{ marginBottom: '5px' }}
          onClick={() => {
            if (noValidationImplementationOptionsSelected) {
              //TODO: throw visible error and return
            }
            navigator.clipboard.writeText(
              new Jira_Validation_And_Implementation_Template(
                preimplementation,
                implementation,
                postimplementation,
                validation,
                prebackout,
                backout,
                postbackout,
              ).template_content,
            );
          }}
        >
          <FontAwesomeIcon icon={faCopy} /> Copy Implementation & Validation
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              new Jira_New_Story_Template().template_content,
            );
          }}
        >
          <FontAwesomeIcon icon={faCopy} /> Copy New Story
        </button>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <fieldset>
          <legend>Options for Implementation & Validation</legend>
          <Checkbox
            id="jiravalidationimpementation-preimplementation"
            name="preimplementation"
            value="preimplementation"
            label="Pre-Implementation"
            checked={preimplementation}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                preimplementation: !preimplementation,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-implementation"
            name="implementation"
            value="implementation"
            label="Implementation"
            checked={implementation}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                implementation: !implementation,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-postimplementation"
            name="postimplementation"
            value="postimplementation"
            label="Post-Implementation"
            checked={postimplementation}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                postimplementation: !postimplementation,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-validation"
            name="validation"
            value="validation"
            label="Validation"
            checked={validation}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                validation: !validation,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-prebackout"
            name="prebackout"
            value="prebackout"
            label="Pre-Backout"
            checked={prebackout}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                prebackout: !prebackout,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-backout"
            name="backout"
            value="backout"
            label="Backout"
            checked={backout}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                backout: !backout,
              }));
            }}
          />
          <Checkbox
            id="jiravalidationimpementation-postbackout"
            name="postbackout"
            value="postbackout"
            label="Post-Backout"
            checked={postbackout}
            onChange={() => {
              setValidationImplementationState((prevState) => ({
                ...prevState,
                postbackout: !postbackout,
              }));
            }}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default JiraBoilerplates;
