import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewzs")
export default class EwzController {
  @operation({
    summary: "Get Ewzs",
  })
  @get()
  static getEwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewz",
  })
  @post("{id}")
  static createEwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
