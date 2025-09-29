import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beqs")
export default class BeqController {
  @operation({
    summary: "Get Beqs",
  })
  @get()
  static getBeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Beq",
  })
  @post("{id}")
  static createBeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
