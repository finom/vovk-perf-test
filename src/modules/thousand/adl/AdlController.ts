import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adls")
export default class AdlController {
  @operation({
    summary: "Get Adls",
  })
  @get()
  static getAdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adl",
  })
  @post("{id}")
  static createAdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
