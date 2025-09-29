import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxqs")
export default class CxqController {
  @operation({
    summary: "Get Cxqs",
  })
  @get()
  static getCxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxq",
  })
  @post("{id}")
  static createCxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
