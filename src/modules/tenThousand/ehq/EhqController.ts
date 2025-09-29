import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehqs")
export default class EhqController {
  @operation({
    summary: "Get Ehqs",
  })
  @get()
  static getEhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehq",
  })
  @post("{id}")
  static createEhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
