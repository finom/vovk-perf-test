import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdds")
export default class CddController {
  @operation({
    summary: "Get Cdds",
  })
  @get()
  static getCdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdd",
  })
  @post("{id}")
  static createCdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
