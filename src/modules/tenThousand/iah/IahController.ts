import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iahs")
export default class IahController {
  @operation({
    summary: "Get Iahs",
  })
  @get()
  static getIahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iah",
  })
  @post("{id}")
  static createIah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
