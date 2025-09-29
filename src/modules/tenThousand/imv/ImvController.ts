import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imvs")
export default class ImvController {
  @operation({
    summary: "Get Imvs",
  })
  @get()
  static getImvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imv",
  })
  @post("{id}")
  static createImv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
