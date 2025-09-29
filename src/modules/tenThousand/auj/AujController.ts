import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aujs")
export default class AujController {
  @operation({
    summary: "Get Aujs",
  })
  @get()
  static getAujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auj",
  })
  @post("{id}")
  static createAuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
