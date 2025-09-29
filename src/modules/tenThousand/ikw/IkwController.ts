import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikws")
export default class IkwController {
  @operation({
    summary: "Get Ikws",
  })
  @get()
  static getIkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikw",
  })
  @post("{id}")
  static createIkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
