import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buvs")
export default class BuvController {
  @operation({
    summary: "Get Buvs",
  })
  @get()
  static getBuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buv",
  })
  @post("{id}")
  static createBuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
