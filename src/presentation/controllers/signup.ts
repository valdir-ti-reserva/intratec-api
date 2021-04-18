import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'
import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { badRequest } from '@src/presentation/helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if(!httpRequest.body.name){
      return badRequest(new MissingParamError('name'))    
    }
    if(!httpRequest.body.email){
      return badRequest(new MissingParamError('email'))
    }
  }
}
