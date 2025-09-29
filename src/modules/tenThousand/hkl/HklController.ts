import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkls")
export default class HklController {
  @operation({
    summary: "Get Hkls",
  })
  @get()
  static getHkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkl",
  })
  @post("{id}")
  static createHkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
