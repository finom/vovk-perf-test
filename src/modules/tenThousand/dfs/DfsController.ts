import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfs")
export default class DfsController {
  @operation({
    summary: "Get Dfs",
  })
  @get()
  static getDfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfs",
  })
  @post("{id}")
  static createDfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
