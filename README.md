# GP--CW-BR

Games Programming 3

NEW

"This Coursework contains the following extension material

IMGUI
A custom imgui window, as seen here allowing some values to be altered
I wanted this for some basic scene editing stuff, very experimental
Press TAB to open / close this window

ASSIMP
  Assimp Model Loading Integration
	Updated SDL + GLEW versions to support x64, allowing assimp to function
	stb_image has also been updated to only require its header file
	Mesh, Texture class had to be updated to remove any relation to the old obj loader
	Essentially a rewrite of those classes to reimplement prior functions

EnTT ECS
	Entity Component System using the EnTT library");
	ImGui::BulletText("A basic implementation of an ECS, with a scene class and entity class");
	ImGui::BulletText("It currently experiencing bugs so this may be mixed with the old model loading methods to present the work");


GENERAL
	Better responsiveness on movement keys while held down,using SDL_GetKeyboardState
	Attempts to consider memory management, smart pointers etc used when possible / when rewriting areas
	Move / copy constructors, initilazation lists, operators


OLD::
Graphics Programming GCU CW 2022-2023
This is using my Games Programming 2 CW as a base to start from


2 Mandelbrots shaders are included as one 'failed' / is half complete, however I think the result ended up is like one of those Inkblot tests so it is kept in for an extra visual.


Video: https://www.youtube.com/watch?v=wX1lNlIQlaU

OLD: (Some May not be true anymore)

Vsync is off by default to showcase how deltatime keeps the program consistant 

Takes around 13 seconds to load due to using the large backpack obj file to attempt testing on normal and specular maps.

The mouse rotates the camera 

WASD for movement

ESC to quit the program

