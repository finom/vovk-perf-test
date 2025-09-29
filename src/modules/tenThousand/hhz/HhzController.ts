import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhzs")
export default class HhzController {
  @operation({
    summary: "Get Hhzs",
  })
  @get()
  static getHhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhz",
  })
  @post("{id}")
  static createHhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
