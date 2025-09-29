import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pqs")
export default class PqController {
  @operation({
    summary: "Get Pqs",
  })
  @get()
  static getPqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pq",
  })
  @post("{id}")
  static createPq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
