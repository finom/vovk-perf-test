import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fils")
export default class FilController {
  @operation({
    summary: "Get Fils",
  })
  @get()
  static getFils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fil",
  })
  @post("{id}")
  static createFil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
