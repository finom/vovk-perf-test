import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtns")
export default class DtnController {
  @operation({
    summary: "Get Dtns",
  })
  @get()
  static getDtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtn",
  })
  @post("{id}")
  static createDtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
