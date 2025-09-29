import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvcs")
export default class CvcController {
  @operation({
    summary: "Get Cvcs",
  })
  @get()
  static getCvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvc",
  })
  @post("{id}")
  static createCvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
