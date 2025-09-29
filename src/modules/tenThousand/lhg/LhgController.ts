import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhgs")
export default class LhgController {
  @operation({
    summary: "Get Lhgs",
  })
  @get()
  static getLhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhg",
  })
  @post("{id}")
  static createLhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
