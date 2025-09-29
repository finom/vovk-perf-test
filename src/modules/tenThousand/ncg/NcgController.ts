import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncgs")
export default class NcgController {
  @operation({
    summary: "Get Ncgs",
  })
  @get()
  static getNcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncg",
  })
  @post("{id}")
  static createNcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
