import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkus")
export default class HkuController {
  @operation({
    summary: "Get Hkus",
  })
  @get()
  static getHkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hku",
  })
  @post("{id}")
  static createHku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
