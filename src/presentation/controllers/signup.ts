import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'
import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { badRequest } from '@src/presentation/helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for(const field of requiredFields){
      if(!httpRequest.body[field]){
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
