import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxds")
export default class CxdController {
  @operation({
    summary: "Get Cxds",
  })
  @get()
  static getCxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxd",
  })
  @post("{id}")
  static createCxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
