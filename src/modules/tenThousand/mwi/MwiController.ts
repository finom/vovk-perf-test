import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwis")
export default class MwiController {
  @operation({
    summary: "Get Mwis",
  })
  @get()
  static getMwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwi",
  })
  @post("{id}")
  static createMwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
