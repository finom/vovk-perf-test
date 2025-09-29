import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfms")
export default class KfmController {
  @operation({
    summary: "Get Kfms",
  })
  @get()
  static getKfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfm",
  })
  @post("{id}")
  static createKfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
