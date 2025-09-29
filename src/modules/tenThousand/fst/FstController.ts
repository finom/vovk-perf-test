import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsts")
export default class FstController {
  @operation({
    summary: "Get Fsts",
  })
  @get()
  static getFsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fst",
  })
  @post("{id}")
  static createFst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
