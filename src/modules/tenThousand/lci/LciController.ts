import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcis")
export default class LciController {
  @operation({
    summary: "Get Lcis",
  })
  @get()
  static getLcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lci",
  })
  @post("{id}")
  static createLci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
