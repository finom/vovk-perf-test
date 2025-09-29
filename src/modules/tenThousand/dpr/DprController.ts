import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dprs")
export default class DprController {
  @operation({
    summary: "Get Dprs",
  })
  @get()
  static getDprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpr",
  })
  @post("{id}")
  static createDpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
