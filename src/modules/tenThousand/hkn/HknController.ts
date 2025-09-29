import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkns")
export default class HknController {
  @operation({
    summary: "Get Hkns",
  })
  @get()
  static getHkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkn",
  })
  @post("{id}")
  static createHkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
