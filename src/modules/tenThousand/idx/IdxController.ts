import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idxes")
export default class IdxController {
  @operation({
    summary: "Get Idxes",
  })
  @get()
  static getIdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idx",
  })
  @post("{id}")
  static createIdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
