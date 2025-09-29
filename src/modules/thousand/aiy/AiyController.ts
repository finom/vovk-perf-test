import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aiys")
export default class AiyController {
  @operation({
    summary: "Get Aiys",
  })
  @get()
  static getAiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aiy",
  })
  @post("{id}")
  static createAiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
