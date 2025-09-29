import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhps")
export default class LhpController {
  @operation({
    summary: "Get Lhps",
  })
  @get()
  static getLhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhp",
  })
  @post("{id}")
  static createLhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
