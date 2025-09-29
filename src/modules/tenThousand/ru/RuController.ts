import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rus")
export default class RuController {
  @operation({
    summary: "Get Rus",
  })
  @get()
  static getRus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ru",
  })
  @post("{id}")
  static createRu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
