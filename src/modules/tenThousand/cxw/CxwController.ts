import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxws")
export default class CxwController {
  @operation({
    summary: "Get Cxws",
  })
  @get()
  static getCxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxw",
  })
  @post("{id}")
  static createCxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
