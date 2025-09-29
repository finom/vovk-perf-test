import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxms")
export default class BxmController {
  @operation({
    summary: "Get Bxms",
  })
  @get()
  static getBxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxm",
  })
  @post("{id}")
  static createBxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
