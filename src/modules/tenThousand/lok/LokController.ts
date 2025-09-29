import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loks")
export default class LokController {
  @operation({
    summary: "Get Loks",
  })
  @get()
  static getLoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lok",
  })
  @post("{id}")
  static createLok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
