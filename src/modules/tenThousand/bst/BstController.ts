import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsts")
export default class BstController {
  @operation({
    summary: "Get Bsts",
  })
  @get()
  static getBsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bst",
  })
  @post("{id}")
  static createBst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
