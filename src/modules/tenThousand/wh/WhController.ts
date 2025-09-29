import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("whs")
export default class WhController {
  @operation({
    summary: "Get Whs",
  })
  @get()
  static getWhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wh",
  })
  @post("{id}")
  static createWh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
