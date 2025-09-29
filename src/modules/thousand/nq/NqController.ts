import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqs")
export default class NqController {
  @operation({
    summary: "Get Nqs",
  })
  @get()
  static getNqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nq",
  })
  @post("{id}")
  static createNq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
