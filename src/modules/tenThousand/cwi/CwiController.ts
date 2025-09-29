import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwis")
export default class CwiController {
  @operation({
    summary: "Get Cwis",
  })
  @get()
  static getCwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwi",
  })
  @post("{id}")
  static createCwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
