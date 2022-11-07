/**
 * to implement a new error class you need to create one at bottom of this file
 * this class extends of GeneralError, example:
 *
 * class NewErrorType extends GeneralError {}
 *
 * after create a new error class, you must add in switch inside get code function
 * as the others errors, example:
 *
 * case NewErrorType.name:
        return xxx;
*/
class GeneralError extends Error {
    constructor (message) {
      super()
      this.message = message
    }
  
    get code () {
      switch (this.constructor.name) {
        case BadRequest.name:
          return 400
        case Unauthorized.name:
          return 401
        case Forbidden.name:
          return 403
        case NotFound.name:
          return 404
        case IamATeapot.name:
          return 418
        case UnprocessableEntity.name:
          return 422
        default:
          return 500
      }
    }
  
    get statusCode () { return this.code }
  }
  
  class BadRequest extends GeneralError {}
  class Unauthorized extends GeneralError {}
  class Forbidden extends GeneralError {}
  class IamATeapot extends GeneralError {}
  class NotFound extends GeneralError {}
  class UnprocessableEntity extends GeneralError {}
  
export {
    GeneralError,
    BadRequest,
    Unauthorized,
    Forbidden,
    IamATeapot,
    NotFound,
    UnprocessableEntity
  }
  