import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxrs")
export default class CxrController {
  @operation({
    summary: "Get Cxrs",
  })
  @get()
  static getCxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxr",
  })
  @post("{id}")
  static createCxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
