import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbps")
export default class MbpController {
  @operation({
    summary: "Get Mbps",
  })
  @get()
  static getMbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbp",
  })
  @post("{id}")
  static createMbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
