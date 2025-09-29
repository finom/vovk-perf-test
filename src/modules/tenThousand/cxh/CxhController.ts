import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxhs")
export default class CxhController {
  @operation({
    summary: "Get Cxhs",
  })
  @get()
  static getCxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxh",
  })
  @post("{id}")
  static createCxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
