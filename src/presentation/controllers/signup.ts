import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'
import { MissingParamError, InvalidParamError } from '@src/presentation/errors'
import { badRequest, serverError } from '@src/presentation/helpers/http-helper'
import { Controller } from '@src/presentation/protocols/controller'
import { EmailValidator } from '@src/presentation/protocols/email-validator'
export class SignUpController implements Controller{
  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator){
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for(const field of requiredFields){
        if(!httpRequest.body[field]){
          return badRequest(new MissingParamError(field))
        }
      }
      
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if(!isValid){
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
