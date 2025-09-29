import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkbs")
export default class HkbController {
  @operation({
    summary: "Get Hkbs",
  })
  @get()
  static getHkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkb",
  })
  @post("{id}")
  static createHkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
