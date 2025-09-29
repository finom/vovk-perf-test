import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxgs")
export default class GxgController {
  @operation({
    summary: "Get Gxgs",
  })
  @get()
  static getGxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxg",
  })
  @post("{id}")
  static createGxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
