import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brps")
export default class BrpController {
  @operation({
    summary: "Get Brps",
  })
  @get()
  static getBrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brp",
  })
  @post("{id}")
  static createBrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
