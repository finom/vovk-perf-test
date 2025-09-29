import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbvs")
export default class MbvController {
  @operation({
    summary: "Get Mbvs",
  })
  @get()
  static getMbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbv",
  })
  @post("{id}")
  static createMbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
