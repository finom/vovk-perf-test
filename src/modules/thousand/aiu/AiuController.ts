import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aius")
export default class AiuController {
  @operation({
    summary: "Get Aius",
  })
  @get()
  static getAius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aiu",
  })
  @post("{id}")
  static createAiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
