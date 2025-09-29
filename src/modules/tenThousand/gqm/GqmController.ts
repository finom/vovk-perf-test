import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqms")
export default class GqmController {
  @operation({
    summary: "Get Gqms",
  })
  @get()
  static getGqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqm",
  })
  @post("{id}")
  static createGqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
