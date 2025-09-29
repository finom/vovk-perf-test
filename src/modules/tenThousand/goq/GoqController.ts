import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goqs")
export default class GoqController {
  @operation({
    summary: "Get Goqs",
  })
  @get()
  static getGoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goq",
  })
  @post("{id}")
  static createGoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
