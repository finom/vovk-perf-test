import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxhs")
export default class BxhController {
  @operation({
    summary: "Get Bxhs",
  })
  @get()
  static getBxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxh",
  })
  @post("{id}")
  static createBxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
