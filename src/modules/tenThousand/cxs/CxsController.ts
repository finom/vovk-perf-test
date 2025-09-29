import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxs")
export default class CxsController {
  @operation({
    summary: "Get Cxs",
  })
  @get()
  static getCxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxs",
  })
  @post("{id}")
  static createCxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
