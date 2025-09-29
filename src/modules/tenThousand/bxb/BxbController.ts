import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxbs")
export default class BxbController {
  @operation({
    summary: "Get Bxbs",
  })
  @get()
  static getBxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxb",
  })
  @post("{id}")
  static createBxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
