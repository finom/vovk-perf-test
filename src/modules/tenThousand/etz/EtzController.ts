import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etzs")
export default class EtzController {
  @operation({
    summary: "Get Etzs",
  })
  @get()
  static getEtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etz",
  })
  @post("{id}")
  static createEtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
