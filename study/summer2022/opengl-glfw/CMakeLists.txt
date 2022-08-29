cmake_minimum_required(VERSION 3.23.2)

project(myapp)

add_subdirectory(glad/)

target_link_libraries(myapp PRIVATE glad)

find_package(glfw3 3.3 REQUIRED)

target_link_libraries(myapp glfw)

find_package(FreeGLUT CONFIG REQUIRED)

link_libraries(FreeGLUT::freeglu)

add_executable(${PROJECT_NAME} main.cpp)