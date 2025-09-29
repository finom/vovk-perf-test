import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdps")
export default class KdpController {
  @operation({
    summary: "Get Kdps",
  })
  @get()
  static getKdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdp",
  })
  @post("{id}")
  static createKdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
