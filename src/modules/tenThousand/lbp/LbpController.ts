import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbps")
export default class LbpController {
  @operation({
    summary: "Get Lbps",
  })
  @get()
  static getLbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbp",
  })
  @post("{id}")
  static createLbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
