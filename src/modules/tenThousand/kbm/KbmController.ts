import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbms")
export default class KbmController {
  @operation({
    summary: "Get Kbms",
  })
  @get()
  static getKbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbm",
  })
  @post("{id}")
  static createKbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
