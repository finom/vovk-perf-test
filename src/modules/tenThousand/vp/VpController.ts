import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vps")
export default class VpController {
  @operation({
    summary: "Get Vps",
  })
  @get()
  static getVps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vp",
  })
  @post("{id}")
  static createVp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
