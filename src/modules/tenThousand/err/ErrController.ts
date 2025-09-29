import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("errs")
export default class ErrController {
  @operation({
    summary: "Get Errs",
  })
  @get()
  static getErrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Err",
  })
  @post("{id}")
  static createErr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
