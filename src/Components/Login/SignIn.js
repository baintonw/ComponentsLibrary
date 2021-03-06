import React from "react";

//Styles
import './signin.scss'

const SignIn = () => {
    return(
        <div className="signIn">
            <div className="box">
                <input type="checkbox" id="toggle" className="box__toggle" hidden/>
                    <img className="box__image" src="https://picsum.photos/300"/>
                
                {/* Sign up form */}
                <form className="form form__register" action="">
                    <h1 className="form__title">Sign Up</h1>
                    {/* User */}
                    <div className="form__helper">
                        <input className="form__input" id="new-user" type="text" name="user" placeholder="User"></input>
                        <label className="form__label" for="new-user">User</label>
                    </div>
                    {/* Email */}
                    <div className="form__helper">
                        <input className="form__input" type="email" name="email" id="email" placeholder="Email"></input>
                        <label className="form__label" for="email">Email</label>
                    </div>
                    {/* Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="new-user-password" placeholder="Password"></input>
                        <label className="form__label" for="new-user-password">Password</label>
                    </div>
                    {/* Confirm Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="confirm-password" placeholder="Confirm Password"></input>
                        <label className="form__label" for="confirm-password">Confirm Password</label>
                    </div>

                    {/* Submit Button */}

                    <button type="submit" className="form__button">Register</button>
                    <p className="form__text">Already have an account?</p>
                    <label for="toggle" className="form__link">Sign In!</label>
                </form>

                {/* ---------------------- */}

                {/* Sign In form (default) */}
                <form className="form form__register" action="">
                    <h1 className="form__title">Sign In</h1>

                    {/* User */}
                    <div className="form__helper">
                        <input className="form__input" id="new-user" type="text" name="user" placeholder="User"></input>
                        <label className="form__label" for="new-user">User</label>
                    </div>

                    {/* Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="new-user-password"
                                placeholder="Password"></input>
                        <label className="form__label" for="new-user-password">Password</label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="form__button">Log in</button>
                    <p className="form__text">Don't have an account?</p>
                    <label for="toggle" className="form__link">Sign Up!</label>
                </form>

            </div>




















            {/* <div class="container">
                <div class="box">
                <input type="checkbox" id="toggle" class="box__toggle" hidden />
                <img src="https://source.unsplash.com/zv3ckJKftC4/300x400" alt="Picture by Autumn Studio" class="box__image" />
                <form class="form form--register" action="">
                    <h1 class="form__title">Sign up</h1>

                    <div class="form__helper">
                        <input type="text" name="user" id="new-user" placeholder="User" class="form__input" />
                        <label class="form__label" for="new-user">User</label>
                    </div>

                    <div class="form__helper">
                        <input type="email" name="email" id="email" placeholder="Email" class="form__input" />
                        <label class="form__label" for="email">Email</label>
                    </div>

                    <div class="form__helper">
                        <input type="password" name="password" id="new-user-password" placeholder="Password" class="form__input" />
                        <label class="form__label" for="new-user-password">Password</label>
                    </div>

                    <div class="form__helper">
                        <input type="password" name="password" id="confirm-password" Placeholder="Confirm password" class="form__input" />
                        <label class="form__label" for="confirm-password">Confirm password</label>
                    </div>

                    <button type="submit" class="form__button">Register</button>

                    <p class="form__text">Already have an account?</p> <label for="toggle" class="form__link">Sign in!</label>
                </form>

                <form class="form form--login" action="">
                    <h1 class="form__title">Sign in</h1>

                    <div class="form__helper">
                        <input type="text" name="user" id="user" placeholder="User" class="form__input" />
                        <label class="form__label" for="user">User</label>
                    </div>

                    <div class="form__helper">
                        <input type="password" name="password" id="password" placeholder="Password" class="form__input" />
                        <label class="form__label" for="password">Password</label>
                    </div>

                    <button type="submit" class="form__button">Login</button>

                    <p class="form__text">Don't have an account?</p><label for="toggle" class="form__link">Sign up!</label>
                </form>
                </div>
            </div> */}
        </div>
    )
}

export default SignIn;