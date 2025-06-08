package br.com.viability.api.viability.exception;

import org.springframework.http.HttpStatus;

public class InvalidFieldValueException extends ViabilityException {
    public InvalidFieldValueException(String field, String reason) {
        super("Invalid field: " + field + ". " + reason, HttpStatus.BAD_REQUEST);
    }
}
