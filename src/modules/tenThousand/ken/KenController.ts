import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kens")
export default class KenController {
  @operation({
    summary: "Get Kens",
  })
  @get()
  static getKens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ken",
  })
  @post("{id}")
  static createKen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
