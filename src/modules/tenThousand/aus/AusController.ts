import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aus")
export default class AusController {
  @operation({
    summary: "Get Aus",
  })
  @get()
  static getAus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aus",
  })
  @post("{id}")
  static createAus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
