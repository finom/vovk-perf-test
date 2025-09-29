import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cacs")
export default class CacController {
  @operation({
    summary: "Get Cacs",
  })
  @get()
  static getCacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cac",
  })
  @post("{id}")
  static createCac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
