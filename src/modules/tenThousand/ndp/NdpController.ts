import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndps")
export default class NdpController {
  @operation({
    summary: "Get Ndps",
  })
  @get()
  static getNdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndp",
  })
  @post("{id}")
  static createNdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
