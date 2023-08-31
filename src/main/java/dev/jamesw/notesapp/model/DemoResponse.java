package dev.jamesw.notesapp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DemoResponse {
    private String headerText;
    private String bodyText;
}
