import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebqs")
export default class EbqController {
  @operation({
    summary: "Get Ebqs",
  })
  @get()
  static getEbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebq",
  })
  @post("{id}")
  static createEbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
