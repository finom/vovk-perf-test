import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcvs")
export default class GcvController {
  @operation({
    summary: "Get Gcvs",
  })
  @get()
  static getGcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcv",
  })
  @post("{id}")
  static createGcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
