import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfus")
export default class DfuController {
  @operation({
    summary: "Get Dfus",
  })
  @get()
  static getDfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfu",
  })
  @post("{id}")
  static createDfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
