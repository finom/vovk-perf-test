import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbms")
export default class MbmController {
  @operation({
    summary: "Get Mbms",
  })
  @get()
  static getMbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbm",
  })
  @post("{id}")
  static createMbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
