import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkzs")
export default class DkzController {
  @operation({
    summary: "Get Dkzs",
  })
  @get()
  static getDkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkz",
  })
  @post("{id}")
  static createDkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
