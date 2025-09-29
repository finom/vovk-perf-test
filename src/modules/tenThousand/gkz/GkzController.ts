import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkzs")
export default class GkzController {
  @operation({
    summary: "Get Gkzs",
  })
  @get()
  static getGkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkz",
  })
  @post("{id}")
  static createGkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
