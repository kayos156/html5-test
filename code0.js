gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDplayerObjects1= [];
gdjs.NewSceneCode.GDplayerObjects2= [];
gdjs.NewSceneCode.GDTextTestObjects1= [];
gdjs.NewSceneCode.GDTextTestObjects2= [];
gdjs.NewSceneCode.GDwall_95testObjects1= [];
gdjs.NewSceneCode.GDwall_95testObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0xb4ad0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(5);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(7);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(6);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4ad0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDplayerObjects1.length = 0;
gdjs.NewSceneCode.GDplayerObjects2.length = 0;
gdjs.NewSceneCode.GDTextTestObjects1.length = 0;
gdjs.NewSceneCode.GDTextTestObjects2.length = 0;
gdjs.NewSceneCode.GDwall_95testObjects1.length = 0;
gdjs.NewSceneCode.GDwall_95testObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4ad0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
