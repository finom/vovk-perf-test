import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkqs")
export default class HkqController {
  @operation({
    summary: "Get Hkqs",
  })
  @get()
  static getHkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkq",
  })
  @post("{id}")
  static createHkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
