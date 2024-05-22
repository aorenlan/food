package com.yourcompany.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yourcompany.model.Order;

public interface OrderRepository extends JpaRepository<Order, String> {
}
