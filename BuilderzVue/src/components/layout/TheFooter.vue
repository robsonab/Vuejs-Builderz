<template>
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="footer-contact">
                        <h2>Office Contact</h2>
                        <p>
                            <i className="fa fa-map-marker-alt"></i>123 Street, New York,
                            USA
                        </p>
                        <p>
                            <i className="fa fa-phone-alt"></i>+012 345 67890
                        </p>
                        <p>
                            <i className="fa fa-envelope"></i>info@example.com
                        </p>

                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <!-- <FooterLink header="Services Areas" links={serviceLinks} /> -->
                </div>
                <div className="col-md-6 col-lg-3">
                    <!-- <FooterLink header="Useful Pages" links={usefulPageLinks} /> -->
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                            Curabitur facilisis ornare velit non vulpu
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container footer-menu">
            <div className="f-menu">
                <a href="./index.html">Terms of use</a>
                <a href="./index.html">Privacy policy</a>
                <a href="./index.html">Cookies</a>
                <a href="./index.html">Help</a>
                <a href="./index.html">FQAs</a>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        &copy; <a href="./index.html">Your Site Name</a>, All Right
                        Reserved.
                    </p>
                </div>
                <div className="col-md-6">
                    <p>
                        Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$footer-bg: #030f27;
$footer-color: #ffffff;
$highlight-color: #fdbe33;
$border-color: rgba(255, 255, 255, 0.1);
$border-hover-color: rgba(256, 256, 256, 0.3);
$font-family-awesome: "Font Awesome 5 Free";
$font-weight-awesome: 900;
$btn-bg: #121518;

@mixin transition($time) {
    transition: $time;
}

@mixin hover-color($hover-bg, $hover-border, $hover-color) {
    &:hover {
        background: $hover-bg;
        border-color: $hover-border;
        color: $hover-color;
    }
}

.footer {
    position: relative;
    padding-top: 90px;
    background: $footer-bg;
    color: $footer-color;

    .footer-contact,
    .footer-link,
    .newsletter {
        position: relative;
        margin-bottom: 45px;
    }

    h2 {
        position: relative;
        margin-bottom: 20px;
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
        color: $highlight-color;

        &::after {
            position: absolute;
            content: "";
            width: 60px;
            height: 2px;
            left: 0;
            bottom: 0;
            background: $highlight-color;
        }
    }

    .footer-link {
        a {
            display: block;
            margin-bottom: 10px;
            color: $footer-color;
            @include transition(0.3s);

            &::before {
                position: relative;
                content: "\f105";
                font-family: $font-family-awesome;
                font-weight: $font-weight-awesome;
                margin-right: 10px;
            }

            &:hover {
                color: $highlight-color;
                letter-spacing: 1px;
            }
        }
    }

    .footer-contact p i {
        width: 25px;
    }

    .footer-social {
        position: relative;
        margin-top: 20px;

        a {
            display: inline-block;
            width: 40px;
            height: 40px;
            padding: 7px 0;
            text-align: center;
            border: 1px solid $border-hover-color;
            border-radius: 60px;
            @include transition(0.3s);

            i {
                font-size: 15px;
                color: $footer-color;
            }

            @include hover-color($highlight-color, $highlight-color, $footer-bg);
        }
    }

    .newsletter {
        .form {
            position: relative;
            max-width: 400px;
            margin: 0 auto;
        }

        input {
            height: 50px;
            border: 2px solid $btn-bg;
            border-radius: 0;
        }

        .btn {
            position: absolute;
            top: 5px;
            right: 5px;
            height: 40px;
            padding: 8px 10px;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            color: $highlight-color;
            background: $btn-bg;
            border-radius: 0;
            border: 2px solid $highlight-color;
            @include transition(0.3s);

            &:hover {
                color: $btn-bg;
                background: $highlight-color;
            }
        }
    }

    .footer-menu {
        .f-menu {
            position: relative;
            padding: 15px 0;
            font-size: 0;
            text-align: center;
            border-top: 1px solid $border-color;
            border-bottom: 1px solid $border-color;

            a {
                color: $footer-color;
                font-size: 16px;
                margin-right: 15px;
                padding-right: 15px;
                border-right: 1px solid $border-color;

                &:hover {
                    color: $highlight-color;
                }

                &:last-child {
                    margin-right: 0;
                    padding-right: 0;
                    border-right: none;
                }
            }
        }
    }

    .copyright {
        padding: 30px 15px;

        p {
            margin: 0;
            color: $footer-color;

            .col-md-6:last-child & {
                text-align: right;
            }

            a {
                color: $highlight-color;
                font-weight: 500;
                letter-spacing: 1px;

                &:hover {
                    color: $footer-color;
                }
            }
        }

        @media (max-width: 768px) {

            p,
            .col-md-6:last-child p {
                margin: 5px 0;
                text-align: center;
            }
        }
    }
}
</style>