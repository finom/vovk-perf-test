import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvzs")
export default class HvzController {
  @operation({
    summary: "Get Hvzs",
  })
  @get()
  static getHvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvz",
  })
  @post("{id}")
  static createHvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
