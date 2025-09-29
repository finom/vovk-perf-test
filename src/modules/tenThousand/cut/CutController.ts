import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuts")
export default class CutController {
  @operation({
    summary: "Get Cuts",
  })
  @get()
  static getCuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cut",
  })
  @post("{id}")
  static createCut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
