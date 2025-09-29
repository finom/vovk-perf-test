import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdps")
export default class BdpController {
  @operation({
    summary: "Get Bdps",
  })
  @get()
  static getBdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdp",
  })
  @post("{id}")
  static createBdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
