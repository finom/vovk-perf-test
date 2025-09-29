import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfbs")
export default class HfbController {
  @operation({
    summary: "Get Hfbs",
  })
  @get()
  static getHfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfb",
  })
  @post("{id}")
  static createHfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
