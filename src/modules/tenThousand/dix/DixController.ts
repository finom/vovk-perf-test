import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dixes")
export default class DixController {
  @operation({
    summary: "Get Dixes",
  })
  @get()
  static getDixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dix",
  })
  @post("{id}")
  static createDix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
