import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfvs")
export default class DfvController {
  @operation({
    summary: "Get Dfvs",
  })
  @get()
  static getDfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfv",
  })
  @post("{id}")
  static createDfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
