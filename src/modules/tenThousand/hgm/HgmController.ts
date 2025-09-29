import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgms")
export default class HgmController {
  @operation({
    summary: "Get Hgms",
  })
  @get()
  static getHgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgm",
  })
  @post("{id}")
  static createHgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
