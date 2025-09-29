import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cits")
export default class CitController {
  @operation({
    summary: "Get Cits",
  })
  @get()
  static getCits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cit",
  })
  @post("{id}")
  static createCit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
