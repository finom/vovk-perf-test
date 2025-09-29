import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgps")
export default class BgpController {
  @operation({
    summary: "Get Bgps",
  })
  @get()
  static getBgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgp",
  })
  @post("{id}")
  static createBgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
