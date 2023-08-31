package dev.jamesw.notesapp.controller;

import dev.jamesw.notesapp.model.DemoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

    public HomeController() {}

    @GetMapping("/")
    public ResponseEntity<DemoResponse> getIndex() {
        DemoResponse demoResponse = new DemoResponse("Header", "Body text.");
        return ResponseEntity.ok(demoResponse);
    }
}
