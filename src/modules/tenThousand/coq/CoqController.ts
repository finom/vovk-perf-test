import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coqs")
export default class CoqController {
  @operation({
    summary: "Get Coqs",
  })
  @get()
  static getCoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coq",
  })
  @post("{id}")
  static createCoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
