import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwis")
export default class BwiController {
  @operation({
    summary: "Get Bwis",
  })
  @get()
  static getBwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwi",
  })
  @post("{id}")
  static createBwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
