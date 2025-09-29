import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laws")
export default class LawController {
  @operation({
    summary: "Get Laws",
  })
  @get()
  static getLaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Law",
  })
  @post("{id}")
  static createLaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
