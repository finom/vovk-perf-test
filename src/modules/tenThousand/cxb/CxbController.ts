import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxbs")
export default class CxbController {
  @operation({
    summary: "Get Cxbs",
  })
  @get()
  static getCxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxb",
  })
  @post("{id}")
  static createCxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
