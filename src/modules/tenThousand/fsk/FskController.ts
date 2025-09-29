import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsks")
export default class FskController {
  @operation({
    summary: "Get Fsks",
  })
  @get()
  static getFsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsk",
  })
  @post("{id}")
  static createFsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
