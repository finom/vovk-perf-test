import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esks")
export default class EskController {
  @operation({
    summary: "Get Esks",
  })
  @get()
  static getEsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esk",
  })
  @post("{id}")
  static createEsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
