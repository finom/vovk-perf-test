import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbls")
export default class FblController {
  @operation({
    summary: "Get Fbls",
  })
  @get()
  static getFbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbl",
  })
  @post("{id}")
  static createFbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
