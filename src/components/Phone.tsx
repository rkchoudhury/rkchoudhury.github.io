import { Github, Linkedin, Mail, SignalHighIcon, BatteryFullIcon, WifiHighIcon } from "lucide-react";
import { profile } from "../configs";

export const Phone = () => {
    return (
        <div className="phonewrap enter">
            <div className="phone">
                <div className="screen">
                    <div className="status">
                        <span>10:45</span>
                        <span className="status-icons">
                            5G
                            <SignalHighIcon size={10} />
                            <WifiHighIcon size={10} />
                            <BatteryFullIcon size={12} />
                        </span>
                    </div>
                    <div className="pbody">
                        <div className="avatar">{profile.nickName}</div>
                        <div>
                            <div className="pname">{profile.name}</div>
                            <div className="prole">● {profile.role}</div>
                        </div>
                        <div className="pchips">
                            <i>React Native</i>
                            <i>TypeScript</i>
                            <i>Android</i>
                            <i>Node.js</i>
                        </div>
                        <div className="pcards">
                            <div>
                                <b>8+</b>
                                <small>years</small>
                            </div>
                            <div>
                                <b>50+</b>
                                <small>JS files</small>
                            </div>
                            <div>
                                <b>40%</b>
                                <small>fewer errors</small>
                            </div>
                            <div>
                                <b>35%</b>
                                <small>retention</small>
                            </div>
                        </div>
                    </div>
                    <div className="plog">
                        <div>I/EY: reusable RN components</div>
                        <div>D/BLE: controller data streaming</div>
                        <div>I/TS: 50+ files migrated</div>
                        <div>I/UX: retention +35%</div>
                    </div>
                    <div className="pnav">
                        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={12} /></a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={12} /></a>
                        <a href={`mailto:${profile.email}`}><Mail size={12} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};