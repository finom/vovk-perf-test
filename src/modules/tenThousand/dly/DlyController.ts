import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlies")
export default class DlyController {
  @operation({
    summary: "Get Dlies",
  })
  @get()
  static getDlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dly",
  })
  @post("{id}")
  static createDly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
