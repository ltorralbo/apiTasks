package com.example.tasks.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskRepository.findById(id).get();
    }

    @PostMapping
    public Task createTaskById(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @PutMapping
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        Task existingTask = taskRepository.findById(id).get();
        existingTask.setDescripcion(task.getDescripcion());
        existingTask.setFechaCreacion(task.getFechaCreacion());
        existingTask.setVigente(task.isVigente());
        return taskRepository.save(existingTask);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        try {
            taskRepository.findById(id).get();
            taskRepository.deleteById(id);
            return "Task deleted";
        } catch (Exception e) {
            // TODO: handle exception
            return "Task not found";
        }
    }
}
