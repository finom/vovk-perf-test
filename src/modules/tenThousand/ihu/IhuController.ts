import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihus")
export default class IhuController {
  @operation({
    summary: "Get Ihus",
  })
  @get()
  static getIhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihu",
  })
  @post("{id}")
  static createIhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
