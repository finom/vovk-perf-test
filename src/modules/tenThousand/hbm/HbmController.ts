import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbms")
export default class HbmController {
  @operation({
    summary: "Get Hbms",
  })
  @get()
  static getHbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbm",
  })
  @post("{id}")
  static createHbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
