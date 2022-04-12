---
title: Glfw-and-Glad-Cheetsheet
category:
    - C++
    - Graphics
tags: 
    - C++
---


# GLFW AND GLAD CHEATSHEET
## Includes
<br>

```cpp
#include <iostream>
#include <glad/glad.h> 
// or "glad/glad.h" if you have it installed locally.
#include <GLFW/glfw3.h> 
// works with Visual Studio nupengl and instlled glfw on linux
```
#### For Linux users compiling with GCC, the following command line options may help you compile the project: -lglfw3 -lGL -lX11 -lpthread -lXrandr -lXi -ldl. Not correctly linking the corresponding libraries will generate many undefined reference errors.

## Initialize glfw in main.
```cpp
int main(int argc, char* argv[]){
    // Initialize GLFW
    glfwInit();
    // optional fail handler.
    if(!glfwInit()){
        std::cout << "Failed to initialize GLFW" << std::endl;
        return -1;
    }
    return 0;
}
```
## Add glfw hints
```cpp
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); // core methods
    //glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_COMPAT_PROFILE); // backward compatibility
    // glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
```

## Creating a window
```cpp
GLFWwindow* window = glfwCreateWindow(900, 700, "Program Name", NULL, NULL); 
// takes 5 imputs, width, height, name, full screen /windowed mode, 
// and window name for shared context;
    if (window == NULL){
        std::cout << "GLFW Failed to create window." << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window); // Creates a window and its 
    // associated context
```
#### At the eof when we are done with the windows we want to delete it.
```cpp
    glfwDestroyWindow();
    glfwTerminate();
    return 0;
```

## Main Loop 
```cpp
glfwMakeContextCurrent(window);

while(!glfwWindowShouldClose(window)){ 
    // while window should stay open
    glfwPollEvents(); 
    // process events that happen in window
}
```
<details>

<summary> At this stage, if you compile your program you will get a blank window. If you got stuck anywhere, click to the full code for the program.</summary>

```cpp
#include <iostream>
#include <glad/glad.h> 
#include <GLFW/glfw3.h> 

int main(int argc, char* argv[]){
    glfwInit();
    if(!glfwInit()){
        std::cout << "Failed to initialize GLFW" << std::endl;
        return -1;
    }
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    GLFWwindow* window = glfwCreateWindow(900, 700, "Program Name", NULL, NULL);
    if (window == NULL){
        std::cout << "GLFW Failed to create window." << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    while(!glfwWindowShouldClose(window)){
        glfwPollEvents();
    }

    glfwDestroyWindow();
    glfwTerminate();
    return 0;
}
```

</details>

## Loading GLAD
#### Glad is loaded after creaing the window context.
```cpp
    glfwMakeContextCurrent(window);

    gladLoadGL();

    glViewport(0, 0, 800, 800); 
    // bottom left, bottom right, top left, top right;
```

### Adding color
#### Clearing the buffer and writing a color to it.
```cpp
    glViewport(0, 0, 800, 800);

    glClearColor(0.07f, 0.13f, 0.17f, 1.0f); 
    // decimal rgb and alpha which dictates transparency. 
    // 1 = opaque, 0 = transparent;
    glClear(CL_COLOR_BUFFER_BIT);
    glfwSwapBuffers(window);
```

## GLSL shaders.
#### GLSL language looks much like C and is normally stored in a const char pointer as a shader source
```cpp
const char* vertexShaderSource = "#version 330 core\n"
"layout (location = 0) in vec3 aPos;\n"
"void main()\n"
"{\n"
"   gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
"}\n\0";

const char* fragmentShaderSource = "#version 330 core\n"
"out vec4 FragColor;\n"
"void main()\n"
"{\n"
"   FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);\n"
"}\n\0";
```
#### When working with 2d you ignore the z axis. The x and y axis origin is located in the middle of the window (0, 0) With X pointing to the right and Y pointing up. The left-most and lower most part of part of the window is at  -1 and the right most and uppper most part of the window is at +1.

```cpp
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    GLfloat verticies[] = {
        -0.5f, -0.5f, 0.0f,
         0.5f, -0.5f, 0.0f,
         0.0f,  0.5f, 0.0f
    };

    GLFWWindow* window = glfwCreateWindow(900, 700, "Program Name", NULL, NULL);
```