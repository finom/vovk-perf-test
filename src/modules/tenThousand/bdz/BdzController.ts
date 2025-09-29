import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdzs")
export default class BdzController {
  @operation({
    summary: "Get Bdzs",
  })
  @get()
  static getBdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdz",
  })
  @post("{id}")
  static createBdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
