[gd_scene load_steps=51 format=3 uid="uid://e2c643nim4nu"]

[ext_resource type="PackedScene" path="res://objects/Gameplay/Common/HQ_PlayerSpawner.tscn" id="1_ob3qx"]
[ext_resource type="PackedScene" uid="uid://jv31so3xcr7p" path="res://addons/bf_portal/portal_tools/types/PolygonVolume/PolygonVolume.tscn" id="2_cjtf1"]
[ext_resource type="PackedScene" path="res://objects/entities/SpawnPoint.tscn" id="5_n1tbt"]
[ext_resource type="PackedScene" path="res://objects/Global/Architecture/FiringRange_Floor_01.tscn" id="8_gh74e"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/AI/AI_Spawner.tscn" id="9_vkysb"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Common/DeployCam.tscn" id="10_6ud6v"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/CommandPost_01_A.tscn" id="11_hwo2s"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Industrial/Props/ContainerStandard_01_1280.tscn" id="12_0gsb4"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/DecalStrip_01_512.tscn" id="13_rs5wd"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_ChairFolding_01_A.tscn" id="14_ho3un"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_ChairFolding_01_C.tscn" id="15_tvuq7"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_ChairFolding_01_B.tscn" id="16_2wf2c"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Common/CombatArea.tscn" id="16_dis3u"]
[ext_resource type="PackedScene" path="res://static/MP_Granite_ClubHouse_Portal_Terrain.tscn" id="17_isb64"]
[ext_resource type="PackedScene" path="res://objects/Global/Architecture/FiringRange_DoorwayWall_01.tscn" id="17_rlytm"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Quadbike.tscn" id="18_2wu7l"]
[ext_resource type="PackedScene" path="res://static/MP_Granite_ClubHouse_Portal_Assets.tscn" id="18_845k1"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Stationary_BGM71TOW.tscn" id="19_y2ebc"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Stationary_GDF009.tscn" id="20_263ge"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_UH60.tscn" id="21_lfcqv"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Vector.tscn" id="22_87gwy"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_M2MG.tscn" id="23_0jlj3"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_F16.tscn" id="24_xjaby"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_F22.tscn" id="25_m3hfq"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Flyer60.tscn" id="25_xjaby"]
[ext_resource type="Script" uid="uid://0aaayihxbpmv" path="res://scripts/Gameplay/Vehicles/VEH_Quadbike.gd" id="26_ra1l1"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Eurocopter.tscn" id="27_mkh4w"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_AH64E.tscn" id="28_emiav"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Abrams.tscn" id="29_w77ym"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_CV90.tscn" id="30_hegyl"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Cheetah.tscn" id="31_i58rd"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Gepard.tscn" id="32_gbh7o"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Vehicles/VEH_Leopard.tscn" id="33_qcxuw"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/ChairPlastic_01_B.tscn" id="34_cfbtc"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/BarrierStoneBlock_01_B.tscn" id="34_gh74e"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/BallGo01.tscn" id="35_0jlj3"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/BarrierStoneBlock_01_C.tscn" id="36_xjaby"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/BarrelOil_01_A.tscn" id="37_m3hfq"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/CautionSticker_01.tscn" id="38_ra1l1"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/BarriersPedestrian_01_B.tscn" id="39_mkh4w"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/AmmoChest_Small_Ext_01.tscn" id="40_emiav"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/CCTVSign_01.tscn" id="41_w77ym"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_MannequinRotation_02.tscn" id="42_hegyl"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_NumberTwo_01.tscn" id="43_i58rd"]
[ext_resource type="PackedScene" path="res://objects/Global/Props/FiringRange_NumberThree_01.tscn" id="44_gbh7o"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Military/Props/WeaponCase_AR_01.tscn" id="45_qcxuw"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Military/Props/WeaponCase_Pistol_01.tscn" id="46_cfbtc"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Military/Props/WeaponCase_Sniper_01.tscn" id="47_xhvqr"]
[ext_resource type="PackedScene" path="res://objects/Global/Generic/Common/Props/WeaponsCache_01_Crate_B.tscn" id="48_mknhp"]
[ext_resource type="PackedScene" path="res://objects/Gameplay/Common/LootSpawner.tscn" id="49_bpcmc"]

[node name="MP_Granite_ClubHouse_Portal" type="Node3D"]

[node name="TEAM_1_HQ" parent="." node_paths=PackedStringArray("HQArea", "InfantrySpawns") instance=ExtResource("1_ob3qx")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -358.536, 220, -695.12)
AltTeam = 0
ObjId = 1
HQArea = NodePath("HQ_Team1")
InfantrySpawns = [NodePath("SpawnPoint_1_1"), NodePath("SpawnPoint_1_2"), NodePath("SpawnPoint_1_3"), NodePath("SpawnPoint_1_4")]

[node name="HQ_Team1" parent="TEAM_1_HQ" instance=ExtResource("2_cjtf1")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0)
points = PackedVector2Array(5, 5, 5, -5, -5, -5, -5, 5)

[node name="SpawnPoint_1_1" parent="TEAM_1_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(0.999884, 0, -0.0152535, 0, 1, 0, 0.0152535, 0, 0.999884, 0, 0, -3)

[node name="SpawnPoint_1_2" parent="TEAM_1_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(-0.9995, 0, -0.0316198, 0, 1, 0, 0.0316198, 0, -0.9995, 3, 0, 0)

[node name="SpawnPoint_1_3" parent="TEAM_1_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(-0.0428871, 0, 0.99908, 0, 1, 0, -0.99908, 0, -0.0428871, -3, 0, 0)

[node name="SpawnPoint_1_4" parent="TEAM_1_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(0.0841819, 0, -0.99645, 0, 1, 0, 0.99645, 0, 0.0841819, 0, 0, 3)

[node name="TEAM_2_HQ" parent="." node_paths=PackedStringArray("HQArea", "InfantrySpawns") instance=ExtResource("1_ob3qx")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -367.316, 220, -712.848)
Team = 2
AltTeam = 0
ObjId = 2
HQArea = NodePath("HQ_Team2")
InfantrySpawns = [NodePath("SpawnPoint_2_1"), NodePath("SpawnPoint_2_2"), NodePath("SpawnPoint_2_3"), NodePath("SpawnPoint_2_4")]

[node name="HQ_Team2" parent="TEAM_2_HQ" instance=ExtResource("2_cjtf1")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -0.161987, 4.83388, -0.355591)
points = PackedVector2Array(1.047, 27.9249, 2.57019, -20.7856, -10.4856, -19.3825, -10.33, 27.2722)

[node name="SpawnPoint_2_1" parent="TEAM_2_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(0.87795, 0, -0.478754, 0, 1, 0, 0.478754, 0, 0.87795, 0, 0, -3)

[node name="SpawnPoint_2_2" parent="TEAM_2_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(-0.997604, 0, 0.0691822, 0, 1, 0, -0.0691822, 0, -0.997604, 3, 0, 0)

[node name="SpawnPoint_2_3" parent="TEAM_2_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(0.162758, 0, 0.986666, 0, 1, 0, -0.986666, 0, 0.162758, -3, 0, 0)

[node name="SpawnPoint_2_4" parent="TEAM_2_HQ" instance=ExtResource("5_n1tbt")]
transform = Transform3D(-0.165771, 0, -0.986164, 0, 1, 0, 0.986164, 0, -0.165771, 0, 0, 3)

[node name="CombatArea" parent="." node_paths=PackedStringArray("CombatVolume") instance=ExtResource("16_dis3u")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -0.639282, -6.10352e-05, 1.349)
CombatVolume = NodePath("CombatVolume")

[node name="CombatVolume" parent="CombatArea" instance=ExtResource("2_cjtf1")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -1, 182.889, 0)
points = PackedVector2Array(-1000, -1000, -1000, 1000, 1000, 1000, 1000, -1000)
height = 10.0

[node name="Camera3D" type="Camera3D" parent="."]
transform = Transform3D(1, 0, 0, 0, 0.101056, 0.994881, 0, -0.994881, 0.101056, -490.88, 508.426, -598.183)

[node name="DeployCam" parent="Camera3D" instance=ExtResource("10_6ud6v")]

[node name="Static" type="Node3D" parent="."]

[node name="MP_Granite_ClubHouse_Portal_Terrain" parent="Static" instance=ExtResource("17_isb64")]
metadata/_edit_lock_ = true

[node name="MP_Granite_ClubHouse_Portal_Assets" parent="Static" instance=ExtResource("18_845k1")]
metadata/_edit_lock_ = true

[node name="AI" type="Node3D" parent="."]

[node name="AI_Spawner" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -732.905)
ObjId = 1

[node name="AI_Spawner2" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -732.215)
ObjId = 2

[node name="AI_Spawner3" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -730.836)
ObjId = 3

[node name="AI_Spawner4" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -726.008)
ObjId = 4

[node name="AI_Spawner5" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -722.56)
ObjId = 5

[node name="AI_Spawner6" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -723.25)
ObjId = 6

[node name="AI_Spawner7" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -719.802)
ObjId = 7

[node name="AI_Spawner8" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -723.939)
ObjId = 8

[node name="AI_Spawner9" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -727.388)
ObjId = 9

[node name="AI_Spawner10" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -725.319)
ObjId = 10

[node name="AI_Spawner11" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -721.871)
ObjId = 11

[node name="AI_Spawner12" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -719.112)
ObjId = 12

[node name="AI_Spawner13" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -712.215)
ObjId = 13

[node name="AI_Spawner14" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -710.836)
ObjId = 14

[node name="AI_Spawner15" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -728.077)
ObjId = 15

[node name="AI_Spawner16" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -729.457)
ObjId = 16

[node name="AI_Spawner17" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -730.146)
ObjId = 17

[node name="AI_Spawner18" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -731.526)
ObjId = 18

[node name="AI_Spawner19" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -728.767)
ObjId = 18

[node name="AI_Spawner20" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -726.698)
ObjId = 20

[node name="AI_Spawner21" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -724.629)
ObjId = 21

[node name="AI_Spawner22" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -720.491)
ObjId = 22

[node name="AI_Spawner23" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -717.043)
ObjId = 23

[node name="AI_Spawner24" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -715.664)
ObjId = 24

[node name="AI_Spawner25" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -714.974)
ObjId = 25

[node name="AI_Spawner26" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -717.733)
ObjId = 26

[node name="AI_Spawner27" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -718.422)
ObjId = 27

[node name="AI_Spawner28" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -711.526)
ObjId = 28

[node name="AI_Spawner29" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -716.353)
ObjId = 29

[node name="AI_Spawner30" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -710.146)
ObjId = 30

[node name="AI_Spawner31" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -712.905)
ObjId = 31

[node name="AI_Spawner32" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -721.181)
ObjId = 32

[node name="AI_Spawner33" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -714.284)
ObjId = 33

[node name="AI_Spawner34" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -713.595)
ObjId = 34

[node name="AI_Spawner35" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.419, 220, -709.457)
ObjId = 35

[node name="AI_Spawner36" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -370.781, 220.024, -687.638)
ObjId = 36

[node name="AI_Spawner37" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.899, 220.024, -687.43)
ObjId = 37

[node name="AI_Spawner38" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.877, 220.024, -686.799)
ObjId = 38

[node name="AI_Spawner39" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -370.916, 220.024, -686.92)
ObjId = 39

[node name="AI_Spawner40" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -370.913, 220.024, -686.138)
ObjId = 40

[node name="AI_Spawner41" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.883, 220.024, -686.177)
ObjId = 41

[node name="AI_Spawner42" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -371.924, 220.024, -686.171)
ObjId = 42

[node name="AI_Spawner43" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -371.886, 220.024, -686.947)
ObjId = 43

[node name="AI_Spawner44" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.892, 220.024, -688.165)
ObjId = 44

[node name="AI_Spawner45" parent="AI" instance=ExtResource("9_vkysb")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -370.808, 220.024, -688.42)
ObjId = 45

[node name="VEH" type="Node3D" parent="."]

[node name="VEH_Quadbike" parent="VEH" instance=ExtResource("18_2wu7l")]
transform = Transform3D(-0.999954, -0.00434586, 0.00860425, -0.0043457, 0.999991, 3.73932e-05, -0.00860433, 0, -0.999963, -357.204, 220, -704.625)

[node name="VEH_Stationary_BGM71TOW" parent="VEH" instance=ExtResource("19_y2ebc")]
transform = Transform3D(-0.999137, 0, -0.0415269, 0, 1, 0, 0.0415269, 0, -0.999137, -378.679, 220.01, -704.076)

[node name="VEH_Stationary_GDF009" parent="VEH" instance=ExtResource("20_263ge")]
transform = Transform3D(-0.921016, 0, -0.389526, 0, 1, 0, 0.389526, 0, -0.921016, -349.885, 220, -706.703)

[node name="VEH_UH60" parent="VEH" instance=ExtResource("21_lfcqv")]
transform = Transform3D(0.130595, 0, 0.991436, 0, 1, 0, -0.991436, 0, 0.130595, -373.738, 220.004, -754.914)

[node name="VEH_Vector" parent="VEH" instance=ExtResource("22_87gwy")]
transform = Transform3D(0.00759208, 0, 0.999971, 0, 1, 0, -0.999971, 0, 0.00759208, -356.323, 220.019, -757.76)

[node name="VEH_M2MG" parent="VEH" instance=ExtResource("23_0jlj3")]
transform = Transform3D(-0.997309, 0, 0.0733079, 0, 1, 0, -0.0733079, 0, -0.997309, -376.506, 220.259, -703.636)

[node name="VEH_F16" parent="VEH" instance=ExtResource("24_xjaby")]
transform = Transform3D(0.623061, 0, -0.782173, 0, 1, 0, 0.782173, 0, 0.623061, -338.138, 220, -742.909)

[node name="VEH_F22" parent="VEH" instance=ExtResource("25_m3hfq")]
transform = Transform3D(0.694922, 0, -0.719085, 0, 1, 0, 0.719085, 0, 0.694922, -346.352, 220, -751.982)

[node name="VEH_F23" parent="VEH" instance=ExtResource("25_m3hfq")]
transform = Transform3D(-0.0871383, 0, -0.996196, 0, 1, 0, 0.996196, 0, -0.0871383, -336.5, 220, -783.506)

[node name="VEH_F17" parent="VEH" instance=ExtResource("24_xjaby")]
transform = Transform3D(-0.0783547, 0, -0.996926, 0, 1, 0, 0.996926, 0, -0.0783547, -340.315, 220, -797.993)

[node name="VEH_Quadbike2" type="Node3D" parent="VEH" instance=ExtResource("18_2wu7l")]
transform = Transform3D(-0.999954, -0.00434586, 0.00860425, -0.0043457, 0.999991, 3.73932e-05, -0.00860433, 0, -0.999963, -358.6, 219.994, -704.637)
script = ExtResource("26_ra1l1")

[node name="VEH_Quadbike4" type="Node3D" parent="VEH" instance=ExtResource("18_2wu7l")]
transform = Transform3D(-0.999954, -0.00434586, 0.00860425, -0.0043457, 0.999991, 3.73932e-05, -0.00860433, 0, -0.999963, -359.996, 219.988, -704.649)
script = ExtResource("26_ra1l1")

[node name="VEH_Quadbike6" type="Node3D" parent="VEH" instance=ExtResource("18_2wu7l")]
transform = Transform3D(-0.999954, -0.00434586, 0.00860425, -0.0043457, 0.999991, 3.73932e-05, -0.00860433, 0, -0.999963, -361.393, 219.982, -704.661)
script = ExtResource("26_ra1l1")

[node name="VEH_Quadbike8" type="Node3D" parent="VEH" instance=ExtResource("18_2wu7l")]
transform = Transform3D(-0.999954, -0.00434586, 0.00860425, -0.0043457, 0.999991, 3.73932e-05, -0.00860433, 0, -0.999963, -362.789, 219.976, -704.673)
script = ExtResource("26_ra1l1")

[node name="VEH_Eurocopter" parent="VEH" instance=ExtResource("27_mkh4w")]
transform = Transform3D(0.0884075, 0, 0.996084, 0, 1, 0, -0.996084, 0, 0.0884075, -401.457, 220, -731.193)

[node name="VEH_AH64E" parent="VEH" instance=ExtResource("28_emiav")]
transform = Transform3D(-0.48368, 0, 0.875245, 0, 1, 0, -0.875245, 0, -0.48368, -399.581, 220.007, -708.866)

[node name="VEH_Abrams" parent="VEH" instance=ExtResource("29_w77ym")]
transform = Transform3D(-0.745836, 0, 0.666129, 0, 1, 0, -0.666129, 0, -0.745836, -402.058, 220, -694.407)

[node name="VEH_CV90" parent="VEH" instance=ExtResource("30_hegyl")]
transform = Transform3D(-0.984886, 0, 0.173201, 0, 1, 0, -0.173201, 0, -0.984886, -392.591, 220.016, -689.967)

[node name="VEH_Cheetah" parent="VEH" instance=ExtResource("31_i58rd")]
transform = Transform3D(-0.993832, 0, 0.110897, 0, 1, 0, -0.110897, 0, -0.993832, -387.857, 220.004, -687.748)

[node name="VEH_Gepard" parent="VEH" instance=ExtResource("32_gbh7o")]
transform = Transform3D(-0.703122, 0, 0.71107, 0, 1, 0, -0.71107, 0, -0.703122, -406.792, 220.008, -696.627)

[node name="VEH_Leopard" parent="VEH" instance=ExtResource("33_qcxuw")]
transform = Transform3D(-0.812552, 0, 0.582889, 0, 1, 0, -0.582889, 0, -0.812552, -397.325, 220.012, -692.187)

[node name="VEH_Flyer60" parent="VEH" instance=ExtResource("25_xjaby")]
transform = Transform3D(0.21407, 0, 0.976818, 0, 1, 0, -0.976818, 0, 0.21407, -363.312, 220, -757.303)

[node name="ENV" type="Node3D" parent="."]

[node name="FiringRange_Floor_01" parent="ENV" instance=ExtResource("8_gh74e")]
transform = Transform3D(20, 0, 0, 0, 1, 0, 0, 0, 10, -653.136, 220, -822.521)

[node name="CommandPost_01_A" parent="ENV" instance=ExtResource("11_hwo2s")]
transform = Transform3D(-0.25806, 0, -0.966129, 0, 1, 0, 0.966129, 0, -0.25806, -344.829, 220, -692.706)

[node name="ContainerStandard_01_1280" parent="ENV" instance=ExtResource("12_0gsb4")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -371.065, 218.348, -690.091)

[node name="DecalStrip_01_512" parent="ENV" instance=ExtResource("13_rs5wd")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -374.671, 220.922, -709.014)

[node name="FiringRange_ChairFolding_01_A" parent="ENV" instance=ExtResource("14_ho3un")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -368.97, 220.003, -708.047)

[node name="FiringRange_ChairFolding_01_C" parent="ENV" instance=ExtResource("15_tvuq7")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -368.08, 220.003, -708.164)

[node name="FiringRange_ChairFolding_01_B" parent="ENV" instance=ExtResource("16_2wf2c")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -369.962, 220.49, -707.552)

[node name="FiringRange_DoorwayWall_01" parent="ENV" instance=ExtResource("17_rlytm")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -373.672, 220, -709.046)

[node name="FiringRange_Floor_03" parent="ENV" instance=ExtResource("8_gh74e")]
transform = Transform3D(-0.64675, -0.0673358, 0.759724, 0, 0.996095, 0.0882858, -0.762702, 0.0570989, -0.644224, -330.709, 220, -744.538)

[node name="ChairPlastic_01_B" parent="ENV" instance=ExtResource("34_cfbtc")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -368.966, 220.006, -690.19)

[node name="BarrierStoneBlock_01_B" parent="ENV" instance=ExtResource("34_gh74e")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -371.717, 219.653, -689.546)

[node name="BarrierStoneBlock_01_B2" parent="ENV" instance=ExtResource("34_gh74e")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -372.953, 219.65, -689.55)

[node name="FiringRange_Floor_02" parent="ENV" instance=ExtResource("8_gh74e")]
transform = Transform3D(-9.84088, 7.5471, 0, -11.3206, -6.56059, 0, 0, 0, 30, -719.284, 491.385, -1025.05)

[node name="BallGo01" parent="ENV" instance=ExtResource("35_0jlj3")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -350.419, 220, -686.114)

[node name="BarrierStoneBlock_01_C" parent="ENV" instance=ExtResource("36_xjaby")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -347.27, 220.002, -701.021)

[node name="BarrelOil_01_A" parent="ENV" instance=ExtResource("37_m3hfq")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -350.741, 220.463, -696.235)

[node name="CautionSticker_01" parent="ENV" instance=ExtResource("38_ra1l1")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -349.044, 222.213, -694.962)

[node name="BarriersPedestrian_01_B" parent="ENV" instance=ExtResource("39_mkh4w")]
transform = Transform3D(0.0432357, 0, 0.999065, 0, 1, 0, -0.999065, 0, 0.0432357, -374.767, 220.013, -707.957)

[node name="AmmoChest_Small_Ext_01" parent="ENV" instance=ExtResource("40_emiav")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -370.851, 220, -708.021)

[node name="CCTVSign_01" parent="ENV" instance=ExtResource("41_w77ym")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -369.915, 222.077, -708.764)

[node name="CautionSticker_02" parent="ENV" instance=ExtResource("38_ra1l1")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -348.037, 220.785, -701.096)

[node name="FiringRange_MannequinRotation_02" parent="ENV" instance=ExtResource("42_hegyl")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -369.477, 223.637, -708.547)

[node name="FiringRange_NumberTwo_01" parent="ENV" instance=ExtResource("43_i58rd")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -367.666, 220, -709.076)

[node name="FiringRange_NumberThree_01" parent="ENV" instance=ExtResource("44_gbh7o")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -366.847, 220, -709.016)

[node name="FiringRange_NumberThree_02" parent="ENV" instance=ExtResource("44_gbh7o")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -366.092, 220, -709.01)

[node name="WeaponCase_AR_01" parent="ENV" instance=ExtResource("45_qcxuw")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -353.638, 220.016, -688.226)

[node name="WeaponCase_Pistol_01" parent="ENV" instance=ExtResource("46_cfbtc")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -353.645, 220.005, -686.997)

[node name="WeaponCase_Sniper_01" parent="ENV" instance=ExtResource("47_xhvqr")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -353.644, 220.011, -685.653)

[node name="WeaponsCache_01_Crate_B" parent="ENV" instance=ExtResource("48_mknhp")]
transform = Transform3D(-0.645391, 0, -0.763852, 0, 1, 0, 0.763852, 0, -0.645391, -351.504, 220.014, -683.04)

[node name="LootSpawner" parent="ENV" instance=ExtResource("49_bpcmc")]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -353.877, 220.329, -683.765)
