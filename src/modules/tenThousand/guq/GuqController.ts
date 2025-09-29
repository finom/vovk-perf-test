import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guqs")
export default class GuqController {
  @operation({
    summary: "Get Guqs",
  })
  @get()
  static getGuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guq",
  })
  @post("{id}")
  static createGuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
