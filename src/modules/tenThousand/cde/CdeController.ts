import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdes")
export default class CdeController {
  @operation({
    summary: "Get Cdes",
  })
  @get()
  static getCdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cde",
  })
  @post("{id}")
  static createCde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
