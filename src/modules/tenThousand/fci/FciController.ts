import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcis")
export default class FciController {
  @operation({
    summary: "Get Fcis",
  })
  @get()
  static getFcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fci",
  })
  @post("{id}")
  static createFci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
