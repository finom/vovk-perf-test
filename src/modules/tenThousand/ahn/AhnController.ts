import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahns")
export default class AhnController {
  @operation({
    summary: "Get Ahns",
  })
  @get()
  static getAhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahn",
  })
  @post("{id}")
  static createAhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
