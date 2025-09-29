import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aus")
export default class AuController {
  @operation({
    summary: "Get Aus",
  })
  @get()
  static getAus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Au",
  })
  @post("{id}")
  static createAu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
