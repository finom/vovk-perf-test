import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esgs")
export default class EsgController {
  @operation({
    summary: "Get Esgs",
  })
  @get()
  static getEsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esg",
  })
  @post("{id}")
  static createEsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
