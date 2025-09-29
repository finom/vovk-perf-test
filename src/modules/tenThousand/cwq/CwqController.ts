import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwqs")
export default class CwqController {
  @operation({
    summary: "Get Cwqs",
  })
  @get()
  static getCwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwq",
  })
  @post("{id}")
  static createCwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
