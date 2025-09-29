import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dups")
export default class DupController {
  @operation({
    summary: "Get Dups",
  })
  @get()
  static getDups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dup",
  })
  @post("{id}")
  static createDup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
