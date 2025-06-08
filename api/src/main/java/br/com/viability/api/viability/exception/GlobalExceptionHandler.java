package br.com.viability.api.viability.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ViabilityException.class)
    public ResponseEntity<Object> handleViabilityException(ViabilityException ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now().toString());
        body.put("message", ex.getMessage());
        body.put("status", ex.getHttpStatus().value());

        return new ResponseEntity<>(body, ex.getHttpStatus());
    }
}
