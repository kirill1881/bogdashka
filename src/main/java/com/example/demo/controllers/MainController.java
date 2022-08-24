package com.example.demo.controllers;

import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
    
     @Autowired
    CountRepo countRepo;
    @GetMapping
    public String getMainPage(){
          Cont cont = new Cont();
        cont.setCount("500");
        countRepo.save(cont);
        return "index";
    }
}
