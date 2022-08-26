import React from 'react';

const Variants = () => {
    return (
        <section id="variants" className="variants">
            <h2>Варианты вручения подарка</h2>
            <div className="variantbtns">
                <div className="container">
                    <button className="active">
                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.30361 10.189L7.80895 8.87063C8.25947 8.77932 8.65025 8.50148 8.88445 8.10593L11.5635 3.58138L13.2121 0.797076C13.8413 -0.265692 15.3793 -0.265692 16.0086 0.797076L20.3362 8.10593C20.5704 8.50148 20.9612 8.77932 21.4117 8.87063L27.9171 10.189C29.1825 10.4455 29.6578 12.0041 28.7509 12.9231L23.3395 18.4067C22.9616 18.7896 22.7977 19.3349 22.9019 19.8627L24.121 26.0393C24.3832 27.3681 23.0004 28.4157 21.7923 27.8036L15.3448 24.5368C14.8831 24.3029 14.3376 24.3029 13.8759 24.5368L7.42841 27.8036C6.22029 28.4157 4.83747 27.3681 5.09972 26.0393L6.31879 19.8627C6.42297 19.3349 6.25911 18.7896 5.88118 18.4067L0.469746 12.9231C-0.437154 12.0041 0.0382058 10.4455 1.30361 10.189Z"
                                fill="#B4B4B4"/>
                        </svg>
                        Подарочная коробка<span></span></button>
                    <button>
                        <svg width="30" height="21" viewBox="0 0 30 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.5 0C2.01472 0 0 2.01472 0 4.5V16.5C0 18.9853 2.01472 21 4.5 21H25.5C27.9853 21 30 18.9853 30 16.5V4.5C30 2.01472 27.9853 0 25.5 0H4.5ZM5.2441 3.19762C4.52482 2.7866 3.60854 3.0365 3.19753 3.75577C2.78651 4.47505 3.03641 5.39133 3.75568 5.80235L14.2557 11.8023C14.7168 12.0659 15.2829 12.0659 15.7441 11.8023L26.2441 5.80235C26.9634 5.39133 27.2133 4.47505 26.8023 3.75577C26.3912 3.0365 25.475 2.7866 24.7557 3.19762L14.9999 8.77236L5.2441 3.19762Z"
                                  fill="#B4B4B4"/>
                        </svg>
                        Электронный сертификат<span></span></button>
                    <button>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM11.5 10.35C13.4054 10.35 14.95 8.80538 14.95 6.9C14.95 4.99462 13.4054 3.45 11.5 3.45C9.59462 3.45 8.05 4.99462 8.05 6.9C8.05 8.80538 9.59462 10.35 11.5 10.35ZM4.6 16.1C5.4625 13.5125 9.775 12.65 11.5 12.65C13.225 12.65 17.5375 13.5125 18.4 16.1C17.5375 18.6875 14.0875 19.55 11.5 19.55C8.9125 19.55 5.4625 18.6875 4.6 16.1Z"
                                  fill="#B4B4B4"/>
                        </svg>
                        Для себя<span></span></button>
                </div>
            </div>
            <div className="container variantswrap">
                <div className="variantblock variantblock1 active">
                    <div className="info">
                        <p className="title">Подарочная коробка</p>
                        <p className="text">Получатель определит впечатление <br/> className="hidden-xs"> и дату
                            посещения у нас на сайте</p>
                    </div>
                    <div className="img">
                        <img src="img/variant.png" alt="Подарочная коробка"/>
                    </div>
                </div>
                <div className="variantblock variantblock2">
                    <div className="info">
                        <p className="title">Электронный сертификат</p>
                        <p className="text">Получатель определит впечатление <br/> className="hidden-xs"> и дату
                            посещения у нас на сайте</p>
                    </div>
                    <div className="img">
                        <img src="img/variant.png" alt="Электронный сертификат"/>
                    </div>
                </div>
                <div className="variantblock variantblock3">
                    <div className="info">
                        <p className="title">Для себя</p>
                        <p className="text">Получатель определит впечатление <br/> className="hidden-xs"> и дату
                            посещения у нас на сайте</p>
                    </div>
                    <div className="img">
                        <img src="img/variant.png" alt="Для себя"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Variants;
