import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmis")
export default class NmiController {
  @operation({
    summary: "Get Nmis",
  })
  @get()
  static getNmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmi",
  })
  @post("{id}")
  static createNmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
