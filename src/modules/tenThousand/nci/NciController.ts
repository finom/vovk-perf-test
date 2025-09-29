import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncis")
export default class NciController {
  @operation({
    summary: "Get Ncis",
  })
  @get()
  static getNcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nci",
  })
  @post("{id}")
  static createNci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
