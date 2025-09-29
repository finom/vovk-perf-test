import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gphs")
export default class GphController {
  @operation({
    summary: "Get Gphs",
  })
  @get()
  static getGphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gph",
  })
  @post("{id}")
  static createGph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
