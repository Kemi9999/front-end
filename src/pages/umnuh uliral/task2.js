import { useRouter } from "next/router";

export default function WeatherDashboard() {
    const router = useRouter();
    return (
          <div class="h-[100vh] w-[100%] bg-slate-700 flex justify-center items-center">
            
              <div class="h-[85vh] w-[70%] bg-slate-800 rounded rounded-[2vh] flex ">
                  <div class="h-[100%] w-[10%] rounded rounded-[2vh] flex justify-center items-center">
               
                      <div class="h-[97%] w-[85%] bg-slate-800 rounded rounded-[2vh]">
                          <div class="h-[13%] w-[100%] rounded rounded-[2vh] flex justify-center items-center">
                          <div class="h-[70%] w-[70%] bg-slate-900 rounded rounded-2vh flex justify-center items-center text-3xl text-[#8193a1]">
                                  <i class="fa-solid fa-wind"></i>
                          </div>
                          </div>
                          <div class="mt-10 h-[10%] w-[100%]  rounded rounded-2vh">
                              <div
                                  class="h-[30%] w-[100%] rounded rounded-2vh justify-center items-center text-3xl flex item-end justify-center text-white ">
                                  <i class="fa-solid fa-cloud"></i>
      
                              </div>
                              <div class=" flex justify-center items-start  text-white">
                                  <p>Weather</p>
                              </div>
                          </div>
                          <div class=" h-[10%] w-[100%] rounded rounded-[2vh]">
                              <div
                                  class="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e] ">
                                  <i class="fa-solid fa-bars"></i>
      
                              </div>
                              <div class=" flex justify-center items-start  text-white">
                                  <p>Cities</p>
                              </div>
                          </div>
                          <div class=" h-[10%] w-[100%]  rounded rounded-[2vh]">
                              <div
                                  class="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e] ">
                                  <i class="fa-solid fa-map"></i>
      
                              </div>
                              <div class=" flex justify-center items-start  text-white">
                                  <p>Map</p>
                              </div>
                          </div>
                          <div class=" h-[10%] w-[100%]  rounded rounded-[2vh]">
                              <div
                                  class="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e] ">
                                  <i class="fa-solid fa-sliders"></i>
      
                              </div>
                              <div class=" flex justify-center items-start  text-white">
                                  <p>Settings</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="h-[100%] w-[60%] rounded rounded-[2vh] flex flex-col">
                      <div class="h-[10%] w-[100%] flex justify-center items-center">
                          <input type="text" id="first_name" class="bg-[#484d57]
                              text-[#484d57] text-sm rounded-lg w-[95%] p-2.5" placeholder="Search for cities"
                              required />
                      </div>
                      <div class="h-[25vh] w-[100%] flex">
                          <div class="h-[100%] w-[50%] ">
                              <div class="h-[50%] w-[100%] ">
                                  <h1 class="text-bold text-white text-3xl pl-4 pt-5">Madrid</h1>
                                  <h3 class="text-bold text-slate-200 pl-6 ">Chance of rain 0%</h3>
                              </div>
                              <div class="h-[50%] w-[100%]">
                                  <h1 class="text-[6vh] text-bold text-white pl-6">31º</h1>
                              </div>
                          </div>
                          <div class="h-[100%] w-[50%] text-[21vh] text-yellow-300 flex justify-center item-center">
                              <i class="fa-solid fa-sun"></i>
                          </div>
                      </div>
                      <div class="h-[24vh] w-[100%] rounded rounded-[2vh] flex justify-center item-center">
                          <div class="h-[90%] w-[95%] bg-slate-800 rounded rounded-[2vh] flex item-center flex-col">
                              <div class="h-[15%] w-[100%] flex items-center rounded rounded-">
                                  <h1 class="ml-4 mt-1 text-[#adb5bc] text-bold text-md">Today's Forecast</h1>
                              </div>
                              <div class="h-[85%] w-[100%] rounded rounded-[2vh] flex justify-around">
                                  <div class="h-[100%] w-[16.6%]  rounded rounded-[2vh]">
                                      <div
                                          class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                          6:00 AM
                                      </div>
                                      <div class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl">
                                          <i class="fa-solid fa-cloud"></i>
                                      </div>
                                      <div
                                          class=" h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center item-center">
                                          <h1>25º</h1>
                                      </div>
                                  </div>
                                  <div class="h-[100%] w-[15%] rounded rounded-[2vh]">
                                      <div
                                          class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                      </div>
                                      <div class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl">
                                          <i class="fa-solid fa-cloud-sun"></i>
                                      </div>
                                      <div
                                          class=" h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center item-center">
                                          <h1>28º</h1>
                                      </div>
                                  </div>
                                  <div class="h-[100%] w-[15%] rounded rounded-[2vh]">
                                      <div
                                          class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                          12:00 AM
                                      </div>
                                      <div class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl pl-7">
                                          <i class="fa-solid fa-cloud-moon-rain"></i>
                                      </div>
                                      <div
                                          class=" h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center item-center">
                                          <h1>33º</h1>
                                      </div>
                                  </div>
                                  <div class="h-[100%] w-[15%]  rounded rounded-[2vh]">
                                      <div
                                          class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                          3:00 PM
                                      </div>
                                      
                                      <div class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl pl-3">
                                          <i class="fa-solid fa-cloud-bolt"></i>
                                      </div>
                                      <div
                                          class=" h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center item-center">
                                          <h1>34º</h1>
                                      </div>
                                  </div>
                                  <div class="h-[100%] w-[15%]  rounded rounded-[2vh]">
                                      <div
                                          class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                          6:00 PM
                                      </div><div
                                      class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl pl-3 ">
                                      <i class="fa-solid fa-cloud-meatball"></i>
                                  </div>
                                  <div
                                      class=" h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center item-center">
                                      <h1>32º</h1>
                                  </div>
                              </div>
                              <div class="h-[100%] w-[15%]  rounded rounded-[2vh]">
                                  <div
                                      class="h-[20%] w-[100%] flex justify-center item-center text-slate-100 text-bold text-xl">
                                      9:00 PM
                                  </div>
                                  <div class="h-[30%] w-[100%]  flex justify-center item-center text-white text-6xl pl-3">
                                      <i class="fa-solid fa-cloud-moon"></i>
                                  </div>
                                  <div
                                      class=" h-[20%] w-[100%] pl-3 text-[5vh] text-bold text-white flex justify-center item-center">
                                      <h1>30º</h1>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>
      <button
        className="border rounded-lg bg-gray-400 p-4 font-bold mb-2 hover:bg-blue-200"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
    </div>
                  <div class="h-[30vh] w-[100%] rounded rounded-[2vh] flex flex-col justify-center items-center ">
                      <button
                          class="h-[3vh] w-[10vh] bg-blue-500 rounded rounded-xl absolute bottom-[32vh] right-[69vh] text-white text-lg">See
                          More</button>
                      <div class="h-[95%] w-[95%] bg-slate-700 rounded rounded-[2vh] ">
                          <div class="h-[15%] w-[100%] rounded rounded-[2vh]">
                              <h1 class="ml-4 pt-1 text-[#adb5bc] text-bold text-md">AIR CONDITIONS</h1>
                          </div>
                          <div class="h-[85%] w-[100%] rounded rounded-[2vh] flex">
                              <div class="h-[100%] w-[50%] rounded rounded-[2vh] ">
                                  <div class="h-[50%] w-[100%] rounded rounded-[2vh] flex">
                                      <div class="h-[100%] w-[20%]  flex justify-center items-center text-white text-4xl">
                                          <i class="fa-solid fa-temperature-three-quarters"></i>
                                      </div>
                                      <div class="h-[100%] w-[30%] pl-2 pt-2 text-bold text-white text-lg">
                                          <h1>Real Feel</h1>
                                          <div
                                              class=" h-[20%] w-[100%] pr-10 pt-2 text-[3vh] text-bold text-white flex justify-center item-center">
                                              <h1>25º</h1>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="h-[50%] w-[100%] rounded rounded-[2vh] flex">
                                      <div class="h-[100%] w-[20%]  flex justify-center items-center text-white text-4xl">
                                          <i class="fa-solid fa-droplet"></i>
                                      </div>
                                      <div class="h-[100%] w-[30%] pl-2 pt-2 text-bold text-white text-lg">
                                          <h1>Chance of rain</h1>
                                          <div
                                              class=" h-[20%] w-[100%] pr-10 pt-2 text-[3vh] text-bold text-white flex justify-center item-center">
                                              <h1>0%</h1>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="h-[100%] w-[50%] rounded rounded-[2vh] ">
                                  <div class="h-[50%] w-[100%] rounded rounded-[2vh] flex">
                                      <div class="h-[100%] w-[20%]  flex justify-center items-center text-white text-4xl">
                                          <i class="fa-solid fa-wind"></i>
                                      </div>
                                      <div class="h-[100%] w-[30%] pl-2 pt-2 text-bold text-white text-lg">
                                          <h1>Wind</h1>
                                          <div
                                              class=" h-[20%] w-[100%] pr-10 pt-2 text-[3vh] text-bold text-white flex justify-center item-center">
                                              <h1>0.2 km/h</h1>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="h-[50%] w-[100%] rounded rounded-[2vh] flex">
                                      <div class="h-[100%] w-[20%]  flex justify-center items-center text-white text-4xl">
                                          <i class="fa-solid fa-sun"></i>
                                      </div>
                                      <div class="h-[100%] w-[30%] pl-2 pt-2 text-bold text-white text-lg">
                                          <h1>UV Index</h1>
                                          <div
                                              class=" h-[20%] w-[100%] pr-10 pt-2 text-[3vh] text-bold text-white flex justify-center item-center">
                                              <h1>3</h1>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class=" h-[100%] w-[30%]  rounded rounded-[2vh] flex justify-center items-center">
                  <div class="h-[98%] w-[90%] bg-slate-700 rounded rounded-[2vh]">
                  <div class="h-[5%] w-[100%] rounded rounded-lg text-slate-200 text-lg">
                    <h1 class="p-3">7-DAY FORECAST</h1>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Today</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[7vh] text-yellow-400">
                            <i class="fa-solid fa-sun"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Sunny</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">36/22</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Tue</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[7vh] text-yellow-400">
                            <i class="fa-solid fa-sun"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Sunny</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Wed</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[7vh] text-yellow-400">
                            <i class="fa-solid fa-sun"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Sunny</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Thu</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[5vh] text-white">
                            <i class="fa-solid fa-cloud pt-6"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Cloudy</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Fri</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[5vh] text-white">
                            <i class="fa-solid fa-cloud pt-6"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Cloudy</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Sat</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[7vh] text-white">
                            <i class="fa-solid fa-cloud-showers-heavy"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Rainy</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
                <div class="h-[13%] w-[100%]  flex">
                    <div class="h-[100%] w-[20%] text-slate-100 text-lg text-bold">
                        <h1 class="p-4">Sun</h1>
                    </div>
                    <div class="h-[100%] w-[60%] flex justify-center items-center">
                        <div class="h-[100%] w-[50%] text-[7vh] text-white">
                            <i class="fa-solid fa-cloud-bolt"></i>
                        </div>
                        <div
                            class="h-[100%] w-[10%] ml-4 mr-10 flex justify-center items-center text-white text-[3vh]">
                            <h1>Storm</h1>
                        </div>
                    </div>
                    <div class="h-[100%] w-[20%] flex justify-center items-center text-lg text-white mt-1">
                        <h1 class="mr-10">37/21</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 );
 }