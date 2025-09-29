import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flzs")
export default class FlzController {
  @operation({
    summary: "Get Flzs",
  })
  @get()
  static getFlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flz",
  })
  @post("{id}")
  static createFlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
