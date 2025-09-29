import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxqs")
export default class BxqController {
  @operation({
    summary: "Get Bxqs",
  })
  @get()
  static getBxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxq",
  })
  @post("{id}")
  static createBxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
