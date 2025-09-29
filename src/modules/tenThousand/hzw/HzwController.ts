import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzws")
export default class HzwController {
  @operation({
    summary: "Get Hzws",
  })
  @get()
  static getHzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzw",
  })
  @post("{id}")
  static createHzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
