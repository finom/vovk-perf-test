import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akqs")
export default class AkqController {
  @operation({
    summary: "Get Akqs",
  })
  @get()
  static getAkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akq",
  })
  @post("{id}")
  static createAkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
