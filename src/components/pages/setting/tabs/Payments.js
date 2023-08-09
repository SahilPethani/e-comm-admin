import React from "react";
import SettingTab from "../SettingTab";

const Payments_setting = () => {

  return (
    <>
      <div className="grid grid-cols-6 gap-x-2 grid-flow-row ">
        <SettingTab />
        <div className="col-span-4">
          <div>
            <div className="card shadow">
              <div className="card-section border-b box-border">
                <div className="flex justify-between card-section-header mb-1">
                  <h3 className="card-session-title">Payments</h3>
                </div>
                <div className="card-session-content pt-lg">
                  <div className="form-field-container null">
                    <label htmlFor="storeName">Store Name</label>
                    <div className="field-wrapper flex flex-grow">
                      <input
                        type="text"
                        name="storeName"
                        placeholder="Store Name"
                        defaultValue="An Amazing EverShop Store"
                      />
                      <div className="field-border" />
                    </div>
                  </div>
                  <div className="form-field-container null">
                    <label htmlFor="storeDescription">Store Description</label>
                    <div className="field-wrapper flex flex-grow">
                      <textarea
                        type="text"
                        className="form-field"
                        id="storeDescription"
                        name="storeDescription"
                        placeholder="Store Description"
                        defaultValue={"An Amazing EverShop Store"}
                      />
                      <div className="field-border" />
                    </div>
                  </div>
                  <div className="form-field-container dropdown null">
                    <label htmlFor="storeTimeZone">TimeZone</label>
                    <div className="field-wrapper flex flex-grow items-baseline">
                      <select
                        className="form-field"
                        id="storeTimeZone"
                        name="storeTimeZone"
                        placeholder="TimeZone"
                      >
                        <option value="" disabled="">
                          TimeZone
                        </option>
                        <option value="Australia/Darwin">
                          AUS Central Standard Time (Australia/Darwin)
                        </option>
                        <option value="Australia/Melbourne">
                          AUS Eastern Standard Time (Australia/Melbourne)
                        </option>
                        <option value="Australia/Sydney">
                          AUS Eastern Standard Time (Australia/Sydney)
                        </option>
                        <option value="Asia/Kabul">
                          Afghanistan Standard Time (Asia/Kabul)
                        </option>
                        <option value="America/Anchorage">
                          Alaskan Standard Time (America/Anchorage)
                        </option>
                        <option value="America/Juneau">
                          Alaskan Standard Time (America/Juneau)
                        </option>
                        <option value="America/Nome">
                          Alaskan Standard Time (America/Nome)
                        </option>
                        <option value="America/Sitka">
                          Alaskan Standard Time (America/Sitka)
                        </option>
                        <option value="America/Yakutat">
                          Alaskan Standard Time (America/Yakutat)
                        </option>
                        <option value="Asia/Aden">
                          Arab Standard Time (Asia/Aden)
                        </option>
                        <option value="Asia/Bahrain">
                          Arab Standard Time (Asia/Bahrain)
                        </option>
                        <option value="Asia/Kuwait">
                          Arab Standard Time (Asia/Kuwait)
                        </option>
                        <option value="Asia/Qatar">
                          Arab Standard Time (Asia/Qatar)
                        </option>
                        <option value="Asia/Riyadh">
                          Arab Standard Time (Asia/Riyadh)
                        </option>
                        <option value="Asia/Dubai">
                          Arabian Standard Time (Asia/Dubai)
                        </option>
                        <option value="Asia/Muscat">
                          Arabian Standard Time (Asia/Muscat)
                        </option>
                        <option value="Etc/GMT-4">
                          Arabian Standard Time (Etc/GMT-4)
                        </option>
                        <option value="Asia/Baghdad">
                          Arabic Standard Time (Asia/Baghdad)
                        </option>
                        <option value="America/Argentina/La_Rioja">
                          Argentina Standard Time (America/Argentina/La_Rioja)
                        </option>
                        <option value="America/Argentina/Rio_Gallegos">
                          Argentina Standard Time
                          (America/Argentina/Rio_Gallegos)
                        </option>
                        <option value="America/Argentina/Salta">
                          Argentina Standard Time (America/Argentina/Salta)
                        </option>
                        <option value="America/Argentina/San_Juan">
                          Argentina Standard Time (America/Argentina/San_Juan)
                        </option>
                        <option value="America/Argentina/San_Luis">
                          Argentina Standard Time (America/Argentina/San_Luis)
                        </option>
                        <option value="America/Argentina/Tucuman">
                          Argentina Standard Time (America/Argentina/Tucuman)
                        </option>
                        <option value="America/Argentina/Ushuaia">
                          Argentina Standard Time (America/Argentina/Ushuaia)
                        </option>
                        <option value="America/Buenos_Aires">
                          Argentina Standard Time (America/Buenos_Aires)
                        </option>
                        <option value="America/Catamarca">
                          Argentina Standard Time (America/Catamarca)
                        </option>
                        <option value="America/Cordoba">
                          Argentina Standard Time (America/Cordoba)
                        </option>
                        <option value="America/Jujuy">
                          Argentina Standard Time (America/Jujuy)
                        </option>
                        <option value="America/Mendoza">
                          Argentina Standard Time (America/Mendoza)
                        </option>
                        <option value="America/Glace_Bay">
                          Atlantic Standard Time (America/Glace_Bay)
                        </option>
                        <option value="America/Goose_Bay">
                          Atlantic Standard Time (America/Goose_Bay)
                        </option>
                        <option value="America/Halifax">
                          Atlantic Standard Time (America/Halifax)
                        </option>
                        <option value="America/Moncton">
                          Atlantic Standard Time (America/Moncton)
                        </option>
                        <option value="America/Thule">
                          Atlantic Standard Time (America/Thule)
                        </option>
                        <option value="Atlantic/Bermuda">
                          Atlantic Standard Time (Atlantic/Bermuda)
                        </option>
                        <option value="Asia/Baku">
                          Azerbaijan Standard Time (Asia/Baku)
                        </option>
                        <option value="America/Scoresbysund">
                          Azores Standard Time (America/Scoresbysund)
                        </option>
                        <option value="Atlantic/Azores">
                          Azores Standard Time (Atlantic/Azores)
                        </option>
                        <option value="America/Bahia">
                          Bahia Standard Time (America/Bahia)
                        </option>
                        <option value="Asia/Dhaka">
                          Bangladesh Standard Time (Asia/Dhaka)
                        </option>
                        <option value="Asia/Thimphu">
                          Bangladesh Standard Time (Asia/Thimphu)
                        </option>
                        <option value="America/Regina">
                          Canada Central Standard Time (America/Regina)
                        </option>
                        <option value="America/Swift_Current">
                          Canada Central Standard Time (America/Swift_Current)
                        </option>
                        <option value="Atlantic/Cape_Verde">
                          Cape Verde Standard Time (Atlantic/Cape_Verde)
                        </option>
                        <option value="Etc/GMT+1">
                          Cape Verde Standard Time (Etc/GMT+1)
                        </option>
                        <option value="Asia/Yerevan">
                          Caucasus Standard Time (Asia/Yerevan)
                        </option>
                        <option value="Australia/Adelaide">
                          Cen. Australia Standard Time (Australia/Adelaide)
                        </option>
                        <option value="Australia/Broken_Hill">
                          Cen. Australia Standard Time (Australia/Broken_Hill)
                        </option>
                        <option value="America/Belize">
                          Central America Standard Time (America/Belize)
                        </option>
                        <option value="America/Costa_Rica">
                          Central America Standard Time (America/Costa_Rica)
                        </option>
                        <option value="America/El_Salvador">
                          Central America Standard Time (America/El_Salvador)
                        </option>
                        <option value="America/Guatemala">
                          Central America Standard Time (America/Guatemala)
                        </option>
                        <option value="America/Managua">
                          Central America Standard Time (America/Managua)
                        </option>
                        <option value="America/Tegucigalpa">
                          Central America Standard Time (America/Tegucigalpa)
                        </option>
                        <option value="Etc/GMT+6">
                          Central America Standard Time (Etc/GMT+6)
                        </option>
                        <option value="Pacific/Galapagos">
                          Central America Standard Time (Pacific/Galapagos)
                        </option>
                        <option value="Antarctica/Vostok">
                          Central Asia Standard Time (Antarctica/Vostok)
                        </option>
                        <option value="Asia/Almaty">
                          Central Asia Standard Time (Asia/Almaty)
                        </option>
                        <option value="Asia/Bishkek">
                          Central Asia Standard Time (Asia/Bishkek)
                        </option>
                        <option value="Asia/Qyzylorda">
                          Central Asia Standard Time (Asia/Qyzylorda)
                        </option>
                        <option value="Etc/GMT-6">
                          Central Asia Standard Time (Etc/GMT-6)
                        </option>
                        <option value="Indian/Chagos">
                          Central Asia Standard Time (Indian/Chagos)
                        </option>
                        <option value="America/Campo_Grande">
                          Central Brazilian Standard Time (America/Campo_Grande)
                        </option>
                        <option value="America/Cuiaba">
                          Central Brazilian Standard Time (America/Cuiaba)
                        </option>
                        <option value="Europe/Belgrade">
                          Central Europe Standard Time (Europe/Belgrade)
                        </option>
                        <option value="Europe/Bratislava">
                          Central Europe Standard Time (Europe/Bratislava)
                        </option>
                        <option value="Europe/Budapest">
                          Central Europe Standard Time (Europe/Budapest)
                        </option>
                        <option value="Europe/Ljubljana">
                          Central Europe Standard Time (Europe/Ljubljana)
                        </option>
                        <option value="Europe/Podgorica">
                          Central Europe Standard Time (Europe/Podgorica)
                        </option>
                        <option value="Europe/Prague">
                          Central Europe Standard Time (Europe/Prague)
                        </option>
                        <option value="Europe/Tirane">
                          Central Europe Standard Time (Europe/Tirane)
                        </option>
                        <option value="Europe/Sarajevo">
                          Central European Standard Time (Europe/Sarajevo)
                        </option>
                        <option value="Europe/Skopje">
                          Central European Standard Time (Europe/Skopje)
                        </option>
                        <option value="Europe/Warsaw">
                          Central European Standard Time (Europe/Warsaw)
                        </option>
                        <option value="Europe/Zagreb">
                          Central European Standard Time (Europe/Zagreb)
                        </option>
                        <option value="Antarctica/Macquarie">
                          Central Pacific Standard Time (Antarctica/Macquarie)
                        </option>
                        <option value="Etc/GMT-11">
                          Central Pacific Standard Time (Etc/GMT-11)
                        </option>
                        <option value="Pacific/Efate">
                          Central Pacific Standard Time (Pacific/Efate)
                        </option>
                        <option value="Pacific/Guadalcanal">
                          Central Pacific Standard Time (Pacific/Guadalcanal)
                        </option>
                        <option value="Pacific/Kosrae">
                          Central Pacific Standard Time (Pacific/Kosrae)
                        </option>
                        <option value="Pacific/Noumea">
                          Central Pacific Standard Time (Pacific/Noumea)
                        </option>
                        <option value="Pacific/Ponape">
                          Central Pacific Standard Time (Pacific/Ponape)
                        </option>
                        <option value="America/Chicago">
                          Central Standard Time (America/Chicago)
                        </option>
                        <option value="America/Indiana/Knox">
                          Central Standard Time (America/Indiana/Knox)
                        </option>
                        <option value="America/Indiana/Tell_City">
                          Central Standard Time (America/Indiana/Tell_City)
                        </option>
                        <option value="America/Matamoros">
                          Central Standard Time (America/Matamoros)
                        </option>
                        <option value="America/Menominee">
                          Central Standard Time (America/Menominee)
                        </option>
                        <option value="America/North_Dakota/Beulah">
                          Central Standard Time (America/North_Dakota/Beulah)
                        </option>
                        <option value="America/North_Dakota/Center">
                          Central Standard Time (America/North_Dakota/Center)
                        </option>
                        <option value="America/North_Dakota/New_Salem">
                          Central Standard Time (America/North_Dakota/New_Salem)
                        </option>
                        <option value="America/Rainy_River">
                          Central Standard Time (America/Rainy_River)
                        </option>
                        <option value="America/Rankin_Inlet">
                          Central Standard Time (America/Rankin_Inlet)
                        </option>
                        <option value="America/Resolute">
                          Central Standard Time (America/Resolute)
                        </option>
                        <option value="America/Winnipeg">
                          Central Standard Time (America/Winnipeg)
                        </option>
                        <option value="CST6CDT">
                          Central Standard Time (CST6CDT)
                        </option>
                        <option value="America/Bahia_Banderas">
                          Central Standard Time (Mexico)
                          (America/Bahia_Banderas)
                        </option>
                        <option value="America/Cancun">
                          Central Standard Time (Mexico) (America/Cancun)
                        </option>
                        <option value="America/Merida">
                          Central Standard Time (Mexico) (America/Merida)
                        </option>
                        <option value="America/Mexico_City">
                          Central Standard Time (Mexico) (America/Mexico_City)
                        </option>
                        <option value="America/Monterrey">
                          Central Standard Time (Mexico) (America/Monterrey)
                        </option>
                        <option value="Asia/Chongqing">
                          China Standard Time (Asia/Chongqing)
                        </option>
                        <option value="Asia/Harbin">
                          China Standard Time (Asia/Harbin)
                        </option>
                        <option value="Asia/Hong_Kong">
                          China Standard Time (Asia/Hong_Kong)
                        </option>
                        <option value="Asia/Kashgar">
                          China Standard Time (Asia/Kashgar)
                        </option>
                        <option value="Asia/Macau">
                          China Standard Time (Asia/Macau)
                        </option>
                        <option value="Asia/Shanghai">
                          China Standard Time (Asia/Shanghai)
                        </option>
                        <option value="Asia/Urumqi">
                          China Standard Time (Asia/Urumqi)
                        </option>
                        <option value="Etc/GMT+12">
                          Dateline Standard Time (Etc/GMT+12)
                        </option>
                        <option value="Africa/Addis_Ababa">
                          E. Africa Standard Time (Africa/Addis_Ababa)
                        </option>
                        <option value="Africa/Asmera">
                          E. Africa Standard Time (Africa/Asmera)
                        </option>
                        <option value="Africa/Dar_es_Salaam">
                          E. Africa Standard Time (Africa/Dar_es_Salaam)
                        </option>
                        <option value="Africa/Djibouti">
                          E. Africa Standard Time (Africa/Djibouti)
                        </option>
                        <option value="Africa/Juba">
                          E. Africa Standard Time (Africa/Juba)
                        </option>
                        <option value="Africa/Kampala">
                          E. Africa Standard Time (Africa/Kampala)
                        </option>
                        <option value="Africa/Khartoum">
                          E. Africa Standard Time (Africa/Khartoum)
                        </option>
                        <option value="Africa/Mogadishu">
                          E. Africa Standard Time (Africa/Mogadishu)
                        </option>
                        <option value="Africa/Nairobi">
                          E. Africa Standard Time (Africa/Nairobi)
                        </option>
                        <option value="Antarctica/Syowa">
                          E. Africa Standard Time (Antarctica/Syowa)
                        </option>
                        <option value="Etc/GMT-3">
                          E. Africa Standard Time (Etc/GMT-3)
                        </option>
                        <option value="Indian/Antananarivo">
                          E. Africa Standard Time (Indian/Antananarivo)
                        </option>
                        <option value="Indian/Comoro">
                          E. Africa Standard Time (Indian/Comoro)
                        </option>
                        <option value="Indian/Mayotte">
                          E. Africa Standard Time (Indian/Mayotte)
                        </option>
                        <option value="Australia/Brisbane">
                          E. Australia Standard Time (Australia/Brisbane)
                        </option>
                        <option value="Australia/Lindeman">
                          E. Australia Standard Time (Australia/Lindeman)
                        </option>
                        <option value="America/Sao_Paulo">
                          E. South America Standard Time (America/Sao_Paulo)
                        </option>
                        <option value="America/Detroit">
                          Eastern Standard Time (America/Detroit)
                        </option>
                        <option value="America/Grand_Turk">
                          Eastern Standard Time (America/Grand_Turk)
                        </option>
                        <option value="America/Havana">
                          Eastern Standard Time (America/Havana)
                        </option>
                        <option value="America/Indiana/Petersburg">
                          Eastern Standard Time (America/Indiana/Petersburg)
                        </option>
                        <option value="America/Indiana/Vincennes">
                          Eastern Standard Time (America/Indiana/Vincennes)
                        </option>
                        <option value="America/Indiana/Winamac">
                          Eastern Standard Time (America/Indiana/Winamac)
                        </option>
                        <option value="America/Iqaluit">
                          Eastern Standard Time (America/Iqaluit)
                        </option>
                        <option value="America/Kentucky/Monticello">
                          Eastern Standard Time (America/Kentucky/Monticello)
                        </option>
                        <option value="America/Louisville">
                          Eastern Standard Time (America/Louisville)
                        </option>
                        <option value="America/Montreal">
                          Eastern Standard Time (America/Montreal)
                        </option>
                        <option value="America/Nassau">
                          Eastern Standard Time (America/Nassau)
                        </option>
                        <option value="America/New_York">
                          Eastern Standard Time (America/New_York)
                        </option>
                        <option value="America/Nipigon">
                          Eastern Standard Time (America/Nipigon)
                        </option>
                        <option value="America/Pangnirtung">
                          Eastern Standard Time (America/Pangnirtung)
                        </option>
                        <option value="America/Port-au-Prince">
                          Eastern Standard Time (America/Port-au-Prince)
                        </option>
                        <option value="America/Thunder_Bay">
                          Eastern Standard Time (America/Thunder_Bay)
                        </option>
                        <option value="America/Toronto">
                          Eastern Standard Time (America/Toronto)
                        </option>
                        <option value="EST5EDT">
                          Eastern Standard Time (EST5EDT)
                        </option>
                        <option value="Africa/Cairo">
                          Egypt Standard Time (Africa/Cairo)
                        </option>
                        <option value="Asia/Yekaterinburg">
                          Ekaterinburg Standard Time (Asia/Yekaterinburg)
                        </option>
                        <option value="Europe/Helsinki">
                          FLE Standard Time (Europe/Helsinki)
                        </option>
                        <option value="Europe/Kiev">
                          FLE Standard Time (Europe/Kiev)
                        </option>
                        <option value="Europe/Mariehamn">
                          FLE Standard Time (Europe/Mariehamn)
                        </option>
                        <option value="Europe/Riga">
                          FLE Standard Time (Europe/Riga)
                        </option>
                        <option value="Europe/Simferopol">
                          FLE Standard Time (Europe/Simferopol)
                        </option>
                        <option value="Europe/Sofia">
                          FLE Standard Time (Europe/Sofia)
                        </option>
                        <option value="Europe/Tallinn">
                          FLE Standard Time (Europe/Tallinn)
                        </option>
                        <option value="Europe/Uzhgorod">
                          FLE Standard Time (Europe/Uzhgorod)
                        </option>
                        <option value="Europe/Vilnius">
                          FLE Standard Time (Europe/Vilnius)
                        </option>
                        <option value="Europe/Zaporozhye">
                          FLE Standard Time (Europe/Zaporozhye)
                        </option>
                        <option value="Pacific/Fiji">
                          Fiji Standard Time (Pacific/Fiji)
                        </option>
                        <option value="Atlantic/Canary">
                          GMT Standard Time (Atlantic/Canary)
                        </option>
                        <option value="Atlantic/Faeroe">
                          GMT Standard Time (Atlantic/Faeroe)
                        </option>
                        <option value="Atlantic/Madeira">
                          GMT Standard Time (Atlantic/Madeira)
                        </option>
                        <option value="Europe/Dublin">
                          GMT Standard Time (Europe/Dublin)
                        </option>
                        <option value="Europe/Guernsey">
                          GMT Standard Time (Europe/Guernsey)
                        </option>
                        <option value="Europe/Isle_of_Man">
                          GMT Standard Time (Europe/Isle_of_Man)
                        </option>
                        <option value="Europe/Jersey">
                          GMT Standard Time (Europe/Jersey)
                        </option>
                        <option value="Europe/Lisbon">
                          GMT Standard Time (Europe/Lisbon)
                        </option>
                        <option value="Europe/London">
                          GMT Standard Time (Europe/London)
                        </option>
                        <option value="Asia/Nicosia">
                          GTB Standard Time (Asia/Nicosia)
                        </option>
                        <option value="Europe/Athens">
                          GTB Standard Time (Europe/Athens)
                        </option>
                        <option value="Europe/Bucharest">
                          GTB Standard Time (Europe/Bucharest)
                        </option>
                        <option value="Europe/Chisinau">
                          GTB Standard Time (Europe/Chisinau)
                        </option>
                        <option value="Asia/Tbilisi">
                          Georgian Standard Time (Asia/Tbilisi)
                        </option>
                        <option value="America/Godthab">
                          Greenland Standard Time (America/Godthab)
                        </option>
                        <option value="Africa/Abidjan">
                          Greenwich Standard Time (Africa/Abidjan)
                        </option>
                        <option value="Africa/Accra">
                          Greenwich Standard Time (Africa/Accra)
                        </option>
                        <option value="Africa/Bamako">
                          Greenwich Standard Time (Africa/Bamako)
                        </option>
                        <option value="Africa/Banjul">
                          Greenwich Standard Time (Africa/Banjul)
                        </option>
                        <option value="Africa/Bissau">
                          Greenwich Standard Time (Africa/Bissau)
                        </option>
                        <option value="Africa/Conakry">
                          Greenwich Standard Time (Africa/Conakry)
                        </option>
                        <option value="Africa/Dakar">
                          Greenwich Standard Time (Africa/Dakar)
                        </option>
                        <option value="Africa/Freetown">
                          Greenwich Standard Time (Africa/Freetown)
                        </option>
                        <option value="Africa/Lome">
                          Greenwich Standard Time (Africa/Lome)
                        </option>
                        <option value="Africa/Monrovia">
                          Greenwich Standard Time (Africa/Monrovia)
                        </option>
                        <option value="Africa/Nouakchott">
                          Greenwich Standard Time (Africa/Nouakchott)
                        </option>
                        <option value="Africa/Ouagadougou">
                          Greenwich Standard Time (Africa/Ouagadougou)
                        </option>
                        <option value="Africa/Sao_Tome">
                          Greenwich Standard Time (Africa/Sao_Tome)
                        </option>
                        <option value="Atlantic/Reykjavik">
                          Greenwich Standard Time (Atlantic/Reykjavik)
                        </option>
                        <option value="Atlantic/St_Helena">
                          Greenwich Standard Time (Atlantic/St_Helena)
                        </option>
                        <option value="Etc/GMT+10">
                          Hawaiian Standard Time (Etc/GMT+10)
                        </option>
                        <option value="Pacific/Honolulu">
                          Hawaiian Standard Time (Pacific/Honolulu)
                        </option>
                        <option value="Pacific/Johnston">
                          Hawaiian Standard Time (Pacific/Johnston)
                        </option>
                        <option value="Pacific/Rarotonga">
                          Hawaiian Standard Time (Pacific/Rarotonga)
                        </option>
                        <option value="Pacific/Tahiti">
                          Hawaiian Standard Time (Pacific/Tahiti)
                        </option>
                        <option value="Asia/Calcutta">
                          India Standard Time (Asia/Calcutta)
                        </option>
                        <option value="Asia/Tehran">
                          Iran Standard Time (Asia/Tehran)
                        </option>
                        <option value="Asia/Jerusalem">
                          Israel Standard Time (Asia/Jerusalem)
                        </option>
                        <option value="Asia/Amman">
                          Jordan Standard Time (Asia/Amman)
                        </option>
                        <option value="Europe/Kaliningrad">
                          Kaliningrad Standard Time (Europe/Kaliningrad)
                        </option>
                        <option value="Europe/Minsk">
                          Kaliningrad Standard Time (Europe/Minsk)
                        </option>
                        <option value="Asia/Pyongyang">
                          Korea Standard Time (Asia/Pyongyang)
                        </option>
                        <option value="Asia/Seoul">
                          Korea Standard Time (Asia/Seoul)
                        </option>
                        <option value="Africa/Tripoli">
                          Libya Standard Time (Africa/Tripoli)
                        </option>
                        <option value="Asia/Anadyr">
                          Magadan Standard Time (Asia/Anadyr)
                        </option>
                        <option value="Asia/Kamchatka">
                          Magadan Standard Time (Asia/Kamchatka)
                        </option>
                        <option value="Asia/Magadan">
                          Magadan Standard Time (Asia/Magadan)
                        </option>
                        <option value="Indian/Mahe">
                          Mauritius Standard Time (Indian/Mahe)
                        </option>
                        <option value="Indian/Mauritius">
                          Mauritius Standard Time (Indian/Mauritius)
                        </option>
                        <option value="Indian/Reunion">
                          Mauritius Standard Time (Indian/Reunion)
                        </option>
                        <option value="Asia/Beirut">
                          Middle East Standard Time (Asia/Beirut)
                        </option>
                        <option value="America/Montevideo">
                          Montevideo Standard Time (America/Montevideo)
                        </option>
                        <option value="Africa/Casablanca">
                          Morocco Standard Time (Africa/Casablanca)
                        </option>
                        <option value="Africa/El_Aaiun">
                          Morocco Standard Time (Africa/El_Aaiun)
                        </option>
                        <option value="America/Boise">
                          Mountain Standard Time (America/Boise)
                        </option>
                        <option value="America/Cambridge_Bay">
                          Mountain Standard Time (America/Cambridge_Bay)
                        </option>
                        <option value="America/Denver">
                          Mountain Standard Time (America/Denver)
                        </option>
                        <option value="America/Edmonton">
                          Mountain Standard Time (America/Edmonton)
                        </option>
                        <option value="America/Inuvik">
                          Mountain Standard Time (America/Inuvik)
                        </option>
                        <option value="America/Ojinaga">
                          Mountain Standard Time (America/Ojinaga)
                        </option>
                        <option value="America/Shiprock">
                          Mountain Standard Time (America/Shiprock)
                        </option>
                        <option value="America/Yellowknife">
                          Mountain Standard Time (America/Yellowknife)
                        </option>
                        <option value="MST7MDT">
                          Mountain Standard Time (MST7MDT)
                        </option>
                        <option value="America/Chihuahua">
                          Mountain Standard Time (Mexico) (America/Chihuahua)
                        </option>
                        <option value="America/Mazatlan">
                          Mountain Standard Time (Mexico) (America/Mazatlan)
                        </option>
                        <option value="Asia/Rangoon">
                          Myanmar Standard Time (Asia/Rangoon)
                        </option>
                        <option value="Indian/Cocos">
                          Myanmar Standard Time (Indian/Cocos)
                        </option>
                        <option value="Asia/Novokuznetsk">
                          N. Central Asia Standard Time (Asia/Novokuznetsk)
                        </option>
                        <option value="Asia/Novosibirsk">
                          N. Central Asia Standard Time (Asia/Novosibirsk)
                        </option>
                        <option value="Asia/Omsk">
                          N. Central Asia Standard Time (Asia/Omsk)
                        </option>
                        <option value="Africa/Windhoek">
                          Namibia Standard Time (Africa/Windhoek)
                        </option>
                        <option value="Asia/Katmandu">
                          Nepal Standard Time (Asia/Katmandu)
                        </option>
                        <option value="Antarctica/McMurdo">
                          New Zealand Standard Time (Antarctica/McMurdo)
                        </option>
                        <option value="Antarctica/South_Pole">
                          New Zealand Standard Time (Antarctica/South_Pole)
                        </option>
                        <option value="Pacific/Auckland">
                          New Zealand Standard Time (Pacific/Auckland)
                        </option>
                        <option value="America/St_Johns">
                          Newfoundland Standard Time (America/St_Johns)
                        </option>
                        <option value="Asia/Irkutsk">
                          North Asia East Standard Time (Asia/Irkutsk)
                        </option>
                        <option value="Asia/Krasnoyarsk">
                          North Asia Standard Time (Asia/Krasnoyarsk)
                        </option>
                        <option value="America/Santiago">
                          Pacific SA Standard Time (America/Santiago)
                        </option>
                        <option value="Antarctica/Palmer">
                          Pacific SA Standard Time (Antarctica/Palmer)
                        </option>
                        <option value="America/Dawson">
                          Pacific Standard Time (America/Dawson)
                        </option>
                        <option value="America/Los_Angeles">
                          Pacific Standard Time (America/Los_Angeles)
                        </option>
                        <option value="America/Tijuana">
                          Pacific Standard Time (America/Tijuana)
                        </option>
                        <option value="America/Vancouver">
                          Pacific Standard Time (America/Vancouver)
                        </option>
                        <option value="America/Whitehorse">
                          Pacific Standard Time (America/Whitehorse)
                        </option>
                        <option value="America/Santa_Isabel">
                          Pacific Standard Time (Mexico) (America/Santa_Isabel)
                        </option>
                        <option value="PST8PDT">
                          Pacific Standard Time (PST8PDT)
                        </option>
                        <option value="Asia/Karachi">
                          Pakistan Standard Time (Asia/Karachi)
                        </option>
                        <option value="America/Asuncion">
                          Paraguay Standard Time (America/Asuncion)
                        </option>
                        <option value="Africa/Ceuta">
                          Romance Standard Time (Africa/Ceuta)
                        </option>
                        <option value="Europe/Brussels">
                          Romance Standard Time (Europe/Brussels)
                        </option>
                        <option value="Europe/Copenhagen">
                          Romance Standard Time (Europe/Copenhagen)
                        </option>
                        <option value="Europe/Madrid">
                          Romance Standard Time (Europe/Madrid)
                        </option>
                        <option value="Europe/Paris">
                          Romance Standard Time (Europe/Paris)
                        </option>
                        <option value="Europe/Moscow">
                          Russian Standard Time (Europe/Moscow)
                        </option>
                        <option value="Europe/Samara">
                          Russian Standard Time (Europe/Samara)
                        </option>
                        <option value="Europe/Volgograd">
                          Russian Standard Time (Europe/Volgograd)
                        </option>
                        <option value="America/Araguaina">
                          SA Eastern Standard Time (America/Araguaina)
                        </option>
                        <option value="America/Belem">
                          SA Eastern Standard Time (America/Belem)
                        </option>
                        <option value="America/Cayenne">
                          SA Eastern Standard Time (America/Cayenne)
                        </option>
                        <option value="America/Fortaleza">
                          SA Eastern Standard Time (America/Fortaleza)
                        </option>
                        <option value="America/Maceio">
                          SA Eastern Standard Time (America/Maceio)
                        </option>
                        <option value="America/Paramaribo">
                          SA Eastern Standard Time (America/Paramaribo)
                        </option>
                        <option value="America/Recife">
                          SA Eastern Standard Time (America/Recife)
                        </option>
                        <option value="America/Santarem">
                          SA Eastern Standard Time (America/Santarem)
                        </option>
                        <option value="Antarctica/Rothera">
                          SA Eastern Standard Time (Antarctica/Rothera)
                        </option>
                        <option value="Atlantic/Stanley">
                          SA Eastern Standard Time (Atlantic/Stanley)
                        </option>
                        <option value="Etc/GMT+3">
                          SA Eastern Standard Time (Etc/GMT+3)
                        </option>
                        <option value="America/Bogota">
                          SA Pacific Standard Time (America/Bogota)
                        </option>
                        <option value="America/Cayman">
                          SA Pacific Standard Time (America/Cayman)
                        </option>
                        <option value="America/Coral_Harbour">
                          SA Pacific Standard Time (America/Coral_Harbour)
                        </option>
                        <option value="America/Eirunepe">
                          SA Pacific Standard Time (America/Eirunepe)
                        </option>
                        <option value="America/Guayaquil">
                          SA Pacific Standard Time (America/Guayaquil)
                        </option>
                        <option value="America/Jamaica">
                          SA Pacific Standard Time (America/Jamaica)
                        </option>
                        <option value="America/Lima">
                          SA Pacific Standard Time (America/Lima)
                        </option>
                        <option value="America/Panama">
                          SA Pacific Standard Time (America/Panama)
                        </option>
                        <option value="America/Rio_Branco">
                          SA Pacific Standard Time (America/Rio_Branco)
                        </option>
                        <option value="Etc/GMT+5">
                          SA Pacific Standard Time (Etc/GMT+5)
                        </option>
                        <option value="America/Anguilla">
                          SA Western Standard Time (America/Anguilla)
                        </option>
                        <option value="America/Antigua">
                          SA Western Standard Time (America/Antigua)
                        </option>
                        <option value="America/Aruba">
                          SA Western Standard Time (America/Aruba)
                        </option>
                        <option value="America/Barbados">
                          SA Western Standard Time (America/Barbados)
                        </option>
                        <option value="America/Blanc-Sablon">
                          SA Western Standard Time (America/Blanc-Sablon)
                        </option>
                        <option value="America/Boa_Vista">
                          SA Western Standard Time (America/Boa_Vista)
                        </option>
                        <option value="America/Curacao">
                          SA Western Standard Time (America/Curacao)
                        </option>
                        <option value="America/Dominica">
                          SA Western Standard Time (America/Dominica)
                        </option>
                        <option value="America/Grenada">
                          SA Western Standard Time (America/Grenada)
                        </option>
                        <option value="America/Guadeloupe">
                          SA Western Standard Time (America/Guadeloupe)
                        </option>
                        <option value="America/Guyana">
                          SA Western Standard Time (America/Guyana)
                        </option>
                        <option value="America/Kralendijk">
                          SA Western Standard Time (America/Kralendijk)
                        </option>
                        <option value="America/La_Paz">
                          SA Western Standard Time (America/La_Paz)
                        </option>
                        <option value="America/Lower_Princes">
                          SA Western Standard Time (America/Lower_Princes)
                        </option>
                        <option value="America/Manaus">
                          SA Western Standard Time (America/Manaus)
                        </option>
                        <option value="America/Marigot">
                          SA Western Standard Time (America/Marigot)
                        </option>
                        <option value="America/Martinique">
                          SA Western Standard Time (America/Martinique)
                        </option>
                        <option value="America/Montserrat">
                          SA Western Standard Time (America/Montserrat)
                        </option>
                        <option value="America/Port_of_Spain">
                          SA Western Standard Time (America/Port_of_Spain)
                        </option>
                        <option value="America/Porto_Velho">
                          SA Western Standard Time (America/Porto_Velho)
                        </option>
                        <option value="America/Puerto_Rico">
                          SA Western Standard Time (America/Puerto_Rico)
                        </option>
                        <option value="America/Santo_Domingo">
                          SA Western Standard Time (America/Santo_Domingo)
                        </option>
                        <option value="America/St_Barthelemy">
                          SA Western Standard Time (America/St_Barthelemy)
                        </option>
                        <option value="America/St_Kitts">
                          SA Western Standard Time (America/St_Kitts)
                        </option>
                        <option value="America/St_Lucia">
                          SA Western Standard Time (America/St_Lucia)
                        </option>
                        <option value="America/St_Thomas">
                          SA Western Standard Time (America/St_Thomas)
                        </option>
                        <option value="America/St_Vincent">
                          SA Western Standard Time (America/St_Vincent)
                        </option>
                        <option value="America/Tortola">
                          SA Western Standard Time (America/Tortola)
                        </option>
                        <option value="Etc/GMT+4">
                          SA Western Standard Time (Etc/GMT+4)
                        </option>
                        <option value="Antarctica/Davis">
                          SE Asia Standard Time (Antarctica/Davis)
                        </option>
                        <option value="Asia/Bangkok">
                          SE Asia Standard Time (Asia/Bangkok)
                        </option>
                        <option value="Asia/Hovd">
                          SE Asia Standard Time (Asia/Hovd)
                        </option>
                        <option value="Asia/Jakarta">
                          SE Asia Standard Time (Asia/Jakarta)
                        </option>
                        <option value="Asia/Phnom_Penh">
                          SE Asia Standard Time (Asia/Phnom_Penh)
                        </option>
                        <option value="Asia/Pontianak">
                          SE Asia Standard Time (Asia/Pontianak)
                        </option>
                        <option value="Asia/Saigon">
                          SE Asia Standard Time (Asia/Saigon)
                        </option>
                        <option value="Asia/Vientiane">
                          SE Asia Standard Time (Asia/Vientiane)
                        </option>
                        <option value="Etc/GMT-7">
                          SE Asia Standard Time (Etc/GMT-7)
                        </option>
                        <option value="Indian/Christmas">
                          SE Asia Standard Time (Indian/Christmas)
                        </option>
                        <option value="Pacific/Apia">
                          Samoa Standard Time (Pacific/Apia)
                        </option>
                        <option value="Asia/Brunei">
                          Singapore Standard Time (Asia/Brunei)
                        </option>
                        <option value="Asia/Kuala_Lumpur">
                          Singapore Standard Time (Asia/Kuala_Lumpur)
                        </option>
                        <option value="Asia/Kuching">
                          Singapore Standard Time (Asia/Kuching)
                        </option>
                        <option value="Asia/Makassar">
                          Singapore Standard Time (Asia/Makassar)
                        </option>
                        <option value="Asia/Manila">
                          Singapore Standard Time (Asia/Manila)
                        </option>
                        <option value="Asia/Singapore">
                          Singapore Standard Time (Asia/Singapore)
                        </option>
                        <option value="Etc/GMT-8">
                          Singapore Standard Time (Etc/GMT-8)
                        </option>
                        <option value="Africa/Blantyre">
                          South Africa Standard Time (Africa/Blantyre)
                        </option>
                        <option value="Africa/Bujumbura">
                          South Africa Standard Time (Africa/Bujumbura)
                        </option>
                        <option value="Africa/Gaborone">
                          South Africa Standard Time (Africa/Gaborone)
                        </option>
                        <option value="Africa/Harare">
                          South Africa Standard Time (Africa/Harare)
                        </option>
                        <option value="Africa/Johannesburg">
                          South Africa Standard Time (Africa/Johannesburg)
                        </option>
                        <option value="Africa/Kigali">
                          South Africa Standard Time (Africa/Kigali)
                        </option>
                        <option value="Africa/Lubumbashi">
                          South Africa Standard Time (Africa/Lubumbashi)
                        </option>
                        <option value="Africa/Lusaka">
                          South Africa Standard Time (Africa/Lusaka)
                        </option>
                        <option value="Africa/Maputo">
                          South Africa Standard Time (Africa/Maputo)
                        </option>
                        <option value="Africa/Maseru">
                          South Africa Standard Time (Africa/Maseru)
                        </option>
                        <option value="Africa/Mbabane">
                          South Africa Standard Time (Africa/Mbabane)
                        </option>
                        <option value="Etc/GMT-2">
                          South Africa Standard Time (Etc/GMT-2)
                        </option>
                        <option value="Asia/Colombo">
                          Sri Lanka Standard Time (Asia/Colombo)
                        </option>
                        <option value="Asia/Damascus">
                          Syria Standard Time (Asia/Damascus)
                        </option>
                        <option value="Asia/Taipei">
                          Taipei Standard Time (Asia/Taipei)
                        </option>
                        <option value="Australia/Currie">
                          Tasmania Standard Time (Australia/Currie)
                        </option>
                        <option value="Australia/Hobart">
                          Tasmania Standard Time (Australia/Hobart)
                        </option>
                        <option value="Asia/Dili">
                          Tokyo Standard Time (Asia/Dili)
                        </option>
                        <option value="Asia/Jayapura">
                          Tokyo Standard Time (Asia/Jayapura)
                        </option>
                        <option value="Asia/Tokyo">
                          Tokyo Standard Time (Asia/Tokyo)
                        </option>
                        <option value="Etc/GMT-9">
                          Tokyo Standard Time (Etc/GMT-9)
                        </option>
                        <option value="Pacific/Palau">
                          Tokyo Standard Time (Pacific/Palau)
                        </option>
                        <option value="Etc/GMT-13">
                          Tonga Standard Time (Etc/GMT-13)
                        </option>
                        <option value="Pacific/Enderbury">
                          Tonga Standard Time (Pacific/Enderbury)
                        </option>
                        <option value="Pacific/Fakaofo">
                          Tonga Standard Time (Pacific/Fakaofo)
                        </option>
                        <option value="Pacific/Tongatapu">
                          Tonga Standard Time (Pacific/Tongatapu)
                        </option>
                        <option value="Europe/Istanbul">
                          Turkey Standard Time (Europe/Istanbul)
                        </option>
                        <option value="America/Indiana/Marengo">
                          US Eastern Standard Time (America/Indiana/Marengo)
                        </option>
                        <option value="America/Indiana/Vevay">
                          US Eastern Standard Time (America/Indiana/Vevay)
                        </option>
                        <option value="America/Indianapolis">
                          US Eastern Standard Time (America/Indianapolis)
                        </option>
                        <option value="America/Creston">
                          US Mountain Standard Time (America/Creston)
                        </option>
                        <option value="America/Dawson_Creek">
                          US Mountain Standard Time (America/Dawson_Creek)
                        </option>
                        <option value="America/Hermosillo">
                          US Mountain Standard Time (America/Hermosillo)
                        </option>
                        <option value="America/Phoenix">
                          US Mountain Standard Time (America/Phoenix)
                        </option>
                        <option value="Etc/GMT+7">
                          US Mountain Standard Time (Etc/GMT+7)
                        </option>
                        <option value="America/Danmarkshavn">
                          UTC (America/Danmarkshavn)
                        </option>
                        <option value="Etc/GMT">UTC (Etc/GMT)</option>
                        <option value="Etc/GMT-12">UTC+12 (Etc/GMT-12)</option>
                        <option value="Pacific/Funafuti">
                          UTC+12 (Pacific/Funafuti)
                        </option>
                        <option value="Pacific/Kwajalein">
                          UTC+12 (Pacific/Kwajalein)
                        </option>
                        <option value="Pacific/Majuro">
                          UTC+12 (Pacific/Majuro)
                        </option>
                        <option value="Pacific/Nauru">
                          UTC+12 (Pacific/Nauru)
                        </option>
                        <option value="Pacific/Tarawa">
                          UTC+12 (Pacific/Tarawa)
                        </option>
                        <option value="Pacific/Wake">
                          UTC+12 (Pacific/Wake)
                        </option>
                        <option value="Pacific/Wallis">
                          UTC+12 (Pacific/Wallis)
                        </option>
                        <option value="America/Noronha">
                          UTC-02 (America/Noronha)
                        </option>
                        <option value="Atlantic/South_Georgia">
                          UTC-02 (Atlantic/South_Georgia)
                        </option>
                        <option value="Etc/GMT+2">UTC-02 (Etc/GMT+2)</option>
                        <option value="Etc/GMT+11">UTC-11 (Etc/GMT+11)</option>
                        <option value="Pacific/Midway">
                          UTC-11 (Pacific/Midway)
                        </option>
                        <option value="Pacific/Niue">
                          UTC-11 (Pacific/Niue)
                        </option>
                        <option value="Pacific/Pago_Pago">
                          UTC-11 (Pacific/Pago_Pago)
                        </option>
                        <option value="Asia/Choibalsan">
                          Ulaanbaatar Standard Time (Asia/Choibalsan)
                        </option>
                        <option value="Asia/Ulaanbaatar">
                          Ulaanbaatar Standard Time (Asia/Ulaanbaatar)
                        </option>
                        <option value="America/Caracas">
                          Venezuela Standard Time (America/Caracas)
                        </option>
                        <option value="Asia/Sakhalin">
                          Vladivostok Standard Time (Asia/Sakhalin)
                        </option>
                        <option value="Asia/Ust-Nera">
                          Vladivostok Standard Time (Asia/Ust-Nera)
                        </option>
                        <option value="Asia/Vladivostok">
                          Vladivostok Standard Time (Asia/Vladivostok)
                        </option>
                        <option value="Antarctica/Casey">
                          W. Australia Standard Time (Antarctica/Casey)
                        </option>
                        <option value="Australia/Perth">
                          W. Australia Standard Time (Australia/Perth)
                        </option>
                        <option value="Africa/Algiers">
                          W. Central Africa Standard Time (Africa/Algiers)
                        </option>
                        <option value="Africa/Bangui">
                          W. Central Africa Standard Time (Africa/Bangui)
                        </option>
                        <option value="Africa/Brazzaville">
                          W. Central Africa Standard Time (Africa/Brazzaville)
                        </option>
                        <option value="Africa/Douala">
                          W. Central Africa Standard Time (Africa/Douala)
                        </option>
                        <option value="Africa/Kinshasa">
                          W. Central Africa Standard Time (Africa/Kinshasa)
                        </option>
                        <option value="Africa/Lagos">
                          W. Central Africa Standard Time (Africa/Lagos)
                        </option>
                        <option value="Africa/Libreville">
                          W. Central Africa Standard Time (Africa/Libreville)
                        </option>
                        <option value="Africa/Luanda">
                          W. Central Africa Standard Time (Africa/Luanda)
                        </option>
                        <option value="Africa/Malabo">
                          W. Central Africa Standard Time (Africa/Malabo)
                        </option>
                        <option value="Africa/Ndjamena">
                          W. Central Africa Standard Time (Africa/Ndjamena)
                        </option>
                        <option value="Africa/Niamey">
                          W. Central Africa Standard Time (Africa/Niamey)
                        </option>
                        <option value="Africa/Porto-Novo">
                          W. Central Africa Standard Time (Africa/Porto-Novo)
                        </option>
                        <option value="Africa/Tunis">
                          W. Central Africa Standard Time (Africa/Tunis)
                        </option>
                        <option value="Etc/GMT-1">
                          W. Central Africa Standard Time (Etc/GMT-1)
                        </option>
                        <option value="Arctic/Longyearbyen">
                          W. Europe Standard Time (Arctic/Longyearbyen)
                        </option>
                        <option value="Europe/Amsterdam">
                          W. Europe Standard Time (Europe/Amsterdam)
                        </option>
                        <option value="Europe/Andorra">
                          W. Europe Standard Time (Europe/Andorra)
                        </option>
                        <option value="Europe/Berlin">
                          W. Europe Standard Time (Europe/Berlin)
                        </option>
                        <option value="Europe/Busingen">
                          W. Europe Standard Time (Europe/Busingen)
                        </option>
                        <option value="Europe/Gibraltar">
                          W. Europe Standard Time (Europe/Gibraltar)
                        </option>
                        <option value="Europe/Luxembourg">
                          W. Europe Standard Time (Europe/Luxembourg)
                        </option>
                        <option value="Europe/Malta">
                          W. Europe Standard Time (Europe/Malta)
                        </option>
                        <option value="Europe/Monaco">
                          W. Europe Standard Time (Europe/Monaco)
                        </option>
                        <option value="Europe/Oslo">
                          W. Europe Standard Time (Europe/Oslo)
                        </option>
                        <option value="Europe/Rome">
                          W. Europe Standard Time (Europe/Rome)
                        </option>
                        <option value="Europe/San_Marino">
                          W. Europe Standard Time (Europe/San_Marino)
                        </option>
                        <option value="Europe/Stockholm">
                          W. Europe Standard Time (Europe/Stockholm)
                        </option>
                        <option value="Europe/Vaduz">
                          W. Europe Standard Time (Europe/Vaduz)
                        </option>
                        <option value="Europe/Vatican">
                          W. Europe Standard Time (Europe/Vatican)
                        </option>
                        <option value="Europe/Vienna">
                          W. Europe Standard Time (Europe/Vienna)
                        </option>
                        <option value="Europe/Zurich">
                          W. Europe Standard Time (Europe/Zurich)
                        </option>
                        <option value="Antarctica/Mawson">
                          West Asia Standard Time (Antarctica/Mawson)
                        </option>
                        <option value="Asia/Aqtau">
                          West Asia Standard Time (Asia/Aqtau)
                        </option>
                        <option value="Asia/Aqtobe">
                          West Asia Standard Time (Asia/Aqtobe)
                        </option>
                        <option value="Asia/Ashgabat">
                          West Asia Standard Time (Asia/Ashgabat)
                        </option>
                        <option value="Asia/Dushanbe">
                          West Asia Standard Time (Asia/Dushanbe)
                        </option>
                        <option value="Asia/Oral">
                          West Asia Standard Time (Asia/Oral)
                        </option>
                        <option value="Asia/Samarkand">
                          West Asia Standard Time (Asia/Samarkand)
                        </option>
                        <option value="Asia/Tashkent">
                          West Asia Standard Time (Asia/Tashkent)
                        </option>
                        <option value="Etc/GMT-5">
                          West Asia Standard Time (Etc/GMT-5)
                        </option>
                        <option value="Indian/Kerguelen">
                          West Asia Standard Time (Indian/Kerguelen)
                        </option>
                        <option value="Indian/Maldives">
                          West Asia Standard Time (Indian/Maldives)
                        </option>
                        <option value="Antarctica/DumontDUrville">
                          West Pacific Standard Time (Antarctica/DumontDUrville)
                        </option>
                        <option value="Etc/GMT-10">
                          West Pacific Standard Time (Etc/GMT-10)
                        </option>
                        <option value="Pacific/Guam">
                          West Pacific Standard Time (Pacific/Guam)
                        </option>
                        <option value="Pacific/Port_Moresby">
                          West Pacific Standard Time (Pacific/Port_Moresby)
                        </option>
                        <option value="Pacific/Saipan">
                          West Pacific Standard Time (Pacific/Saipan)
                        </option>
                        <option value="Pacific/Truk">
                          West Pacific Standard Time (Pacific/Truk)
                        </option>
                        <option value="Asia/Khandyga">
                          Yakutsk Standard Time (Asia/Khandyga)
                        </option>
                        <option value="Asia/Yakutsk">
                          Yakutsk Standard Time (Asia/Yakutsk)
                        </option>
                      </select>
                      <div className="field-border" />
                      <div className="field-suffix">
                        <svg
                          viewBox="0 0 20 20"
                          width="1rem"
                          height="1.25rem"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments_setting;
