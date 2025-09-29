import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("are")
export default class AreController {
  @operation({
    summary: "Get Are",
  })
  @get()
  static getAre = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Are",
  })
  @post("{id}")
  static createAre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
