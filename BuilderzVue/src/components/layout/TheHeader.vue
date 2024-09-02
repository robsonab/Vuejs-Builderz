<template>
    <div class="top-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="logo">
                        <a href="index.html">
                            <h1>Builderz</h1>
                        </a>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 d-none d-lg-block">
                    <div class="row">
                        <div class="col-4">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="flaticon-calendar"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Opening Hour</h3>
                                    <p>Mon - Fri, 8:00 - 9:00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="flaticon-call"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Call Us</h3>
                                    <p>+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="flaticon-send-mail"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.top-bar {
    position: relative;
    height: 90px;
    background: #fdbe33;

    a {
        text-decoration: none;
    }

    .logo {
        padding: 15px 0;
        text-align: left;
        overflow: hidden;

        h1 {
            margin: 0;
            color: #030f27;
            font-size: 60px;
            line-height: 60px;
            font-weight: 700;
        }

        img {
            max-width: 100%;
            max-height: 60px;
        }
    }

    .top-bar-item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .top-bar-icon {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        [class^="flaticon-"]::before {
            margin: 0;
            color: #030f27;
            font-size: 40px;
        }
    }

    .top-bar-text {
        padding-left: 15px;

        h3 {
            margin: 0 0 5px 0;
            color: #030f27;
            font-size: 16px;
            font-weight: 400;
        }

        p {
            margin: 0;
            color: #030f27;
            font-size: 13px;
            font-weight: 400;
        }
    }
}

@media (min-width: 992px) {
    .top-bar {
        padding: 0 60px;
    }
}

@media (max-width: 991.98px) {
    .top-bar {
        .logo {
            text-align: center;
        }
    }
}
</style>