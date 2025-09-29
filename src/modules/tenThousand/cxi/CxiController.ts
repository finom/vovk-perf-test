import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxis")
export default class CxiController {
  @operation({
    summary: "Get Cxis",
  })
  @get()
  static getCxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxi",
  })
  @post("{id}")
  static createCxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
