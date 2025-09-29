import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxgs")
export default class BxgController {
  @operation({
    summary: "Get Bxgs",
  })
  @get()
  static getBxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxg",
  })
  @post("{id}")
  static createBxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
