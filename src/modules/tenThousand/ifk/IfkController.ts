import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifks")
export default class IfkController {
  @operation({
    summary: "Get Ifks",
  })
  @get()
  static getIfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifk",
  })
  @post("{id}")
  static createIfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
