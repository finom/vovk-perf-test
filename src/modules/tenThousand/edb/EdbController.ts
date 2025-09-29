import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edbs")
export default class EdbController {
  @operation({
    summary: "Get Edbs",
  })
  @get()
  static getEdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edb",
  })
  @post("{id}")
  static createEdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
