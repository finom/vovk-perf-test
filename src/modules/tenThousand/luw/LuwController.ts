import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luws")
export default class LuwController {
  @operation({
    summary: "Get Luws",
  })
  @get()
  static getLuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luw",
  })
  @post("{id}")
  static createLuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
