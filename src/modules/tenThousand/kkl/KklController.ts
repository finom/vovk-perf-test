import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkls")
export default class KklController {
  @operation({
    summary: "Get Kkls",
  })
  @get()
  static getKkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkl",
  })
  @post("{id}")
  static createKkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
