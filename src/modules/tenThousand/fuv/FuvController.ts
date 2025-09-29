import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuvs")
export default class FuvController {
  @operation({
    summary: "Get Fuvs",
  })
  @get()
  static getFuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuv",
  })
  @post("{id}")
  static createFuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
