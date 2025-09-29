import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijrs")
export default class IjrController {
  @operation({
    summary: "Get Ijrs",
  })
  @get()
  static getIjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijr",
  })
  @post("{id}")
  static createIjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
