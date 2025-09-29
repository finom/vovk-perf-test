import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acus")
export default class AcuController {
  @operation({
    summary: "Get Acus",
  })
  @get()
  static getAcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acu",
  })
  @post("{id}")
  static createAcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
