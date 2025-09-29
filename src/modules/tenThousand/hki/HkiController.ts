import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkis")
export default class HkiController {
  @operation({
    summary: "Get Hkis",
  })
  @get()
  static getHkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hki",
  })
  @post("{id}")
  static createHki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
