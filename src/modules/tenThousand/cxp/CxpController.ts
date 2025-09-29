import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxps")
export default class CxpController {
  @operation({
    summary: "Get Cxps",
  })
  @get()
  static getCxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxp",
  })
  @post("{id}")
  static createCxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
