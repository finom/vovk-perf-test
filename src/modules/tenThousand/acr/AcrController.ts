import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acrs")
export default class AcrController {
  @operation({
    summary: "Get Acrs",
  })
  @get()
  static getAcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acr",
  })
  @post("{id}")
  static createAcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
