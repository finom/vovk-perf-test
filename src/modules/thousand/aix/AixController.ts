import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aixes")
export default class AixController {
  @operation({
    summary: "Get Aixes",
  })
  @get()
  static getAixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aix",
  })
  @post("{id}")
  static createAix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
