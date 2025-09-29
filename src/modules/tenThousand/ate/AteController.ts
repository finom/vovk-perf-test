import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ates")
export default class AteController {
  @operation({
    summary: "Get Ates",
  })
  @get()
  static getAtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ate",
  })
  @post("{id}")
  static createAte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
