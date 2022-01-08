import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const ComingSoon = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2022 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div className="coming-soon-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="coming-soon-content">
              <h1>Sắp có</h1>
              <p>
                Hiện tại trang web của chúng tôi vẫn đang tiếp tục hoàn thiện.
                Cảm ơn sự quan tâm của bạn.
              </p>
              <Link href="/">
                <a className="btn btn-primary">Về trang chủ</a>
              </Link>
              <form>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Nhập địa chỉ email của bạn"
                  name="email"
                  required
                />

                <button type="submit" className="submit-btn">
                  Nhắc tôi
                </button>
              </form>

              <div id="timer">
                <div id="days">
                  {days} <span>Ngày</span>
                </div>
                <div id="hours">
                  {hours} <span>Giờ</span>
                </div>
                <div id="minutes">
                  {minutes} <span>Phút</span>
                </div>
                <div id="seconds">
                  {seconds} <span>Giây</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="social-list">
        <li className="list-heading">Theo dõi chúng tôi để biết thêm thông tin:</li>
        <li>
          <a href="#" className="facebook" target="_blank">
            <Icon.Facebook />
          </a>
        </li>
        <li>
          <a href="#" className="twitter" target="_blank">
            <Icon.Twitter />
          </a>
        </li>
        <li>
          <a href="#" className="instagram" target="_blank">
            <Icon.Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ComingSoon;
