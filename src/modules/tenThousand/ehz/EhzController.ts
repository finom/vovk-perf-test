import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehzs")
export default class EhzController {
  @operation({
    summary: "Get Ehzs",
  })
  @get()
  static getEhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehz",
  })
  @post("{id}")
  static createEhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
