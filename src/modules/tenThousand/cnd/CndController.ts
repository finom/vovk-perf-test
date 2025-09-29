import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnds")
export default class CndController {
  @operation({
    summary: "Get Cnds",
  })
  @get()
  static getCnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnd",
  })
  @post("{id}")
  static createCnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
