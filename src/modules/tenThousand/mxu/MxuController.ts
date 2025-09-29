import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxus")
export default class MxuController {
  @operation({
    summary: "Get Mxus",
  })
  @get()
  static getMxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxu",
  })
  @post("{id}")
  static createMxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
