import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldzs")
export default class LdzController {
  @operation({
    summary: "Get Ldzs",
  })
  @get()
  static getLdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldz",
  })
  @post("{id}")
  static createLdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
