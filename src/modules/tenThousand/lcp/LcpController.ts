import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcps")
export default class LcpController {
  @operation({
    summary: "Get Lcps",
  })
  @get()
  static getLcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcp",
  })
  @post("{id}")
  static createLcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
