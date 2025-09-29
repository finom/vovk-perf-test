import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cahs")
export default class CahController {
  @operation({
    summary: "Get Cahs",
  })
  @get()
  static getCahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cah",
  })
  @post("{id}")
  static createCah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
