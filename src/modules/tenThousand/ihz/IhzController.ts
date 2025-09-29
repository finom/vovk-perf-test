import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihzs")
export default class IhzController {
  @operation({
    summary: "Get Ihzs",
  })
  @get()
  static getIhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihz",
  })
  @post("{id}")
  static createIhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
