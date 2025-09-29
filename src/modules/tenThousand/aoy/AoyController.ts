import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoys")
export default class AoyController {
  @operation({
    summary: "Get Aoys",
  })
  @get()
  static getAoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoy",
  })
  @post("{id}")
  static createAoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
