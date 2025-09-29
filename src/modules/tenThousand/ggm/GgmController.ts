import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggms")
export default class GgmController {
  @operation({
    summary: "Get Ggms",
  })
  @get()
  static getGgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggm",
  })
  @post("{id}")
  static createGgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
