import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkhs")
export default class HkhController {
  @operation({
    summary: "Get Hkhs",
  })
  @get()
  static getHkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkh",
  })
  @post("{id}")
  static createHkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
