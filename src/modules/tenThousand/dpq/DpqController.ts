import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpqs")
export default class DpqController {
  @operation({
    summary: "Get Dpqs",
  })
  @get()
  static getDpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpq",
  })
  @post("{id}")
  static createDpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
