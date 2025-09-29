import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkws")
export default class HkwController {
  @operation({
    summary: "Get Hkws",
  })
  @get()
  static getHkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkw",
  })
  @post("{id}")
  static createHkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
