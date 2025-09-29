import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duvs")
export default class DuvController {
  @operation({
    summary: "Get Duvs",
  })
  @get()
  static getDuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duv",
  })
  @post("{id}")
  static createDuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
