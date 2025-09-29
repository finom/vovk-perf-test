import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxvs")
export default class GxvController {
  @operation({
    summary: "Get Gxvs",
  })
  @get()
  static getGxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxv",
  })
  @post("{id}")
  static createGxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
