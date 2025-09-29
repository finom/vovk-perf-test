import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldbs")
export default class LdbController {
  @operation({
    summary: "Get Ldbs",
  })
  @get()
  static getLdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldb",
  })
  @post("{id}")
  static createLdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
