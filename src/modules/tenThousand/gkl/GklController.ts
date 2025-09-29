import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkls")
export default class GklController {
  @operation({
    summary: "Get Gkls",
  })
  @get()
  static getGkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkl",
  })
  @post("{id}")
  static createGkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
