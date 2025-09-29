import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcjs")
export default class KcjController {
  @operation({
    summary: "Get Kcjs",
  })
  @get()
  static getKcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcj",
  })
  @post("{id}")
  static createKcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
