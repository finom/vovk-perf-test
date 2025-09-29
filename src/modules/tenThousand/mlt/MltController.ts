import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlts")
export default class MltController {
  @operation({
    summary: "Get Mlts",
  })
  @get()
  static getMlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlt",
  })
  @post("{id}")
  static createMlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
