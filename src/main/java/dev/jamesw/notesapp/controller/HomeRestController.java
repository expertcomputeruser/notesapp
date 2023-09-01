package dev.jamesw.notesapp.controller;

import dev.jamesw.notesapp.model.DemoResponse;
import dev.jamesw.notesapp.model.Note;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;

@RestController
@RequestMapping("/api")
public class HomeRestController {

    public HomeRestController() {}

    @GetMapping("/")
    public ResponseEntity<DemoResponse> getIndex() {
        DemoResponse demoResponse = new DemoResponse("Header", "Body text.");
        return ResponseEntity.ok(demoResponse);
    }

    @GetMapping("/testnote")
    public ResponseEntity<Note> getTestNote() {
        Calendar calendar = Calendar.getInstance();

        Note note = new Note("test", "body", calendar.getTime(), false);
        return ResponseEntity.ok(note);
    }
}
