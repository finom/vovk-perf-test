import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoks")
export default class EokController {
  @operation({
    summary: "Get Eoks",
  })
  @get()
  static getEoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eok",
  })
  @post("{id}")
  static createEok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
