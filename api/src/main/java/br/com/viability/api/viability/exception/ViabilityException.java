package br.com.viability.api.viability.exception;

import org.springframework.http.HttpStatus;

public class ViabilityException extends RuntimeException {
    private final HttpStatus httpStatus;

    public ViabilityException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
