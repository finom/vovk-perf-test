import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azies")
export default class AzyController {
  @operation({
    summary: "Get Azies",
  })
  @get()
  static getAzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azy",
  })
  @post("{id}")
  static createAzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
