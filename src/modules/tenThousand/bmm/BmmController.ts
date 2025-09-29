import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmms")
export default class BmmController {
  @operation({
    summary: "Get Bmms",
  })
  @get()
  static getBmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmm",
  })
  @post("{id}")
  static createBmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
