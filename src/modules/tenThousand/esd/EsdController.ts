import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esds")
export default class EsdController {
  @operation({
    summary: "Get Esds",
  })
  @get()
  static getEsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esd",
  })
  @post("{id}")
  static createEsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
