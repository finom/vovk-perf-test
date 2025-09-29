import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etks")
export default class EtkController {
  @operation({
    summary: "Get Etks",
  })
  @get()
  static getEtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etk",
  })
  @post("{id}")
  static createEtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
