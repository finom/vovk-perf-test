import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdps")
export default class CdpController {
  @operation({
    summary: "Get Cdps",
  })
  @get()
  static getCdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdp",
  })
  @post("{id}")
  static createCdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
