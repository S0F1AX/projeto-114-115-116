noseX = 0;
noseY = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/FsCbpMCv/360-F-530202726-Uzd-VE1t3-PJhqp3-Kop-WGs-Mob-SG2-Nhv7-Yw-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -30;
        noseY = results[0].pose.nose.y +5;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(mustache, noseX, noseY, 65, 20);
}

function takeSnapshot()
{
    save('mustacheFilter.png');
}