import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heks")
export default class HekController {
  @operation({
    summary: "Get Heks",
  })
  @get()
  static getHeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hek",
  })
  @post("{id}")
  static createHek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
