import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkxes")
export default class HkxController {
  @operation({
    summary: "Get Hkxes",
  })
  @get()
  static getHkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkx",
  })
  @post("{id}")
  static createHkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
