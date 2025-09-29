import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaves")
export default class EafController {
  @operation({
    summary: "Get Eaves",
  })
  @get()
  static getEaves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaf",
  })
  @post("{id}")
  static createEaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
