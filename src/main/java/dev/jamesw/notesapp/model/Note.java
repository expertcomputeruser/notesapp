package dev.jamesw.notesapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {
    private String name;
    private String text;
    private Date createdOn;
    private boolean reminder;
}
