cmake_minimum_required(VERSION 3.23.2)

project(GL)


find_package(FreeGLUT CONFIG REQUIRED)
find_package(glew CONFIG REQUIRED)

link_libraries(FreeGLUT::freeglut GLEW::GLEW)

add_executable(${PROJECT_NAME} chapter2.c)