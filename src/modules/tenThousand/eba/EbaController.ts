import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebas")
export default class EbaController {
  @operation({
    summary: "Get Ebas",
  })
  @get()
  static getEbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eba",
  })
  @post("{id}")
  static createEba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
