import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhcs")
export default class LhcController {
  @operation({
    summary: "Get Lhcs",
  })
  @get()
  static getLhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhc",
  })
  @post("{id}")
  static createLhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
