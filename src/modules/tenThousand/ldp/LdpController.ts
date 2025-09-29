import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldps")
export default class LdpController {
  @operation({
    summary: "Get Ldps",
  })
  @get()
  static getLdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldp",
  })
  @post("{id}")
  static createLdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
