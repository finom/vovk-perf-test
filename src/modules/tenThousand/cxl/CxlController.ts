import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxls")
export default class CxlController {
  @operation({
    summary: "Get Cxls",
  })
  @get()
  static getCxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxl",
  })
  @post("{id}")
  static createCxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
