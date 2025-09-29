import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqhs")
export default class GqhController {
  @operation({
    summary: "Get Gqhs",
  })
  @get()
  static getGqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqh",
  })
  @post("{id}")
  static createGqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
