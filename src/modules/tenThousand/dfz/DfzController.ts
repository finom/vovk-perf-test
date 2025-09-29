import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfzs")
export default class DfzController {
  @operation({
    summary: "Get Dfzs",
  })
  @get()
  static getDfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfz",
  })
  @post("{id}")
  static createDfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
