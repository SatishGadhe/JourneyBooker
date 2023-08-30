package com.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.app.Entities.User;
import com.app.Repository.UserRepository;
import com.app.Service.UserService;
import com.app.dto.AuthResponseUserDTO;

import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @Test
    void testAddUserDetails() {
        // Arrange
        AuthResponseUserDTO userDTO = new AuthResponseUserDTO();
        userDTO.setUsername("testuser");
        // Set other properties

        User user = new User();
        user.setUsername("testuser");
        // Set other properties

        when(userRepository.save(any(User.class))).thenReturn(user);

        // Act
        User addedUser = userService.addUserDetails(userDTO);

        // Assert
        //addUserDetails(addedUser);
        //assertEquals("testuser", addedUser.getUsername());
        // Assert other properties

        verify(userRepository, times(1)).save(any(User.class));
    }
}

