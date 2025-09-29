import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoks")
export default class AokController {
  @operation({
    summary: "Get Aoks",
  })
  @get()
  static getAoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aok",
  })
  @post("{id}")
  static createAok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
