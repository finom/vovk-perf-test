import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxzs")
export default class GxzController {
  @operation({
    summary: "Get Gxzs",
  })
  @get()
  static getGxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxz",
  })
  @post("{id}")
  static createGxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
