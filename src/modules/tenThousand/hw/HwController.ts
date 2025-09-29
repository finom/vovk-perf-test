import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hws")
export default class HwController {
  @operation({
    summary: "Get Hws",
  })
  @get()
  static getHws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hw",
  })
  @post("{id}")
  static createHw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
