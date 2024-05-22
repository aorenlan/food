package com.yourcompany.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Order {
    @Id
    private String id;
    private String productionDate;
    private String ingredients;
    private String videoUrl;
}
