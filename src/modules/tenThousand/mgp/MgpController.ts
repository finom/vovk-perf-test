import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgps")
export default class MgpController {
  @operation({
    summary: "Get Mgps",
  })
  @get()
  static getMgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgp",
  })
  @post("{id}")
  static createMgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
