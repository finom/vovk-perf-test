import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wws")
export default class WwController {
  @operation({
    summary: "Get Wws",
  })
  @get()
  static getWws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ww",
  })
  @post("{id}")
  static createWw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
