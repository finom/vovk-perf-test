import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auds")
export default class AudController {
  @operation({
    summary: "Get Auds",
  })
  @get()
  static getAuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aud",
  })
  @post("{id}")
  static createAud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
