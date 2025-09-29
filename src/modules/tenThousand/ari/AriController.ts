import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aris")
export default class AriController {
  @operation({
    summary: "Get Aris",
  })
  @get()
  static getAris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ari",
  })
  @post("{id}")
  static createAri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
