import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edis")
export default class EdiController {
  @operation({
    summary: "Get Edis",
  })
  @get()
  static getEdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edi",
  })
  @post("{id}")
  static createEdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
