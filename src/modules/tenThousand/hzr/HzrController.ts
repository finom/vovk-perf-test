import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzrs")
export default class HzrController {
  @operation({
    summary: "Get Hzrs",
  })
  @get()
  static getHzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzr",
  })
  @post("{id}")
  static createHzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
