import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlus")
export default class DluController {
  @operation({
    summary: "Get Dlus",
  })
  @get()
  static getDlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlu",
  })
  @post("{id}")
  static createDlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
