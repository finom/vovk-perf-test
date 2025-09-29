import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("diqs")
export default class DiqController {
  @operation({
    summary: "Get Diqs",
  })
  @get()
  static getDiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Diq",
  })
  @post("{id}")
  static createDiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
