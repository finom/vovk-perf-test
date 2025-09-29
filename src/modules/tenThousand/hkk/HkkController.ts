import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkks")
export default class HkkController {
  @operation({
    summary: "Get Hkks",
  })
  @get()
  static getHkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkk",
  })
  @post("{id}")
  static createHkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
