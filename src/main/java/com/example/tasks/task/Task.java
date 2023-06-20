package com.example.tasks.task;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fechaCreacion")
    private LocalDateTime fechaCreacion;

    @Column(name = "vigente")
    private Boolean vigente;

    // Getter y Setter para id
    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    // Getter y Setter para descripcion
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    // Getter y Setter para fechaCreacion
    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    // Getter y Setter para vigente
    public boolean isVigente() {
        return vigente;
    }

    public void setVigente(boolean vigente) {
        this.vigente = vigente;
    }
}
