import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abms")
export default class AbmController {
  @operation({
    summary: "Get Abms",
  })
  @get()
  static getAbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abm",
  })
  @post("{id}")
  static createAbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
