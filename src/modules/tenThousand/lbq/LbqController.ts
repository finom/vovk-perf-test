import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbqs")
export default class LbqController {
  @operation({
    summary: "Get Lbqs",
  })
  @get()
  static getLbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbq",
  })
  @post("{id}")
  static createLbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
