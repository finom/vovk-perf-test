import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqis")
export default class GqiController {
  @operation({
    summary: "Get Gqis",
  })
  @get()
  static getGqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqi",
  })
  @post("{id}")
  static createGqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
