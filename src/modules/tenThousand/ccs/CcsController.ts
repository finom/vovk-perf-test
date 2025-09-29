import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccs")
export default class CcsController {
  @operation({
    summary: "Get Ccs",
  })
  @get()
  static getCcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccs",
  })
  @post("{id}")
  static createCcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
