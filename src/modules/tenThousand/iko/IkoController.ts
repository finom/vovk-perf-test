import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikos")
export default class IkoController {
  @operation({
    summary: "Get Ikos",
  })
  @get()
  static getIkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iko",
  })
  @post("{id}")
  static createIko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
