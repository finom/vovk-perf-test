import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwqs")
export default class GwqController {
  @operation({
    summary: "Get Gwqs",
  })
  @get()
  static getGwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwq",
  })
  @post("{id}")
  static createGwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
