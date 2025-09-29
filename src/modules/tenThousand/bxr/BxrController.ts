import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxrs")
export default class BxrController {
  @operation({
    summary: "Get Bxrs",
  })
  @get()
  static getBxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxr",
  })
  @post("{id}")
  static createBxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
