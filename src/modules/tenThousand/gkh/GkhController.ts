import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkhs")
export default class GkhController {
  @operation({
    summary: "Get Gkhs",
  })
  @get()
  static getGkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkh",
  })
  @post("{id}")
  static createGkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
