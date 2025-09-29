import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxms")
export default class CxmController {
  @operation({
    summary: "Get Cxms",
  })
  @get()
  static getCxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxm",
  })
  @post("{id}")
  static createCxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
