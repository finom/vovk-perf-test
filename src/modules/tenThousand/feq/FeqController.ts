import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feqs")
export default class FeqController {
  @operation({
    summary: "Get Feqs",
  })
  @get()
  static getFeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feq",
  })
  @post("{id}")
  static createFeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
