import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoms")
export default class AomController {
  @operation({
    summary: "Get Aoms",
  })
  @get()
  static getAoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aom",
  })
  @post("{id}")
  static createAom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
