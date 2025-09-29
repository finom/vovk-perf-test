import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwzs")
export default class GwzController {
  @operation({
    summary: "Get Gwzs",
  })
  @get()
  static getGwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwz",
  })
  @post("{id}")
  static createGwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
