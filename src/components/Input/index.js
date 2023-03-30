import React, { useEffect } from 'react';
import './index.css';


const Input = () => {

    return (
        <>
        <div class="input-div">
            <fieldset class="govuk-fieldset">
                <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
                    <h1 class="govuk-fieldset__heading">
                    What is your URL?
                    </h1>
                </legend>
                <div class="govuk-form-group">
                    <label class="govuk-label" for="address-line-1">
                    URL
                    </label>
                    <input class="govuk-input" id="address-line-1" name="address-line-1" type="text" autocomplete="address-line1" />
                </div>
                </fieldset>
                <button class="govuk-button" data-module="govuk-button">
                    Scan
                </button>
        </div>

        </>
    )

}

export default Input;

