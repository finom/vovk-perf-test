import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbis")
export default class FbiController {
  @operation({
    summary: "Get Fbis",
  })
  @get()
  static getFbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbi",
  })
  @post("{id}")
  static createFbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
