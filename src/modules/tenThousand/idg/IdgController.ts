import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idgs")
export default class IdgController {
  @operation({
    summary: "Get Idgs",
  })
  @get()
  static getIdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idg",
  })
  @post("{id}")
  static createIdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
