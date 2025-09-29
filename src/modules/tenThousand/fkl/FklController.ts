import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkls")
export default class FklController {
  @operation({
    summary: "Get Fkls",
  })
  @get()
  static getFkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkl",
  })
  @post("{id}")
  static createFkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
