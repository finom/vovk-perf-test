import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtws")
export default class DtwController {
  @operation({
    summary: "Get Dtws",
  })
  @get()
  static getDtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtw",
  })
  @post("{id}")
  static createDtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
