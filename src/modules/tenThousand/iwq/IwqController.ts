import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwqs")
export default class IwqController {
  @operation({
    summary: "Get Iwqs",
  })
  @get()
  static getIwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwq",
  })
  @post("{id}")
  static createIwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
