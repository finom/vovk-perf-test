import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azhs")
export default class AzhController {
  @operation({
    summary: "Get Azhs",
  })
  @get()
  static getAzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azh",
  })
  @post("{id}")
  static createAzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
