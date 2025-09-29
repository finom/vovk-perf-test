import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ches")
export default class CheController {
  @operation({
    summary: "Get Ches",
  })
  @get()
  static getChes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Che",
  })
  @post("{id}")
  static createChe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
