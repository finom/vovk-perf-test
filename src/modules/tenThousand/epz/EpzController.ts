import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epzs")
export default class EpzController {
  @operation({
    summary: "Get Epzs",
  })
  @get()
  static getEpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epz",
  })
  @post("{id}")
  static createEpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
