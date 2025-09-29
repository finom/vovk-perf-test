import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkzs")
export default class HkzController {
  @operation({
    summary: "Get Hkzs",
  })
  @get()
  static getHkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkz",
  })
  @post("{id}")
  static createHkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
