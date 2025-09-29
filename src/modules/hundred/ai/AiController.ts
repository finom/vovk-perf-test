import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ais")
export default class AiController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ai",
  })
  @post("{id}")
  static createAi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
